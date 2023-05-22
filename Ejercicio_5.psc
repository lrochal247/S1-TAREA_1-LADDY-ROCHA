//Hacer un programa para ingresar el radio de un circulo y se reporte su area y la longitud de la circunferencia
Proceso ejercicio_2
	Definir radio, area, lon Como Real;
	Escribir "Ingrese el valor del radio:";
	Leer radio;
	area <- pi *radio;
	lon <- 2 * pi * radio;
	Escribir "El area de la circunferencia es: ", area;
	Escribir "La longitud es:" , lon;
FinProceso
