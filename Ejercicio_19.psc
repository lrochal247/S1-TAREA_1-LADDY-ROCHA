//Ciclo Para - Hasta - Hacer
//Calcular la suma de los "N" primeros numeros. 
Proceso ejercicio_16
	Definir N, suma, i como entero;
	Escribir "Ingrese la cantidad de numeros a sumarse:";
	Leer N;
	suma <- 0;
	Para i<- 1 Hasta N con paso 1 Hacer
		suma<- suma + i;
	FinPara
	Escribir "La suma es:", suma;
FinProceso
