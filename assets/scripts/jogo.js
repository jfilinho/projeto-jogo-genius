
const jogar = {
    comecaJogo:  false,
    timeout: undefined,
    sons: [],
    jogador: false,
    score: 0,
    sequencia: [],
    playSequencia: [],
    jogadorPodeJogar: false,
    reset: false
};




const jogo = {
     selecionar:  document.getElementById("seleciona"),
     primeiroNivel:  document.getElementById("nivel1"),
     segundoNivel:  document.getElementById("nivel2"),
     terceiroNivel:  document.getElementById("nivel3"),

    btnStart:  document.querySelector(".btn-start"),
    btnStop: document.querySelector(".btn-stop"),
    contar:  document.querySelector(".count"),
    pads: document.querySelectorAll(".pad")
}
//sons do jogo
const sonsUrl = [
    "./assets/audios/simonSound1.mp3",
    "./assets/audios/simonSound2.mp3",
    "./assets/audios/simonSound3.mp3",
    "./assets/audios/simonSound4.mp3"
    
];
//coloca o som no array sons
sonsUrl.forEach(sndPaht  => {
   const audio = new Audio(sndPaht);
   jogar.sons.push(audio); 
});


//clique do botão start 
jogo.btnStart.addEventListener("click", () =>{

    startJogo();
    jogo.btnStart.classList.toggle(".btn:active"); 
    jogar.comecaJogo = jogo.btnStart.classList.toggle("btn:active");
   jogo.contar.innerHTML = "--";

        jogar.comecaJogo = true;
        jogar.score = 0;
         jogar.jogadorPodeJogar = false;

        jogar.sequencia = [];
       jogar. sequenciaJogador = [];

        desabilitaPads();
    mudaCursor("auto");
});

const startJogo = () => {
    piscar("--", () => {
        novaCor();
       playSequencia();
    })
}

    const  padListener = (e) =>{
    if(!jogar.jogadorPodeJogar)
    return;

    let sonsId;
        jogo.pads.forEach((pad, key) => {
            if(pad === e.target)
            sonsId = key;
        } );
       e.target.classList.add("pad--active");

        jogar.sons[sonsId].play();
        jogar.playSequencia.push(sonsId);

        setTimeout(() =>{
            
        e.target.classList.remove("pad--active");

        //jogada atual do jogador.
        const movimentoAtual = jogar.playSequencia.length - 1;
        
        if(jogar.playSequencia[movimentoAtual] !== jogar.sequencia[movimentoAtual]){
          //jogador errou a sequencia. 
            jogar.jogadorPodeJogar = false;
            desabilitaPads();
           // playSequencia();
           resetPlayAgain();
    }else if(movimentoAtual === jogar.sequencia.length - 1){
        novaCor();
        playSequencia();
    }
        esperaClick();
     }, 250 );
    }
        

jogo.pads.forEach(pad =>{
    pad.addEventListener("click", padListener);
});

const setScore = () => {
    const score = jogar.score.toString();
    const display  = "00".substring(0, 2 -  score.length) + score;
    jogo.contar.innerHTML = display;
}


//escolhe uma cor aleatória para o jogo
const novaCor = () => {
    if(jogar.score === 3){
        piscar("ok");
        pad.classList.remove("pad--active");
    
        return;
}

 jogar.sequencia.push(Math.floor(Math.random( ) * 4));
jogar.score++;

setScore();
}

//sequencia escolhida pelo jogo
const  playSequencia  = () => {
    let = counter = 0;
    padOn = true;

    jogar.playSequencia = [];
    jogar.jogadorPodeJogar = false;

    mudaCursor("auto");
    
    const intervalo = setInterval(() => {
     if(!jogar.comecaJogo){
         clearInterval(intervalo);
         desabilitaPads();
         return;
         
     } 
      
        if(padOn){

           if (counter  === jogar.sequencia.length){
             clearInterval(intervalo);
            desabilitaPads();
               esperaClick();
               mudaCursor("pointer");
            jogar.jogadorPodeJogar = true;
            return;
        }
           const pegaId = jogar.sequencia[counter];
           const pad = jogo.pads[pegaId];

        jogar.sons[pegaId].play();
          pad.classList.add("pad--active");
           counter++;
        }else{
           desabilitaPads();

        }
       padOn = !padOn; 
    }, 750);
}


//faz  o display piscar  aceso
const piscar =  (text , calback) => {
   
    let couter = 0;
    
    on = true;
    jogo.contar.innerHTML = text;
   
  const intervalo =  setInterval(() => {
     if(!jogar.comecaJogo){
         clearInterval(intervalo);
         jogo.contar.classList.remove("count-ativo");
         return;
     } 
    if(on){
            jogo.contar.classList.remove("count-ativo");
  }else{
      jogo.contar.classList.add("count-ativo");
      
        if(++couter === 3){
            clearInterval(intervalo);
            calback();
        }
      
  }
      on = !on;
  
    },250);
}
// espera clique do jogador.
const esperaClick = () => {
    clearTimeout(jogar.timeout);
   
    jogar.timeout = setTimeout(() =>{
        if(!jogar.jogadorPodeJogar)
            return; 
            desabilitaPads();
            //playSequencia();
            resetPlayAgain();
            
    }, 5000);
}

const resetPlayAgain = () => {
    jogar.jogadorPodeJogar = false;
       if(jogar.reset === false){
           piscar("!!", () => {
               jogar.score = 0;
               jogargar.sequencia = [];
                //comecaJogo();
           })
       }
      else{
           piscar("**", () => {
               jogar.score();
               
           });
      } 
          

         //playSequencia();

}

//desliga o jogo
jogo.btnStop.addEventListener("click", () => { 
    desabilitaPads();


    let couter = 0;
    on = true;
    

    const intervalo = setInterval(() => {

        if (on) {
            jogo.contar.classList.remove("count-ativo");
        
        } else {

            jogo.contar.classList.add("count");

            if (++couter === 3) {
                clearInterval(intervalo);
                jogo.contar.innerHTML = "--";
 
        }
        }
        on = !on;
    }, 250);

});
    
const mudaCursor = (cursorType) => {
    jogo.pads.forEach(pad => {
        pad.style.cursor = cursorType;
    })
}



const desabilitaPads = () => {
    jogo.pads.forEach(pad => {
        pad.classList.remove("pad--active");
    })
}






/*function configFimDeJogo() {
    campoPalpite.disabled = true;
    envioPalpite.disabled = true;
    botaoReinicio = document.createElement('button');
    botaoReinicio.textContent = 'Iniciar novo jogo';
    document.body.appendChild(botaoReinicio);
    botaoReinicio.addEventListener('click', reiniciarJogo);
}

*/



