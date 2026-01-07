// const listaAnimais = document.querySelector('.animais-lista');

// const height = listaAnimais.scrollHeight;
// console.log(height);

// const width = listaAnimais.scrollWidth;
// console.log(width);

// const animaisTop = listaAnimais.offsetTop;
// console.log(animaisTop);


// const primeiroh2 = document.querySelector('h2');
// const h2left = primeiroh2.offsetLeft;
// console.log(h2left);


// const rect = primeiroh2.getBoundingClientRect();
// console.log(rect)
// console.log(rect.top);



window.innerWidth; // width do janela
window.outerWidth; // soma dev tools também
window.innerHeight; // height do janela
window.outerHeight; // soma a barra de endereço

window.pageYOffset; // distância total do scroll vertical
window.pageXOffset; // distância total do scroll horizontal

if(window.innerWidth < 600) {
  console.log('Tela menor que 600px');
}


const small = window.matchMedia('(max-width: 600px');


