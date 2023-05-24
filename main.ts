let temperature = 0
let x = 0
let y = 0
input.onButtonPressed(Button.A, function () {
    basic.showNumber(input.temperature())
})
input.onGesture(Gesture.Shake, function () {
    temperature = input.temperature()
})
basic.forever(function () {
    x = input.acceleration(Dimension.X)
    y = input.acceleration(Dimension.Y)
    if (Math.abs(x) > 32) {
        basic.showIcon(IconNames.No)
    } else if (Math.abs(y) > 32) {
        basic.showIcon(IconNames.No)
    } else {
        basic.showIcon(IconNames.Yes)
    }
})
