import { Ship } from './Ship';

export const Gameboard = () => {
  const gameboardArr = [];

  const createGameboard = () => {
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];
    const squares = numbers.flatMap(num => {
      return letters.flatMap(letter => {
        return {
          position: (letter = letter + '-' + num),
          hasShip: false,
          isShot: false,
        };
      });
    });
    gameboardArr.push(...squares);
    console.log(gameboardArr);
  };

  const placeShip = (coords, ship) => {
    const position = gameboardArr.find(obj => obj.position === coords);
    const index = gameboardArr.indexOf(position);
    for (let i = 0; i < ship.properties.length; i++) {
      gameboardArr[index + i].hasShip = ship;
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
