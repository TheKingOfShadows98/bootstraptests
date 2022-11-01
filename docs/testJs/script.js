const p = document.getElementById('paraph');
var hour = 0;

function timer(){
    //Aqui accedemos a la fecha actual
    var date = new Date();
    //Queremos las horas de ahorita
    hour = date.getHours();
    //Lo escribimos en nuestra etiqueta p
    p.innerHTML = hour;
}
// Repite cada segundo lo que contenga timer
setInterval(timer, 1000)