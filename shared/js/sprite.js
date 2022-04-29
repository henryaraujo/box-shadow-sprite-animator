import { GAME } from "./constants.js";

export class Sprite {
  #type;
  #sprite;
  constructor(x, y, width, name, type) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = GAME.SPRITE_SIZE_HEIGHT;
    this.name = name;
    this.#type = type;
  }

  create() {
    this.#sprite = document.createElement(this.#type)
    this.#sprite.className = `sprite ${this.name}`;
    this.#sprite.style.left = `${this.x}px`;
    this.#sprite.style.top = `${this.y}px`;
    return this.#sprite;
  }

  remove() {
    this.#sprite.remove()
  }

  collide(element, fn) {
    if(this.x === element.x && this.y === element.y) {
      return fn(element)
    }
  }

  debug() {
    this.#sprite.innerHTML = '+';
    this.#sprite.style.color = '#FFF';
  }

}