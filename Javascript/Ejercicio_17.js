//Elaborar un programa que me muestre el significado de aniversario de cada decada hasta los 60.
const Leer= require('prompt-sync')()
const Escribir= console
class Ejercicios{
	ejercicio17(){
		let deca
		deca = 0
		deca = Leer("Ingrese una decada: ")
		deca = parseInt(deca)
		switch (deca) {
			case 10:
				Escribir.log ("Bodas de Hojalata")
				break;
			case 20:
				Escribir.log ("Bodas de porcelana")
				break;
			case 30:
				Escribir.log ("Bodas de Perlas")
				break;
			case 40:
				Escribir.log ("Bodas de Rubi")
				break;
			case 50:
				Escribir.log ("Bodas de Oro")
				break;
			case 60:
				Escribir.log ("Bodas de Diamante")
				break;
			default:
				Escribir.log ("No existe")
				break;
		}
	}
}
const ejercicios= new Ejercicios()
ejercicios.ejercicio17()