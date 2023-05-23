const Leer = require('prompt-sync')()
const Escribir = console 
class Ejercicios{
	ejercicio1(){
		let a, b,c,result
		a=0;b=0;c=0
		a=Leer("Digite el valor de a ")
		b=Leer("Digite el valor de b ")
		c=Leer("Digite el valor de c ")
		a=parseInt(a)
		b=parseInt(b)
		c=parseInt(c)
		result = (-b + Math.sqrt(Math.pow(b, 2) - 4 * a * c)) / (2 * a)
		Escribir.log (" El resultado es",result) 
	}
}
const ejercicios =new Ejercicios()
ejercicios.ejercicio1()

//

const Leer = require('prompt-sync')()
const Escribir = console 
class Ejercicios{
    ejercicio2(){
		let a, b, result
		a=0;b=0
		a = Leer("Ingrese a: ")
		b = Leer("Ingrese b: ")
		a = parseInt(a)
		b = parseInt(b)
		result = ((3+5*8)<3) && (((-6/3*4)+2)<2) || (a>b);
		Escribir.log ("El resultado es: ", result)
	}
}
const ejercicios =new Ejercicios()
ejercicios.ejercicio2()
//
const Leer = require('prompt-sync')()
const Escribir = console 
class Ejercicios{
	ejercicio3(){
		let a, b, aux
		a=0;b=0
		a = Leer("Ingrese a: ")
		b = Leer("Ingrese b: ")
		a = parseInt(a)
		b = parseInt(b)
		aux = a;
		a = b;
		b = aux;
		Escribir.log ("El nuevo resultado de a es: ", a)
		Escribir.log ("El nuevo resultado de b es: ", b)
	}	
}
const ejercicios =new Ejercicios()
ejercicios.ejercicio3()


//
const Leer = require('prompt-sync')()
const Escribir = console
 class Ejercicios{
	ejercicio4(){
		let horas, minutos,seg,hor_seg, min_seg, total_seg	
		horas=0; minutos=0; seg=0
		horas=Leer("Digite la hora ")
		minutos=Leer("Digite los minutos ")
		seg=Leer("Digite los segundos ")
		horas=parseInt(horas)
		minutos=parseInt(minutos)
		seg=parseInt(seg)
		hor_seg=(horas * 3600)
		min_seg=( minutos * 60)
		total_seg=( hor_seg + min_seg + seg)
		Escribir.log ("Los segundos equivalentes son: ", total_seg)
	}
}
const ejercicios =new Ejercicios()
ejercicios.ejercicio4()

//
const Leer = require('prompt-sync')()
const Escribir = console 
class Ejercicios{
	ejercicio5(){
		let radio, area, lon
		radio=0
		radio=Leer("Ingrese el radio: ")
		radio=parseFloat(radio)
	    area= (3.14 *radio)
		lon = ( (2 * 3.14) * radio)
		Escribir.log ("El area de la circunferencia es: ", area)
		Escribir.log ("La longitud es:" , lon)
	}
}
const ejercicios =new Ejercicios()
ejercicios.ejercicio5()

//
const Leer = require('prompt-sync')()
const Escribir = console 
class Ejercicios{
	ejercicio6(){
		let num_muj, num_hom, porcentaje_H, porcentaje_M, total_est
		num_muj=0; num_hom=0
		num_muj=Leer ("Ingrese el numero de mujeres: ")
		num_hom=Leer ("Ingrese el numero de hombres: ")
        num_muj=parseInt(num_muj)
		num_hom=parseInt(num_hom)
		total_est =( num_hom + num_muj)
		porcentaje_M =((num_muj / total_est) * 100)
		porcentaje_H =((num_hom / total_est) * 100)
		Escribir.log ("El porcentaje de hombres es ", porcentaje_H,"%")
		Escribir.log ("El porcentaje de mujeres es ", porcentaje_M,"%")

	}
}
const ejercicios =new Ejercicios()
ejercicios.ejercicio6()

//
const Leer = require('prompt-sync')()
const Escribir = console 
class Ejercicios{
	ejercicio7(){
		let cantidadA, cantidadB, cantidadC, tiempoA, tiempoB, tiempoC, tiempo_total, hrs, min
		cantidadA=0; cantidadB=0; cantidadC=0
		cantidadA= Leer ("Ingrese la cantidad de cuestinarios A: ")
		cantidadB= Leer ("Ingrese la cantidad de cuestinarios B: ")
		cantidadC= Leer ("Ingrese la cantidad de cuestinarios C: ")
		cantidadA = parseFloat (cantidadA)
		cantidadB = parseFloat (cantidadB)
		cantidadC = parseFloat (cantidadC)
		tiempoA = (cantidadA * 5)
		tiempoB = (cantidadB * 8)
		tiempoC = (cantidadC * 6)
		tiempo_total = (tiempoA + tiempoB + tiempoC)
		//Calculamos las horas y minutos 
		hrs = Math.trunc(tiempo_total / 60)
		min = (tiempo_total % 60)
		Escribir.log ("Se tardara ", hrs ,"horas y " ,min, " minutos", )
		
	}
}
const ejercicios =new Ejercicios()
ejercicios.ejercicio7()



