//Un profesor prepara tres cuestionarios para una evaluacion final A, B Y C.
//Se sabe que se tarda 5 min en revisar el cuestionario A, 8 en revisar el cuestionario B y 6 en el C.
//La cantidad de examenes de cadaa tipo se entran por teclado.�Cuantas horas y cuantos minutos se tardara 
//en revisar todas las evaluaciones?
const Leer = require('prompt-sync')()
const Escribir = console
class Ejercicios{
	ejercicio7(){
		let cantidadA, cantidadB, cantidadC, tiempoA, tiempoB, tiempoC, tiempo_total, hrs, min
		cantidadA=0; cantidadB=0; cantidadC=0
		cantidadA= Leer ("Ingrese la cantidad de cuestinarios A: ")
		cantidadB= Leer ("Ingrese la cantidad de cuestinarios B: ")
		cantidadC= Leer ("Ingrese la cantidad de cuestinarios C: ")
		cantidadA = parseFloat (cantidadA)
		cantidadB = parseFloat (cantidadB)
		cantidadC = parseFloat (cantidadC)
		tiempoA = (cantidadA * 5)
		tiempoB = (cantidadB * 8)
		tiempoC = (cantidadC * 6)
		tiempo_total = (tiempoA + tiempoB + tiempoC)
		//Calculamos las horas y minutos 
		hrs = Math.trunc(tiempo_total / 60)
		min = (tiempo_total % 60)
		Escribir.log ("Se tardara ", hrs ,"horas y " ,min, " minutos", )
		
	}
}

const ejercicios = new Ejercicios()
ejercicios.ejercicio7()
