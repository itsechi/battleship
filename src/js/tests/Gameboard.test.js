import { Gameboard } from '../Gameboard';

describe('Gameboard functions', () => {
  let gameboard;

  beforeEach(() => {
    gameboard = Gameboard();
    gameboard.createGameboard();
  });

  test('Returns an array with 100 squares', () => {
    expect(gameboard.gameboardArr.length).toBe(100);
  });

  test('Returns true if a ship (with length = 1) has been placed', () => {
    gameboard.placeShip('A1', 1);
    expect(gameboard.gameboardArr[0].hasShip).toBeTruthy();
  });

  test('Returns true if a ship (with length > 1) has been placed', () => {
    gameboard.placeShip('C1', 3);
    expect(gameboard.gameboardArr[0].hasShip).toBeFalsy();
    expect(gameboard.gameboardArr[2].hasShip).toBeTruthy();
    expect(gameboard.gameboardArr[4].hasShip).toBeTruthy();
  });
});
