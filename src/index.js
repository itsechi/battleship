import './style.scss';
import { UI } from './js/UI';
import { Player } from './js/Player';

const player = Player();
const ui = UI();
ui.renderGameboard(player.gameboardArr);
