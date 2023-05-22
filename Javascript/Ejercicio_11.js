//Condicionales
//Determinar si un alumno apprueba o reprueba un curso, sabiendo que aprobara si su promedio de tres calificaciones es mayor o igual a 70; repreba caso contrario 
const Leer=require('prompt-sync')()
const Escribir=console
class Ejercicios{
	ejercicio11(){
		let n1, n2, n3, prom
		n1=0;n2=0;n3=0
		n1= Leer ("Ingrese la nota numero 1: ")
		n2= Leer ("Ingrese la nota numero 2: ")
		n3= Leer ("Ingrese la nota numero 3: ")
		n1= parseFloat (n1)
		n2= parseFloat (n2)
		n3= parseFloat (n3)
		prom = ((n1+n2+n3)/3)
		if (prom>=70){
			Escribir.log ("El alumno esta aprobado con: ", prom)	
		}
		else{
			Escribir.log ("El alumno esta desaprobado: ", prom)
		}
	}
}

const ejercicios=new Ejercicios()
ejercicios.ejercicio11()
