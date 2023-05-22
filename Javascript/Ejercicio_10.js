//Condicionales
//Ejercicio 1: Ingrese un n�mero entero y reportar si es par o impar
const Leer = require ('prompt-sync')()
const Escribir =console 
class Ejercicios{
	ejercicio10(){
		let num 
		num=0
		num=Leer ("Digite un numero: ")
		num= parseInt (num)
		if (num % 2 == 0 ){
			Escribir.log("El numero ", num, " es par")
		}
		else{
			Escribir.log ("El numero ", num, " es impar")
		} 
	
	}
}
const ejercicios=new Ejercicios()
ejercicios.ejercicio10()

