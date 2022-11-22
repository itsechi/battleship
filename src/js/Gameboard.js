export const Gameboard = () => {
  const gameboardArr = [];
  let isVertical = false;

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

  const placeShip = (coords, ship, isVertical) => {
    // find the position in the gameboard array
    const position = gameboardArr.find(obj => obj.position === coords);
    const positionX = +position.position.split('-')[1];
    const positionY = +position.position.split('-')[0];
    const getPosition = (y, x) => {
      return gameboardArr.find(obj => obj.position === y + '-' + x);
    };
    const index = gameboardArr.indexOf(position);

    // check if ship positions are valid
    const shipLength = +ship.properties.length;
    const width = 10;
    let shipPositions = [];
    for (let i = 0; i < shipLength; i++) {
      shipPositions.push(
        gameboardArr.find(obj => {
          return (
            obj.position ===
            (isVertical
              ? positionY + i + '-' + positionX
              : positionY + '-' + (positionX + i))
          );
        })
      );
    }
    if (
      (!isVertical &&
        positionX + (shipLength - 1) <= width &&
        shipPositions.every(pos => pos.isValid)) ||
      (isVertical &&
        positionY + (shipLength - 1) <= width &&
        shipPositions.every(pos => pos.isValid))
    ) {
      for (let i = 0; i < ship.properties.length; i++) {
        const position = isVertical
          ? gameboardArr[index + i * 10]
          : gameboardArr[index + i];
        const positionX = +position.position.split('-')[1];
        const positionY = +position.position.split('-')[0];
        // place the ship
        position.hasShip = ship;
        // mark adjacent positions invalid
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
      console.log(gameboardArr);
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
    isVertical,
  };
};
