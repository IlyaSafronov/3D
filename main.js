'use strict';

// ? solution width js

const pre = document.querySelector('pre');

document.addEventListener('mousemove', (e) => {
  rotateElement(e, pre);
});

function rotateElement(event, element) {
  // todo get mouse position
  const x = event.clientX;
  const y = event.clientY;
  // console.log(x, y);
  // todo find the middle
  const middleX = window.innerWidth / 2;
  const middleY = window.innerHeight / 2;
  // todo get offset from middle
  const offsetX =((x - middleX) / middleX) * 45;
  const offsetY = ((y - middleY) / middleY) * 45;
  console.log(offsetX, offsetY);

  element.style.setProperty('--rotateX', -1 * offsetY + 'deg');
  element.style.setProperty('--rotateY', offsetX + 'deg');
}