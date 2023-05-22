//Ciclo Para - Hasta - Hacer
//Suponga que se tiene un conjunto de calificaciones de un grupo de 10 alumnos. Realizar un algoritmo para calcular la calificaci�n promedio y la calificaci�n m�s baja de todo el grupo. 
const Leer = require('prompt-sync')()
const Escribir = console
class Ejercicios {
  ejercicio22() {
    let cali_promedio, cali_baja, cali, suma
    let i

    suma = 0;
    cali_baja = 99999

    for (i = 1; i <= 10; i++) {
      Escribir.log (i + ". Ingrese una calificacion: ")
      cali = parseFloat(Leer())
      suma = suma + cali;

      if (cali < cali_baja) {
        cali_baja = cali
      }
    }

    cali_promedio = (suma / 10)

    Escribir.log ("La calificacion promedio es: ", cali_promedio)
    Escribir.log ("La calificacion mas baja es: ", cali_baja)
  }
}

const ejercicios = new Ejercicios()
ejercicios.ejercicio22()


