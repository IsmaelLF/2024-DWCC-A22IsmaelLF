// 1. Imaxinar que se recolle a seguinte información relativa a un xogo dun servidor web:

// Utilizando o contido aprendido sobre arrays, proporciona unha única sentencia
// JavaScript para cada unha das seguintes instrucións:

const players = [
  [
    "Neuer",
    "Pavard",
    "Martinez",
    "Alaba",
    "Davies",
    "Kimmich",
    "Goretzka",
    "Coman",
    "Muller",
    "Gnarby",
    "Lewandowski",
  ],
  [
    "Burki",
    "Schulz",
    "Hummels",
    "Akanji",
    "Hakimi",
    "Weigl",
    "Witsel",
    "Hazard",
    "Brandt",
    "Sancho",
    "Gotze",
  ],
];

//a Crea as variables players1, players2 que conteñan un array cos xogadores
// de cada equipo. Así, players1 terá os xogadores do primeiro equipo e
// players2 os do segundo equipo.

let [players1, players2] = players;

console.log(players1);
console.log(players2);

// b. O primeiro xogador do array é o porteiro e o resto son xogadores de campo.
// Crea unha variable chamada gk que conteña o porteiro do primeiro equipo e
// unha variable de tipo array chamada fieldPlayers que conteña o resto de
// xogadores do equipo.

let [gk, ...fieldPlayers] = players1;
console.log(gk);
console.log(fieldPlayers);

// c. Crea un array allPlayers que conteña os xogadores dos dous equipos.

let [gk2, ...fieldPlayers2] = players2;

let allPlayers = [...players1, ...players2];

console.log(allPlayers);

// d. O primeiro equipo substituíu os xogadores iniciais por 'Thiago', 'Coutinho',
// 'Periscic'. Crea unha nova variable de tipo array chamada players1Final que
// conteña todos os xogadores: os iniciais e tamén os 3 novos.

let players1Final = [gk, "Thiago", "Coutinho", "Periscic", ...fieldPlayers];
console.log(players1Final);

// 2. Dado un array con nomes de variables formados por dúas palabras separadas por
// “_”, fai as operacións necesarias para mostrar por consola os nomes das variables
// en formato camelCase. Por exemplo, se o array de entrada é [“first_name”, “
// last_NAME”], deberase mostrar por consola “firstName” e “lastName”.

let arrayEntrada = ["first_name", "last_NAME"];

for (const value of arrayEntrada) {
  let [firstWord, secondWord] = value.split("_");
  secondWord = secondWord.toLowerCase();
  secondWord = secondWord.replace(
    secondWord.charAt(0),
    secondWord.charAt(0).toUpperCase()
  );
  let fullWords = firstWord + secondWord;
  console.log(fullWords);
}

// 3. Escribe o código necesario para procesar unha cadea con información de voos
// como a do exemplo e mostrar a información por consola formateada como aparece
// na imaxe:
const flightsInfo =
  "_Delayed_Departure;scq93766109;bio2133758440;11:25+_Arrival;bio0943384722;scq93766109;11:45+_Delayed_Arrival;svq7439299980;scq93766109;12:05+_Departure;scq93766109;svq2323639855;12:30";

let individualFlight = flightsInfo.split("+");

for (const info of individualFlight) {
  let [status, departure, destination, arrival] = info.split(";");
  status = status.replaceAll("_", " ");
  // departure = departure.replaceAll(/[0-9]/g, "").toUpperCase();          Alternative
  departure = departure.slice(0, 3).toUpperCase();
  destination = destination.slice(0, 3).toUpperCase();
  arrival = arrival
    .replaceAll(":", "h")
    .padStart(arrival.length + 1, "(")
    .padEnd(arrival.length + 2, ")");

  let finalFlightInfo = [status, departure, destination, arrival].toString();
  console.log(finalFlightInfo.replaceAll(",", " ").padStart(length + 100));
}
