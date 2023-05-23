Proceso Ejercicio1
	Definir a, b,c,resultado Como real;
	Escribir "Digite el valor de A";
	Leer a;
	Escribir "Digite el valor de B";
	Leer b;
	Escribir "Digite el valor de C";
	Leer c;
	resultado<- (-b+raiz(b^2-4*a*c))/(2*a);
	
	Escribir" El resultado es" , resultado;
	
FinProceso

Proceso Ejercicio_2
	Definir a, b Como Real;
	Definir result como logico;
	Escribir "Ingrese el valor de a: ";
	leer a;
	Escribir "Ingrese el valorr de b: ";
	leer b;
	
	result <- ((3+5*8)<3 y ((-6/3*4)+2<2))o(a>b);
	EScribir "El resultado es: ", result;
FinProceso

Proceso Ejercicio_3
	Definir a, b, aux como enteros;
	Escribir "Ingrese el valor de a: ";
	leer a;
	Escribir "Ingrese el valorr de b: ";
	leer b;
	
	aux<- a ;
	a<- b;
	b<-aux;
	Escribir "El nuevo valor de a es ",a;
	Escribir "El nuevo valor de b es ",b;
FinProceso

//Calcular la cantidad de segundos que estan incluidos en el numero de horas, minutos y segundos ingresados por el usuario.
Proceso ejercicio_4
	Definir horas, minutos,seg,hor_seg, min_seg, total_seg  Como Entero;
	Escribir "Ingrese las horas:";
	Leer horas;
	Escribir "Ingrese los minutos:";
	Leer minutos;
	Escribir "Ingrese los segundos:";
	Leer seg;
	
	hor_seg <-horas * 3600;
	min_seg <- minutos * 60;
	
	total_seg <- hor_seg + min_seg + seg;
	Escribir "Los segundos equivalentes son: ", total_seg;
FinProceso

//Hacer un programa para ingresar el radio de un circulo y se reporte su area y la longitud de la circunferencia
Proceso ejercicio_5
	Definir radio, area, lon Como Real;
	Escribir "Ingrese el valor del radio:";
	Leer radio;
	area <- pi *radio;
	lon <- 2 * pi * radio;
	Escribir "El area de la circunferencia es: ", area;
	Escribir "La longitud es:" , lon;
FinProceso

//Un maeestro desea saber que porcentaje de hombres y que porcentaje de mujeres hay en un grupo de estudiantes.
Proceso ejercicio_6
	Definir num_hom, num_muj Como Entero;
	Definir total_est Como Entero;
	Definir porcentaje_H, porcentaje_M Como real;
	Escribir "Ingrese el numero de hombres:";
	Leer num_hom;
	Escribir "Ingrese el numero de mujeres:";
	Leer num_muj;
	total_est <- num_hom + num_muj;
	porcentaje_H <- num_hom / total_est * 100;
	porcentaje_M <- num_muj / total_est * 100;
	Escribir "El porcentaje de hombres es ", porcentaje_H,"%";
	Escribir "El porcentaje de mujeres es ", porcentaje_M,"%";
FinProceso

//Un profesor prepara tres cuestionarios para una evaluacion final A, B Y C.
//Se sabe que se tarda 5 min en revisar el cuestionario A, 8 en revisar el cuestionario B y 6 en el C.
//La cantidad de examenes de cadaa tipo se entran por teclado.¿Cuantas horas y cuantos minutos se tardara 
//en revisar todas las evaluaciones?
Proceso ejercicio_7
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
	
	Escribir "Se tardar ", hrs ,"horas y " ,min, " minutos";
FinProceso

Proceso ejercicio_8
	//Una tienda ofrece un descuento del 15% sobre el total de la compra y un cliente desea saber cuanto debera pagar finalmente por s compra.
	Definir precio, descuento, precio_final Como Real;
	Escribir "Digite el precio a pagar: ";
	Leer precio;
	descuento <- precio * 0.15;
	precio_final <- precio - descuento;
	Escribir "El precio a pagar es de: ", precio_final;
FinProceso

