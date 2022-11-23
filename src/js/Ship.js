export const Ship = length => {
  const properties = {
    length: length,
    hits: 0,
    isVertical: false,
  };

  const hit = () => {
    properties.hits++;
  };

  const isSunk = () => {
    return properties.length === properties.hits ? true : false;
  };
  
  return { properties, hit, isSunk };
};
