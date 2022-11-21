import { Gameboard } from './Gameboard';
import { Ship } from './Ship';

export const Player = () => {
  const gameboard = Gameboard();
  gameboard.createGameboard();
  const gameboardArr = gameboard.gameboardArr;
  const isVertical = gameboard.isVertical;
  const receiveAttack = gameboard.receiveAttack;
  const placeShip = gameboard.placeShip;
  const shipsArr = [
    Ship(4),
    Ship(3),
    Ship(3),
    Ship(2),
    Ship(2),
    Ship(2),
    Ship(1),
    Ship(1),
    Ship(1),
    Ship(1),
  ];

  const randomAttack = enemy => {
    const index = Math.floor(Math.random() * 100);
    const coords = gameboardArr[index].position;
    enemy.receiveAttack(coords);
  };

  return {
    gameboardArr,
    randomAttack,
    receiveAttack,
    shipsArr,
    placeShip,
    isVertical,
  };
};
