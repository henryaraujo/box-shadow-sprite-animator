import { Sprite } from '../../../shared/js/sprite.js';
import { Floor } from './floor.js';
import { Player } from './player.js';

import { LEVEL_ELEMENTS, GAME, FLOOR, PLAYER, TREE, KEYBOARD_INPUT } from '../../../shared/js/constants.js';

const HEIGHT = innerHeight;

const FLOOR_POSITION = HEIGHT - GAME.SPRITE_SIZE_HEIGHT + 2
const SPRITE_POSITION = (FLOOR_POSITION - TREE.HEIGHT) + (FLOOR.HEIGHT - GAME.POINT_PIXEL_DISTANCE)
const LIMITS = GAME.STAGE_WIDTH - PLAYER.WIDTH;

const player = new Player(0, SPRITE_POSITION);

window.addEventListener('keypress', ({code}) => {
  if(code === KEYBOARD_INPUT.KEY_D || code === KEYBOARD_INPUT.ARROW_RIGTH) {
    if(player.position >= LIMITS) return
    player.moveRight()
    if(player.position > (innerWidth - PLAYER.WIDTH)) {
      goto(player.position)
    }
  }
  
  if(code === KEYBOARD_INPUT.KEY_A || code === KEYBOARD_INPUT.ARROW_LEFT) {
    if(player.position == -(GAME.POINT_PIXEL_DISTANCE * 2)) return
    player.moveLeft()
    if(player.position === (GAME.STAGE_WIDTH - innerWidth)) {
      goto(0)
    }
  }
})

function goto(position) {
  window.scroll({
    left: position,
    behavior: 'smooth'
  });
}

function drawFloor() {
  const size = GAME.STAGE_WIDTH / FLOOR.WIDTH;
  for (let index = 0; index < size; index++) {
      const x = FLOOR.WIDTH * index;
      const floor = new Floor(x, FLOOR_POSITION)
      document.body.appendChild(floor.draw())
  }
}

function drawGrassAndTree() {
  const DISTANCE_BETWEEN_ELEMENTS = 92;
  for (let index = 0; index < LEVEL_ELEMENTS.length; index++) {
    if(LEVEL_ELEMENTS[index]) {
      const sprite = new Sprite(DISTANCE_BETWEEN_ELEMENTS * index, SPRITE_POSITION, FLOOR.WIDTH, LEVEL_ELEMENTS[index], 'div')
      document.body.appendChild(sprite.create())
    }
  }
}

document.body.appendChild(player.draw())
drawFloor()
drawGrassAndTree()