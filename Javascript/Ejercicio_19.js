//Ciclo Para - Hasta - Hacer
//Calcular la suma de los "N" primeros numeros.
const Leer=require ('prompt-sync')()
const Escribir=console 
class Ejercicios{
	ejercicio19(){
		let N, suma, i 
		N=0
		N=Leer ("Ingrese la cantidad de numeros a sumarse: " )
		N=parseInt (N)
		suma=(0)
		for (i = 1; i <= N; i++){
			suma=(suma + i)
		}
		Escribir.log ("La suma es:" , suma)
	}

}	 
const ejercicios=new Ejercicios()
ejercicios.ejercicio19()
