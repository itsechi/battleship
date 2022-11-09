export const Ship = length => {
  const properties = {
    length: length,
    hits: 0
  }

  const hit = () => {
    properties.hits++;
  };

  const isSunk = () => {
    return properties.length === properties.hits ? true : false;
  };
  return { properties, hit, isSunk };
};
