import { PLAYER, KEYBOARD_INPUT } from '../../shared/js/constants.js';

const player = document.querySelector('[data-sprite="player"]')

document.addEventListener('keypress', ({code}) => {
  if(code === KEYBOARD_INPUT.KEY_S || code === KEYBOARD_INPUT.ARROW_DOWN) {
    player.dataset.direction = PLAYER.STATE.WALK.DOWN;
    position(player, 'top')
  }
  
  if(code === KEYBOARD_INPUT.KEY_W || code === KEYBOARD_INPUT.ARROW_UP) {
    player.dataset.direction = PLAYER.STATE.WALK.UP;
    position(player, 'top', false)
  }

  if(code === KEYBOARD_INPUT.KEY_D || code === KEYBOARD_INPUT.ARROW_RIGTH) {
    position(player, 'left')
    player.dataset.direction = PLAYER.STATE.WALK.RIGHT;
  }
  
  if(code === KEYBOARD_INPUT.KEY_A || code === KEYBOARD_INPUT.ARROW_LEFT) {
    player.dataset.direction = PLAYER.STATE.WALK.LEFT;
    position(player, 'left', false)
  }
})

function position(element, axis, positive = true) {
  let pos = parseInt(element.style[axis])
  const limits = { top: innerHeight -110, left:innerWidth -80 }
  pos = positive ? pos +15 : pos -15;
  
  if(pos > 0 && (pos <= limits[axis] )) {
    element.style[axis] = `${pos}px` 
  }
}