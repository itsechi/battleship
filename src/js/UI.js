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

        // check if the placement is valid
        const shipLength = +ship.properties.length;
        const positionX = +e.target.dataset.id.split('-')[1];
        const positionY = +e.target.dataset.id.split('-')[0];
        const width = 10;
        let positions = [];
        for (let i = 0; i < shipLength; i++) {
          positions.push(
            player.gameboardArr.find(
              obj => obj.position === positionY + '-' + (positionX + i)
            )
          );
        }

        if (
          positionX + (shipLength - 1) <= width &&
          positions.every(pos => pos.isValid)
        ) {
          player.placeShip(e.target.dataset.id, ship);
          e.target.appendChild(draggable);
          draggable.setAttribute('draggable', false);
          draggable.style.userSelect = 'none';
          draggable.style.cursor = 'default';
          draggable.style.zIndex = '-1';
        } else {
          draggable.style.position = '';
        }
      }
    });
  };

  const attack = player => {
    container.addEventListener('click', e => {
      player.receiveAttack(e.target.dataset.id);
      
      if (player.gameboardArr.find(obj => obj.position === e.target.dataset.id).hasShip) {
        e.target.classList.add('shot');
      } else e.target.classList.add('missed');
    });
  };

  return { renderGameboard, renderShips, placeShips, attack };
};
