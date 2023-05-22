//Un maeestro desea saber que porcentaje de hombres y que porcentaje de mujeres hay en un grupo de estudiantes.
const Leer = require('prompt-sync')()
const Escribir = console
class Ejercicios{
	ejercicio6(){
		let num_muj, num_hom, porcentaje_H, porcentaje_M, total_est
		num_muj=0; num_hom=0
		num_muj=Leer ("Ingrese el numero de mujeres: ")
		num_hom=Leer ("Ingrese el numero de hombres: ")
        num_muj=parseInt(num_muj)
		num_hom=parseInt(num_hom)
		total_est =( num_hom + num_muj)
		porcentaje_M =((num_muj / total_est) * 100)
		porcentaje_H =((num_hom / total_est) * 100)
		Escribir.log ("El porcentaje de hombres es ", porcentaje_H,"%")
		Escribir.log ("El porcentaje de mujeres es ", porcentaje_M,"%")
// 
	}
}
const ejercicios = new Ejercicios()
ejercicios.ejercicio6()