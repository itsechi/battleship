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
    // find the position in the gameboard array
    const position = gameboardArr.find(obj => obj.position === coords);
    if (position.hasShip) return;
    const positionX = +position.position.split('-')[1];
    const positionY = +position.position.split('-')[0];

    // check if it's possible to place the ship
    const shipLength = +ship.properties.length;
    const width = 10;
    let shipPositions = [];
    for (let i = 0; i < shipLength; i++) {
      const condition = ship.properties.isVertical
        ? positionY + i + '-' + positionX
        : positionY + '-' + (positionX + i);
      const shipSquares = gameboardArr.find(obj => obj.position === condition);
      shipPositions.push(shipSquares);
    }

    if (
      (!ship.properties.isVertical &&
        positionX + (shipLength - 1) <= width &&
        shipPositions.every(pos => pos.isValid)) ||
      (ship.properties.isVertical &&
        positionY + (shipLength - 1) <= width &&
        shipPositions.every(pos => pos.isValid))
    ) {
      // if it's possible to place the ship, mark the ship squares
      const index = gameboardArr.indexOf(position);
      for (let i = 0; i < ship.properties.length; i++) {
        const position = ship.properties.isVertical
          ? gameboardArr[index + i * 10]
          : gameboardArr[index + i];
        const positionX = +position.position.split('-')[1];
        const positionY = +position.position.split('-')[0];
        position.hasShip = ship;

        // mark adjacent positions invalid
        const getPosition = (y, x) => {
          return gameboardArr.find(obj => obj.position === y + '-' + x);
        };
        const adjacentPositions = [
          getPosition(positionY - 1, positionX),
          getPosition(positionY + 1, positionX),
          getPosition(positionY - 1, positionX - 1),
          getPosition(positionY + 1, positionX + 1),
          getPosition(positionY - 1, positionX + 1),
          getPosition(positionY + 1, positionX - 1),
          getPosition(positionY, positionX - 1),
          getPosition(positionY, positionX + 1),
        ];
        adjacentPositions.map(obj => {
          if (obj) obj.isValid = false;
        });
      }
      return true;
    } else return false;
  };

  const receiveAttack = coords => {
    const position = gameboardArr.find(obj => obj.position === coords);
    position.hasShip && position.hasShip.hit();
    position.isShot = true;
    position.hasShip && position.hasShip.isSunk();
  };

  return {
    createGameboard,
    gameboardArr,
    placeShip,
    receiveAttack,
  };
};
