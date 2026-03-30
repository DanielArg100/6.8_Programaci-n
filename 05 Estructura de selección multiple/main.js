/*
    if anidado
    if () {
    }
    else if(){
    }
    else(
        )
 */

/* --> Dado el ingreso de una edad determinar:
    -Si la edad ingresada es mayor o igual a 65 años, entonces es jubilado-
    - Sila edad es inferior a 65 años pero mayor o igual a 18 años, entonces es adulto.
    - En caso contrario, es menor de edad.
*/

let edad = parseInt(prompt("Ingrese su edad: "))

if (edad >= 65) {
    console.log("Usted es jubilado.")
} else if (edad < 65 && edad >= 18) {
    console.log("Usted es un adulto.")
} else {
    console.log("Usted es menor de edad.")
}