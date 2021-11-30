
//declaro una clase para crear productos
class Producto {
    constructor(id, nombre, cantidad, precio, descripcion) {
        this.id = id;
        this.nombre = nombre;
        this.cantidad = cantidad;
        this.precio = precio;
        this.descripcion = descripcion;
    }
}

//creo los productos
const producto1 = new Producto(1,"Shampoo solido de romero", "110 gr", 700, "Limpia el cabello y el cuero cabelludo sin dejar exceso de oleosidad. Para cabellos grasos.");
const producto2 = new Producto(2,"Shampoo solido de geranio", "110 gr", 700, "Limpia el cabello y el cuero cabelludo sin dejar exceso de oleosidad. Para cabellos secos.");
const producto3 = new Producto(3,"Acondicionador solido de vainilla", "50 gr", 580, "Nutre el cabello y sella las cuticulas del mismo post lavado. Para cabellos debiles.");
const producto4 = new Producto(4,"Acondicionador solido de azahar", "50 gr", 580, "Nutre el cabello y sella las cuticulas del mismo post lavado. Para cabellos secos.");
const producto5 = new Producto(5,"Aceite de coco", "100 gr", 400, "Humectante corporal, serum para cabellos con rulos u ondulados.");
const producto6 = new Producto(6,"Gel dental", "100 gr", 530, "Limpia y desinfecta la boca. Poder antibacteriano y antifungico.");
const producto7 = new Producto(7,"Desodorante solido", "45 gr", 470, "Evita la proliferacion de olores en las axilas sin obstruir los poros. Antibacteriano y antifungico.");
const producto8 = new Producto(8,"Desodorante en crema", "100 gr", 470, "Evita la proliferacion de olores en las axilas sin obstruir los poros. Antibacteriano y antifungico.");
const producto9 = new Producto(9,"Balsamo labial", "13 gr", 300, "humecta y repara la piel de los labios. Vainilla.");
const producto10 = new Producto(10,"oleo corporal", "35 gr", 350, "Humecta y nutre la piel del cuerpo. Trata areas resecas. Azahar.");
const producto11 = new Producto(11,"Crema para manos", "100 gr", 620, "Humecta y repara la piel de las manos.");
const producto12 = new Producto(12,"Crema corporal", "250 gr", 1160, "Hidrata, humecta y nutre la piel del cuerpo. Brinda proteccion y suavidad.");
const producto13 = new Producto(13,"Jabon facial Madagascar", "30 gr", 350, "Realiza una limpieza profunda del rostro de acuerdo a sus necesidades. Pieles secas. Uso diario.");
const producto14 = new Producto(14,"Jabon facial Amazonia", "30 gr", 350, "Realiza una limpieza profunda del rostro de acuerdo a sus necesidades. Pieles grasas. Uso diario.");
const producto15 = new Producto(15,"Jabon facial Malesia", "30 gr", 350, "Realiza una limpieza profunda del rostro de acuerdo a sus necesidades. Pieles sensibles y maduras. Uso diario.");
const producto16 = new Producto(16,"Gel de limpieza facial", "100 gr", 530, "Limpia e hidrata la piel del rostro delicadamente. Quita el maquillaje. Lavanda.");
const producto17 = new Producto(17,"Hidrolato de lavanda", "100 cc", 520, "Tonico natural.");
const producto18 = new Producto(18,"Hidrolato de romero", "100 cc", 520, "Tonico natural.");
const producto19 = new Producto(19,"Agua micelar de azahar y geranio", "100 cc", 470, "Limpia y nutre la piel del rostro. Pieles normales a secas.");
const producto20 = new Producto(20,"Agua micelar de romero y arbol de te", "100 cc", 470, "Limpia y nutre la piel del rostro. Pieles grasas.");
const producto21 = new Producto(21,"Crema facial de dia", "100 gr", 760, "Hidrata, humecta y nutre el rostro acorde a sus necesidades durante el dia. Para pieles normales a secas.");
const producto22 = new Producto(22,"Crema facial de dia", "100 gr", 760, "Hidrata, humecta y nutre el rostro acorde a sus necesidades durante el dia. Para pieles grasas.");
const producto23 = new Producto(23,"Crema facial de noche", "100 gr", 800, "Regenerante y antioxidante. Apta para todo tipo de pieles.");
const producto24 = new Producto(24,"Protector solar", "100 gr", 760, "FPS 40. Protege la piel de los rayos solares, UVA y UV. Filtro fisico.");
const producto25 = new Producto(25,"Gel arce", "100 gr", 530, "Humecta, calma y desinflama la piel luego del rasurado o depilado.");
const producto26 = new Producto(26,"Mascarilla facial de Arcilla blanca", "100 gr", 500, "Nutre la piel en profundidad, absorbe impurezas y sebo. Arcilla blanca y arbol de te.");
const producto27 = new Producto(27,"Mascarilla facial de carbon activado", "100 gr", 500, "Nutre la piel en profundidad, absorbe impurezas y sebo. Carbon activado y limon");
const producto28 = new Producto(28,"Mascarilla facial de cacao", "100 gr", 500, "Nutre la piel en profundidad, absorbe impurezas y sebo. Cacao y vainilla");
const producto29 = new Producto(29,"Discos desmaquillantes", "4 unidades", 550, "Kit de 4 unidades, 2 simples y 2 dobles.");

