let PlayersTie = 0
let PlayersBWin = 0
let PlayersAWin = 0

input.onButtonPressed(Button.A, function () {
    PlayersAWin += 1
    basic.showLeds(`
        . # # # .
        . # . # .
        . # # # .
        . # . # .
        . # . # .
        `)
    basic.clearScreen()
})

input.onButtonPressed(Button.B, function () {
    PlayersBWin += 1
    basic.showLeds(`
        . # # . .
        . # . # .
        . # # # .
        . # . # .
        . # # . .
        `)
    basic.clearScreen()
})

input.onButtonPressed(Button.AB, function () {
    PlayersTie += 1
    basic.showLeds(`
        . # # # .
        . . # . .
        . . # . .
        . . # . .
        . . # . .
        `)
    basic.clearScreen()
})

input.onGesture(Gesture.Shake, function () {
    basic.showString("A Wins:")
    basic.showNumber(PlayersAWin)
    basic.pause(1000)
    basic.showString("B Wins:")
    basic.showNumber(PlayersBWin)
    basic.pause(1000)
    basic.showString("Ties:")
    basic.showNumber(PlayersTie)
    basic.pause(1000)
    basic.clearScreen()
})
