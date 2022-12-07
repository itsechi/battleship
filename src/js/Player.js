import { Gameboard } from './Gameboard';
import { Ship } from './Ship';

export const Player = () => {
  const gameboard = Gameboard();
  gameboard.createGameboard();
  const gameboardArr = gameboard.gameboardArr;
  const receiveAttack = gameboard.receiveAttack;
  const placeShip = gameboard.placeShip;
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

  const getCoords = arr => {
    const index = Math.floor(Math.random() * arr.length);
    const coords = arr[index].position;
    return coords;
  };

  const randomPlacement = () => {
    shipsArr.forEach(ship => {
      const findValidSquare = () => {
        let index = Math.floor(Math.random() * 100);
        let coords = gameboardArr[index].position;
        let options = [true, false];
        let isVertical = options[Math.floor(Math.random() * 2)];
        placeShip(coords, ship, (ship.properties.isVertical = isVertical))
          ? placeShip(coords, ship, (ship.properties.isVertical = isVertical))
          : findValidSquare();
      };
      findValidSquare();
    });
  };

  return {
    gameboardArr,
    getCoords,
    receiveAttack,
    shipsArr,
    placeShip,
    randomPlacement,
  };
};
