// Ciclo Para - Hasta - Hacer
// Calcular el factorial de un n�mero mayor o igual a 0.
const Leer = require('prompt-sync')()
const Escribir = console
class Ejercicios{
	ejercicio23(){
		let i,fact, num
		do {
			num= Leer("Ingrese un numero: ")
			num= parseInt(num)
		}
		while (num< 0){
			i= 1
			fact= 1
		}
		while (i <= num) {
			fact = fact * i
			i = i + 1
		  }
		Escribir.log ('El factorial es: ', fact)
	}
}

const ejercicios = new Ejercicios();
ejercicios.ejercicio23();