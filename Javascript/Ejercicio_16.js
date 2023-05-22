//Condicionales 
//Elaborar un programa que me muestr los dias de las semanas cuando ingree los siete prrimeros numeros.
const Leer = require('prompt-sync')()
const Escribir = console
class Ejercicios{
  ejercicio16(){
    let num
    num = 0
    num = Leer("Introduce un número del día de la semana (1-7): ")
    num = parseInt(num)
    switch (num){
      case 1:
        Escribir.log("Lunes")
        break;
      case 2:
        Escribir.log("Martes")
        break;
      case 3:
        Escribir.log("Miércoles")
        break;
      case 4:
        Escribir.log("Jueves")
        break;
      case 5:
        Escribir.log("Viernes")
        break;
      case 6:
        Escribir.log("Sábado")
        break;
      case 7:
        Escribir.log("Domingo")
        break;
      default:
        Escribir.log("No existe día")
        break;
    }
  }
}

const ejercicios = new Ejercicios()
ejercicios.ejercicio16()