Proceso ejercicio_9
	//Un alumno desea saber cual sera su calificacion final en la materia de Algoritmos.Dicha calificacion se compone de los siguientes porcentajes:
	//55% del promedio de sus tres calificaciones parciales 
	//30% de la calificacion del examen final
	//15% de la calificacion de un trabajo final
	Definir parcial1, parcial2, parcial3, prom_p, notas_p  Como Real;
	Definir examenf, n_examen, ntrabajo, n_fin_trab, nfinal Como Real;
	Escribir "Digite las 3 notas de los parciales";
	Leer parcial1, parcial2, parcial3;
	prom_p <- (parcial1 + parcial2 + parcial3)/3;
	notas_p <- prom_p * 0.55;
	Escribir "Digite la nota del examen final";
	Leer examenf;
	n_examen <- examenf * 0.3;
	Escribir "Digite la nota del trabajo final";
	Leer ntrabajo;
	n_fin_trab <- ntrabajo * 0.15;
	nfinal <- notas_p + n_examen + n_fin_trab;
	Escribir "La calificacion final es: ", nfinal;
FinProceso

//Condicionales
//Ejercicio 1: Ingrese un número entero y reportar si es par o impar
Proceso ejercicio_10
	Definir num como entero;
	Escribir "Digite un numero; ";
	Leer num;
	
	Si num mod 2 = 0 Entonces
		Escribir "El numero ", num, " es par";
	SiNo
		Escribir "El numero ", num, " es impar";
	FinSi
FinProceso

//Condicionales
//Determinar si un alumno apprueba o reprueba un curso, sabiendo que aprobara si su promedio de tres calificaciones es mayor o igual a 70; repreba caso contrario 
Proceso ejercicio_11
	Definir n1, n2, n3, prom Como Real;
	Escribir "Ingrese las 3 calificaciones: ";
	Leer n1, n2, n3;
	prom <- (n1+n2+n3)/3;
	Si prom >= 70 Entonces
		Escribir "El alumno esta aprobado con: ", prom;
	SiNo
		Escribir "El alumno esta desaprobado: ", prom;
	FinSi
FinProceso

//Condicionales
//En un almacen se hace un 20% de descuento a los clientes cuya compra supere los $100. ¿Cual sera la cantidad que pagara una persona por su compra?
Algoritmo Ejercicio_12
	Definir compra, Descuento, total_de_compra Como Real;
	Escribir"Ingrese el valor de la compra realizada";
	leer compra;
	si compra >= 100 Entonces
		Descuento <- compra * 0.2;
		total_de_compra <- compra - Descuento;
		Escribir "el descuento a sido realizado con exito: ", total_de_compra;
	SiNo
		Escribir "El descuento no se aplica al valor de su compra: ", total_de_compra;
		
	FinSi
FinAlgoritmo


//Leer 2 numeros; si son iguales que los multiplique, si el primero es mayor quue el segundo que los reste y si no que los sume
Proceso ejercicio_13
	Definir num1, num2, result Como real;
	Escribir "Ingrese dos numeros";
	Leer num1;
	Leer num2;
	Si num1=num2 Entonces
		result<-(num1*num2);
		Escribir result;
	SiNo
		Si num1>num2 Entonces
			result<-(num1-num2);
			Escribir result;
		SiNo
			result<-(num1+num2);
			Escribir result;
		FinSi
	FinSi
FinProceso

//Leer tres numeros diferentes e imprimir el numero mayor de los tres.
Proceso ejercicio_14
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

//Una fruteria ofrecce las manzanas con descuento segun la siguiente tabla:
//numero de kilos comprados               descuento
//0-2                                       0%
//2.01-5                                   10%
//5.01-10                                  15%                 
//10.01 en adelante                        20%
Proceso ejercicio_15
	Definir precioporkg, kg, precioI, precio_f, desct Como Real;
	Escribir "Ingrese el valor del kilo de manzanas";
	Leer precioporkg;
	Escribir "Ingrese la cantidad comprada de kilos";
	Leer kg;
	precioI<- precioporkg*kg;
	Si kg >=0 y kg<=2 Entonces
		desct<-0;
	SiNo
		Si kg>=2.01 y kg<=5 Entonces
			desct<- precioI*0.1;
		SiNo
			Si kg>=5.01 y kg<- 10 Entonces
				desct<-precioI *.15;
			SiNo
				desct<-(precioI*0.2);
			FinSi
		FinSi
	FinSi
	precio_f<- precioI-desct;
	Escribir "El precio a pagar es : ", precio_f;
FinProceso

