Proceso ejercicio_6
	//Un alumno desea saber cual sera su calificacion final en la materia de Algoritmos.Dicha calificacion se compone de los siguientes porcentajes:
	//55% del promedio de sus tres calificaciones parciales 
	//30% de la calificacion del examen final
	//15% de la calificacion de un trabajo final
	Definir parcial1, parcial2, parcial3, prom_p, notas_p  Como Real;
	Definir examenf, n_examen, ntrabajo, n_fin_trab, nfinal Como Real;
	Escribir "Digite las 3 notas de los parciales";
	Leer parcial1, parcial2, parcial3;
	prom_p <- (parcial1 + parcial2 + parcial3)/3;
	notas_p <- prom_p * 0.55;
	Escribir "Digite la nota del examen final";
	Leer examenf;
	n_examen <- examenf * 0.3;
	Escribir "Digite la nota del trabajo final";
	Leer ntrabajo;
	n_fin_trab <- ntrabajo * 0.15;
	nfinal <- notas_p + n_examen + n_fin_trab;
	Escribir "La calificacion final es: ", nfinal;
FinProceso
