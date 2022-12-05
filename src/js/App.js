import { UI } from './UI';
import { Player } from './Player';

export const App = () => {
  let player = Player();
  let ui = UI();
  let computer = Player();
  let gameStart = false;

  const createGameboard = (gameboardArr, user) => {
    gameboardArr.forEach(obj => ui.renderGameboard(obj, user));
  };

  const createShips = shipsArr => {
    shipsArr.forEach((ship, index) => {
      ui.renderShip(ship, index);
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
    attackShip();
    ui.startGame();
    // location.reload();
  };

  const attackShip = () => {
    const attack = (coords, target) => {
      if (!gameStart) return;
      const position = computer.gameboardArr.find(
        obj => obj.position === coords
      );
      position.hasShip
        ? ui.renderSuccesfulAttack(target)
        : ui.renderUnsuccesfulAttack(target);
      if (position.isShot) return;
      computer.receiveAttack(position.position);
      if (position.hasShip && position.hasShip.isSunk())
        markSunk(computer, 'computer', position);

      finishGame();
      computerAttack();
    };
    ui.renderAttack(attack);
  };

  const computerAttack = () => {
    const findValidSquare = () => {
      const coords = player.getCoords();
      const position = player.gameboardArr.find(obj => obj.position === coords);
      !position.isShot ? player.receiveAttack(coords) : findValidSquare();
      position.hasShip
        ? ui.renderSuccesfulAttack(coords)
        : ui.renderUnsuccesfulAttack(coords);
      if (position.hasShip && position.hasShip.isSunk())
        markSunk(player, 'player', position);
    };
    findValidSquare();
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
      const message = document.getElementById('message');
      message.textContent = `${
        computer.shipsArr.every(ship => ship.isSunk()) ? 'Player' : 'Computer'
      } has won!`;
    }
  };

  createGameboard(player.gameboardArr, 'player');
  createGameboard(computer.gameboardArr, 'computer');
  createShips(player.shipsArr);
  shipEvents(player.shipsArr, player.gameboardArr);
  computer.randomPlacement();
  // ui.forTesting(computer.gameboardArr)
};
