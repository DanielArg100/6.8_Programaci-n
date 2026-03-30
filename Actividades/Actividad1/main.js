// 1
const arrays_de_numeros = [4,2,6,7,0,9,10]

// 1.A
console.log(arrays_de_numeros[5])

// 1.B
if (arrays_de_numeros[4] == 9) {
    console.log("Son iguales.")
} else {
    console.log("Son distintos.")
}

// 2

const week = ["domingo","lunes","martes","miercoles","jueves","viernes","sabado"]

numero_de_la_semana = parseInt(prompt("Ingrese un numero entre el 0 y 6"))

if (numero_de_la_semana < 0 && numero_de_la_semana > 6) {
    console.log("Ingreso un valor fuera del rango...")
} else {
    console.log("Día de la semana según su numero: "+week[numero_de_la_semana])
}

// 3

const arrays_de_numeros_decimales = [6,2,9,10,17]

console.log("El numero en la posición 4 es: "+arrays_de_numeros_decimales[4])

