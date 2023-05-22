const Leer = require('prompt-sync')()
const Escribir = console
//Determinar la solucion logica
class Ejercicios{
	ejercicio2(){
    let a, b, result
	a=0;b=0
	a = Leer("Ingrese a: ")
	b = Leer("Ingrese b: ")
    a = parseInt(a)
    b = parseInt(b)
	result = ((3+5*8)<3) && (((-6/3*4)+2)<2) || (a>b);
	Escribir.log ("El resultado es: ", result)
	}
	
}
const ejercicios =new Ejercicios()
ejercicios.ejercicio2()
