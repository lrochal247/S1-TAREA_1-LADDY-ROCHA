//Ingresar "N" enteros, visualizar la suma de los n�meros pares de la lista, cu�ntos n�meros pares existen y cu�l es el promedio de los n�meros impares.
const Leer = require('prompt-sync')()
const Escribir = console
class Ejercicios{
	ejercicio25() {
		let n_element, i, num, suma_pares, cont_par, suma_impar, cont_impar
		let prom
		n_element= Leer("Ingrese la cantidad de elementos: ")
		n_element = parseInt(n_element)
		i = 1;
		suma_pares = 0
		cont_par = 0
		suma_impar = 0
		cont_impar = 0
		while (i <= n_element) {
		  num=Leer(i + ". Ingrese un numero: ")
		  num = parseInt(num);
		  if (num % 2 == 0) {
			suma_pares = (suma_pares + num)
			cont_par = (cont_par + 1)
		  } 
		  else {
			suma_impar = (suma_impar + num)
			cont_impar = (cont_impar + 1)
		  }
		  
		  i = i + 1;
		}
		
		if (cont_par == 0) {
		  Escribir.log("No se han digitado numeros pares")
		} 
		else {
		  Escribir.log("La suma de los numeros pares es: ", suma_pares)
		  Escribir.log("El conteo de los numeros pares es: ", cont_par)
		}
		
		if (cont_impar == 0) {
		  Escribir.log("No se han digitado numeros impares")
		} 
		else {
		  prom = suma_impar / cont_impar
		  Escribir.log("El promedio de impares es: ", prom)
		}
	  }

}
const ejercicios = new Ejercicios()
ejercicios.ejercicio25()