function obterEstatisticas(numeros: number[]) {

    const numerosOrdenados = numeros.sort(
        (a, b) => a - b
    )

    let soma:number = 0

    for (let num of numeros) {
        soma += num
    }

    const estatisticas: {} = {
        maior: numerosOrdenados[numeros.length - 1],
        menor: numerosOrdenados[0],
        media: soma / numeros.length
    }

    return estatisticas
}

/*a) A entrada da função é um array e 
a saída é um objeto */

