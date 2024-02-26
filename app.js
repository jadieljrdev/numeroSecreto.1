let numeroMaximo = 10; // variável que vai limitar até que número o numero secreto vai gerar aleatoriamente
let numeroSecreto = parseInt(Math.random()*numeroMaximo+1); //variável que vai gerar aleatoriamente com uso de math.random
let chute; //variável responsavel por atribuir o valor de chute onde o usuário vai escrever um número
let tentativas = 1; // variável responsável pela quantidade de tentativas 

alert('Bem vindo ao número secreto');
//enquanto o número secreto não for igual ao chute do usuário ele vai ficar dentro do loop 
while(chute != numeroSecreto){
    //chute vai atribuir o número que o usuário digitou graças ao prompt, temos o parseInt para ele converter o número em inteiro
    chute = parseInt(prompt(`Digite um número de 1 a ${numeroMaximo}`));
    //comparando o número secreto com o chute
    if(numeroSecreto == chute){
        //Implementamos um contador de tentativas para acompanhar e exibir a quantidade de vezes que o usuário tentou adivinhar um número secreto.
        let palavraTentativas = tentativas > 1 ? 'tentativas' : 'tentativa';
        //caso for verdadeiro ele vai exibir um alert informando que você descobriu o número secreto com a quantidade de tentativas
        alert(`Isso aí! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} ${palavraTentativas}`)
    }else{
        //caso o número não for igual, ele vai informar se é maior ou menor que o número secreto
        if(numeroSecreto > chute){
            alert('O número secreto é maior');
        }else{
            alert('O número secreto é menor');
        }
        //Contagem de tentativas
        tentativas++;
    }
}