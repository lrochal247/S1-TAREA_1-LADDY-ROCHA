//Condicionales 
//Elaborar un programa que me muestr los dias de las semanas cuando ingree los siete prrimeros numeros.
Proceso ejercicio_13
	Definir num Como Entero;
	Escribir "Introduce un numero del dia de la semana (1-7): ";
	Leer num;
	Segun num Hacer
		1: Escribir "Lunes";
		2: Escribir "Martes";
		3: Escribir "Miercoles";
		4: Escribir "Jueves";
		5: Escribir "Viernes";
		6: Escribir "Sabado";
		7: Escribir "Domingo";
		De Otro Modo:
			Escribir "No existe dia";
	FinSegun
FinProceso
