const guardarContacto = (dataBas, contacto) => {
    dataBas.setItem(contacto.id, JSON.stringify(contacto))
    window.location.href = '/REPASO%202025%20JS/index03.html'
}

//SUPEROBJETO
const cargarContactos = (dataBas, parentNode) =>{
    let claves = Object.keys(dataBas)

    for(clave of claves){
        let contacto = JSON.parse(dataBas.getItem(clave))
        crearContacto(parentNode, contacto, dataBas)
    }    
}


const crearContacto = (parentNode, contacto, dataBas) =>{

    let divContacto = document.createElement('div')
    let nombreContacto = document.createElement('h3')
    let numeroContacto = document.createElement('p')
    let direccionContacto = document.createElement('p')
    let iconoBorrar = document.createElement('span')

    nombreContacto.innerHTML = contacto.nombre
    numeroContacto.innerHTML = contacto.numero
    direccionContacto.innerHTML = contacto.direccion
    iconoBorrar.innerHTML = 'delete';

    divContacto.classList.add('tarea')
    iconoBorrar.classList.add('material-symbols-outlined', 'icono')
    
    iconoBorrar.onclick = () =>{
        dataBas.removeItem(contacto.id)
        window.location.href = '/REPASO%202025%20JS/index03.html'
    }
    divContacto.appendChild(nombreContacto)
    divContacto.appendChild(numeroContacto)
    divContacto.appendChild(direccionContacto)
    divContacto.appendChild(iconoBorrar)

    parentNode.appendChild(divContacto)
}

cargarContactos(dataBas, listadoTareas)
