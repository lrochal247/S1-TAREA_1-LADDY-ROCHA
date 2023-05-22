//Ciclo Para - Hasta - Hacer
//Leer 10 numeros e imprimir cuantos son positivos, negativos y cuantos son neutros.
Proceso Ejercicio_18
	Definir num, i Como Entero;
	Definir cont_posi, cont_nega, cont_neutros como entero;
	cont_posi<-0;
	cont_nega<-0;
	cont_neutros<-0;
	Para i desde 1 Hasta 10 con paso 1 hacer 
		Escribir i , ". Ingrese un numero: ";
		Leer num;
		Si num=0 Entonces
			cont_neutros<-cont_neutros+1
		SiNo
			Si num>0 Entonces
				cont_posi<-cont_posi+1
			SiNo
				cont_nega<-cont_nega+1
			FinSi
			
		FinSi
	FinPara
	Escribir "La cantidad de positivos es: ", cont_posi;
	Escribir "La cantidad de negativos es: ", cont_nega;
	Escribir "La cantidad de neutros es: ", cont_neutros;
FinProceso
