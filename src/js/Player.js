import { Gameboard } from './Gameboard';
import { Ship } from './Ship';

export const Player = () => {
  const gameboard = Gameboard();
  gameboard.createGameboard();
  const gameboardArr = gameboard.gameboardArr;
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

  const getCoords = () => {
    const index = Math.floor(Math.random() * 100);
    const coords = gameboardArr[index].position;
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
