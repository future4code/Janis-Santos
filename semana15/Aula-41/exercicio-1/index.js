process.argv /*é um array de todos os argumentos de um processo
o primeiro argumento de todos é o próprio node, ou seja:
process.argv[0] SEMPRE vale o próprio node
process.argv[1] SEMPRE vale o arquivo que o node vai rodar */

const nome = process.argv[2];
const idade = process.argv[3];
const novaIdade = Number("")
console.log(`Olá, ${nome}! Você tem ${idade} anos. Em sete anos você terá ()`);