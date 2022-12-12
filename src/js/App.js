import { UI } from './UI';
import { Player } from './Player';

export const App = () => {
  let player = Player();
  let ui = UI();
  let computer = Player();
  let gameStart = false;
  let playerTurn = false;

  const createGameboard = (gameboardArr, user) => {
    gameboardArr.forEach(obj => ui.renderGameboard(obj, user));
  };

  const createShips = shipsArr => {
    shipsArr.forEach((ship, index) => {
      ui.renderShip(ship, index);
    });
    ui.setMessage(`Place the ships to start the game`);
  };

  const createSmallShips = (shipsArr, user) => {
    shipsArr.forEach((ship, index) => {
      ui.renderSmallShip(ship, index, user);
    });
  };

  const shipEvents = shipsArr => {
    const rotateShips = shipIndex => {
      const ship = shipsArr[shipIndex];
      ship.properties.isVertical = !ship.properties.isVertical;
    };

    const placeShip = (shipIndex, coords, draggableShip, target) => {
      const ship = shipsArr[shipIndex];
      if (player.placeShip(coords, ship, ship.properties.isVertical)) {
        ui.renderSuccessfulPlacement(draggableShip, target);
        checkStart(player.shipsArr);
      } else ui.renderUnsuccessfulPlacement(draggableShip);
    };

    ui.addShipHandlers(rotateShips);
    ui.addContainerHandlers(placeShip);
  };

  const checkStart = shipsArr => {
    if (shipsArr.every(ship => ship.properties.isPlaced)) {
      ui.activateBtn(startGame);
    }
  };

  const startGame = () => {
    gameStart = true;
    playerTurn = true;
    computer.randomPlacement(computer.shipsArr);
    ui.setInactivePlayer('computer', 'player');
    ui.setMessage(`Sink all of the enemy's ships to win the game`);
    attackShip();
    createSmallShips(player.shipsArr, 'player');
    createSmallShips(computer.shipsArr, 'computer');
    const playAgain = () => {
      location.reload();
    };
    ui.startGame(playAgain);
  };

  const attackShip = () => {
    const attack = (coords, target) => {
      if (!gameStart) return;
      if (!playerTurn) return;
      const position = computer.gameboardArr.find(
        obj => obj.position === coords
      );
      position.hasShip
        ? ui.renderSuccesfulAttack(target)
        : ui.renderUnsuccesfulAttack(target);
      if (position.isShot) return;
      computer.receiveAttack(position.position);
      if (position.hasShip && position.hasShip.isSunk()) {
        markSunk(computer, 'computer', position);
        ui.markSmallShip(position.hasShip.properties.id, 'computer');
      }

      finishGame();
      if (!position.hasShip) {
        playerTurn = false;
        ui.setInactivePlayer('player', 'computer');
        computerAttack();
      }
    };
    ui.renderAttack(attack);
  };

  const computerAttack = () => {
    const attack = (position, coords) => {
      player.receiveAttack(coords);
      position.hasShip
        ? ui.renderSuccesfulAttack(coords)
        : ui.renderUnsuccesfulAttack(coords);
      if (position.hasShip && position.hasShip.isSunk()) {
        markSunk(player, 'player', position);
        ui.markSmallShip(position.hasShip.properties.id, 'player');
      }
      ui.removeMissedClass();
      finishGame();
      if (position.hasShip)
        player.checkAdjacentSquares(gameStart, coords, attack);
      else {
        playerTurn = true;
        ui.setInactivePlayer('computer', 'player');
      }
    };

    player.findValidSquare(gameStart, attack);
  };

  const markSunk = (user, userStr, position) => {
    const adjacentPositions =
      position.hasShip.properties.adjacentPositions.flat();
    adjacentPositions.forEach(position => {
      if (!position) return;
      user.receiveAttack(position.position);
      ui.markAdjacentSquares(userStr, position.position);
    });
  };

  const finishGame = () => {
    if (
      computer.shipsArr.every(ship => ship.isSunk()) ||
      player.shipsArr.every(ship => ship.isSunk())
    ) {
      gameStart = false;
      const text = `${
        computer.shipsArr.every(ship => ship.isSunk()) ? 'Player' : 'Computer'
      } has won!`;
      ui.setMessage(text);
    }
  };

  createGameboard(player.gameboardArr, 'player');
  createGameboard(computer.gameboardArr, 'computer');
  createShips(player.shipsArr);
  shipEvents(player.shipsArr, player.gameboardArr);
};
