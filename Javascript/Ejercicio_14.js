//Leer tres numeros diferentes e imprimir el numero mayor de los tres.
const Leer= require('prompt-sync')()
const Escribir= console
class Ejercicios{
	ejercicio14(){
		let n1, n2, n3
		n1=0; n2=0; n3=0
		n1= Leer("Ingrese el primer numero: ")
		n2= Leer("Ingrese el segundo numero: ")
		n3= Leer("Ingrese el tercer numero: ")
		n1= parseInt(n1)
		n2= parseInt(n2)
		n3= parseInt(n3)
		if (n1>n2 && n1>n3){
			Escribir.log ("El mayor es n1:", n1)
		}
		else{
			if (n2>n1 && n2>n3){
				Escribir.log ("El mayor es n2:", n2)
			}
			else{
				Escribir.log ("El mayor es n3:", n3)
			}
		}
	}
} 

const ejercicios= new Ejercicios()
ejercicios.ejercicio14()