//
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
const ejercicios =new Ejercicios()
ejercicios.ejercicio8()

//
const Leer = require('prompt-sync')()
const Escribir = console 
class Ejercicios{
	ejercicios9(){
		let parcial1, parcial2, parcial3, prom_p, notas_p, examenf, n_examen, ntrabajo, n_fin_trab, nfinal
		parcial1=0; parcial2=0; parcial3=0
		parcial1=Leer ("Digite la primera nota del parcial: ")
		parcial2=Leer ("Digite la segunda nota del parcial: ")
		parcial3=Leer ("Digite la tercera nota del parcial: ")
		parcial1=parseFloat(parcial1)
		parcial2=parseFloat(parcial2)
		parcial3=parseFloat(parcial3)
		prom_p = ((parcial1 + parcial2 + parcial3)/3)
		notas_p = (prom_p * 0.55)
		examenf=Leer ("Digite la nota del examen final: ")
		examenf=parseFloat(examenf)
		n_examen = (examenf * 0.3)
		ntrabajo=Leer ("Digite la nota del trabajo final: ")
		ntrabajo=parseFloat(ntrabajo)
		n_fin_trab = (ntrabajo * 0.15)
		nfinal = (notas_p + n_examen + n_fin_trab)
		Escribir.log ("La calificacion final es: ", nfinal)
	}
}	
const ejercicios =new Ejercicios()
ejercicios.ejercicio9()


//
const Leer = require('prompt-sync')()
const Escribir = console 
class Ejercicios{
	ejercicio10(){
		let num 
		num=0
		num=Leer ("Digite un numero: ")
		num= parseInt (num)
		if (num % 2 == 0 ){
			Escribir.log("El numero ", num, " es par")
		}
		else{
			Escribir.log ("El numero ", num, " es impar")
		} 
	
	}
}
const ejercicios =new Ejercicios()
ejercicios.ejercicio10()



//
const Leer = require('prompt-sync')()
const Escribir = console
class Ejercicios{
	ejercicio11(){
		let n1, n2, n3, prom
		n1=0;n2=0;n3=0
		n1= Leer ("Ingrese la nota numero 1: ")
		n2= Leer ("Ingrese la nota numero 2: ")
		n3= Leer ("Ingrese la nota numero 3: ")
		n1= parseFloat (n1)
		n2= parseFloat (n2)
		n3= parseFloat (n3)
		prom = ((n1+n2+n3)/3)
		if (prom>=70){
			Escribir.log ("El alumno esta aprobado con: ", prom)	
		}
		else{
			Escribir.log ("El alumno esta desaprobado: ", prom)
		}
	}
}
const ejercicios =new Ejercicios()
ejercicios.ejercicio11()

//
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
const ejercicios =new Ejercicios()
ejercicios.ejercicio12()

//
const Leer = require('prompt-sync')()
const Escribir = console
class Ejercicios{
	ejercicio13(){
		let num1, num2, result
		num1=0; num2=0
		num1= Leer("Ingrese el primer numero: ")
		num2= Leer("Ingrese el segundo numero: ")
		num1= parseInt(num1)
		num2= parseInt(num2)
		if (num1==num2){
			result= (num1*num2)
			Escribir.log("El resultado: ", result)
		}
		else{
			if (num1>num2){
				result= (num1-num2)
				Escribir.log("El resultado: ", result)
			}
			else{
				result= (num1+num2)
				Escribir.log("El resultado: ", result)
			}
		} 
	}
}	
const ejercicios =new Ejercicios()
ejercicios.ejercicio13()


//
const Leer = require('prompt-sync')()
const Escribir = console
class Ejercicios{
	ejercicio14(){
		let n1, n2, n3
		n1=0; n2=0; n3=0
		n1= Leer("Ingrese el primer numero: ")
		n2= Leer("Ingrese el segundo numero: ")
		n3= Leer("Ingrese el tercer numero: ")
		n1= parseInt(n1)
		n2= parseInt(n2)
		n3= parseInt(n3)
		if (n1>n2 && n1>n3){
			Escribir.log ("El mayor es n1:", n1)
		}
		else{
			if (n2>n1 && n2>n3){
				Escribir.log ("El mayor es n2:", n2)
			}
			else{
				Escribir.log ("El mayor es n3:", n3)
			}
		}
	}
}
const ejercicios =new Ejercicios()
ejercicios.ejercicio14()

