//Leer 2 numeros; si son iguales que los multiplique, si el primero es mayor quue el segundo que los reste y si no que los sume
const Leer= require('prompt-sync')()
const Escribir= console
class Ejercicios{
	ejercicio13(){
		let num1, num2, result
		num1=0; num2=0
		num1= Leer("Ingrese el primer numero: ")
		num2= Leer("Ingrese el segundo numero: ")
		num1= parseInt(num1)
		num2= parseInt(num2)
		if (num1==num2){
			result= (num1*num2)
			Escribir.log("El resultado: ", result)
		}
		else{
			if (num1>num2){
				result= (num1-num2)
				Escribir.log("El resultado: ", result)
			}
			else{
				result= (num1+num2)
				Escribir.log("El resultado: ", result)
			}
		} 
	}
}
 const ejercicios = new Ejercicios()
 ejercicios.ejercicio13()
