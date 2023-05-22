// Hacer un programa que tenga un menu con las siguientes opciones:
// Opcion 1: Elevar un numero a una potencia X
// Opcion 2: Sacar la raiz cuadrada de un numero 
// Opcion 3: Salir
const Leer = require('prompt-sync')();
const Escribir = console;

class Ejercicio {
  ejercicio18() {
    this.menu();
  }

  menu() {
    let opc;
    do {
      Escribir.log('Menu');
      Escribir.log('1: Elevar un numero a una potencia X');
      Escribir.log('2: Sacar la raiz cuadrada de un numero');
      Escribir.log('3: Salir');
      Escribir.log('Introduce una opcion');
      opc = parseInt(Leer());

      switch (opc) {
        case 1:
          this.opcion1();
          break;
        case 2:
          this.opcion2();
          break;
        case 3:
          Escribir.log('Saliendo del programa...');
          break;
        default:
          Escribir.log('Su eleccion de opcion es incorrecta');
      }
    } while (opc !== 3);
  }

  opcion1() {
    Escribir.log('Opcion 1: Elevar un numero a una potencia X');
    let num, pot, result;
    Escribir.log('Ingrese un numero: ');
    num = parseFloat(Leer());
    Escribir.log('Ingrese la potencia: ');
    pot = parseFloat(Leer());
    result = Math.pow(num, pot);
    Escribir.log('El resultado es:', result);
  }

  opcion2() {
    Escribir.log('Opcion 2: Sacar la raiz cuadrada de un numero');
    let num, result;
    Escribir.log('Ingrese un numero: ');
    num = parseFloat(Leer());
    result = Math.sqrt(num);
    Escribir.log('El resultado es:', result);
  }
}

const ejercicio = new Ejercicio();
ejercicio.ejercicio18();