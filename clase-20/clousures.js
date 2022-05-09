function outer(){
    const a = 23;

    function inner(){
        console.log(a);
    }
    inner();
}

//Funcion outer esta por fuera, se debe llamar primero a esa funcion 
//inner esta dentro de outer, por ende es invocada por esta.

document.getElementById('btn').addEventListener('click', ()=>{
    outer();
})

//funcion que sume 2 valores

function adder(first){
    function add(second){
        console.log(first + second)
    }
    return add;
}

const primerLlamado = adder(5);

primerLlamado(10);
