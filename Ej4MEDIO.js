const input = require("prompt-sync")({sigint: true});

const numeroAleatorio = Math.floor(Math.random()*11);

const numero = input ("Introduce tu número")
console.log(numero)
console.log(esCorrecto(numero))

let acierto = false

while (!acierto){ //*la exclamacion sirve para decir SI NO ES ACIERTO, lo mismo que acierto !== true//*
    const numero = input ("Introduce tu número")
    if (esCorrecto (numero)){
        if (numero == numeroAleatorio) {
            acierto = true
        } else if(numeroAleatorio > numero){
            console.log("Te has quedado corto")
        } else {
            console.log("Te has pasado")
        }
    } else {
        console.log("Introduce un numero valido pesau")
    }
}
console.log("Has acertado")









function esCorrecto(incognita) {
    if (Number(incognita)){
        return true
    } else {
        return false
    }
}