//Calcular la cantidad de segundos que estan incluidos en el numero de horas, minutos y segundos ingresados por el usuario.
const Leer = require('prompt-sync')()
const Escribir = console 
class Ejercicios{ 
	ejercicio4(){
		let horas, minutos,seg,hor_seg, min_seg, total_seg	
        horas=0; minutos=0; seg=0
		horas=Leer("Digite la hora ")
		minutos=Leer("Digite los minutos ")
		seg=Leer("Digite los segundos ")
		horas=parseInt(horas)
		minutos=parseInt(minutos)
		seg=parseInt(seg)
		hor_seg=(horas * 3600)
		min_seg=( minutos * 60)
		total_seg=( hor_seg + min_seg + seg)
		Escribir.log ("Los segundos equivalentes son: ", total_seg)
	}
	
}
const ejercicios =new Ejercicios()
ejercicios.ejercicio4()