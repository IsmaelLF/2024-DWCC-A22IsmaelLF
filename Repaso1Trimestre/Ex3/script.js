// Crea unha páxina web que mostre un reloxo seguindo o formato HH:MM:SS AM/PM.
// Sempre deben mostrarse dúas cifras para cada grupo. O reloxo debe mostrar as
// horas de 01-12, polo que se debe indicar se son AM ou PM.
let p = document.createElement("p");
document.body.appendChild(p);
function showDate() {
  let hora = new Date(Date.now());

  let horas = hora.getHours();
  let horasCorregidas = horas < 10 ? `0${horas}` : horas;
  let minutos = hora.getMinutes();
  let minutosCorregidos = minutos < 10 ? `0${minutos}` : minutos;
  let segundos = hora.getSeconds();
  let segundosCorregidos = segundos < 10 ? `0${segundos}` : segundos;

  horas < 12
    ? (p.textContent = `${horasCorregidas}:${minutosCorregidos}:${segundosCorregidos} AM`)
    : (p.textContent = `${horasCorregidas}:${minutosCorregidos}:${segundosCorregidos} PM`);
}

setInterval(showDate, 100);
