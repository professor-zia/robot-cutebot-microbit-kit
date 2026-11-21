// cutebot-joystick-control-TX.js
// needs extension: cutebot
// needs extension: joystickbit

let RFChannel = 1
radio.setGroup(RFChannel)
basic.showNumber(RFChannel)
basic.showString("T")
basic.pause(1000)
joystickbit.initJoystickBit()

let x = 0
let y = 0

basic.forever(function () {

    // Read joystick axes x and y (0–1023)
    x = Math.map(joystickbit.getRockerValue(joystickbit.rockerType.X), 1023, 0, -100, 100)
    y = Math.map(joystickbit.getRockerValue(joystickbit.rockerType.Y), 0, 1023, -100, 100)


    // Send joystick values wirelessly
    radio.sendValue("x", x)
    radio.sendValue("y", y)

    basic.pause(50)
})