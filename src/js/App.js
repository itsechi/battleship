import { UI } from './UI';
import { Player } from './Player';

export const App = () => {
  const player = Player();
  const ui = UI();

  const createGameboard = gameboardArr => {
    gameboardArr.forEach(obj => ui.renderGameboard(obj));
  };

  const createShips = shipsArr => {
    shipsArr.forEach((ship, index) => {
      ui.renderShip(ship, index);
    });
  };

  const shipEvents = (shipsArr, gameboardArr) => {
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

    const attackShip = (coords, target) => {
      const position = gameboardArr.find(obj => obj.position === coords);
      position.hasShip ? ui.renderSuccesfulAttack(target) : ui.renderUnsuccesfulAttack(target);
    };

    ui.addShipHandlers(rotateShips);
    ui.addContainerHandlers(placeShip);
    ui.renderAttack(attackShip)
  };

  createGameboard(player.gameboardArr);
  createShips(player.shipsArr);
  shipEvents(player.shipsArr, player.gameboardArr);
};
