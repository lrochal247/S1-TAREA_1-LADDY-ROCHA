const Leer = require('prompt-sync')()
const Escribir = console 
class Ejercicios{
	ejercicio1() {
		let a, b,c,result
		a=0;b=0;c=0
		a=Leer("Digite el valor de a ")
		b=Leer("Digite el valor de b ")
		c=Leer("Digite el valor de c ")
		a=parseInt(a)
		b=parseInt(b)
		c=parseInt(c)
		result = (-b + Math.sqrt(Math.pow(b, 2) - 4 * a * c)) / (2 * a)
		Escribir.log (" El resultado es",result) 
	}
}
const ejercicios =new Ejercicios()
ejercicios.ejercicio1()