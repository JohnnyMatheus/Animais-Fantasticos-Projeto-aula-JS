// Retorne no console todas as imagens do site
const todasImagens = document.querySelectorAll("img");
console.log(todasImagens)
// Retorne no console apenas as imagens que começaram com a palavra imagem

const retornarImagens = document.querySelectorAll('img[src^="./img/imagem"]')
console.log(retornarImagens)

// Selecione todos os links internos (onde o href começa com #)

const linksInternos = document.querySelectorAll('[href^="#"]');

console.log(linksInternos);
// console.log(linksInternos.forEach(function(item,index){
//     console.log(item)
// }))

// Selecione o primeiro h2 dentro de .animais-descricao
const h2 =  document.querySelector(".animais-descricao h2");
// outra forma const animaisH2 = h2.querySelector("h2")
console.log(h2);

// Selecione o último p do site

const paragrafos = document.querySelectorAll("p");
console.log(paragrafos[paragrafos.length -1])
//OU
console.log(paragrafos[--paragrafos.length])