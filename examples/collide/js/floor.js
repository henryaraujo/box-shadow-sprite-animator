import { Sprite } from '../../../shared/js/sprite.js';
import { FLOOR } from '../../../shared/js/constants.js'

export class Floor extends Sprite {
  constructor(x,y) {
    super(x,y, FLOOR.WIDTH, 'floor', 'div')
  }

  draw() {
    this.element = this.create();
    return this.element;
  }
}