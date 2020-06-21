function inicializar_reloj () {
    horas = 0
    minutos = 0
    segundos = 0
}
function incrementa_minutos (incrementa_horas2: boolean) {
    if (minutos < 59) {
        minutos += 1
    } else {
        minutos = 0
        if (incrementa_horas2) {
            incrementa_horas()
        }
    }
}
input.onButtonPressed(Button.A, function () {
    incrementa_horas()
})
function incrementa_horas () {
    horas = (horas + 1) % 24
}
input.onGesture(Gesture.Shake, function () {
    basic.showString("" + formatear(horas) + (":" + ("" + formatear(minutos) + (":" + formatear(segundos)))))
})
function formatear (entrada: number) {
    if (entrada < 10) {
        return "0" + convertToText(entrada)
    } else {
        return convertToText(entrada)
    }
}
input.onButtonPressed(Button.AB, function () {
    inicializar_reloj()
})
input.onButtonPressed(Button.B, function () {
    incrementa_minutos(false)
    segundos = 0
})
function incrementa_segundos () {
    if (segundos < 59) {
        segundos += 1
    } else {
        segundos = 0
        incrementa_minutos(true)
    }
}
let segundos = 0
let minutos = 0
let horas = 0
inicializar_reloj()
basic.forever(function () {
    basic.pause(1000)
    incrementa_segundos()
})
