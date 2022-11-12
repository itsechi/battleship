export const UI = () => {
  const container = document.getElementById('container');

  const renderGameboard = gameboardArr => {
    gameboardArr.forEach(obj => {
      const square = document.createElement('div');
      square.classList.add('box');
      square.dataset.id = obj.position;
      container.appendChild(square);
    });
  };

  return { renderGameboard };
};
