	//Un alumno desea saber cual sera su calificacion final en la materia de Algoritmos.Dicha calificacion se compone de los siguientes porcentajes:
	//55% del promedio de sus tres calificaciones parciales 
	//30% de la calificacion del examen final
	//15% de la calificacion de un trabajo final
	const Leer = require('prompt-sync')()
	const Escribir = console
	class Ejercicios{
		ejercicios9(){
			let parcial1, parcial2, parcial3, prom_p, notas_p, examenf, n_examen, ntrabajo, n_fin_trab, nfinal
			parcial1=0; parcial2=0; parcial3=0
			parcial1=Leer ("Digite la primera nota del parcial: ")
			parcial2=Leer ("Digite la segunda nota del parcial: ")
			parcial3=Leer ("Digite la tercera nota del parcial: ")
			parcial1=parseFloat(parcial1)
			parcial2=parseFloat(parcial2)
			parcial3=parseFloat(parcial3)
			prom_p = ((parcial1 + parcial2 + parcial3)/3)
			notas_p = (prom_p * 0.55)
			examenf=Leer ("Digite la nota del examen final: ")
			examenf=parseFloat(examenf)
			n_examen = (examenf * 0.3)
			ntrabajo=Leer ("Digite la nota del trabajo final: ")
			ntrabajo=parseFloat(ntrabajo)
			n_fin_trab = (ntrabajo * 0.15)
			nfinal = (notas_p + n_examen + n_fin_trab)
			Escribir.log ("La calificacion final es: ", nfinal)
		}
	}
const ejercicios = new Ejercicios()
ejercicios.ejercicios9()
