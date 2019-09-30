input.onButtonPressed(Button.A, function () {
    let monster = game.createSprite(2, 2)
    let random = 0
    basic.pause(200)
    for (let i = 0; i < 100; i++) {
        random = Math.randomRange(0, 2)
        if (random == 0) {
            monster.changeDirectionBy(90)
        }
        else if (random == 1) {
            monster.changeDirectionBy(180)
        }
        else if (random == 2) {
            monster.changeDirectionBy(270)
        }
        monster.move(1)
        basic.pause(200)
    }
    monster.delete()
})
input.onButtonPressed(Button.B, function () {
    let monster2 = game.createSprite(0, 0)
    let random2 = 0
    basic.pause(200)
    for (let i = 0; i < 100; i++) {
        random2 = Math.randomRange(0, 2)
        if (random2 == 0) {
            monster2.changeDirectionBy(90)
        }
        else if (random2 == 1) {
            monster2.changeDirectionBy(180)
        }
        else if (random2 == 2) {
            monster2.changeDirectionBy(270)
        }
        monster2.move(1)
        basic.pause(200)
    }
    monster2.delete()
})
input.onButtonPressed(Button.AB, function () {
    let monster3 = game.createSprite(5, 5)
    let random3 = 0
    basic.pause(200)
    for (let i = 0; i < 100; i++) {
        random3 = Math.randomRange(0, 2)
        if (random3 == 0) {
            monster3.changeDirectionBy(90)
        }
        else if (random3 == 1) {
            monster3.changeDirectionBy(180)
        }
        else if (random3 == 2) {
            monster3.changeDirectionBy(270)
        }
        monster3.move(1)
        basic.pause(200)
    }
    monster3.delete()
})
