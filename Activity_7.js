led.plot(1, 0)
led.plot(3, 0)
led.plot(2, 1)
led.plot(1, 3)
led.plot(2, 3)
led.plot(3, 3)

basic.forever(function () {
    led.toggle(0, 3)
    led.toggle(4, 3)
    basic.pause(250)
    led.toggle(0, 2)
    led.toggle(4, 2)
    basic.pause(250)
})