//creo un array para almacenar los productos
let productos = [producto1, producto2, producto3, producto4, producto5, producto6, producto7, producto8, producto9, producto10, producto11, producto12, producto13, producto14, producto15, producto16, producto17, producto18, producto19, producto20, producto21, producto22, producto23, producto24, producto25, producto26, producto27, producto28, producto29];

//guardo los productos en el local storage
const enJSON = JSON.stringify(productos)
localStorage.setItem("productos", enJSON)

//Creo una variable para manipular el div productos
let divProductos = document.getElementById('productos')

//Creo un for each para recorrer el array y asignarle a cada tarjeta la informacion de su producto
productos.forEach((producto, indice) => {
    divProductos.innerHTML += `
    <div class="card" id="producto${producto.id}" style="width: 18rem;">
        <img src="../multimedia/productos/producto${producto.id}.jpg" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">Producto: ${producto.nombre}</h5>
            <p class="card-text">Cantidad: ${producto.cantidad}</p>
            <p class="card-text">Precio: $${producto.precio} </p>
            <p class="card-text">Descripcion: ${producto.descripcion}</p>
            <a href="#" class="btn btn-primary"  id="boton${producto.id}"  name="boton${producto.id}">Agregar</a>
            <a href="#" class="btn btn-danger"  id="borrar${producto.id}"  name="boton${producto.id}">Eliminar</a>
        </div>
    </div>
    `
})

//creo el array para guardar los nombres de los productos
let concatProduct = [];
//creo la variable para sumar los precios de los productos
let sumarPrecios = 0;

//funciones del boton agregar
//recorro los productos, creo la variable para el boton, escucho el evento click y le doy una funcion de agregar el nombre de los productos agregados
for (let producto of productos){
    let btAgregar = document.getElementById(`boton${producto.id}`);
    btAgregar.addEventListener('click', agregarProducto);
    function agregarProducto() {
        concatProduct.push(producto.nombre)
    }
}
//recorro los productos, creo la variable para el boton agregar, escucho el evento click y le doy una funcion de agregar el precio de los productos agregados
for (let producto of productos){
    let btAgregar = document.getElementById(`boton${producto.id}`);
    btAgregar.addEventListener('click', agregarPrecio);
    function agregarPrecio() {
        sumarPrecios += producto.precio
    }
}

//funciones para el boton eliminar
//recorro los productos, creo la variable del boton borrar, escucho el click y le doy funcion de borrar los nombres de los productos
for (let producto of productos){
    let btAgregar = document.getElementById(`borrar${producto.id}`);
    btAgregar.addEventListener('click', borrarProducto);
    function borrarProducto() {
        concatProduct.pop(producto.nombre)
    }
}
////recorro los productos, creo la variable del boton borrar, escucho el click y le doy funcion de borrar los precios de los productos
for (let producto of productos){
    let btAgregar = document.getElementById(`borrar${producto.id}`);
    btAgregar.addEventListener('click', borrarPrecio);
    function borrarPrecio() {
        sumarPrecios -= producto.precio
    }
}

//funcion para ejecutar un alert
function alertaAgrego() {
    alert("el producto fue agregado a su carrito, puede revisar el contenido del mismo haciendo click en el boton \"Carrito de compras\"")
}


//creo una variable para asignarle el boton
let btnCarrito = document.getElementById('carritoBtn');
//creo una variable para seleccionar el div donde voy a insertar el html
let mensaje = document.getElementById('msjCarrito');
//inserto en el html un alert de bootstrap que devuelve lo guardado en localstorage
btnCarrito.onclick = () =>{
    mensaje.innerHTML = `
    <div class="alert alert-warning alert-dismissible fade show" role="alert">
        <h4>Estos son los productos de tu carrito</h4>
        <p>${concatProduct}</p>
        <h6>Este es el valor acumulado</h6>
        <p>$${sumarPrecios}</p>
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>
    `
}



