let mouse = game.createSprite(4, 0)
mouse.changeBrightnessBy(-245)
let cat = game.createSprite(0, 4)
let random = 0
let left = false
let right = false
basic.pause(1000)
input.onButtonPressed(Button.A, function () {
    left = true
})
input.onButtonPressed(Button.B, function () {
    right = true
})
while (!mouse.isTouching(cat)) {
    random = Math.randomRange(0, 2)
    if (random == 0) {
        mouse.changeDirectionBy(90)
    }
    else if (random == 1) {
        mouse.changeDirectionBy(180)
    }
    else if (random == 2) {
        mouse.changeDirectionBy(270)
    }
    if (left) {
        cat.changeDirectionBy(-90)
    }
    if (right) {
        cat.changeDirectionBy(90)
    }
    mouse.move(1)
    cat.move(1)
    left = false
    right = false
    basic.pause(200)
}
game.gameOver()
