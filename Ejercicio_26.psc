Proceso ejercicio_23
    Definir tarifaPago Como Entero;
    Definir horasTrabajadas[5] Como Entero;
    Definir salarios[5] Como Entero;
    Definir sumaSalarios Como Entero;
    Definir i Como Entero;
	
    // Solicitar la tarifa de pago
    Escribir "Ingrese la tarifa de pago por hora:";
    Leer tarifaPago;
	
    // Solicitar las horas trabajadas de cada persona
    Para i <- 0 Hasta 4 Con Paso 1 Hacer
        Escribir "Ingrese las horas trabajadas de la persona ", i+1, ":";
        Leer horasTrabajadas;
    FinPara;
	
    // Calcular el salario de cada persona y la suma total
    sumaSalarios <- 0;
    Para i <- 0 Hasta 4 Con Paso 1 Hacer
        salarios <- horasTrabajadas* tarifaPago;
        sumaSalarios <- sumaSalarios + salarios[i];
    FinPara;
	
    // Mostrar los salarios de cada persona
    Para i <- 0 Hasta 4 Con Paso 1 Hacer
        Escribir "El salario de la persona ", i+1, " es: ", salarios[i];
    FinPara;
	
    // Mostrar la suma total de los salarios
    Escribir "La suma total de los salarios es: ", sumaSalarios;
	
FinProceso