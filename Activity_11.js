let wordArray = ["Cat", "Dinosaur", "Hot Dog", "TV", "Code"]
let index = 0

basic.showString("?")
basic.pause(100)
basic.showNumber(3)
basic.pause(100)
basic.showNumber(2)
basic.pause(100)
basic.showNumber(1)
basic.pause(100)
basic.showString(wordArray[index])

input.onButtonPressed(Button.A, function () {
    if (index < wordArray.length - 1) {
        index += 1
        basic.showString(wordArray[index])
    }
    else {
        game.gameOver()
    }
})
