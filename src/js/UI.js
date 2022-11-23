export const UI = () => {
  const container = document.getElementById('container');

  const renderGameboard = obj => {
    const square = document.createElement('div');
    square.classList.add('box');
    square.dataset.id = obj.position;
    container.appendChild(square);
  };

  const renderShip = (ship, index) => {
    const shipDiv = document.createElement('div');
    shipDiv.classList.add('ship');
    shipDiv.setAttribute('draggable', true);
    shipDiv.setAttribute('data-length', ship.properties.length);
    shipDiv.setAttribute('data-index', index);
    shipDiv.setAttribute('data-vertical', false);
    shipDiv.style.width = `calc(${ship.properties.length * 1.5}rem + ${
      ship.properties.length - 1
    }px)`;
    document.getElementById('shipsContainer').appendChild(shipDiv);
  };

  const _dragAndDrop = ship => {
    ship.addEventListener('dragstart', e => {
      e.target.classList.add('dragging');
    });
    ship.addEventListener('dragend', e => {
      e.target.classList.remove('dragging');
    });
  };

  const _rotateShip = (ship, helper) => {
    ship.addEventListener('click', e => {
      helper(e.target.dataset.index);
      ship.setAttribute(
        'data-vertical',
        ship.dataset.vertical === 'false' ? 'true' : 'false'
      );
      if (ship.dataset.vertical === 'true') {
        e.target.style.width = '1.5rem';
        e.target.style.height = `calc(${ship.dataset.length * 1.5}rem + ${
          ship.dataset.length - 1
        }px)`;
      } else {
        e.target.style.height = '1.5rem';
        e.target.style.width = `calc(${ship.dataset.length * 1.5}rem + ${
          ship.dataset.length - 1
        }px)`;
      }
    });
  };

  const addShipHandlers = helper => {
    const ships = document.querySelectorAll('.ship');
    ships.forEach(ship => {
      _rotateShip(ship, helper);
      _dragAndDrop(ship);
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

    const _placeShip = e => {
      const draggableShip = document.querySelector('.dragging');
      const ship = player.shipsArr[draggableShip.dataset.index];
      draggableShip.style.position = 'absolute';
      e.target.style.background = '';

      if (player.placeShip(e.target.dataset.id, ship, ship.isVertical)) {
        // if it was possible to place the ship
        e.target.appendChild(draggableShip);
        draggableShip.setAttribute('draggableShip', false);
        draggableShip.style.userSelect = 'none';
        draggableShip.style.cursor = 'default';
        draggableShip.style.zIndex = '-1';
      } else {
        draggableShip.style.position = '';
      }
    };

    container.addEventListener('drop', e => {
      e.preventDefault();
      if (e.target.parentNode.firstElementChild.classList.contains('box')) {
        _placeShip(e);
      }
    });
  };

  const renderAttack = player => {
    container.addEventListener('click', e => {
      if (e.target.classList.contains('box')) {
        player.receiveAttack(e.target.dataset.id);
        player.gameboardArr.find(obj => obj.position === e.target.dataset.id)
          .hasShip
          ? e.target.classList.add('shot')
          : e.target.classList.add('missed');
      }
    });
  };

  return {
    renderGameboard,
    renderShip,
    addShipHandlers,
    placeShips,
    renderAttack,
  };
};
