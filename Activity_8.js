let coinaheads = false
let coinbheads = false
let ascore = 0
let bscore = 0
basic.showLeds(`
    . # . . .
    # # # . .
    . # . # .
    . . # # #
    . . . # .
    `)

input.onGesture(Gesture.Shake, function () {
    coinaheads = Math.randomBoolean()
    coinbheads = Math.randomBoolean()
    if (coinaheads == coinbheads) {
        ascore += 1
        basic.showLeds(`
            . # # # .
            . # . # .
            . # # # .
            . # . # .
            . # . # .
            `)
        basic.pause(100)
    }
    else {
        bscore += 1
        basic.showLeds(`
            . # # . .
            . # . # .
            . # # . .
            . # . # .
            . # # . .
            `)
        basic.pause(100)
    }
    basic.showLeds(`
        . # . . .
        # # # . .
        . # . # .
        . . # # #
        . . . # .
        `)
})

input.onButtonPressed(Button.A, function () {
    basic.showNumber(ascore)
    basic.showLeds(`
        . # . . .
        # # # . .
        . # . # .
        . . # # #
        . . . # .
        `)
})

input.onButtonPressed(Button.B, function () {
    basic.showNumber(bscore)
    basic.showLeds(`
        . # . . .
        # # # . .
        . # . # .
        . . # # #
        . . . # .
        `)
})

input.onButtonPressed(Button.AB, function () {
    ascore = 0
    bscore = 0
    basic.showLeds(`
        . # . . .
        # # # . .
        . # . # .
        . . # # #
        . . . # .
        `)
})
