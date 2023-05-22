// Ciclo Para - Hasta - Hacer
// Calcular el factorial de un número mayor o igual a 0.
Proceso ejercicio_20
	Definir i,fact, num Como Entero;
	Repetir
		Escribir 'Ingrese un numero: ';
		Leer num;
	Hasta Que num>=0
	i <- 1;
	fact <- 1;
	Mientras i<=num Hacer
		fact<-fact*i;
		i<-i+1;
	
	FinMientras
	Escribir 'El factorial es: ',fact;
FinProceso
