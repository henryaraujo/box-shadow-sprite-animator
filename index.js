const PLAYER_STATE = {
  WALK: {
    DOWN: 'down',
    UP: 'up',
    RIGHT: 'right',
    LEFT: 'left'
  }
}

const player = document.querySelector('[data-sprite="player"]')

document.addEventListener('keypress', (ev) => {
  if(ev.code === 'KeyS') {
    player.dataset.direction = PLAYER_STATE.WALK.DOWN;
    position(player, 'top')
  }
  
  if(ev.code === 'KeyW') {
    player.dataset.direction = PLAYER_STATE.WALK.UP;
    position(player, 'top', false)
  }

  if(ev.code === 'KeyD') {
    position(player, 'left')
    player.dataset.direction = PLAYER_STATE.WALK.RIGHT;
  }
  
  if(ev.code === 'KeyA') {
    player.dataset.direction = PLAYER_STATE.WALK.LEFT;
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