//Una fruteria ofrecce las manzanas con descuento segun la siguiente tabla:
//numero de kilos comprados               descuento
   //0-2                                       0%
   //2.01-5                                   10%
   //5.01-10                                  15%                 
   //10.01 en adelante                        20%
const Leer= require('prompt-sync')()
const Escribir= console
class Ejercicios{
	ejercicio15(){
		let precioporkg, kg, precioI, precio_f, desct
		precioporkg= Leer("Ingrese el valor del kilo de manzanas: ")
		kg= Leer("Ingrese la cantidad comprada de kilos: ")
		precioporkg= parseFloat(precioporkg)
		kg= parseFloat(kg)
		precioI= (precioporkg * kg)
		if (kg >=0 && kg<=2){
			desct=0
		}
		else{
			if (kg>=2.01 && kg<=5){
				desct= (precioI*0.1)
			}
			else{
				if (kg>=5.01 && kg<- 10){
					desct= (precioI *.15)
				}
				else{
					desct=  (precioI*0.2)
				}
			}
		}
		precio_f= (precioI-desct)
		Escribir.log ("El precio a pagar es : ", precio_f)
	}
}
	
const ejercicios= new Ejercicios()
ejercicios.ejercicio15()
