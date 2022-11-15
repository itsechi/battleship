import { UI } from './UI';
import { Player } from './Player';

export const App = () => {
  const player = Player();
  const ui = UI();
  ui.renderGameboard(player.gameboardArr);
  ui.renderShips(player);
  ui.placeShips(player);
};
