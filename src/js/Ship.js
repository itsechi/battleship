export const Ship = length => {
  let hits = 0;
  const hit = () => {
    hits++;
  };
  const isSunk = () => {
    return length === hits ? true : false;
  };
  return { length, hit, isSunk };
};
