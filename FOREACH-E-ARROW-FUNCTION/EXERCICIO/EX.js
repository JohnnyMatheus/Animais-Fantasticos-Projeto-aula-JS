// Mostre no console cada parágrado do site
//RESPOSTA:
const mostrarParagrafo = document.querySelectorAll("p");
mostrarParagrafo.forEach((item)=>{
    console.log(item)
})

// Mostre o texto dos parágrafos no console
const mostrarTexto =  document.querySelectorAll("p");
mostrarTexto.forEach((item)=>{
    console.log(item.innerText);
})


// Como corrigir os erros abaixo:
// const imgs = document.querySelectorAll('img');

// imgs.forEach(item, index => {
//   console.log(item, index);
// });

// let i = 0;
// imgs.forEach( => {
//   console.log(i++);
// });

// imgs.forEach(() => i++);

//RESPOSTA

const imgs = document.querySelectorAll('img');

imgs.forEach((item, index) => {
  console.log(item, index);
});

let i = 0;
imgs.forEach(() => {
  console.log(i++);
});

imgs.forEach(() => i++);
console.log(i)
