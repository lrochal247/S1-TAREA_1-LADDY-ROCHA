
const Leer = require('prompt-sync')()
const Escribir = console
//Reasignacion de valores
class Ejercicios{
	ejercicio3(){
    let a, b, aux
	a=0;b=0
	a = Leer("Ingrese a: ")
	b = Leer("Ingrese b: ")
    a = parseInt(a)
    b = parseInt(b)
	aux = a;
	a = b;
	b = aux;
	Escribir.log ("El nuevo resultado de a es: ", a)
	Escribir.log ("El nuevo resultado de b es: ", b)
	}
	
}
const ejercicios =new Ejercicios()
ejercicios.ejercicio3()