export const GAME = {
  SPRITE_SIZE_HEIGHT: 110 /*110px*/,
  POINT_PIXEL_DISTANCE: 18 /*18px*/,
  STAGE_WIDTH: 2040 /*2040px*/
}

export const KEYBOARD_INPUT = {
  ARROW_LEFT: 'ArrowLeft',
  ARROW_UP: 'ArrowUp',
  ARROW_RIGTH: 'ArrowRight',
  ARROW_DOWN: 'ArrowDown',
  KEY_A: 'KeyA',
  KEY_W: 'KeyW',
  KEY_D: 'KeyD',
  KEY_S: 'KeyS',
}

export const PLAYER = {
  WIDTH: 62,
  STATE: {
    WALK: {
      DOWN: 'down',
      UP: 'up',
      RIGHT: 'right',
      LEFT: 'left'
    }
  }
}

export const FLOOR = {
  WIDTH: 103 /*103px*/,
  HEIGHT: 45 /*45px*/,
}

export const TREE = {
  WIDTH: 25 /*25px*/,
  HEIGHT: 70 /*70px*/,
}

export const LEVEL_ELEMENTS = [
  'tree-one',
  'tree-two',
  'tree-one',
  null,
  'grass-one',
  'grass-two',
  'grass-two',
  'grass-three',
  'grass-two',
  null,
  null,
  'grass-three',
  null,
  'tree-two',
  'grass-two',

]