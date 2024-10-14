class GestorInternet{
    constructor(nombre, numContrato){
        this.nombre = nombre
        this.numContrato = numContrato
        this.tipoPlan = "basico"
        this.velocidad = 100
        this.precio = 15000
    }

    getNombre(){
        return this.nombre
    }

    getNumContrato(){
        return this.numContrato
    }

    getVelocidad(){
        return this.velocidad
    }

    getPrecio(){
        return this.precio
    }

    getTipoPlan(){
        return this.tipoPlan
    }

    setPrecio(nuevoPrecio){
        if (nuevoPrecio > 0){
            this.precio = nuevoPrecio
        }
        else{
            alert("El nuevo precio debe ser mayor a 0")
        }
    }
    setCambiarPlan(nuevoPlan){
        if (nuevoPlan == "basico" || nuevoPlan == "estandar" || nuevoPlan == "premium"){
            this.tipoPlan = nuevoPlan
            if (nuevoPlan == "basico"){
                this.velocidad = 100
            }
            else if (nuevoPlan == "estandar"){
                this.velocidad = 200
            }
            else{
                this.velocidad = 300
            }
        }
        else{
            alert("El nuevo plan debe ser basico, estandar o premium")
        }
    }

    setCalcularPeriodo(cantidadMeses){
        var precio = parseInt(this.precio)
        precio = precio * cantidadMeses
        return precio
    }
}

let gestor1;

function iniciarSesion(){
    const nombre = document.getElementById("nombre").value
    const numContrato = document.getElementById("contrato").value
    gestor1 = new GestorInternet(nombre, numContrato)
    mostrarInformacion()
}

function cambiarPrecio(){
    const nuevoPrecio = document.getElementById("precio").value
    gestor1.setPrecio(nuevoPrecio)
}

function mostrarInformacion(){
    document.getElementById("infonombre").innerHTML = "Nombre: " + gestor1.getNombre()+ "."
    document.getElementById("infocontrato").innerHTML = "Número de contrato "+ gestor1.getNumContrato()+ "."
    document.getElementById("infoplan").innerHTML = "Tipo de plan "+ gestor1.getTipoPlan()+ "."
    document.getElementById("infovelocidad").innerHTML = "Velocidad: "+ gestor1.getVelocidad()+ " Mbps."
    document.getElementById("infoprecio").innerHTML = "Precio por mes "+ gestor1.getPrecio()+ "."
}

function cambiarplan(){
    const nuevoPlan = document.getElementById("plan").value
    gestor1.setCambiarPlan(nuevoPlan)
}

function calcularPeriodo(){
    const cantidadMeses = document.getElementById("meses").value
    
    document.getElementById("infoperiodo").innerHTML = gestor1.setCalcularPeriodo(cantidadMeses)
}

