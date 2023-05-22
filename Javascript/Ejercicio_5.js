//Hacer un programa para ingresar el radio de un circulo y se reporte su area y la longitud de la circunferencia
const Leer = require('prompt-sync')()
const Escribir = console
class Ejercicios{
	ejercicio5(){
		let radio, area, lon
		radio=0
		radio=Leer("Ingrese el radio: ")
		radio=parseFloat(radio)
	    area= (3.14 *radio)
		lon = ( (2 * 3.14) * radio)
		Escribir.log ("El area de la circunferencia es: ", area)
		Escribir.log ("La longitud es:" , lon)
	}
}

const ejercicios = new Ejercicios()
ejercicios.ejercicio5()