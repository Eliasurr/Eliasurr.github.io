function get(elementoId){
    return document.getElementById(elementoId);
}

const btnEnviar = get('btnEnviar');

const tickets = [];

btnEnviar.addEventListener('click', function(){
    let usuario = get('usuario');
    let sector = get('sector');
    let incidencia = get('incidencia');
    let lugar = get('lugar');
    let id = Math.random();
    //Se toma el TEXTO del index seleccionado sobre el <select>
    lugarText = lugar.options[lugar.selectedIndex].text;

    //Objeto ticket
    let ticket = {
        usuario: usuario.value,
        sector: sector.value,
        incidencia: incidencia.value,
        lugar: lugarText,
        id: id
    }
    //Push al array tickets
    tickets.push(ticket);

    //Guarda informacion del array tickets en local db
    localStorage.setItem('tickets',JSON.stringify(tickets));

    //Borra texto de input y hace focus sobre campo usuario
    usuario.value = '';
    sector.value = '';
    incidencia.value = '';
    
})