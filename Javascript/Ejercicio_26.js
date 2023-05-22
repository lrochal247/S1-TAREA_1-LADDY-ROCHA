const Leer = require('prompt-sync')();
const Escribir = console;
class Ejercicios {
  ejercicio26() {
    let tarifaPago;
    let horasTrabajadas = [];
    let salarios = [];
    let sumaSalarios = 0;
    let i;

    Escribir.log("Ingrese la tarifa de pago por hora: ");
    tarifaPago = parseInt(Leer());

    for (i = 0; i < 5; i++) {
      Escribir.log("Ingrese las horas trabajadas de la persona " + (i + 1) + ": ");
      horasTrabajadas[i] = parseInt(Leer());
    }

    for (i = 0; i < 5; i++) {
      salarios[i] = horasTrabajadas[i] * tarifaPago;
      sumaSalarios += salarios[i];
    }

    for (i = 0; i < 5; i++) {
      Escribir.log("El salario de la persona " + (i + 1) + " es: " + salarios[i]);
    }

    Escribir.log("La suma total de los salarios es: " + sumaSalarios);
  }
}

const ejercicios = new Ejercicios();
ejercicios.ejercicio26();