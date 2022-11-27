let nome = "Cauan";//STRING
let idade = 17;//NUMBER
let sentado = true;//BOOLEAN
let array = ["ovo", "farinha", "leite", "chocolate"];//ARRAY
let objeto = {nome: "cauan", idade: "17", cidade: "arapoti"};//OBJECT

console.log(objeto.cidade);
console.log(typeof objeto)

//COMENTARIO DE 1 LINHA

/*comentario
de 
mais
de
uma
linha*/



/* FORA DO FOCO DA AULA, COISAS EXTERNAS*/
let escrita = document.getElementById("h1");
if (objeto.cidade = "arapoti") {
    escrita.innerHTML = "Arapoti";
}

let hoje = new Date();
hoje.getSeconds();
escrita.innerHTML = hoje.getSeconds();
