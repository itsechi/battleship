import { Gameboard } from './Gameboard';
import { Ship } from './Ship';

export const Player = () => {
  const gameboard = Gameboard();
  gameboard.createGameboard();
  const gameboardArr = gameboard.gameboardArr;
  const receiveAttack = gameboard.receiveAttack;
  const placeShip = gameboard.placeShip;
  const getCoords = gameboard.getCoords;
  const randomPlacement = gameboard.randomPlacement;
  const findValidSquare = gameboard.findValidSquare;
  const checkAdjacentSquares = gameboard.checkAdjacentSquares;
  const shipsArr = [
    Ship(4, 0),
    Ship(3, 1),
    Ship(3, 2),
    Ship(2, 3),
    Ship(2, 4),
    Ship(2, 5),
    Ship(1, 6),
    Ship(1, 7),
    Ship(1, 8),
    Ship(1, 9),
  ];

  return {
    gameboardArr,
    getCoords,
    receiveAttack,
    shipsArr,
    placeShip,
    randomPlacement,
    findValidSquare,
    checkAdjacentSquares,
  };
};
