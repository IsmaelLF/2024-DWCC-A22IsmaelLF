// ● O elemento con id “input2”.
// ● A colección de parágrafos
// ● Todos os parágrafos dentro do div con id “lipsum”.
// ● O formulario
// ● Todos os inputs
// ● Só os inputs con nome “sexo”.
// ● Os items da lista con clase “important”

let input2 = document.getElementById("input2");

console.log(input2);

let parrafos = document.querySelectorAll("p");

console.log(parrafos);

let divIdLipsum = document.getElementById("lipsum").querySelectorAll("p");

console.log(divIdLipsum);

let form = document.forms;

console.log(form);

let inputs = document.querySelectorAll("input");

console.log(inputs);

let inputSexo = document.querySelectorAll("input[name='sexo']");

console.log(inputSexo);

let itemsImportant = document.querySelectorAll("li.important");

console.log(itemsImportant);
