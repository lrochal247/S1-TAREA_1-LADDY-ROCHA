//Condicionales
//En un almacen se hace un 20% de descuento a los clientes cuya compra supere los $100. ¿Cual sera la cantidad que pagara una persona por su compra?
Algoritmo Ejercicio_9
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
