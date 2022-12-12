export const Ship = (length, id) => {
  const properties = {
    length: length,
    id: id,
    hits: 0,
    isVertical: false,
    isPlaced: false,
    shipPositions: [],
    adjacentPositions: [],
  };

  const hit = () => {
    properties.hits++;
  };

  const isSunk = () => {
    return properties.length <= properties.hits ? true : false;
  };

  return { properties, hit, isSunk };
};
