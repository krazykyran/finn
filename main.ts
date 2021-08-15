input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        . # # # .
        # # . # #
        # . # . #
        # # . # #
        . # # # .
        `)
})
input.onGesture(Gesture.TiltLeft, function () {
    soundExpression.giggle.play()
})
input.onButtonPressed(Button.AB, function () {
    basic.showLeds(`
        # . # . #
        . # # # .
        # # . # #
        . # # # .
        # . # . #
        `)
})
input.onButtonPressed(Button.B, function () {
    basic.showLeds(`
        # . . . #
        . . # . .
        . # . # .
        . . # . .
        # . . . #
        `)
})
input.onGesture(Gesture.Shake, function () {
    soundExpression.yawn.playUntilDone()
})
input.onGesture(Gesture.TiltRight, function () {
    soundExpression.soaring.play()
})
music.playMelody("E B C5 A B G A F ", 160)
basic.forever(function () {
    basic.showIcon(IconNames.House)
})
