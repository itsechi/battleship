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

  const createShip = (ship, index) => {
    const shipDiv = document.createElement('div');
    shipDiv.classList.add('ship');
    shipDiv.setAttribute('draggable', true);
    shipDiv.setAttribute('data-length', ship.properties.length);
    shipDiv.setAttribute('data-index', index);
    shipDiv.style.width = `calc(${ship.properties.length * 1.5}rem + ${
      ship.properties.length - 1
    }px)`;
    document.getElementById('shipsContainer').appendChild(shipDiv);
  };

  const dragAndDrop = ship => {
    ship.addEventListener('dragstart', e => {
      e.target.classList.add('dragging');
      console.log('idk');
    });
    ship.addEventListener('dragend', e => {
      e.target.classList.remove('dragging');
    });
  };

  const renderShips = player => {
    player.shipsArr.forEach((ship, index) => {
      createShip(ship, index);
    });

    const ships = document.querySelectorAll('.ship');
    ships.forEach(ship => {
      dragAndDrop(ship);
      ship.addEventListener('click', e => {
        const ship = player.shipsArr[e.target.dataset.index];
        rotateShips(e, ship);
      });
    });

    const rotateShips = (e, ship) => {
      if (!ship.isVertical) {
        ship.isVertical = true;
        e.target.style.width = '1.5rem';
        e.target.style.height = `calc(${ship.properties.length * 1.5}rem + ${
          ship.properties.length - 1
        }px)`;
      } else {
        ship.isVertical = false;
        e.target.style.height = '1.5rem';
        e.target.style.width = `calc(${ship.properties.length * 1.5}rem + ${
          ship.properties.length - 1
        }px)`;
      }
    };
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
        if (player.placeShip(e.target.dataset.id, ship, ship.isVertical)) {
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
