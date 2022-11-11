import { Player } from '../Player';

describe('Player functions', () => {
  const player = Player();

  test('Returns the gameboard array with a length of 100', () => {
    expect(player.gameboardArr.length).toBe(100);
  });
});

describe('Computer functions', () => {
  const computer = Player();
  const player = Player();

  test('Attacks a random position on the enemy gameboard', () => {
    computer.randomAttack(player);
    expect(player.gameboardArr.some(pos => pos.isShot)).toBeTruthy();
    expect(computer.gameboardArr.every(pos => pos.isShot)).toBeFalsy();
  });
});
