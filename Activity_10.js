radio.setGroup(1)
input.onButtonPressed(Button.A, function () {
    radio.sendString("Marco")
})
input.onButtonPressed(Button.B, function () {
    radio.sendString("Polo")
})

radio.onReceivedString(function (receivedString) {
    basic.showString(receivedString)
})
