// Ciclo Para - Hasta - Hacer
//Calcular la siguiente sumatoria de los "N" elementos
const Leer = require('prompt-sync')()
const Escribir = console
class Ejercicios{
	ejercicio24() {
		let n_elemen, i, suma
		n_elemen= Leer("Ingrese la cantidad de elementos a sumar: ")
		n_elemen = parseInt(n_elemen)
		i = 1
		suma = 0
		while (i <= n_elemen) {
		  suma = (suma + Math.pow(i, 2))
		  i = i + 1
		}
		Escribir.log("La suma es: " + suma)
	  }
}

const ejercicios = new Ejercicios()
ejercicios.ejercicio24()
