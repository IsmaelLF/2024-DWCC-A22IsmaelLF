"use strict";

let section = document.createElement("section");
document.body.appendChild(section);
let nomePersoa = document.createElement("p");
let xeneroPersoa = document.createElement("p");
let idadePersoa = document.createElement("p");
let nacionalidadePersoa = document.createElement("p");
section.appendChild(nomePersoa);
section.appendChild(xeneroPersoa);
section.appendChild(idadePersoa);
section.appendChild(nacionalidadePersoa);
let boton = document.createElement("button");
boton.className = "oculto";
boton.textContent = "Obter nova persoa";
section.appendChild(boton);

let img = document.createElement("img");
section.appendChild(img);
function fetchPersona() {
  fetch("https://randomuser.me/api/")
    .then((response) => response.json())
    .then((data) => {
      boton.classList.remove("oculto");
      data.results.forEach(({ name, gender, picture, dob, nat }) => {
        img.src = picture.large;
        nomePersoa.textContent = `Name: ${name.first}  ${name.last}`;
        xeneroPersoa.textContent = `Gender: ${gender}`;
        idadePersoa.textContent = `Age: ${dob.age} years old`;
        nacionalidadePersoa.textContent = `Nationality: ${nat}`;
      });
    });
}
fetchPersona();

boton.addEventListener("click", fetchPersona);
