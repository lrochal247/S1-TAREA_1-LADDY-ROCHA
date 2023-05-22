//Leer tres numeros diferentes e imprimir el numero mayor de los tres.
Proceso ejercicio_11
	Definir n1, n2, n3 Como real;
	Escribir "Ingrese tres numeros";
	Leer n1, n2, n3; 
	Si n1>n2 y n1>n3 Entonces
		Escribir "El mayor es:", n1;
	SiNo
		Si n2>n1 y n2>n3 Entonces
			Escribir "El mayor es: ",n2;
		SiNo
			Escribir "El mayor es: ", n3;
		FinSi
		
	FinSi
	
FinProceso
