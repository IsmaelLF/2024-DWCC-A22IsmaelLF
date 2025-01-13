const xhr = new XMLHttpRequest();

xhr.open(
  "GET",
  "https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json"
);
xhr.responseType = "json";
xhr.send();

xhr.onload = function () {
  const heroes = xhr.response;
  console.log(heroes);

  let header = document.querySelector("header");
  let h1 = document.createElement("h1");
  h1.innerText = heroes.squadName;
  header.appendChild(h1);
  let p = document.createElement("p");
  p.innerText = `Hometown: ${heroes.homeTown} // Formed: ${heroes.formed}`;
  header.appendChild(p);
  let section = document.querySelector("section");
  heroes.members.forEach((membro) => {
    let article = document.createElement("article");
    let h2 = document.createElement("h2");
    h2.innerText = membro.name;
    let p1 = document.createElement("p");
    let p2 = document.createElement("p");
    let p3 = document.createElement("p");
    let ul = document.createElement("ul");
    membro.powers.forEach((power) => {
      let li = document.createElement("li");
      li.innerText = power;
      ul.appendChild(li);
    });
    p1.innerText = `Age: ${membro.age}`;
    p2.innerText = `Secret identity: ${membro.secretIdentity}`;
    p3.innerText = "Superpowers: ";
    article.appendChild(h2);
    article.appendChild(p1);
    article.appendChild(p2);
    article.appendChild(p3);
    article.appendChild(ul);
    section.appendChild(article);
  });
};
