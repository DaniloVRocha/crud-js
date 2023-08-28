const readline = require('readline');

function apenasPares(arrayNumeros){
    return arrayNumeros.filter((valor) => valor % 2 === 0 ? true: false);
};

function apenasImpares(arrayNumeros){
    return arrayNumeros.filter(valor => valor%2!=0 ? true : false);
};

function retornaFibonacci(arrayNumeros){
    for(let i = 1; i < 9; i++){
        arrayNumeros.push(arrayNumeros[i] + arrayNumeros[i-1])
    }
    return arrayNumeros
}

function verificaPalindromo(palavra){
    let palavraAoContrario = inverteString(palavra);
    if(palavraAoContrario === palavra){
        return true
    }
    return false;
}

function inverteString(palavra){
    let palavraAoContrario = "";
    for(let i = palavra.length -1; i >= 0 ; i--){
        palavraAoContrario += palavra.charAt(i);
    }
    return palavraAoContrario;
}

function bubbleSort(){
    array = [19, 5, 91, 2, 4, 15, 1]
    console.log(array);
    sorted = false;
    n = array.length
    while(!sorted){
        sorted = true;
        for(let i=0; i<n ; i++){
            if(array[i] < array[i-1]){
                let temp = array[i];
                array[i] = array[i-1]
                array[i-1] = temp;
                sorted = false;
            }
        }
    }
    console.log(array);
}
let rl = readline.createInterface(
    process.stdin, process.stdout);

    rl.question('What is your age? ', (age) => {
        console.log('Your age is: ' + age);
    });
bubbleSort();

module.exports = {
    inverteString,
    verificaPalindromo,
    retornaFibonacci,
    apenasImpares,
    apenasPares
}