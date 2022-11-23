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
    ui.addShipHandlers(shipsArr);
  };

  createGameboard(player.gameboardArr);
  createShips(player.shipsArr);
  ui.placeShips(player);
  ui.renderAttack(player);
};
