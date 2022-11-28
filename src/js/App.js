import { UI } from './UI';
import { Player } from './Player';

export const App = () => {
  const player = Player();
  const ui = UI();
  const computer = Player();
  let gameStart = false;

  const createGameboard = (gameboardArr, user) => {
    gameboardArr.forEach(obj => ui.renderGameboard(obj, user));
  };

  const createShips = shipsArr => {
    shipsArr.forEach((ship, index) => {
      ui.renderShip(ship, index);
    });
  };

  const shipEvents = (shipsArr) => {
    const rotateShips = shipIndex => {
      const ship = shipsArr[shipIndex];
      ship.properties.isVertical = !ship.properties.isVertical;
    };

    const placeShip = (shipIndex, coords, draggableShip, target) => {
      const ship = shipsArr[shipIndex];
      if (player.placeShip(coords, ship, ship.properties.isVertical))
        ui.renderSuccessfulPlacement(draggableShip, target);
      else ui.renderUnsuccessfulPlacement(draggableShip);
    };

    ui.addShipHandlers(rotateShips);
    ui.addContainerHandlers(placeShip);
  };

  const attackShip = gameboardArr => {
    if (!gameStart) return;
    const attack = (coords, target) => {
      const position = gameboardArr.find(obj => obj.position === coords);
      position.hasShip
        ? ui.renderSuccesfulAttack(target)
        : ui.renderUnsuccesfulAttack(target);
    };
    ui.renderAttack(attack);
  };

  createGameboard(player.gameboardArr, 'player');
  createGameboard(computer.gameboardArr, 'computer');
  createShips(player.shipsArr);
  shipEvents(player.shipsArr, player.gameboardArr);
  attackShip(computer.gameboardArr);

  computer.randomPlacement();
};
