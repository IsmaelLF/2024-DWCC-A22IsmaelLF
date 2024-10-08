// 1. Dada a seguinte constante, fai as operacións necesarias para que o primeiro
// carácter estea en maiúscula:
// // engade o teu código aquí
// console.log(novaCadea); // 'Desenvolvemento web'
const cadea = "desenvolvemento web";
let novaCadea = cadea.replace("d", "D");
console.log(novaCadea);

// 2. Crea unha función á que se lle pase unha cadea e devolva a cadea en sentido
// inverso.
// console.log(reverseString("I am a string")) // gnirts a ma I
const reverse = (a) => a.split("").reverse().join("");
console.log(reverse("I am a string"));

// 3. Crea unha función á que se lle pase unha cadea de números e devolva unha cadea
// da mesma lonxitude formada por * e as últimas 4 cifras do parámetro de entrada.
// console.log(enmascarar(“1234123412347777”)); // ************7777

const hide = (a) => {
  let b = a.slice(0, -4).replaceAll(/[0-9]/g, "*") + a.slice(-4);
  return b;
};
console.log(hide("1234123412347777"));
