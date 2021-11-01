const jogar = {


    comecaJogo:  false,
    timeout: undefined,
    sons: [],
    jogador: false,
    score: 0,
    sequencia: [],
    sequenciaJogador:[]
   
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

const sons = [
   // "audios/simonSound1.mp3",
   // "audios/simonSound2.mp3",
   // "audios/simonSound3.mp3",
   // "audios/simonSound4.mp3"
    
];

sons.forEach(sndPaht  => {
   const audio = new Audio(sndPaht);
   jogar.sons.push(audio); 
});



jogo.btnStart.addEventListener("click", () =>{

    startJogo();
            
    jogar.comecaJogo = jogo.btnStart.classList.toggle(".count-ativo");
   jogo.contar.innerHTML = "00";
   
   
jogar.comecaJogo = false;
jogar.score = 0;
jogar.sequencia = [];
sequenciaJogador = [];


    desabilitaPads();

});

const novaCor = () => {
    Math.random()
}





const startJogo = () => {
    piscar("00", () => {
        novaColor();
    })
}





const piscar =  (text , calback) => {
    let couter = 0;
    on = true;
    jogo.contar.innerHTML = text;

  const intervalo =  setInterval(() => {
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


const desabilitaPads = () =>{
    jogo.pads.forEach(pad =>{
        pad.classList.remove(".pad-ativo")
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












