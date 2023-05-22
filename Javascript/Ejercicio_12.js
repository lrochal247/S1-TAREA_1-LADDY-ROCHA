//Condicionales
//En un almacen se hace un 20% de descuento a los clientes cuya compra supere los $100. �Cual sera la cantidad que pagara una persona por su compra?
const Leer = require('prompt-sync')()
const Escribir = console
class Ejercicios{
	ejercicio12(){
		let compra, Descuento, total_de_compra
		compra= Leer("Ingrese el valor de la compra realizada: ")
		compra= parseFloat(compra)

		if (compra >= 100){
			Descuento= (compra * 0.2)
			total_de_compra = (compra - Descuento)
			Escribir.log("el descuento a sido realizado con exito: ",total_de_compra)
		}
		else{
			Escribir.log("El descuento no se aplica al valor de su compra: ",compra)
		}
	}
} 

const ejercicios= new Ejercicios()
ejercicios.ejercicio12()
