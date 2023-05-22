//Un profesor prepara tres cuestionarios para una evaluacion final A, B Y C.
//Se sabe que se tarda 5 min en revisar el cuestionario A, 8 en revisar el cuestionario B y 6 en el C.
//La cantidad de examenes de cadaa tipo se entran por teclado.¿Cuantas horas y cuantos minutos se tardara 
//en revisar todas las evaluaciones?
Proceso ejercicio_4
	Definir cantidadA, cantidadB, cantidadC como enteros;
	Definir tiempoA, tiempoB, tiempoC, tiempo_total, hrs, min Como Entero;
	Escribir "Ingrese la cantidad de cuestinarios A: ";
	Leer cantidadA;
	Escribir "Ingrese la cantidad de cuestinarios B: ";
	Leer cantidadB;
	Escribir "Ingrese la cantidad de cuestinarios C: ";
	Leer cantidadC;
	
	tiempoA <- cantidadA * 5;
	tiempoB <- cantidadB * 8;
	tiempoC <- cantidadC * 6;
	
	tiempo_total<- tiempoA + tiempoB + tiempoC;
	//Calculamos las horas y minutos 
	hrs <- trunc(tiempo_total / 60);
	min <- tiempo_total mod 60;
	
	Escribir "Se tardara ", hrs ,"horas y " ,min, " minutos";
FinProceso
