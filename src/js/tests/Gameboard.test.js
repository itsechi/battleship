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
    gameboard.placeShip('1-1', Ship(1));
    expect(gameboard.gameboardArr[0].hasShip).toBeTruthy();
  });

  test('Returns true if a ship (with length > 1) has been placed', () => {
    gameboard.placeShip('1-3', Ship(3));
    expect(gameboard.gameboardArr[0].hasShip).toBeFalsy();
    expect(gameboard.gameboardArr[2].hasShip).toBeTruthy();
    expect(gameboard.gameboardArr[4].hasShip).toBeTruthy();
  });

  test('If there`s a ship placed, the hit count gets increased and the isShot property turns true', () => {
    gameboard.placeShip('1-1', Ship(1));
    gameboard.receiveAttack('1-1');
    expect(gameboard.gameboardArr[0].hasShip.properties.hits).toBe(1);
    expect(gameboard.gameboardArr[0].isShot).toBeTruthy();
  });

  test('`hasSunk` returns true if the length of the ship equals the number of hits', () => {
    gameboard.placeShip('1-1', Ship(1));
    gameboard.receiveAttack('1-1');
    expect(gameboard.gameboardArr[0].hasShip.isSunk()).toBeTruthy();
  });

  test('`placeShip` works vertically', () => {
    gameboard.placeShip('1-1', Ship(3), true);
    expect(gameboard.gameboardArr[0].hasShip).toBeTruthy();
    expect(gameboard.gameboardArr[10].hasShip).toBeTruthy();
    expect(gameboard.gameboardArr[20].hasShip).toBeTruthy();
  });
});
