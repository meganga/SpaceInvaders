const MOVE_SPEED = 200

layer(['obj', 'ui'], 'obj')

addLevel([
  '!^^^^^^^^^^^^^^^^      &',
  '!^^^^^^^^^^^^^^^^      &',
  '!^^^^^^^^^^^^^^^^      &',
  '!                      &',
  '!                      &',
  '!                      &',
  '!                      &',
  '!                      &',
  '!                      &',
  '!                      &',
  '!                      &',
], {
    width: 30,
    height: 22,
    '^': [sprite('space-invader'), scale(0.7)],
    '!': [sprite('wall'), 'left'],
    '&': [sprite('wall'), 'right'],
  })

const player = add([
  sprite('space-ship'),
  pos(width() / 2, height() / 2),
  origin('center'),
])


keyDown('left', () => {
  player.move(-MOVE_SPEED, 0)
})

keyDown('right', () => {
  player.move(MOVE_SPEED, 0)
})


const score = add([
  text('0'),
  pos(50, 50),
  layer('ui'),
  scale(3),
  {
    value: 0,
  },
])


const TIME_LEFT = 14


const timmer = add([
  text('0'),
  pos(90, 50),
  scale(2),
  layer('ui'),
  {
    time: TIME_LEFT,
  },
])


timer.action(() => {
  timer.time -= dt()
  timer.text = timer.time
})


