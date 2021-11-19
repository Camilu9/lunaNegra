//declaro una clase para crear productos
class Producto {
    constructor(nombre, cantidad, precio, descripcion) {
        this.nombre = nombre;
        this.cantidad = cantidad;
        this.precio = precio;
        this.descripcion = descripcion;
    }
}

//creo los productos

const producto1 = new Producto("Shampoo solido de romero", "110 gr", 700, "Limpia el cabello y el cuero cabelludo sin dejar exceso de oleosidad. Para cabellos grasos.");
const producto2 = new Producto("Shampoo solido de geranio", "110 gr", 700, "Limpia el cabello y el cuero cabelludo sin dejar exceso de oleosidad. Para cabellos secos.");
const producto3 = new Producto("Acondicionador solido de vainilla", "50 gr", 580, "Nutre el cabello y sella las cuticulas del mismo post lavado. Para cabellos debiles.");
const producto4 = new Producto("Acondicionador solido de azahar", "50 gr", 580, "Nutre el cabello y sella las cuticulas del mismo post lavado. Para cabellos secos.");
const producto5 = new Producto("Aceite de coco", "100 gr", 400, "Humectante corporal, serum para cabellos con rulos u ondulados.");
const producto6 = new Producto("Gel dental", "100 gr", 530, "Limpia y desinfecta la boca. Poder antibacteriano y antifungico.");
const producto7 = new Producto("Desodorante solido", "45 gr", 470, "Evita la proliferacion de olores en las axilas sin obstruir los poros. Antibacteriano y antifungico.");
const producto8 = new Producto("Desodorante en crema", "100 gr", 470, "Evita la proliferacion de olores en las axilas sin obstruir los poros. Antibacteriano y antifungico.");
const producto9 = new Producto("Balsamo labial", "13 gr", 300, "humecta y repara la piel de los labios. Vainilla.");
const producto10 = new Producto("oleo corporal", "35 gr", 350, "Humecta y nutre la piel del cuerpo. Trata areas resecas. Azahar.");
const producto11 = new Producto("Crema para manos", "100 gr", 620, "Humecta y repara la piel de las manos.");
const producto12 = new Producto("Crema corporal", "250 gr", 1160, "Hidrata, humecta y nutre la piel del cuerpo. Brinda proteccion y suavidad.");
const producto13 = new Producto("Jabon facial Madagascar", "30 gr", 350, "Realiza una limpieza profunda del rostro de acuerdo a sus necesidades. Pieles secas. Uso diario.");
const producto14 = new Producto("Jabon facial Amazonia", "30 gr", 350, "Realiza una limpieza profunda del rostro de acuerdo a sus necesidades. Pieles grasas. Uso diario.");
const producto15 = new Producto("Jabon facial Malesia", "30 gr", 350, "Realiza una limpieza profunda del rostro de acuerdo a sus necesidades. Pieles sensibles y maduras. Uso diario.");
const producto16 = new Producto("Gel de limpieza facial", "100 gr", 530, "Limpia e hidrata la piel del rostro delicadamente. Quita el maquillaje. Lavanda.");
const producto17 = new Producto("Hidrolato de lavanda", "100 cc", 520, "Tonico natural.");
const producto18 = new Producto("Hidrolato de romero", "100 cc", 520, "Tonico natural.");
const producto19 = new Producto("Agua micelar de azahar y geranio", "100 cc", 470, "Limpia y nutre la piel del rostro. Pieles normales a secas.");
const producto20 = new Producto("Agua micelar de romero y arbol de te", "100 cc", 470, "Limpia y nutre la piel del rostro. Pieles grasas.");
const producto21 = new Producto("Crema facial de dia", "100 gr", 760, "Hidrata, humecta y nutre el rostro acorde a sus necesidades durante el dia. Para pieles normales a secas.");
const producto22 = new Producto("Crema facial de dia", "100 gr", 760, "Hidrata, humecta y nutre el rostro acorde a sus necesidades durante el dia. Para pieles grasas.");
const producto23 = new Producto("Crema facial de noche", "100 gr", 800, "Regenerante y antioxidante. Apta para todo tipo de pieles.");
const producto24 = new Producto("Protector solar", "100 gr", 760, "FPS 40. Protege la piel de los rayos solares, UVA y UV. Filtro fisico.");
const producto25 = new Producto("Gel arce", "100 gr", 530, "Humecta, calma y desinflama la piel luego del rasurado o depilado.");
const producto26 = new Producto("Mascarilla facial de Arcilla blanca", "100 gr", 500, "Nutre la piel en profundidad, absorbe impurezas y sebo. Arcilla blanca y arbol de te.");
const producto27 = new Producto("Mascarilla facial de carbon activado", "100 gr", 500, "Nutre la piel en profundidad, absorbe impurezas y sebo. Carbon activado y limon");
const producto28 = new Producto("Mascarilla facial de cacao", "100 gr", 500, "Nutre la piel en profundidad, absorbe impurezas y sebo. Cacao y vainilla");
const producto29 = new Producto("Discos desmaquillantes", "4 unidades", 550, "Kit de 4 unidades, 2 simples y 2 dobles.");

//creo un array para almacenar los productos
let productos = [producto1, producto2, producto3, producto4, producto5, producto6, producto7, producto8, producto9, producto10, producto11, producto12, producto13, producto14, producto15, producto16, producto17, producto18, producto19, producto20, producto21, producto22, producto23, producto24, producto25, producto26, producto27, producto28, producto29];

//Creo una variable para manipular el div productos
let divProductos = document.getElementById('productos')

//Creo un for each para recorrer el array y asignarle a cada tarjeta la informacion de su producto
productos.forEach((producto, indice) => {
    divProductos.innerHTML += `
    <div class="card" id="producto${indice + 1}" style="width: 18rem;">
        <img src="../multimedia/productos/producto${indice + 1}.jpg" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">Nombre: ${producto.nombre}</h5>
            <p class="card-text">Cantidad: ${producto.cantidad}</p>
            <p class="card-text">Precio: ${producto.precio} </p>
            <p class="card-text">Descripcion: ${producto.descripcion}</p>
            <a href="#" class="btn btn-primary" id="boton${indice+1}">Agregar</a>
        </div>
    </div>
    `
})