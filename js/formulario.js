//creo la clase para luego armar el objeto cliente
class DatosCliente {
    constructor(nombre, apellido, provincia, ciudad, direccion){
        this.nombre = nombre;
        this.apellido = apellido;
        this.provincia = provincia;
        this.ciudad = ciudad;
        this.direccion = direccion;
    }
    devolverDatos() {
        return (`${this.nombre} - ${this.apellido} - ${this.provincia} - ${this.ciudad} - ${this.direccion}`)
    }
}

//creo array para guardar a mi cliente
let datos = [];
//creo variable para acceder al formulario en el html
let form = document.getElementById("formulario");

//creo evento de formulario, lo escucho y creo a mi cliente, meto cliente en el array, guardo en local storage y reseteo el formulario
formulario.addEventListener('submit', (e) => {
    e.preventDefault()
    let datForm = new FormData(e.target)
    let cliente = new DatosCliente(datForm.get("nombre"), datForm.get("apellido"), datForm.get("provincia"), datForm.get("ciudad"), datForm.get("direccion"));
    datos.push(cliente)
    localStorage.setItem("datos", JSON.stringify(datos));
    formulario.reset();
})

//creo variable para llamar al div donde devuelvo los datos del cliente
let datosIngresados = document.getElementById("datosCliente")
//creo una variable para acceder al boton del formulario
let btnForm = document.getElementById("envioForm")

//creo evento click, traigo el objeto guardado en local storage, lo recorro y escribo en el html
btnForm.onclick = () =>{
    let clienteGuardado = JSON.parse(localStorage.getItem("datos"))
    clienteGuardado.forEach((cliente) => {
        datosIngresados.innerHTML += `
            <p>La compra sera entregada a: ${cliente.nombre} ${cliente.apellido}</p>
            <p>En: ${cliente.direccion}, ciudad de ${cliente.ciudad}, provincia de ${cliente.provincia}, en el transcurso de las proximas 48 horas.</p>
            <p>Muchas gracias por su compra!</p>
            `
    })
}
