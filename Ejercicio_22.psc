//Ciclo Para - Hasta - Hacer
//Suponga que se tiene un conjunto de calificaciones de un grupo de 10 alumnos. Realizar un algoritmo para calcular la calificación promedio y la calificación más baja de todo el grupo. 
Algoritmo ejercicio_19
	Definir cali_promedio, cali_baja, cali, suma Como real;
	Definir i Como Entero;
	suma<-0;
	cali_baja<-99999;
	Para i<-1 Hasta 10 con paso 1 hacer 
		Escribir i,". Ingrese una calificacion: ";
		Leer cali;
		suma<- suma+cali
		Si cali<cali_baja Entonces
			cali_baja<-cali;
		FinSi
	FinPara
	cali_promedio<-suma/10;
	Escribir "La calificacion prommedio es: " cali_promedio;
	Escribir "La calificacion mas baja es: " cali_baja;
FinAlgoritmo

