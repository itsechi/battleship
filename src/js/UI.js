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

      shipDiv.addEventListener('click', e => {
        if (!player.isVertical) {
          player.isVertical = true;
          console.log(player.isVertical);
          e.target.style.width = '1.5rem';
          e.target.style.height = `calc(${ship.properties.length * 1.5}rem + ${
            ship.properties.length - 1
          }px)`;
        } else {
          player.isVertical = false;
          console.log(player.isVertical);
          e.target.style.height = '1.5rem';
          e.target.style.width = `calc(${ship.properties.length * 1.5}rem + ${
            ship.properties.length - 1
          }px)`;
        }
      });
    });
  };

  const placeShips = player => {
    // add the highlight to the target square
    container.addEventListener('dragleave', e => {
      e.preventDefault();
      if (e.target.classList.contains('box')) {
        e.target.style.background = '';
      }
    });

    container.addEventListener('dragenter', e => {
      e.preventDefault();
      if (e.target.classList.contains('box')) {
        e.target.style.background = 'rgba(0, 0, 255, 0.7)';
      }
    });

    // make it possible to place the ship
    container.addEventListener('dragover', e => {
      e.preventDefault();
    });

    container.addEventListener('drop', e => {
      e.preventDefault();
      if (e.target.parentNode.firstElementChild.classList.contains('box')) {
        const draggable = document.querySelector('.dragging');
        const ship = player.shipsArr[draggable.dataset.index];
        draggable.style.position = 'absolute';
        e.target.style.background = '';
        if (player.placeShip(e.target.dataset.id, ship, player.isVertical)) {
          e.target.appendChild(draggable);
          draggable.setAttribute('draggable', false);
          draggable.style.userSelect = 'none';
          draggable.style.cursor = 'default';
          draggable.style.zIndex = '-1';
          player.isVertical = false;
        } else {
          draggable.style.position = '';
        }
      }
    });
  };

  const attack = player => {
    container.addEventListener('click', e => {
      if (e.target.classList.contains('box')) {
        player.receiveAttack(e.target.dataset.id);
        console.log(e.target);
        if (
          player.gameboardArr.find(obj => obj.position === e.target.dataset.id)
            .hasShip
        ) {
          e.target.classList.add('shot');
        } else e.target.classList.add('missed');
      }
    });
  };

  return { renderGameboard, renderShips, placeShips, attack };
};
