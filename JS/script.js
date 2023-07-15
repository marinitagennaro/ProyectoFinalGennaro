
class Terapias{
    constructor(tipoTerapia,cantidadSesiones) {
        this.tipoTerapia = tipoTerapia;
        this._cantidadSesiones = cantidadSesiones;
        this.seleccionarModulo = [];
}

get cantidadSesiones(){
    return this._cantidadSesiones;
}

set cantidadSesiones(nuevoModuloPedido){
    if (nuevoModuloPedido === 3 || cantidadSesiones === 5){
        this._cantidadSesiones = nuevoModuloPedido;
    } else{
        document.getElementById("mensaje").innerHTML = 
        `
        <p>'Disculpe, estas son las terapias máximas y mínimas'</p>
        `
    }
}

    agrerarMudulo(modulo) {
        this.seleccionarModulo.push(modulo);
    }

    eliminarUltimoMudulo() {
        this.seleccionarModulo.pop();
    }

}

const MIS = new Terapias('Modulo Integral Simple', 3);
const MII = new Terapias('Modulo Integral Intensivo', 5);

MIS.agrerarMudulo('Obra Social');
MIS.agrerarMudulo('Certificado Unico de Discapacidad');
MIS.agrerarMudulo('Documentacion Personal');

MII.agrerarMudulo('Obra Social');
MII.agrerarMudulo('Certificado Unico de Discapacidad');
MII.agrerarMudulo('Documentacion Personal');

function seleccionarModulo() {
    let select = document.getElementById("modulo");
    let agrerarMudulo = select.value;
if (agrerarMudulo === "MIS") {
    Swal.fire('Has seleccionado el MODULO INTEGRAL SIMPLE')
   // alert("Has seleccionado el MODULO INTEGRAL SIMPLE");
} else if (agrerarMudulo === "MII") {
    Swal.fire('Has seleccionado el MODULO INTEGRAL INTENSIVO')
   // alert("Has seleccionado el MODULO INTEGRAL INTENSIVO");
}
}
console.log(MIS, MII);


function guardarDatos() {
    let nombre = document.getElementById("nombre").value;
    let apellido = document.getElementById("apellido").value;
    localStorage.setItem("nombre", nombre);
    localStorage.setItem("apellido", apellido);
    Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Tus datos fueron guardados correctamente',
        showConfirmButton: false,
        timer: 2500
    })


    //alert("Datos guardados correctamente.");
}

function actualizarHorarios() {
    let turno = document.getElementById("turno").value;
    let horariosManana = document.getElementById("horariosManana");
    let horariosTarde = document.getElementById("horariosTarde");

    if (turno === "manana") {
        horariosManana.style.display = "block";
        horariosTarde.style.display = "none";
    } else if (turno === "tarde") {
        horariosManana.style.display = "none";
        horariosTarde.style.display = "block";
    }
}

function solicitarTurno() {
    let edad = document.getElementById("edad").value;
    //let listaObrasSociales = document.getElementById("listaObrasSociales").value;
    let turno = document.getElementById("turno").value;
    let horario = document.getElementById("horario").value;
   // let especialidad = document.getElementById("especialidad").value;

    const resultadoDiv = document.getElementById("resultado");
    //resultadoDiv.innerHTML = "Solicitar turno:<br><br>Edad: " + edad + "<br>Obra Social: " + turno + "<br>Horario: " + horario;
}

let obrasSociales = [
    {nombre: "Obra Social de la Construccion (OSPECON)", cobertura: "Cobertura MII"},
    {nombre: "Obra Social de los choferes y camioneros (OSCHOCA)", cobertura: "Cobertura MIS"},
    {nombre: "Obra Social de los pasteleros (ELEVAR)", cobertura: "Cobertura MIS"},
    {nombre: "Obra Social del personal Grafico(GRAFICOS)", cobertura: "Cobertura MII"},
    {nombre: "Obra Social de los empleados de comercio (OSECAC)", cobertura: "Cobertura MII"},
    {nombre: "Obra Social del personal de sanidad (OSPSA)", cobertura: "Cobertura MIS"},
    {nombre: "Obra Social del plastico (OSPIP)", cobertura: "Cobertura MIS"},
    {nombre: "Obra Social de las pymes y empresarios (OSDEPYM)", cobertura: "Cobertura MII"},
    {nombre: "Obra Social del Personal de los empleados de la nacion (UP)", cobertura: "Cobertura MII"},
];

