//Leer 2 numeros; si son iguales que los multiplique, si el primero es mayor quue el segundo que los reste y si no que los sume
Proceso ejercicio_10
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
