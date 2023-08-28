
let utils = require('../utils');

test('Deve retornar apenas numeros impares', () => {
    let arrayNumeros = [2, 15, 3, 91, 92, 100, 15, 25, 22, 92, 156];
    let expected = [2, 92, 100, 22, 92, 156]
    let result = utils.apenasPares(arrayNumeros);

    expect(result).toStrictEqual(expected);
});

test('Deve retornar que é um palindromo', () => {
    let isPalindromo = utils.verificaPalindromo("rever");
    expect(isPalindromo).toBe(true);
})

test('Deve retornar um fibonacci de 10 posições', () => {
    let arrayEntrada = [0, 1];
    let arrayFibonacci = utils.retornaFibonacci(arrayEntrada);
    let expected = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]

    expect(arrayFibonacci).toStrictEqual(expected);
})