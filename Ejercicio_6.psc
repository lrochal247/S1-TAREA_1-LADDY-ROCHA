//Un maeestro desea saber que porcentaje de hombres y que porcentaje de mujeres hay en un grupo de estudiantes.
Proceso ejercicio_3
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