const listaObrasSociales = document.getElementById("listaObrasSociales");

obrasSociales.forEach(obrasSocial => {
    const optionElement = document.createElement("option");
    optionElement.value = obrasSocial.nombre;
    optionElement.textContent = obrasSocial.nombre;
    listaObrasSociales.appendChild(optionElement);
});

function mostrarCobertura() {
const seleccion = document.getElementById("listaObrasSociales").value;
const obraSocial = obrasSociales.find(ob => ob.nombre === seleccion);

if (obraSocial) {
    document.getElementById("coberturaObraSocial").textContent = `La obra social ${obraSocial.nombre} cubre ${obraSocial.cobertura}.`;
} else {
    document.getElementById("coberturaObraSocial").textContent = "No se encontró información de cobertura para esa obra social.";
}

}


function mostrarDisponibilidad() {

    // Obtener los valores seleccionados

    let especialidad = document.getElementById("especialidad").value;
    let horario = document.getElementById("horario").value;

     // Obtener la tabla de disponibilidad
    
    let tabla = document.getElementById("tablaDisponibilidad");

     // Limpiar la tabla
    
    tabla.innerHTML = "";

     // Mostrar la disponibilidad según la selección
    
    let fila = tabla.insertRow();
    let celdaEspecialidad = fila.insertCell();
    celdaEspecialidad.innerHTML = "Especialidad seleccionada: " + especialidad;
    let celdaHorario = fila.insertCell();
    celdaHorario.innerHTML = "Horario seleccionado: " + horario;
}

 // las opciones disponibles
const elegirTerapias = document.getElementById("elegirTerapias");

const especialidades =  [ 
    {
        id: 1,
        especialidad:"Psicologia",
        tipo:"cognitiva",
        cantidadMax: 2,
        disponibilidad: 40,
        sesionesMarcadas: 0
    },
    {
        id: 2,
        especialidad:"Psicopedagogia",
        tipo:"cognitiva",
        cantidadMax: 2,
        disponibilidad: 30,
        sesionesMarcadas: 0
    },
    {
        id: 3,
        especialidad:"Fonoaudiologia",
        tipo:"cognitiva",
        cantidadMax: 1,
        disponibilidad: 20,
        sesionesMarcadas: 0
    },
    {
        id: 4,
        especialidad:"Terapia ocupacional",
        tipo:"cognitiva/motor",
        cantidadMax: 2,
        disponibilidad: 35,
        sesionesMarcadas: 0
    },
    {
        id: 5,
        especialidad:"Psicomotricidad",
        tipo:"cognitiva/motor",
        cantidadMax: 2,
        disponibilidad: 20,
        sesionesMarcadas: 0
    },
    {
        id: 6,
        especialidad:"Hidroterapia",
        tipo:"cognitiva/motor",
        cantidadMax: 1,
        disponibilidad: 30,
        sesionesMarcadas: 0
    },
    {
        id: 7,
        especialidad:"Kinesiologia",
        tipo:"motor",
        cantidadMax: 2,
        disponibilidad: 25,
        sesionesMarcadas: 0
    }
]
;

//con esta funcion se suman las sesiones
function marcarSesion(especialidadId) {
    const especialidad = especialidades.find(especialidad => especialidad.id === especialidadId);
    if (especialidad) {
    especialidad.sesionesMarcadas++;
      //aca aparece en la consola y en el html lo que va tildando el ususario, funciona
    console.log(`Sesiones marcadas para ${especialidad.especialidad}: ${especialidad.sesionesMarcadas}`);
    const especialidadesMarcadas = document.getElementById("especialidadesMarcadas");
    const fila = document.createElement("tr");
    
    fila.innerHTML = `
    <td>${especialidad.especialidad}</td>
    <td>${especialidad.tipo}</td>
    <td>${especialidad.cantidadMax}</td>
    <td>${especialidad.disponibilidad}</td>
    `;
    especialidadesMarcadas.appendChild(fila);
}
}

// ACA INTENTE PONER LAS PROMESAS UNA VEZ QUE SE VAYAN CUMPLIENDO PARA PODER HACER EL ASYNC Y AWAIT

