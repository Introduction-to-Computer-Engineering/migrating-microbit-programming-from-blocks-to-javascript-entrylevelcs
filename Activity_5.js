let sprite = game.createSprite(0, 0)
input.onButtonPressed(Button.A, function () {
    for (let i = 0; i < 4; i++) {
        sprite.move(4)
        sprite.turn(Direction.Right, 90)
        basic.pause(200)
    }
    basic.clearScreen()
})

basic.forever(function () {
    for (let yindex = 0; yindex < 4; yindex++) {
        for (let xindex = 0; xindex < 4; xindex++) {
            led.plot(xindex, yindex)
            basic.pause(90)
            led.unplot(xindex, yindex)
            basic.pause(110)
        }
    }
})

input.onGesture(Gesture.Shake, function () {
    while (!(input.buttonIsPressed(Button.A))) {
        for (let i = 0; i < 2; i++) {
            music.playTone(250, music.beat(BeatFraction.Half))
            music.playTone(500, music.beat(BeatFraction.Half))
        }
    }
})
