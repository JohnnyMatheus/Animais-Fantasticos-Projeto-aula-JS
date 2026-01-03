const animais = document.getElementById("animais");
// console.log(animais.innerText);

////////////////////////////////////////////////////////////////////////////////
//SELECIONA PELA CLASSE E RETORNA UMA HTMLCollection
const gridSection = document.getElementsByClassName("grid-section");
console.log(gridSection);
const contato = document.getElementsByClassName("grid-section contato")
console.log(contato)

///////////////////////////////////////////////////////////////////////////////
//SELECIONA TODAS AS <ul>, retorna uma HTMLCollection
const ul = document.getElementsByTagName("ul");
console.log('SELECIONA TODAS AS <ul>, retorna uma HTMLCollection', ul)
///////////////////////////////////////////////////////////////////////////////
//RETORNA O PRIMEIRO ELEMENTO
console.log('RETORNA O PRIMEIRO ELEMENTO', gridSection[0])
/////////////////////////////////////////////////////////////////////////////

const primeiraLi = document.querySelector("li");
console.log(primeiraLi);

const primeiraUl =  document.querySelector("ul")
console.log(primeiraUl);

const linksInternos = document.querySelector('[href^="#"]');
console.log(linksInternos);

/////////////////////////////////////////////////////////////////////////////
const animaisImg = document.querySelectorAll(".animais img");
console.log(animaisImg)
console.log(animaisImg[2])


////////////////////////////////////////////////////////////////////////////
primeiraUl.classList.add("grid-section")
const gridElementHTML = document.getElementsByClassName("grid-section");
console.log(gridElementHTML);

const gridElementNode = document.querySelectorAll('.grid-section');
console.log(gridElementNode)

console.log('//ARRAY-LIKE')
//ARRAY-LIKE

gridElementNode.forEach(function(item,index,array){
    console.log(item,index)
})


const arrayGrid = Array.from(gridElementHTML)