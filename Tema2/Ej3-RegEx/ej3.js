// 2. Escribe unha expresión regular para comprobar que cada un dos seguintes
// elementos aparece nunha cadea.
// a. car e cat
// b. pop e prop
// c. ferret, ferry e ferrari
// d. Calquera palabra rematada en ious
// e. Un espazo seguido de punto, coma, dous puntos ou punto e coma.
// f. Unha palabra con máis de 6 letras.
// g. Unha palabra sen a letra e (ou E).
// Unha vez teñas a expresión regular creada, comproba se se pode facer máis
// pequena.
// Utiliza o seguinte código para comprobar o resultado, colocando como primeiro
// parámetro da función verify a túa expresión regular:
// function verify(regexp, yes, no) {
// // Ignore unfinished exercises
// if (regexp.source == "...") return;
// for (let str of yes) if (!regexp.test(str)) {
// console.log(`Failure to match '${str}'`);
// }
// for (let str of no) if (regexp.test(str)) {
// console.log(`Unexpected match for '${str}'`);
// }
// }
// verify(/.../, ["my car", "bad cats"], ["camper", "high art"]);
// verify(/.../, ["pop culture", "mad props"], ["plop", "prrrop"]);
// verify(/.../, ["ferret", "ferry", "ferrari"], ["ferrum", "transfer A"]);
// verify(/.../, ["how delicious", "spacious room"], ["ruinous", "consciousness"]);
// verify(/.../, ["bad punctuation ."], ["escape the period"]);
// verify(
// /.../,
// ["Siebentausenddreihundertzweiundzwanzig"],
// ["no", "three small words"]
// );
// verify(/.../, ["red platypus", "wobbling nest"], ["earth bed", "learning ape", "BEET"]);
// 3. Unha dirección de rede MAC está composta por 6 grupos de dous números
// hexadecimais separados por “:”. Por exemplo "01:32:54:67:89:AB".
// Escribe unha expresión regular que comprobe se unha dirección MAC é correcta.
// 34
// Funcións
// 4. Crea unha función que comprobe se un contrasinal é válido, é dicir, cumpre as
// seguintes condicións:
// a. Mínimo 8 caracteres.
// b. Sen espazos en branco.
// c. Que teña, polo menos, 3 das seguintes tipos de caracteres:
// i. maiúsculas
// ii. minúsculas
// iii. números
// iv. caracteres especiais: ¡!$?%&#@/\()=¿?*[];,:._<>+-
// 5. Ás veces é útil eliminar as etiquetas HTML dun texto para evitar que se inclúa código
// mal intencionado nunha páxina web.
// Crea unha función á que se lle pase un texto e devolva o mesmo texto coas
// etiquetas HTML eliminadas.
// 6. Dado o seguinte array de insultos, fai un script tal que cada vez que apareza un
// deles nun texto o substitúa pola primeira letra do insulto e un número de asteriscos
// igual á lonxitude do insulto - 1.
// let insultos = ["testán", "langrán", "fervellasverzas", "baldreo", "lacazán", "pillabán"];
// Así, por exemplo, cada vez que apareza testán nun texto, debe substituírse por
// "t*****".
