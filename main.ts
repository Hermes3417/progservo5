input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 99999; index++) {
        if (grove.measureInCentimeters(DigitalPin.P0) < 20) {
            Tourner()
        } else {
            Avancer()
        }
    }
})
function Tourner () {
    servos.P1.run(50)
    servos.P2.run(50)
    basic.pause(1000)
}
function Avancer () {
    servos.P1.run(50)
    servos.P2.run(-50)
    basic.pause(200)
}
input.onButtonPressed(Button.B, function () {
    servos.P1.stop()
    servos.P2.stop()
})
