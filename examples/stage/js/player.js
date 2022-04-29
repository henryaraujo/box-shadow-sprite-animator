import { Sprite } from '../../../shared/js/sprite.js';
import { PLAYER } from '../../../shared/js/constants.js';

export class Player extends Sprite {
  #position;
  constructor(x, y) {
    super(x,y, PLAYER.WIDTH, 'player', 'div')
  }

  get position() {
    return this.#position;
  }

  draw() {
    this.element = this.create()
    this.element.dataset.direction = 'right';
    this.element.style.zIndex = 1;
    this.#position = parseInt(this.element.style.left);
    return this.element;
  }

  moveRight() {
    this.#position += 18;
    this.element.style.left = `${this.#position}px`;
    this.element.dataset.direction = PLAYER.STATE.WALK.RIGHT;
  }
  
  moveLeft() {
    this.#position -= 18;
    this.element.style.left = `${this.#position}px`;
    this.element.dataset.direction = PLAYER.STATE.WALK.LEFT;
  }

}