/*Exercício 1: a) Se adicionar um número na variável do tipo string, ocorre um erro que informa
que não se pode adicionar numeros em variáveis do tipo string (tirei o numero porque tava me dando nervoso de ver o erro) */ 
const minhaString: string = "um numero" 

/*Exercício 1: b) */
const meuNumero: number | string = 39

/*Exercício 1: c) */

enum CORES { 
    AZUL= "Azul",
    PRETO= "Preto",
    ROSA= "Rosa"
}
type person = {
    name: string,
    age: number,
    favoriteColor: CORES
}

const janis: person = {
    name: "Janis Costadelli",
    age: 18,
    favoriteColor: CORES.AZUL
}

const nicolas: person = {
    name: "Nicolas Alexandre",
    age: 15,
    favoriteColor: CORES.PRETO
}

const emily: person = {
    name: "Emily Rosi",
    age: 7,
    favoriteColor: CORES.ROSA
}
