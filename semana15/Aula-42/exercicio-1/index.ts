/*Exercício 1: a) Se adicionar um número na variável do tipo string, ocorre um erro que informa
que não se pode adicionar numeros em variáveis do tipo string (tirei o numero porque tava me dando nervoso de ver o erro) */ 
const minhaString: string = "um numero" 

/*Exercício 1: b) */
const meuNumero: number | string = 39

/*Exercício 1: c) */

type person = {
    name: string,
    age: number,
    favoriteColor: string
}

const janis: person = {
    name: "Janis Costadelli",
    age: 18,
    favoriteColor: "Azul"
}

const nicolas: person = {
    name: "Nicolas Alexandre",
    age: 15,
    favoriteColor: "Preto"
}

const emily: person = {
    name: "Emily Rosi",
    age: 7,
    favoriteColor: "Rosa"
}