const imgs = document.querySelectorAll('img');
console.log(imgs);


imgs.forEach(function(item, index) {
    console.log(index,item);
})


//foreach é um metodo de array, alguns objetos array-like possuem este metodo.Caso não possua, o ideal é tranforma-los em uma array.

const titulo = document.getElementsByClassName("titulo");
const tituloArray = Array.from(titulo);

tituloArray.forEach(function(item,index){
    console.log(item)
})


imgs.forEach((item)=>{
    console.log(item);
})

