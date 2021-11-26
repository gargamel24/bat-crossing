controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    bat.y -= 16
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    bat.x -= 16
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    bat.x += 16
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    bat.y += 16
})
let rightCar: Sprite = null
let left_car: Sprite = null
let bat: Sprite = null
tiles.setTilemap(tilemap`level1`)
bat = sprites.create(img`
    . . f f f . . . . . . . . f f f 
    . f f c c . . . . . . f c b b c 
    f f c c . . . . . . f c b b c . 
    f c f c . . . . . . f b c c c . 
    f f f c c . c c . f c b b c c . 
    f f c 3 c c 3 c c f b c b b c . 
    f f b 3 b c 3 b c f b c c b c . 
    . c b b b b b b c b b c c c . . 
    . c 1 b b b 1 b b c c c c . . . 
    c b b b b b b b b b c c . . . . 
    c b c b b b c b b b b f . . . . 
    f b 1 f f f 1 b b b b f c . . . 
    f b b b b b b b b b b f c c . . 
    . f b b b b b b b b c f . . . . 
    . . f b b b b b b c f . . . . . 
    . . . f f f f f f f . . . . . . 
    `, SpriteKind.Player)
tiles.placeOnTile(bat, tiles.getTileLocation(5, 15))
scene.cameraFollowSprite(bat)
bat.setFlag(SpriteFlag.StayInScreen, true)
game.onUpdateInterval(500, function () {
    left_car = sprites.create(img`
        ....ffffff.........ccc..
        ....ff22ccf.......cc4f..
        .....ffccccfff...cc44f..
        ....cc24442222cccc442f..
        ...c9b4422222222cc422f..
        ..c9999b222222222222fc..
        .c2b991119222222222c22c.
        c2222b11992222ccccccc22f
        f222222222222c222ccfffff
        .f2222222222444222f.....
        ..ff2222222cf444222f....
        ....ffffffffff444222c...
        .........f2cfffc2222c...
        .........fcc2ffffffff...
        ..........fc2ffff.......
        ...........fffff........
        `, SpriteKind.Enemy)
    tiles.placeOnRandomTile(left_car, assets.tile`myTile`)
    left_car.x = 180
    left_car.vx = -50
    left_car.setFlag(SpriteFlag.DestroyOnWall, true)
})
game.onUpdateInterval(500, function () {
    rightCar = sprites.create(img`
        ....ffffff.........ccc..
        ....ff22ccf.......cc4f..
        .....ffccccfff...cc44f..
        ....cc24442222cccc442f..
        ...c9b4422222222cc422f..
        ..c9999b222222222222fc..
        .c2b991119222222222c22c.
        c2222b11992222ccccccc22f
        f222222222222c222ccfffff
        .f2222222222444222f.....
        ..ff2222222cf444222f....
        ....ffffffffff444222c...
        .........f2cfffc2222c...
        .........fcc2ffffffff...
        ..........fc2ffff.......
        ...........fffff........
        `, SpriteKind.Enemy)
    tiles.placeOnRandomTile(rightCar, assets.tile`myTile`)
    rightCar.x = -20
    rightCar.vx = 50
    rightCar.setFlag(SpriteFlag.DestroyOnWall, true)
})
