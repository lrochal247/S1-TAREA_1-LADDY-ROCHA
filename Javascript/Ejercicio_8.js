//Una tienda ofrece un descuento del 15% sobre el total de la compra y un cliente desea saber cuanto debera pagar finalmente por s compra.
const Leer = require('prompt-sync')()
const Escribir = console
class Ejercicios{
	ejercicio8(){
		let precio, descuento, precio_final
		precio=0
		precio=Leer ("Digite el precio a pagar: ")
		precio=parseInt(precio)
		descuento = (precio * 0.15)
		precio_final = (precio - descuento)
		Escribir.log ("El precio a pagar es de: ", precio_final)
	}
}
const ejercicios = new Ejercicios()
ejercicios.ejercicio8()