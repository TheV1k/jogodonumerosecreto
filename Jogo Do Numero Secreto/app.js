let numerosSorteados =[];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;
function exibirTextoNaTela (tag,texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}
function exibirMensagemInicial(){
    exibirTextoNaTela('h1', 'Jogo do Número Secreto');
    exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');
}

exibirMensagemInicial();
function verificarChute(){
    let chute = document.querySelector('input').value;
    if(chute == numeroSecreto){
        exibirTextoNaTela('h1', 'Acertou!');
        let palavraTentativas = tentativas > 1? 'tentativas':'tentativa';
        let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativas}`;
        exibirTextoNaTela('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if(chute>numeroSecreto){
                exibirTextoNaTela('h1','Errou!!!')
                exibirTextoNaTela('p', `O número secreto é menor!`);
                limparCampo();
                
        } else{
            if(chute<numeroSecreto){
                exibirTextoNaTela('h1','Errou!!!')
                exibirTextoNaTela('p', `O número secreto é maior!`);
                limparCampo();
        } 
       
    }tentativas++; } } 

function gerarNumeroAleatorio(){
   let numeroEscolhido = parseInt(Math.random()*10 + 1);
   let quantidadeDeElementos = numerosSorteados.length;
   if (quantidadeDeElementos == numeroLimite){
    numerosSorteados = []
   }
   if (numerosSorteados.includes(numeroEscolhido)){
        return gerarNumeroAleatorio();

   } else{

    numerosSorteados.push(numeroEscolhido);
    console.log(numerosSorteados);
    return numeroEscolhido;
   }
}
function limparCampo(){
    chute = document.querySelector('input');
    chute.value= '';

}

function reiniciarJogo(){
    exibirMensagemInicial();
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    document.getElementById('reiniciar').setAttribute('disabled', true);
}  

