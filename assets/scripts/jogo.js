
const jogar = {
    comecaJogo:  false,
    timeout: undefined,
    sons: [],
    jogador: false,
    score: 0,
    sequencia: [],
    playSequencia: [],
    naoJoga: false
};




const jogo = {
     selecionar:  document.getElementById("seleciona"),
     primeiroNivel:  document.getElementById("nivel1"),
     segundoNivel:  document.getElementById("nivel2"),
     terceiroNivel:  document.getElementById("nivel3"),

    btnStart:  document.querySelector(".btn-start"),
    btnStop: document.getElementById("btn-stop"),
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
            
    jogar.comecaJogo = jogo.btnStart.classList.toggle(".count-ativo");
   jogo.contar.innerHTML = "--";
   
        jogar.comecaJogo = true;
        jogar.score = 0;
         jogar.naoJoga = false;

        jogar.sequencia = [];
       jogar. sequenciaJogador = [];

        desabilitaPads();
});

const startJogo = () => {
    piscar("--", () => {
        novaCor();
       playSequencia();
    })
}

const  padListener = (e) =>{

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
 jogar.sequencia.push(Math.floor(Math.random( ) * 4));
jogar.score++;

setScore();
}

//sequencia escolhida pelo jogo
const  playSequencia  = () => {
    let = counter = 0;
    padOn = true;

    jogar.playSequencia = [];
    jogar.naoJoga = false;
    
    const intervalo = setInterval(() => {
       if(padOn){

           if (counter  === jogar.sequencia.length){
             clearInterval(intervalo);
            desabilitaPads();

            jogar.naoJoga = true;
            return;
        }
           const pegaId = jogar.sequencia[counter];
           const pad = jogo.pads[pegaId];

             //jogar.sons[pegaId].play();
           pad.classList.add("pad-ativo");
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

const esperaClick = () => {
    jogar.timeout = setTimeout(() =>{
        if(!jogar.naoJoga){
            return;
            desabilitaPads();
            playSequencia();
        }
    },5000);
}
jogo.btnStop.addEventListener("click", () => { 

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
    


const desabilitaPads = () => {
    jogo.pads.forEach(pad => {
        pad.classList.remove("pad-boton-right-ativo");
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












