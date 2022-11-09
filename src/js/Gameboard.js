import { Ship } from './Ship';

export const Gameboard = () => {
  // create the gameboard
  const gameboardArr = [];
  const createGameboard = () => {
      const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
      const letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];
      const squares = numbers.flatMap(num => {
        return letters.flatMap(letter => {
          return letter = letter + num;
        })
      })
      gameboardArr.push(...squares);
  };

  // place ships at specific coordinates by calling the ship factory function

  const receiveAttack = () => {
    // takes a pair of coordinates
    // determines whether the attack hit a ship
    // sends the hit function to the correct ship
    // records the coordinates of the missed shot
  };

  // keep track of missed shots
  // report whether all ships have been sunk
  return {createGameboard, gameboardArr};
};
