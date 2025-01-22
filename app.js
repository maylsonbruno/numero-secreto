let listOfNumberSort = [];
let numeroLimite = 10;
let tentativas = 1;
let numeroSecreto = gerarNumeroAleatorio();

 
function changeElement(element,mensage){
   let elementChange = document.querySelector(element);
   elementChange.innerHTML = mensage;
   responsiveVoice.speak(mensage,'Brazilian Portuguese Female',{rate:1.2});
    
}

function showMessageInitial(){
    changeElement('.texto__paragrafo','Escolha um número de 1 a 10');
    changeElement('h1','Jogo do número Secreto');
}

showMessageInitial();

function verificarChute() {
    let chute = document.querySelector('.container__input').value ;
     console.log(numeroSecreto);

    if(chute == numeroSecreto){
        changeElement('h1','Acertou!!');
        let palavraTentativa = tentativas > 1? 'Tentativas':'Tentativa'
        let mensagemTentativas = `Voce descobriu o número secreto com ${tentativas} ${palavraTentativa}`;
        changeElement('.texto__paragrafo',mensagemTentativas);
         document.getElementById('reiniciar').removeAttribute('disabled');

    }else{
        if(chute > numeroSecreto){
            changeElement('.texto__paragrafo','O número secreto é menor');
            
        }else{
            changeElement('.texto__paragrafo','O número secreto é maior');
            
        }

        tentativas ++;
        clearField();
    }
}

function gerarNumeroAleatorio(){
    let numeroAleatorio = parseInt(Math.random()* numeroLimite + 1);
    let quantidadeDeElementosNaLista = listOfNumberSort.length;

    if(quantidadeDeElementosNaLista == numeroLimite){
        listOfNumberSort = [];
    }

     if(listOfNumberSort.includes(numeroAleatorio)){
        return gerarNumeroAleatorio();
     }else{
        listOfNumberSort.push(numeroAleatorio);
        console.log(listOfNumberSort);
        return numeroAleatorio;
     }
    
}

function clearField(){
    let chute = document.querySelector('.container__input').value='' ;
}

function newGame(){
    clearField()
    numeroSecreto = gerarNumeroAleatorio();
    tentativas = 1;
    showMessageInitial();
    document.getElementById('reiniciar').setAttribute('disabled',true);
    
}

