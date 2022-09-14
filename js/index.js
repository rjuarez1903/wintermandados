const d                = document
let overlay            = d.getElementById('overlay')
let cierraFormu        = d.getElementById('cierra-formu')
let formulario         = d.getElementById('formulario')
let splash             = d.getElementById('splash')
let plusBtn            = d.getElementById('plus-btn')
let plusBtn2           = d.getElementById('plus-btn2')
let agregar            = d.getElementById('agregar')
let titulo             = d.getElementById('titulo')
let icono              = d.getElementById('icono')
let descripcion        = d.getElementById('descripcion')
let elementoCargado    = d.getElementById('elemento-cargado')
let elementoMostrado   = d.getElementById('elemento-mostrado')
let lista              = d.getElementById('lista')
let itemId             = 0
let htmlContent        = ''


function mostrarFormu() {
    if (lista.innerHTML == '') {
        splash.className            = 'off'
        formulario.className        = 'on'
    } else {
        elementoCargado.className   = 'off'
        formulario.className        = 'on'
    }
}

function cerrarFormu() {
    if (lista.innerHTML == '') {
        splash.className           = 'on'
        formulario.className       = 'off'
    } else {
        elementoCargado.style.flex = '3'
        elementoCargado.className  = 'on'               
        formulario.className       = 'off'
    }
}

function mostrarDetalle(icono, titulo, descripcion) {
    elementoMostrado.innerHTML = `
                                 <i id="cierra-mostrado"class="fa-solid fa-x"></i>
                                 <div class="card-content">
                                    <div class="img img-detail">
                                        <img src="images/${icono}" alt="${icono}">   
                                    </div>
                                    <h3>${titulo}</h3>
                                    <p class=card-text>${descripcion}</p>
                                 </div>`
                                 
    let cierraPopUp = d.getElementById('cierra-mostrado')
    cierraPopUp.addEventListener('click', cerrarPopUp)
    overlay.addEventListener('click', cerrarPopUp)
    
    overlay.style.display      = "block";
    elementoMostrado.className = 'on'                      
}

function cargarProducto() {
    if (icono.value != '' && titulo.value != '' && descripcion.value != '') {
    htmlContent =  `<li id="list-item-${itemId}" class="d-flex sp-between list-item">
                        <div class="img img-list">
                            <img src="images/${icono.value}" alt="${icono.value}">  
                        </div> 
                        <h3>${titulo.value}</3>
                    </li>
                    `
    lista.innerHTML               += htmlContent
    splash.style.display          = 'none'  
    elementoCargado.style.flex    = '3'
    elementoMostrado.className    = 'off'      
    formulario.className          = 'off'
    elementoCargado.className     = 'on'
    
    let buttonMostrar           = d.createElement('button')
    let li                      = d.getElementById(`list-item-${itemId}`)

    buttonMostrar.innerHTML     = '<i class="fa-solid fa-greater-than"></i>'
    buttonMostrar.className     = 'btn-agrega'
    buttonMostrar.setAttribute('data-icono', icono.value)
    buttonMostrar.setAttribute('data-titulo', titulo.value)
    buttonMostrar.setAttribute('data-descripcion', descripcion.value)
    buttonMostrar.setAttribute('onclick', `mostrarDetalle("${buttonMostrar.dataset.icono}", "${buttonMostrar.dataset.titulo}", "${buttonMostrar.dataset.descripcion}")`)

    li.append(buttonMostrar)

    icono.value       = ''
    titulo.value      = ''
    descripcion.value = ''
    itemId++
    }
}

function cerrarPopUp() {
    overlay.style.display = "none";
}

plusBtn.addEventListener('click', mostrarFormu)

plusBtn2.addEventListener('click', mostrarFormu)

cierraFormu.addEventListener('click', cerrarFormu)

agregar.addEventListener('click', cargarProducto)