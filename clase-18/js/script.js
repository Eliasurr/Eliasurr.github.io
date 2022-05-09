//Capturo el elemento html
const btnAdd = document.getElementById('btnAdd');
const articulos = [];


//Asociar el boton a un evento: click
btnAdd.addEventListener('click',function(){
    //capturo el input
    const inputTitulo = document.getElementById('titulo');

    const valorTitulo = inputTitulo.value;
    //capturar <ul>
    const ul = document.getElementById('listado');

    //crear un <li>
    const li = document.createElement('li');
    li.innerHTML = valorTitulo;

    //agregar al ul el elemento
    ul.appendChild(li);

    //limpio input
    inputTitulo.value = '';
    
    //dejo el focus dentro del input
    inputTitulo.focus();

    //agregar un iD y class al elemento
    li.id = Math.random();
    li.className = 'li-estilo';

    //pusheamos los elementos dentro del array
    articulos.push(valorTitulo);
    //cargamos los valores dentro del local storage
    localStorage.setItem('articulos',JSON.stringify(articulos));
});

//Al body le asociamos un evento load
const body = document.getElementsByTagName('body')[0];
body.addEventListener('load', ()=>{
// 1- tomar del localstorage la clave articulos
    const articulos = localStorage.getItem('articulos');
// 2- convertir el texto a objeto con JSON.parse(...)
    const arrayArticulos = JSON.parse(articulos);
// 3- invocar una funcion que dibuje los <li> dentro del <ul>
    for(const texto of arrayArticulos){
       agregarLiAUl(texto);
    }
})