function asyncFunction1TerapiaElegida() {
    return new Promise((resolve) => {
    setTimeout(() => {
        resolve('Pedido de la Primera Especialidad');
    }, 2000);
    });
}
function asyncFunction2TerapiaElegida() {
    return new Promise((resolve) => {
    setTimeout(() => {
        resolve('Pedido de la Segunda Especialidad');
    }, 1000);
    });
}
function asyncFunction3TerapiaElegida() {
    return new Promise((resolve) => {
    setTimeout(() => {
        resolve('Pedido de la Tercera Especialidad');
    }, 1500);
    });
}
async function example() {
    const results = await Promise.all([asyncFunction1TerapiaElegida(), asyncFunction2TerapiaElegida(), asyncFunction3TerapiaElegida()]);
    console.log(results);
}
let especialidadPedida = []  

//aca uso el JSON que arme para ver las terapias, el nombre la cantMax y el tipo en el html

let especialidadesMarcadas = document.querySelector("#especialidadesMarcadas");
const fetchTerapias = async () => {
try {
    const response = await fetch("./terapias.JSON");
    const infoData = await response.json();
    infoData.forEach((especialidad) => {
    const div = document.createElement("div");
    div.innerHTML = `
        <table>
            <h4>${especialidad.nombre}</h4>
            <p>${especialidad.cantidadMax}</p>
            <p>${especialidad.tipo}</p>
        </table>
    `;
    especialidadesMarcadas.appendChild(div);
    });
} catch (err) {
    console.log(err);
    Swal.fire("Tenemos un error");
}
};
fetchTerapias();



  // saca los tildados y guárdalos en el local 
function guardarSeleccion() {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');
    const seleccion = Array.from(checkboxes).map((checkbox) => checkbox.parentElement.innerText.trim());
    localStorage.setItem('seleccionTerapias', JSON.stringify(seleccion));
}
  // los elementos tildados supuestamente desde el Local
function cargarSeleccion() {
    const seleccionGuardada = localStorage.getItem('seleccionTerapias');
    if (seleccionGuardada) {
    const seleccion = JSON.parse(seleccionGuardada);
    seleccion.forEach((especialidad) => {
    const checkbox = Array.from(document.querySelectorAll('input[type="checkbox"]')).find((checkbox) => checkbox.parentElement.innerText.trim() === especialidad);
    if (checkbox) {
        checkbox.checked = true;
    }
    });
}
}
 // Agrega eventos para guardar y cargar 
elegirTerapias.addEventListener('change', guardarSeleccion);
window.addEventListener('load', cargarSeleccion);

console.table(especialidades);

const tipoEspecialidad = () =>{
    return{
        nombre: Terapias.especialidad,
        cantidadMax: Terapias.cantidadMax
    }
};

const listaTerapiasYCantMax = especialidades.map((terapias) =>{
    return{
        nombre: terapias.especialidad,
        cantidadMax: terapias.cantidadMax
    }
});

console.table(listaTerapiasYCantMax);

const listaEspecialidadesYCantMax = especialidades.map((especialidad) =>{
    return{
        nombre: especialidad.especialidad,
        cantidadMax: especialidad.cantidadMax
    }
});

console.table(listaEspecialidadesYCantMax);


especialidades.sort((a,b) => b.disponibilidad - a.disponibilidad);
console.table(especialidades);



// PARA HACER EL MODO OBSCURO O CLARO
//dark y light mode
let boton = document.getElementById('mode');
let contenedor = document.getElementById('principal');
// este no se si esta bien!! ==>>> let contenedorSecuendario = document.getElementById('secundario');


// lo resolvio la profe y lo mando por el chat....
if(localStorage.getItem('mode') =='dark'){
    contenedor.classList.replace('light','dark');
    document.body.className = 'dark';
    boton.innerText="Light Mode";
}

//evento del boton
boton.onclick =()=> {
    if(localStorage.getItem('mode')=='light'){
        contenedor.classList.replace('light','dark');
        document.body.className='dark';
        boton.innerText='Light Mode';
        localStorage.setItem('mode', 'dark');
    }else{
        contenedor.classList.replace('dark','light');
        document.body.className='light';
        boton.innerText='Dark Mode';
        localStorage.setItem('mode', 'light');
    }
}
