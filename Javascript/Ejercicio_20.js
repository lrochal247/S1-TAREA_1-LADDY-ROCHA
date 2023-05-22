//Se desea calcular independientemente la suma de los numeros pares e impares comprendidos entre 1 y 50.
const Leer = require ('prompt-sync')()
const Escribir = console
class Ejercicios{
	ejercicio20(){
		let suma_par,suma_impar, i
		suma_par=0; suma_impar=0
		for (i = 2; i <= 49; i++){
			if ( i % 2==0){
				suma_par=(suma_par+i)
			}
			else{
				suma_impar=(suma_impar+i)

			}
		}
		Escribir.log ("La suma de pares es: " ,suma_par)
		Escribir.log ("La suma es impares es: " , suma_impar)

	}
}
const ejercicios=new Ejercicios()
ejercicios.ejercicio20()