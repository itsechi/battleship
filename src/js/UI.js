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

  const _rotate = (ship, helper) => {
    ship.addEventListener('click', e => {
      if (ship.draggable === false) return;
      const shipIndex = e.target.dataset.index;
      helper(shipIndex);
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
      _rotate(ship, helper);
      _dragAndDrop(ship);
    });
  };

  const addContainerHandlers = helper => {
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
      const target = e.target;
      if (!target.parentNode.firstElementChild.classList.contains('box'))
        return;
      const draggableShip = document.querySelector('.dragging');
      const shipIndex = draggableShip.dataset.index;
      const coords = e.target.dataset.id;
      target.style.background = '';
      helper(shipIndex, coords, draggableShip, target);
    });
  };

  const renderSuccessfulPlacement = (draggableShip, target) => {
    draggableShip.setAttribute('draggable', false);
    draggableShip.style.position = 'absolute';
    draggableShip.style.userSelect = 'none';
    draggableShip.style.cursor = 'default';
    draggableShip.style.zIndex = '-1';
    target.appendChild(draggableShip);
  };

  const renderUnsuccessfulPlacement = draggableShip => {
    draggableShip.style.position = '';
  };

  const renderAttack = helper => {
    container.addEventListener('click', e => {
      const target = e.target;
      console.log(target);
      if (!target.classList.contains('box')) return;
      const coords = e.target.dataset.id;
      helper(coords, target);
    });
  };

  const renderSuccesfulAttack = target => {
    target.classList.add('shot');
  };

  const renderUnsuccesfulAttack = target => {
    target.classList.add('missed');
  };

  return {
    renderGameboard,
    renderShip,
    addShipHandlers,
    addContainerHandlers,
    renderAttack,
    renderSuccesfulAttack,
    renderUnsuccesfulAttack,
    renderSuccessfulPlacement,
    renderUnsuccessfulPlacement,
  };
};
