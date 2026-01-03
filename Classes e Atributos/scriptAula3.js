//classes

const menu = document.querySelector('.menu');
menu.classList.add('ativo','azul');
menu.classList.remove('azul')
menu.classList.toggle('azul')

if(menu.classList.contains('azul')){
    menu.classList.add('possui-azul');
}else{

}

console.log(menu)


//atributos

const animais = document.querySelector('.animais');

console.log(animais.attributes[1]);

console.log(animais.attributes.class);

console.log(animais.attributes['data-texto']);

//getAtribute e setAtribute

const img = document.querySelector("img");
//img.getAttribute('src');
//img.setAttribute('alt','imagens');
//img.getAttribute('alt');

const possuiAlt = img.hasAttribute('alt');
console.log(possuiAlt);
const possuiTitulo = img.hasAttribute('title');
console.log(possuiTitulo)


//hasAtribute verifica se tem


const carro ={
    portas:4,
    andar: function(km){
        console.log(`Andou ${km} km`)
    }
}

carro.andar(10);
console.log(carro.portas);


