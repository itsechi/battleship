import { Gameboard } from '../Gameboard';

describe('Gameboard functions', () => {
  let gameboard;

  beforeEach(() => {
    gameboard = Gameboard();
  });

  test('Returns an array with 100 squares', () => {
    gameboard.createGameboard();
    expect(gameboard.gameboardArr.length).toBe(100);
  });
});
