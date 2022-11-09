import { Ship } from '../Ship';

describe('Ship functions', () => {
  let ship;

  beforeEach(() => {
    ship = Ship(2);
  });

  test('Expect ship length to be 2', () => {
    expect(ship.properties.length).toBe(2);
  });

  test('Return true if hits equal length', () => {
    ship.hit();
    ship.hit();
    expect(ship.isSunk()).toBeTruthy();
  });

  test('Return false if hits are less than length', () => {
    expect(ship.isSunk()).toBeFalsy();
  });
});
