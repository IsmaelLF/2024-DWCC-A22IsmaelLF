// Dado un obxecto como o seguinte:
// Crea unha función createTree(data) que devolva unha lista ul/li coma a da imaxe da
// dereita, para os datos proporcionados.

let arbore = {
  Fish: {
    trout: {},
    salmon: {},
  },
  Tree: {
    Huge: {
      sequoia: {},
      oak: {},
    },
    Flowering: {
      "apple tree": {},
      magnolia: {},
    },
  },
};

function createTree(data) {
  let ul = document.createElement("ul");
  for (const propiedade in data) {
    let li = document.createElement("li");
    li.textContent = propiedade;
    li.appendChild(createTree(data[propiedade]));
    ul.appendChild(li);
  }
  return ul;
}
document.body.appendChild(createTree(arbore));
