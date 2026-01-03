// Adicione a classe ativo a todos os itens do menu

const menu = document.querySelectorAll(".menu a");
menu.forEach((item)=>{
    item.classList.add("ativo")
    console.log(item)
})

// Remove a classe ativo de todos os itens do menu e mantenha apenas no primeiro
menu.forEach((item)=>{
    item.classList.remove("ativo")
    console.log(item)
})

menu[0].classList.add('ativo');

console.log('/////////////////////////////////////////');
// Verifique se as imagens possuem o atributo alt
const imagem = document.querySelectorAll("img");
imagem.forEach((item)=>{
    const possui= item.hasAttribute('alt');
    console.log(item,possui)
})
console.log('/////////////////////////////////////////');

// Modifique o href do link externo no menu

const link = document.querySelector('a[href^="http"]');
link.setAttribute('href','https://www.google.com')

console.log(link)
