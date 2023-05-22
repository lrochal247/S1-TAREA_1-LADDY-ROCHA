//Se desea calcular independientemente la suma de los numeros pares e impares comprendidos entre 1 y 50.
Proceso Ejercicio_17
	Definir suma_par, suma_impar, i Como Entero;
	suma_par<-0;
	suma_impar<-0;
	Para i<- 2 Hasta 49 con paso 1 Hacer
		Si i mod 2=0 Entonces
			suma_par<-suma_par+i;
		SiNo
			suma_impar<-suma_impar+i;
		FinSi
	FinPara
	Escribir "La suma de pares es: ",suma_par;
	Escribir "La suma es impares es: ", suma_impar;
FinProceso
