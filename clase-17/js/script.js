function getId(nombreid){
    return document.getElementById(nombreid);
}

const tickets = [];
const btnEnviar = getId('btnEnviar');
   


btnEnviar.addEventListener('click', function(){
    
    //Levanto datos
    let usuario = getId('usuario');
    let sector = getId('sector');
    let lugarSelect = getId('lugar');
    let incidencia = getId('incidencia')
    let incidendeciaText = incidencia.value;
    let lugar = lugarSelect.options[lugarSelect.selectedIndex].text;

    //Creo objeto tickets
    let ticket = {
        usuario: usuario.value,
        sector: sector.value,
        incidencia: incidendeciaText,
        lugar: lugar
    }

    //Push al array 'Tickets'
    tickets.push(ticket);

    //Agrega tickets al local DB
    localStorage.setItem('tickets',JSON.stringify(tickets));
})



