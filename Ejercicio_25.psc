//Ingresar "N" enteros, visualizar la suma de los números pares de la lista, cuántos números pares existen y cuál es el promedio de los números impares.
Proceso Ejercicio_22
	Definir n_element, i, num, suma_pares, cont_par, suma_impar,cont_impar como entero;
	Definir prom Como Real;
	Escribir "Ingrese la cantida de elementos";
	Leer n_element;
	i<-1;
	suma_pares<-0;
	cont_par<-0;
	suma_impar<-0;
	cont_impar<-0;
	Mientras i<= n_element hacer 
		Escribir i,"Ingrese un numero ";
		Leer num;
		Si num mod 2=0 Entonces
			suma_pares<-suma_pares+num;
			cont_par<-cont_par+1;
		SiNo
			suma_impar<-suma_impar+num;
			cont_impar<-cont_impar+1;
		FinSi
		i<-i+1;
	FinMientras
	Si cont_par=0 Entonces
		Escribir "No se han dirigido numeros pares ";
	SiNo
		Escribir "La suma de los numeros pares es:", suma_pares; 
		Escribir "El conteo de los numeros pares es:",cont_par;
	FinSi
	Si cont_impar=0 Entonces
		Escribir "No se han digitado numeros impares";
	SiNo
		prom<-suma_impar/cont_impar;
		Escribir "El promedio de impares es: ", prom;
	FinSi
FinProceso
