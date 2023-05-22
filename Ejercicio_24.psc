// Ciclo Para - Hasta - Hacer
//Calcular la siguiente sumatoria de los "N" elementos
Proceso ejercicio_21
	Definir n_elemen, i , suma Como Entero;
	Escribir "Ingrese la cantidad de elementos a sumar";
	Leer n_elemen;
	i<-1;
	suma<-0;
	Mientras i<=n_elemen Hacer
		suma <-suma+i^2;
		i<-i+1;
	FinMientras
	Escribir "La suma es: ", suma;
	
	
FinProceso
