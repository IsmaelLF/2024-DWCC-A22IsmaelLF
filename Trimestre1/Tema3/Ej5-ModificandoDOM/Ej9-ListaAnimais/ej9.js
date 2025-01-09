let uls = document.getElementById("listaAnimais").querySelectorAll("ul");

for (const element of uls) {
  let fillos = element.children.length;
  if (fillos !== 0) {
    element.insertAdjacentHTML("beforebegin", `[${fillos}]`);
  }
}