//Condicionales 
//Elaborar un programa que me muestr los dias de las semanas cuando ingree los siete prrimeros numeros.
Proceso ejercicio_16
	Definir num Como Entero;
	Escribir "Introduce un numero del dia de la semana (1-7): ";
	Leer num;
	Segun num Hacer
		1: Escribir "Lunes";
		2: Escribir "Martes";
		3: Escribir "Miercoles";
		4: Escribir "Jueves";
		5: Escribir "Viernes";
		6: Escribir "Sabado";
		7: Escribir "Domingo";
		De Otro Modo:
			Escribir "No existe dia";
	FinSegun
FinProceso

//Elaborar un programa que me muestre el significado de aniversario de cada decada hasta los 60.
Proceso ejercicio_17
	Definir deca Como Entero;
	Escribir"Ingrese una decada";
	Leer deca;
	Segun deca Hacer
		10: Escribir "Bodaas de Hojalata";
		20: Escribir "Bodas de porcelana";
		30: Escribir "Bodas de Perlas";
		40: Escribir "Bodas de Rubi";
		50: Escribir "Bodas de Oro";
		60: Escribir "Bodas de Diamante";
		De Otro Modo:
			Escribir "No existe";
	FinSegun
	
FinProceso


// Hacer un programa que tenga un menu con las siguientes opciones:
// Opcion 1: Elevar un numero  una potencia X
// Opcion 2: Sacar la raiz cuadrada de un numero 
// Opcion 3: Salir
Proceso ejercicio_18
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


//Ciclo Para - Hasta - Hacer
//Calcular la suma de los "N" primeros numeros. 
Proceso ejercicio_19
	Definir N, suma, i como entero;
	Escribir "Ingrese la cantidad de numeros a sumarse:";
	Leer N;
	suma <- 0;
	Para i<- 1 Hasta N con paso 1 Hacer
		suma<- suma + i;
	FinPara
	Escribir "La suma es:", suma;
FinProceso


//Se desea calcular independientemente la suma de los numeros pares e impares comprendidos entre 1 y 50.
Proceso Ejercicio_20
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


//Ciclo Para - Hasta - Hacer
//Leer 10 numeros e imprimir cuantos son positivos, negativos y cuantos son neutros.
Proceso Ejercicio_21
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


//Ciclo Para - Hasta - Hacer
//Suponga que se tiene un conjunto de calificaciones de un grupo de 10 alumnos. Realizar un algoritmo para calcular la calificación promedio y la calificación más baja de todo el grupo. 
Algoritmo ejercicio_22
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

// Ciclo Para - Hasta - Hacer
// Calcular el factorial de un número mayor o igual a 0.
Proceso ejercicio_23
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

// Ciclo Para - Hasta - Hacer
//Calcular la siguiente sumatoria de los "N" elementos
Proceso ejercicio_24
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


//Ingresar "N" enteros, visualizar la suma de los números pares de la lista, cuántos números pares existen y cuál es el promedio de los números impares.
Proceso Ejercicio_25
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


Proceso ejercicio_26
    Definir tarifaPago Como Entero;
    Definir horasTrabajadas Como Entero;
    Definir salarios Como Entero;
    Definir sumaSalarios Como Entero;
    Definir i Como Entero;
	
    // Solicitar la tarifa de pago
    Escribir "Ingrese la tarifa de pago por hora:";
    Leer tarifaPago;
	
    // Solicitar las horas trabajadas de cada persona
    Para i <- 0 Hasta 4 Con Paso 1 Hacer
        Escribir "Ingrese las horas trabajadas de la persona ", i+1, ":";
        Leer horasTrabajadas[i];
    FinPara;
	
    // Calcular el salario de cada persona y la suma total
    sumaSalarios <- 0;
    Para i <- 0 Hasta 4 Con Paso 1 Hacer
        salarios[i] <- horasTrabajadas[i] * tarifaPago;
        sumaSalarios <- sumaSalarios + salarios[i];
    FinPara;
	
    // Mostrar los salarios de cada persona
    Para i <- 0 Hasta 4 Con Paso 1 Hacer
        Escribir "El salario de la persona ", i+1, " es: ", salarios[i];
    FinPara;
	
    // Mostrar la suma total de los salarios
    Escribir "La suma total de los salarios es: ", sumaSalarios;

FinProceso