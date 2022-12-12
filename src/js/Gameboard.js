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
      ship.properties.shipPositions.push(shipSquares);
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
        ship.properties.isPlaced = true;

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
        ship.properties.adjacentPositions.push(adjacentPositions);
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

  const getCoords = arr => {
    const index = Math.floor(Math.random() * arr.length);
    const coords = arr[index].position;
    return coords;
  };

  const randomPlacement = arr => {
    arr.forEach(ship => {
      const findValidSquare = () => {
        let index = Math.floor(Math.random() * 100);
        let coords = gameboardArr[index].position;
        let options = [true, false];
        let isVertical = options[Math.floor(Math.random() * 2)];
        placeShip(coords, ship, (ship.properties.isVertical = isVertical))
          ? placeShip(coords, ship, (ship.properties.isVertical = isVertical))
          : findValidSquare();
      };
      findValidSquare();
    });
  };

  const wait = delay => new Promise(resolve => setTimeout(resolve, delay));

  const findValidSquare = async (gameStart, helper) => {
    try {
      await wait(500);
      if (!gameStart) return;
      const availablePositions = [];
      gameboardArr.map(obj => !obj.isShot && availablePositions.push(obj));
      const coords = getCoords(availablePositions);
      const position = availablePositions.find(obj => obj.position === coords);
      position ? helper(position, coords) : findValidSquare(gameStart, helper);
    } catch (err) {
      console.error(err);
    }
  };

  const checkAdjacentSquares = async (gameStart, coords, helper) => {
    try {
      await wait(500);
      if (!gameStart) return;
      const position = gameboardArr.find(obj => obj.position === coords);

      const shipHitPositions = position.hasShip.properties.shipPositions.filter(
        obj => obj.isShot
      );
      // check if ship has been hit at least two times, if yes then hit the next square in a row/column
      if (shipHitPositions.length >= 2 && !position.hasShip.isSunk()) {
        const nextHit = position.hasShip.properties.shipPositions.find(
          obj => !obj.isShot
        );
        nextHit && helper(nextHit, nextHit.position);
      }
      // if it hasn't been hit, attack adjacent squares
      else {
        const positionX = +position.position.split('-')[1];
        const positionY = +position.position.split('-')[0];
        const getPosition = (y, x) => {
          return gameboardArr.find(obj => obj.position === y + '-' + x);
        };
        const adjacentPositions = [
          getPosition(positionY - 1, positionX),
          getPosition(positionY + 1, positionX),
          getPosition(positionY, positionX - 1),
          getPosition(positionY, positionX + 1),
        ];
        const filteredPositions = adjacentPositions.filter(
          obj => obj && !obj.isShot
        );
        // if there are no adjacent squares available, find a random position
        if (filteredPositions.length <= 0) findValidSquare(gameStart, helper);
        // if adjacent squares are available, attack one randomly
        else {
          const newCoords = getCoords(filteredPositions);
          const newPosition = gameboardArr.find(
            obj => obj.position === newCoords
          );
          helper(newPosition, newCoords);
        }
      }
    } catch (err) {
      console.error(err);
    }
  };

  return {
    createGameboard,
    gameboardArr,
    placeShip,
    receiveAttack,
    getCoords,
    randomPlacement,
    findValidSquare,
    checkAdjacentSquares,
  };
};
