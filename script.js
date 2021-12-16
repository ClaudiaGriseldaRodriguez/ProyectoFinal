
var alertPlaceholder = document.getElementById('liveAlertPlaceholder')
var alertTrigger = document.getElementById('liveAlertBtn')

function alert(message, type) {
  var wrapper = document.createElement('div')
  wrapper.innerHTML = '<div class="alert alert-' + type + ' alert-dismissible" role="alert">' + message + '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>'

  alertPlaceholder.append(wrapper)
}

if (alertTrigger) {
  alertTrigger.addEventListener('click', function () {
    alert('¡Hacé click en el mapa y te redireccionará!', 'success')
  })
}


class Invitado{
    constructor(nombre, cupo){
        this._nombre = nombre;
        this._cupo = cupo;
    }
    get nombre(){
        return this._nombre;
    }
    set nombre(nombre){
        this._nombre = nombre;
    }
    get cupo(){
        return this._cupo;
    }
    set cupo(cupo){
        return this._cupo = cupo;
    }
    
}
const invitados = [
    new Invitado('Cynthia Rodriguez', '3'),
    new Invitado('Mercedes Velozo', '2')
];

function mostrarInvitados(){
    console.log('Mostrar invitados...');
    let texto = '';
    for(let invitado of invitados){
        console.log(invitado);
        texto += `<p>${invitado.nombre} ${invitado.cupo}</p>`;
    }
    document.getElementById('invitados').innerHTML = texto;
}

function agregarInvitado(){
    const forma = document.forms['forma'];
    const nombre = forma['nombre'];
    const cupo = forma['cupo'];
    if(nombre.value != '' && cupo.value != ''){
        const invitado = new Invitado (nombre.value, cupo.value);
        console.log(invitado);
        invitados.push(invitado);
        mostrarInvitados();
    }
}