// cutebot-joystick-control-RX.js
// needs extension: cutebot
// needs extension: joystickbit

let RFChannel = 1
radio.setGroup(RFChannel)
basic.showString("R")
basic.pause(1000)
basic.showNumber(RFChannel)

let yValue = 0
let xValue = 0

basic.forever(function () {
    cuteBot.motors(yValue + xValue, yValue - xValue)
})

radio.onReceivedValue(function (name, value) {
    if (name == "x") {
        xValue = value
    }
    if (name == "y") {
        yValue = value
    }
})