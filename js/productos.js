//Creo una variable para manipular el div productos
let divProductos = document.getElementById('productos');

//Llamo a mis productos del json, Creo un for each para recorrer el array y asignarle a cada tarjeta la informacion de su producto
fetch('../productos.json')
.then(response => response.json())
.then(productos => {
    productos.forEach((producto, indice)=> {
        divProductos.innerHTML += `
            <div class="card" id="producto${producto.id}" style="width: 18rem;">
                <img src="../multimedia/productos/producto${producto.id}.jpg" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${producto.nombre}</h5>
                    <p class="card-text">Cantidad: ${producto.cantidad}</p>
                    <p class="card-text">Precio: $${producto.precio} </p>
                    <p class="card-text">Descripcion: ${producto.descripcion}</p>
                    <a href="#" class="btn btn-primary"  id="boton${producto.id}"  name="boton${producto.id}">Agregar</a>
                </div>
            </div>
        `
    })
})

//creo el array para guardar los nombres de los productos
let concatProduct = [];
//creo un array para guardar los precios
let precios = [];

//creo funcion para avisar que el producto se agrego al carrito
function agregado() {
    alert("Su producto fue agregado al carrito con éxito")
}

//traigo los productos del JSON, recorro los productos, creo la variable para el boton, escucho el evento click y le doy una funcion de agregar el nombre de los productos agregados y el precio a las diferentes key y llamo a la funcion agregado
fetch('../productos.json')
.then(response => response.json())
.then(productos => {
for (let producto of productos){
    let btAgregar = document.getElementById(`boton${producto.id}`);
    btAgregar.addEventListener('click', agregarProducto);
    function agregarProducto() {
        concatProduct.push(producto.nombre);
        precios.push(producto.precio);
        localStorage.setItem("carrito", JSON.stringify(concatProduct));
        localStorage.setItem("precios", JSON.stringify(precios));
        agregado();
    }
}
})

//creo una variable para asignarle el boton del carrito
let btnCarrito = document.getElementById('carritoBtn');

//creo una variable para seleccionar el div donde voy a insertar el html en la tabla de productos
let tablaCarrito = document.getElementById('tablaProd');

//devuelvo los productos y precios dentro de una tabla en el carrito si es que seleccionaron productos, de lo contrario digo que el carrito esta vacio.
function llamoCarrito() {
    let misProductos = JSON.parse(localStorage.getItem("carrito"));
    let misPrecios = JSON.parse(localStorage.getItem("precios"));
    if (misProductos == null) {
        tablaCarrito.innerHTML += `
            <p>Su carrito esta vacio</p>
        `
    }
    else {
        for (let i = 0; i < misProductos.length; i+=1){
            tablaCarrito.innerHTML += `
                <tr>
                    <td>${misProductos[i]}  </td>
                    <td> $${misPrecios[i]}</td>
                </tr>
            `
        }
    }
}

//escucho el evento click en el boton de carrito y llamo a la funcion carrito
btnCarrito.onclick = () =>{
    llamoCarrito();
}

//creo la variable para el boton cerrar del carrito
let btnCerrar = document.getElementById("btnCerrar")
//creo el div donde voy a imprimir el precio total de la compra
let divTotal = document.getElementById("totalFinal")

//cuando hagan click en el boton cerrar ya no van a acumularse los productos y los precios totales repetidamente
btnCerrar.onclick = () =>{
tablaCarrito.innerHTML="";
divTotal.innerHTML="";
}

//creo variable para el boton que limpia al carrito
let botonRefresh = document.getElementById("refresh")

//creo evento para el boton que limpia al carrito, le doy funcion de actualizar la pagina, borrar las key del local storage y dejar vacio el carrito
botonRefresh.onclick = () =>{
    location.reload()
    localStorage.removeItem('carrito');
    localStorage.removeItem('precios');
    tablaCarrito.innerHTML="";
    divTotal.innerHTML="";
}

//creo una funcion con una variable que traiga los precios del local storage y los sume; y me retorne el precio final de la compra
function precioFinal() {
    let preciosLocalStorage = JSON.parse(localStorage.getItem("precios"));
    let suma = (valorAnterior, valorNuevo) => valorAnterior + valorNuevo;
    return preciosLocalStorage.reduce(suma);
}

//creo un h4 que muestre el precio final de la compra, cuando hagan click en el boton carrito, si no seleccionaron productos muestra valor cero
$(() => {
    $("#carritoBtn").click(function() {
        let misPrecios = JSON.parse(localStorage.getItem("precios"));
        if (misPrecios == null) {
            $("#totalFinal").append(`<h4>El valor total de su compra es de: $0</h4>`);
        } else {
            $("#totalFinal").append(`<h4>El valor total de su compra es de: $${precioFinal()}</h4>`);
        }
    }),
    //creo animaciones anidadas en las cards
    $(".card").hide().show(1000)
    })

//creo una variable para el boton que finaliza la compra
    let finalizar = document.getElementById("fin");

//creo evento para el boton que finaliza la compra, traigo el contenido del carrito del local storage, si no tiene nada devuelvo mensaje, de lo contrario redirijo a la pagina del formulario
    finalizar.onclick = () =>{
        let misProductos = JSON.parse(localStorage.getItem("carrito"));
        if (misProductos == null) {
            alert("El carrito debe tener al menos un producto para poder finalizar la compra.")
        } else {
            window.location.href='formulario.html'
    }
}

