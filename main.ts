input.onButtonPressed(Button.A, function () {
    if (0 > 100) {
        basic.showIcon(IconNames.Heart)
    } else {
        basic.showIcon(IconNames.SmallHeart)
    }
})
basic.forever(function () {
    led.plotBarGraph(
    input.soundLevel(),
    255
    )
})
