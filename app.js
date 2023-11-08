//JOGO DO NÚMERO SECRETO
let listaDeNumerosSorteados = [];
let numeroLimite = 10
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;



//MANIPULANDO O HTML(TEXTOS) ATRAVÉS DO JS E OTIMIZANDO UTILIZANDO FUNÇÕES
function exibirTextoNaTela(tag,texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto
}
function exibeMensagemInicial(){
    exibirTextoNaTela('h1','SECRET NUMERO GAME');
    exibirTextoNaTela('p','Digite um número de 1 a 10');//CHAMNDO A FUNÇÃO
}
exibeMensagemInicial();

//VERIFICA O CHUTE
function verificarChute(){
    chute = document.querySelector('input').value;
    console.log(numeroSecreto);
    console.log(listaDeNumerosSorteados)
    if(chute == numeroSecreto){
        exibirTextoNaTela('h1','ACERTOU!!!!');
        let palavraTentativa = tentativas > 1 ? 'TENTATIVAS' : 'TENTATIVA'
        let mensagemTentativas = `VOCÊ DESCOBRIU O NÚMERO SECRETO EM ${tentativas} ${palavraTentativa}!!!`
        exibirTextoNaTela('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled'); //ESTA FUNÇÃO (getElementById) BUSCA EXATAMENTE O ELEMENTO HTML PELO ID
    }
    else{
        if(chute > numeroSecreto){
            exibirTextoNaTela('p', 'Número secreto é menor');
        }
        else{
            exibirTextoNaTela('p', 'Número secreto é maior');
        }
        tentativas++
        limpaCampo()
    }
}

//CRIANDO NÚMERO ALEATÓRIO
function gerarNumeroAleatorio(){
   let numeroEscolhido =  parseInt(Math.random()*numeroLimite+1);
   let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;

   if(quantidadeDeElementosNaLista == numeroLimite){
    listaDeNumerosSorteados = []
    };
   if (listaDeNumerosSorteados.includes(numeroEscolhido)){ // VERIFICANDO SE UM NÚMERO JÁ ESTÁ NA LISTA OU NÃO
    return gerarNumeroAleatorio(); //RECURSÃO, QUANDO UMA FUNÇÃO CHAMA ELA MESMA
   }else {
    listaDeNumerosSorteados.push(numeroEscolhido);
    return numeroEscolhido;
   }

   
}
//CRIANDO FUNÇÃO PARA LIMPAR O CAMPO DE IMPUT
function limpaCampo(){
    chute = document.querySelector('input');
    chute.value = ''
}
//REINICIA JOGO
function reiniciarJogo(){
    
    numeroSecreto = gerarNumeroAleatorio()
    tentativas = 1
    limpaCampo()
    exibeMensagemInicial()
    document.getElementById('reiniciar').setAttribute('disabled',true); 
}



