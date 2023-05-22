// Hacer un programa que tenga un menu con las siguientes opciones:
// Opcion 1: Elevar un numero a una potencia X
// Opcion 2: Sacar la raiz cuadrada de un numero 
// Opcion 3: Salir
Proceso ejercicio_15
	Definir opc Como Entero;
	Escribir 'Menu';
	Escribir "1: Elevar un numero a una potencia X';
	Escribir "2: Sacar la raiz cuadrada de un numero';
	Escribir "3: Salir';
	Escribir "Introduce una opcion";
	Leer opc;
	Segun opc  Hacer
		1:
			Definir num, pot, result Como Real;
			Escribir "Ingrese un numero";
			Leer num;
			Escribir "Ingrese la potencia";
			Leer pot;
			result<- num^pot;
			Escribir "El resultado es: ", result;
		2:
			Definir num, result Como Real;
			Escribir "Ingrese un numero";
			Leer num;
			result<-raiz(num);
			Escribir "El resultado es: ", result; 
		3:
			
		De otro modo:
			Escribir "Su eleccion de opcion es incorrecta";
			
	FinSegun
FinProceso
