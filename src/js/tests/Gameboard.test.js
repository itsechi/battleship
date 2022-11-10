import { Gameboard } from '../Gameboard';
import { Ship } from '../Ship';

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

  test('Returns an array of placed ships', () => {
    gameboard.placeShip('A1', 1);
    expect(gameboard.shipsArr.length).toBe(1);
  });

  test('If there`s a ship placed, the hit count gets increased and the isShot property turns true', () => {
    gameboard.placeShip('A1', 1);
    gameboard.receiveAttack('A1');
    expect(gameboard.gameboardArr[0].hasShip.properties.hits).toBe(1);
    expect(gameboard.gameboardArr[0].isShot).toBeTruthy();
  });
});
