//Condicionales
//Determinar si un alumno apprueba o reprueba un curso, sabiendo que aprobara si su promedio de tres calificaciones es mayor o igual a 70; repreba caso contrario 
Proceso ejercicio_8
	Definir n1, n2, n3, prom Como Real;
	Escribir "Ingrese las 3 calificaciones: ";
	Leer n1, n2, n3;
	prom <- (n1+n2+n3)/3;
	Si prom >= 70 Entonces
		Escribir "El alumno esta aprobado con: ", prom;
	SiNo
		Escribir "El alumno esta desaprobado: ", prom;
	FinSi
FinProceso
