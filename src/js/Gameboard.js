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
          isValid: true,
        };
      });
    });

    gameboardArr.push(...squares);
  };

  const placeShip = (coords, ship) => {
    const position = gameboardArr.find(obj => obj.position === coords);
    const getPosition = (y, x) => {
      return gameboardArr.find(obj => obj.position === y + '-' + x);
    };
    const index = gameboardArr.indexOf(position);

    for (let i = 0; i < ship.properties.length; i++) {
      const position = gameboardArr[index + i];
      const positionX = +position.position.split('-')[1];
      const positionY = +position.position.split('-')[0];
      // place the ship
      position.hasShip = ship;

      // mark adjacent positions invalid
      const positions = [
        getPosition(positionY - 1, positionX),
        getPosition(positionY + 1, positionX),
        getPosition(positionY - 1, positionX - 1),
        getPosition(positionY + 1, positionX + 1),
        getPosition(positionY - 1, positionX + 1),
        getPosition(positionY + 1, positionX - 1),
        getPosition(positionY, positionX - 1),
        getPosition(positionY, positionX + 1),
      ];
      positions.map(obj => {
        if (obj) obj.isValid = false;
      });
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
