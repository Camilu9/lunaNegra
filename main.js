//lista de productos
const shampoo = " Shampoo solido 110 gr ";
const acondicionador = " Acondicionador solido 50 gr ";
const desodorante = " Desodorante solido 45 gr ";
const jabon = " Jabon facial 30gr ";

//lista con el precio de cada producto
const shampooP = 700;
const acondicionadorP = 580;
const desodoranteP = 470;
const jabonP = 350;

//variables globales
let listaProductos = [];
let montoTotal = 0;

//funciones para cuotas
const calcularPrecioInt = precioProd => precioProd * 1.1;
const divisionCuotas = (precioProd, cantCuotas) => precioProd / cantCuotas;

//funcion para concatenar los productos seleccionados
function concatenarProductos(seleccion){
    switch(seleccion){
        case "1":
            listaProductos.push(shampoo);
            break;
        case "2":
            listaProductos.push(acondicionador);
            break;
        case "3":
            listaProductos.push(desodorante);
            break;
        case "4":
            listaProductos.push(jabon);
            break;
    }
}

//funcion para sumar los precios de los productos seleccionados
function sumarPrecios(valor){
    switch(valor){
        case "1":
            montoTotal += shampooP;
            break;
        case "2":
            montoTotal += acondicionadorP;
            break;
        case "3":
            montoTotal += desodoranteP;
            break;
        case "4":
            montoTotal += jabonP;
            break;
    }
}

//mensaje para continuar la compra
function mensajeDos(){
    let eleccion = prompt("¿Desea agregar otro producto? Elija el numero de la opcion deseada:"
    + "\n 1- Shampoo solido x 110 gr $700"
    + "\n 2- Acondicionador solido x 50 gr $580"
    + "\n 3- Desodorante solido x 45 gr $470"
    + "\n 4- Jabon facial x 30 gr $350"
    + "\n 5- Salir"
    + "\n 6- Terminar la compra")

    flujo(eleccion)
}

//funcion que devuelve el carrito
function muestraCarrito(montoFinal, listadoFinal){
    let precioConInteres = calcularPrecioInt(montoFinal);
    let couta3 = divisionCuotas(precioConInteres, 3);
    let couta6 = divisionCuotas(precioConInteres, 6);

    let mensajeFinal = prompt("Su carrito posee "+ listadoFinal +
    "\n El monto total a pagar es de $"+ montoFinal +
    "\n ¿Como desea abonar? Seleccione el numero de opcion deseada:"
    + "\n 1- Efectivo/debito $" + montoFinal +
    "\n 2- 1 cuota sin interes $" + montoFinal +
    "\n 3- 3 cuotas de $" + couta3 + " (con un interes del 10% sobre el total)"
    + "\n 4- 6 cuotas de $" + couta6 + " (con un interes del 10% sobre el total)"
    +"\n 5- salir")
    msjFinCompra();
}

//mensaje despues de una compra
function msjFinCompra(){
    alert("¡Muchas gracias por su compra! A continuacion le pedimos los datos para la entrega");
    const cliente1 = new DatosCliente(prompt("Ingrese su nombre"), prompt("Ingrese su apellido"), prompt("Ingrese el nombre de su calle"), parseInt(prompt("Ingrese la altura de su casa")), parseInt(prompt("Ingrese su codigo postal")))
    console.log(cliente1.fin())
}

//mensaje cuando no compran nada -.-
function msjMalondon(){
    alert("¡Gracias por visitar nuestra tienda!")
}

//mensaje de inicio del flujo
function msjInicio(){
    let inicio = prompt("Bienvenido a la tienda virtual de Luna negra"
    + "\n ¿Que desea comprar? Elija el numero de la opcion deseada:"
    + "\n 1- Shampoo solido x 110 gr $700"
    + "\n 2- Acondicionador solido x 50 gr $580"
    + "\n 3- Desodorante solido x 45 gr $470"
    + "\n 4- Jabon facial x 30 gr $350"
    + "\n 5- Salir")

    flujo(inicio);
}

//clase para que el usuario brinde los datos de envio

class DatosCliente {
    constructor(nombre, apellido, calle, numero, cp) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.calle = calle;
        this.numero = numero;
        this.cp = cp;
    }
    fin() {
        alert("Estimada/o " + this.nombre + " su pedido llegara en dos dias a la siguiente direccion: " + this.calle + " " + this.numero + ". Ante cualquier inconveniente comunicarse por md a nuestra cuenta de Instagram")
    }
}

//funcion para el flujo
function flujo(opcSelec){
    Number(opcSelec);
    console.log(opcSelec);
    if (opcSelec == 5){
        msjMalondon();
    }
    else if (opcSelec < 5){
        concatenarProductos(opcSelec); 
        sumarPrecios(opcSelec);
        mensajeDos();
    }
    else if (opcSelec == 6){
        muestraCarrito(montoTotal, listaProductos);
    }
    else{
        alert("La opcion ingresada no corresponde a ninguna opcion de la lista.");
        msjInicio();
    }
}

msjInicio();
