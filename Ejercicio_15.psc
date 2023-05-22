//Una fruteria ofrecce las manzanas con descuento segun la siguiente tabla:
//numero de kilos comprados               descuento
   //0-2                                       0%
   //2.01-5                                   10%
   //5.01-10                                  15%                 
   //10.01 en adelante                        20%
Proceso ejercicio_12
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
