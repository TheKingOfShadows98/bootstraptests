const piedra = document.getElementById('piedra');
const papel = document.getElementById('papel');
const tijera = document.getElementById('tijera');

const valores = ['piedra','papel','tijera'];

let vic = 0;
let der = 0;
let draw = 0;
let pc = '';
let jugador = '';

function lanzar(val){
    jugador = val;
    // Turno de la computar
    //Nos da un valor aleatorio decimal entre 0 y 1
    let r = Math.random();
    // Ampliamos en rango aleatorio a 0 y 2
    let range = r *2;

    // Colocamos el Rango en numeros enteros
    range = Math.round(range)

    // obtenemos el valor en vase al rango
    pc = valores[range];
    // condicion de empate
    if (pc == jugador) {
        draw ++;
        actualizar();
        return;
    }
    // SI es =, es asignar un valor
    // Si son == , es una comparacion

    // Si hay && significa que buscamos que las dos comparaciones sean correctas, como un 'Y'.

    // Si hay || significa que buscamos un resultado correcto en cualquiera de las comparaciones, como un 'O'
    
    // condiciones para victorias
    if(pc == 'tijera' && jugador == 'piedra' || pc == 'papel' && jugador == 'tijera' || pc == 'piedra' && jugador == 'papel'){
        vic ++;
        actualizar();
        return;
    }

    // si llega aqui, es que perdio
    der ++;
    actualizar();
    return;
}

// Funcion anonima o sin nombre: ()=>{}

//Decimos que cuando le damos click, le decimos que haga lanzar con "piedra"
piedra.addEventListener('click', ()=> {lanzar('piedra')});
// lo mismo pero con papel
papel.addEventListener('click', ()=> {lanzar('papel')});
// igual pero con tijera
tijera.addEventListener('click', ()=> {lanzar('tijera')});

// Toca mostrar los resultados

// obtenemso las etiquetas para mostrar las victorias y derrotas
const victorias = document.getElementById('victorias');
const empates = document.getElementById('empates');
const derrotas = document.getElementById('derrotas');

const resultado = document.getElementById('resultado');
// creamos una funcion que nos coloque los valores.
function actualizar(){
    // escribimos dentro de las etiquetas los valores.
    victorias.innerText = "Victorias: " + vic;
    empates.innerText = "Empates:" + draw;
    derrotas.innerText = "Derrotas: " + der;
    resultado.innerText = "Jugador Lanzó: " + jugador + "| PC Lanzó: " + pc;
}
actualizar()
    