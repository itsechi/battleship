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

  const renderShips = player => {
    player.shipsArr.forEach((ship, index) => {
      const shipDiv = document.createElement('div');
      shipDiv.classList.add('ship');
      shipDiv.setAttribute('draggable', true);
      shipDiv.setAttribute('data-length', ship.properties.length);
      shipDiv.setAttribute('data-index', index);
      shipDiv.style.width = `calc(${ship.properties.length * 1.5}rem + ${
        ship.properties.length - 1
      }px)`;
      document.getElementById('shipsContainer').appendChild(shipDiv);

      shipDiv.addEventListener('dragstart', e => {
        e.target.classList.add('dragging');
      });
      shipDiv.addEventListener('dragend', e => {
        e.target.classList.remove('dragging');
      });
    });
  };

  const placeShips = player => {
    container.addEventListener('dragover', e => {
      e.preventDefault();
    });

    container.addEventListener('drop', e => {
      e.preventDefault();
      if (e.target.parentNode.firstElementChild.classList.contains('box')) {
        const draggable = document.querySelector('.dragging');
        const ship = player.shipsArr[draggable.dataset.index];
        player.placeShip(e.target.dataset.id, ship);
        e.target.appendChild(draggable);
      }
    });
  };

  return { renderGameboard, renderShips, placeShips };
};
