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

    // add event handlers
    const rotateShips = (shipIndex) => {
      const ship = shipsArr[shipIndex];
      ship.properties.isVertical = !ship.properties.isVertical;
    }

    ui.addShipHandlers(rotateShips);
  };

  createGameboard(player.gameboardArr);
  createShips(player.shipsArr);
  ui.placeShips(player);
  ui.renderAttack(player);
};
