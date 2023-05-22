//Ciclo Para - Hasta - Hacer
//Leer 10 numeros e imprimir cuantos son positivos, negativos y cuantos son neutros.
const Leer = require('prompt-sync')()
const Escribir = console
class Ejercicios {
  ejercicio21() {
    let num, i
    let cont_posi = 0
    let cont_nega = 0
    let cont_neutros = 0

    for (i = 1; i <= 10; i++) {
      Escribir.log (i + ". Ingrese un numero: ")
      num = parseInt(Leer())

      if (num === 0) {
		cont_neutros = cont_neutros + 1
	  } 
	  else {
        if (num > 0) {
          cont_posi = cont_posi + 1
        } 
		else {
          cont_nega = cont_nega + 1
        }
      }
    }

    Escribir.log("La cantidad de positivos es:", cont_posi)
    Escribir.log("La cantidad de negativos es:", cont_nega)
    Escribir.log("La cantidad de neutros es:", cont_neutros)
  }
}

const ejercicios = new Ejercicios()
ejercicios.ejercicio21()