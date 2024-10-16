let fecha = new Date ("09/20/2025 22:00");
let msFecha = fecha.getTime();

let parrafoDias = document.querySelector("#dias");
let parrafoHoras = document.querySelector("#horas");
let parrafoMinutos = document.querySelector("#minutos");
let parrafoSegundos = document.querySelector("#segundos");
let spanFecha = document.querySelector("#fecha");

spanFecha.innerText = fecha.toLocaleDateString();
setInterval(() =>{
    let hoy = new Date().getTime();

    let distancia = fecha - hoy;
    let msPorDia = 1000 *60 * 60 *24;
    let msPorHora =  1000 *60 * 60;
    let msPorMinuto = 1000 * 60;
    let msPorSegundo = 1000;

    let dias = Math.floor(distancia/msPorDia);
    let horas = Math.floor((distancia % msPorDia) / msPorHora)
    let minutos = Math.floor((distancia % msPorHora) / msPorMinuto)
    let segundo = Math.floor((distancia % msPorMinuto) / msPorSegundo)
    console.log(dias, horas, minutos, segundo)

    parrafoDias.innerText = dias 
    parrafoHoras.innerText = horas 
    parrafoMinutos.innerText = minutos 
    parrafoSegundos.innerText = segundo 

},1000)


