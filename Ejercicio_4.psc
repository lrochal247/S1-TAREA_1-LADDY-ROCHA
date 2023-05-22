//Calcular la cantidad de segundos que estan incluidos en el numero de horas, minutos y segundos ingresados por el usuario.
Proceso ejercicio_1
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
