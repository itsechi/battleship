import { Ship } from './Ship';

export const Gameboard = () => {
  const gameboardArr = [];

  const createGameboard = () => {
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const squares = numbers.flatMap(y => {
      return numbers.flatMap(x => {
        return {
          position: (x = y + '-' + x),
          hasShip: false,
          isShot: false,
        };
      });
    });

    gameboardArr.push(...squares);
  };

  const placeShip = (coords, ship) => {
    const position = gameboardArr.find(obj => obj.position === coords);
    const index = gameboardArr.indexOf(position);
    for (let i = 0; i < ship.properties.length; i++) {
      gameboardArr[index + i].hasShip = ship;
      // console.log(gameboardArr)
    }
  };

  const receiveAttack = coords => {
    const position = gameboardArr.find(obj => obj.position === coords);
    position.hasShip && position.hasShip.hit();
    position.isShot = true;
    position.hasShip && position.hasShip.isSunk();
  };

  return { createGameboard, gameboardArr, placeShip, receiveAttack };
};