//
const Leer = require('prompt-sync')()
const Escribir = console
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
const ejercicios =new Ejercicios()
ejercicios.ejercicio15()

//
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
const ejercicios =new Ejercicios()
ejercicios.ejercicio16()

//
const Leer = require('prompt-sync')()
const Escribir = console
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
const ejercicios =new Ejercicios()
ejercicios.ejercicio18()


//
const Leer = require('prompt-sync')()
const Escribir = console
class Ejercicios{	
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
	ejercicio19(){
		let N, suma, i 
		N=0
		N=Leer ("Ingrese la cantidad de numeros a sumarse: " )
		N=parseInt (N)
		suma=(0)
		for (i = 1; i <= N; i++){
			suma=(suma + i)
		}
		Escribir.log ("La suma es:" , suma)
	}
}
const ejercicios =new Ejercicios()
ejercicios.ejercicio19()



//
const Leer = require('prompt-sync')()
const Escribir = console
class Ejercicios{
	ejercicio20(){
		let suma_par,suma_impar, i
		suma_par=0; suma_impar=0
		for (i = 2; i <= 49; i++){
			if ( i % 2==0){
				suma_par=(suma_par+i)
			}
			else{
				suma_impar=(suma_impar+i)

			}
		}
		Escribir.log ("La suma de pares es: " ,suma_par)
		Escribir.log ("La suma es impares es: " , suma_impar)

	}
}
const ejercicios =new Ejercicios()
ejercicios.ejercicio20()


//
const Leer = require('prompt-sync')()
const Escribir = console
class Ejercicios{
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
const ejercicios =new Ejercicios()
ejercicios.ejercicio21()



//
const Leer = require('prompt-sync')()
const Escribir = console
class Ejercicios{
	
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
const ejercicios =new Ejercicios()
ejercicios.ejercicio22()



//
const Leer = require('prompt-sync')()
const Escribir = console
class Ejercicios{
	ejercicio23(){
		let i,fact, num
		do {
			num= Leer("Ingrese un numero: ")
			num= parseInt(num)
		}
		while (num< 0){
			i= 1
			fact= 1
		}
		while (i <= num) {
			fact = fact * i
			i = i + 1
		  }
		Escribir.log ('El factorial es: ', fact)
	}
}
const ejercicios =new Ejercicios()
ejercicios.ejercicio23()



//
const Leer = require('prompt-sync')()
const Escribir = console
class Ejercicios{
	ejercicio24() {
		let n_elemen, i, suma
		n_elemen= Leer("Ingrese la cantidad de elementos a sumar: ")
		n_elemen = parseInt(n_elemen)
		i = 1
		suma = 0
		while (i <= n_elemen) {
		  suma = (suma + Math.pow(i, 2))
		  i = i + 1
		}
		Escribir.log("La suma es: " + suma)
	}
}
const ejercicios =new Ejercicios()
ejercicios.ejercicio24()



//
const Leer = require('prompt-sync')()
const Escribir = console
class Ejercicios{
	ejercicio25() {
		let n_element, i, num, suma_pares, cont_par, suma_impar, cont_impar
		let prom
		n_element= Leer("Ingrese la cantidad de elementos: ")
		n_element = parseInt(n_element)
		i = 1;
		suma_pares = 0
		cont_par = 0
		suma_impar = 0
		cont_impar = 0
		while (i <= n_element) {
		  num=Leer(i + ". Ingrese un numero: ")
		  num = parseInt(num);
		  if (num % 2 == 0) {
			suma_pares = (suma_pares + num)
			cont_par = (cont_par + 1)
		  } 
		  else {
			suma_impar = (suma_impar + num)
			cont_impar = (cont_impar + 1)
		  }
		  
		  i = i + 1;
		}
		
		if (cont_par == 0) {
		  Escribir.log("No se han digitado numeros pares")
		} 
		else {
		  Escribir.log("La suma de los numeros pares es: ", suma_pares)
		  Escribir.log("El conteo de los numeros pares es: ", cont_par)
		}
		
		if (cont_impar == 0) {
		  Escribir.log("No se han digitado numeros impares")
		} 
		else {
		  prom = suma_impar / cont_impar
		  Escribir.log("El promedio de impares es: ", prom)
		}
	}
}
const ejercicios =new Ejercicios()
ejercicios.ejercicio25()


//
const Leer = require('prompt-sync')()
const Escribir = console
class Ejercicios{
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
const ejercicios =new Ejercicios()
ejercicios.ejercicio26()	
  












    