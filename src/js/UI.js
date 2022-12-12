import { polyfill } from 'mobile-drag-drop';

export const UI = () => {
  const playerContainer = document.getElementById('playerContainer');
  const computerContainer = document.getElementById('computerContainer');

  const renderGameboard = (obj, user) => {
    const square = document.createElement('div');
    square.classList.add('box');
    square.classList.add(`box-${user}`);
    square.dataset.id = obj.position;
    if (user === 'player') playerContainer.appendChild(square);
    if (user === 'computer') computerContainer.appendChild(square);
  };

  const renderShip = (ship, index) => {
    const shipDiv = document.createElement('div');
    shipDiv.classList.add('ship');
    shipDiv.setAttribute('draggable', true);
    shipDiv.setAttribute('data-length', ship.properties.length);
    shipDiv.setAttribute('data-index', index);
    shipDiv.setAttribute('data-vertical', false);
    shipDiv.style.width = `calc(${ship.properties.length * 2}rem + ${
      ship.properties.length - 1
    }px)`;
    document.getElementById('shipsContainer').appendChild(shipDiv);
  };

  const renderSmallShip = (ship, index, user) => {
    const shipDiv = document.createElement('div');
    shipDiv.classList.add('ship--small');
    shipDiv.classList.add(`ship--${user}`);
    shipDiv.setAttribute('draggable', true);
    shipDiv.setAttribute('data-length', ship.properties.length);
    shipDiv.setAttribute('data-index', index);
    shipDiv.setAttribute('data-vertical', false);
    shipDiv.style.width = `calc(${ship.properties.length * 1}rem + ${
      ship.properties.length - 1
    }px)`;
    document.getElementById(`${user}Ships`).appendChild(shipDiv);
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
        e.target.style.width = '2rem';
        e.target.style.height = `calc(${ship.dataset.length * 2}rem + ${
          ship.dataset.length - 1
        }px)`;
      } else {
        e.target.style.height = '2rem';
        e.target.style.width = `calc(${ship.dataset.length * 2}rem + ${
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
    playerContainer.addEventListener('dragleave', e => {
      e.preventDefault();
      if (e.target.classList.contains('box')) {
        e.target.style.background = '';
      }
    });

    playerContainer.addEventListener('dragenter', e => {
      e.preventDefault();
      if (e.target.classList.contains('box')) {
        e.target.style.background = '#20BDC6';
      }
    });

    // make it possible to place the ship
    playerContainer.addEventListener('dragover', e => {
      e.preventDefault();
    });

    playerContainer.addEventListener('drop', e => {
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
    computerContainer.addEventListener('click', e => {
      const target = e.target;
      if (!target.classList.contains('box')) return;
      const coords = e.target.dataset.id;
      helper(coords, target);
    });
  };

  const renderSuccesfulAttack = target => {
    if (typeof target === 'string')
      target = document.querySelector(`.box-player[data-id='${target}']`);
    target.classList.add('shot');
  };

  const renderUnsuccesfulAttack = target => {
    if (typeof target === 'string')
      target = document.querySelector(`.box-player[data-id='${target}']`);
    target.classList.add('missed');
  };

  const markAdjacentSquares = (user, position) => {
    const square = document.querySelector(
      `.box-${user}[data-id='${position}']`
    );
    square.classList.add('missed');
  };

  const removeMissedClass = () => {
    const squares = document.querySelectorAll('.box');
    squares.forEach(square => {
      if (
        square.classList.contains('shot') &&
        square.classList.contains('missed')
      )
        square.classList.remove('missed');
    });
  };

  const activateBtn = helper => {
    const btn = document.getElementById('btn');
    if (btn.classList.contains('btn--inactive'))
      btn.classList.remove('btn--inactive');
    btn.addEventListener('click', helper);
  };

  const startGame = helper => {
    const computerGameboard = document.getElementById('computerGameboard');
    computerGameboard.classList.remove('hidden');
    computerGameboard.classList.add('animation');
    const btn = document.getElementById('btn');
    btn.textContent = 'Play again';
    btn.addEventListener('click', helper);
  };

  const setMessage = text => {
    const message = document.getElementById('message');
    message.textContent = text;
  };

  const markSmallShip = (id, user) => {
    const ship = document.querySelector(`.ship--${user}[data-index='${id}']`);
    ship.style.backgroundColor = '#ffc8bf';
    ship.style.outline = '1px solid #FE7965';
    ship.style.border = '1px solid #FE7965';
  };

  const setInactivePlayer = (active, inactive) => {
    document.getElementById(`${active}Container`).classList.remove('inactive');
    document.getElementById(`${inactive}Container`).classList.add('inactive');
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
    markAdjacentSquares,
    activateBtn,
    startGame,
    setMessage,
    renderSmallShip,
    markSmallShip,
    removeMissedClass,
    setInactivePlayer,
  };
};

polyfill();
