import { Gameboard } from './Gameboard';

export const Player = () => {
  const gameboard = Gameboard();
  gameboard.createGameboard();
  const gameboardArr = gameboard.gameboardArr;
  const receiveAttack = gameboard.receiveAttack;

  const randomAttack = enemy => {
    const index = Math.floor(Math.random() * 100);
    const coords = gameboardArr[index].position;
    enemy.receiveAttack(coords);
  };
  return { gameboardArr, randomAttack, receiveAttack };
};
