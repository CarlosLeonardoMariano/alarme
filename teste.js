const div_relogio = document.getElementById('divRelogio');
const botao = document.getElementById('toggle')
const data = document.getElementById('data')



    function day() {
        const datadia = new Date();
        const date = String(datadia.getDate()).padStart(2, '0'); 
        const month = String(datadia.getMonth() +1).padStart(2,'0'); 
        const year = datadia.getFullYear();
        return `${date}/${month}/${year}`; 
    }
    
    function atualizar_Day() {
        data.innerHTML = day();
    }
    
     atualizar_Day();
    



function relogio() {
    const data = new Date();
    let hora = String(data.getHours()).padStart(2, '0');
    let minutos = String(data.getMinutes()).padStart(2, '0');
    let segundos = String(data.getSeconds()).padStart(2, '0');
    return `${hora}:${minutos}:${segundos}`;
}

function atualizar_Relogio() {
    div_relogio.innerHTML = relogio();
}

// Atualiza imediatamente e depois a cada segundo
atualizar_Relogio();
setInterval(atualizar_Relogio, 1000);



botao.addEventListener('click', toggleRelogio);
botao.addEventListener('click', toggleData);

function toggleRelogio(){
    if(div_relogio.classList.contains('sumico')){
        div_relogio.classList.remove('sumico');
        div_relogio.classList.add('aparecer')
    }
    else{
div_relogio.classList.remove('aparecer')
div_relogio.classList.add('sumico')
    }
}

function toggleData(){
    if(data.classList.contains('sumico_data')){
        data.classList.remove('sumico_data');
        data.classList.add('aparecer_data')
    }
    else{
        data.classList.remove('aparecer_data')
        data.classList.add('sumico_data')
    }
}


// ========================================================= // ====================================================== //

const timer = document.getElementById('timer')
  const def_alarme = document.getElementById('def_alarme')
    const tmp_alarme = document.getElementById('tmp_alarme')
      const hora_alarme = document.getElementById('hora_alarme')
        const btn_ligar = document.getElementById('btn_ligar')
          const btn_parar = document.getElementById('btn_parar')


          let som_alarme = new Audio(); // COLOQUE SUA MUSICA 
            som_alarme.loop = -1
               let tempo_Atual = null
                 let tempo_Alarme = null
                    let alarme_ativado = false
                        let alarme_tocando = false
            


btn_ligar.addEventListener('click', () => {
tempo_Atual = Date.now()
tempo_Alarme = tempo_Atual+(tmp_alarme.value*1000)
alarme_ativado = true
const dt_alarme = new Date(tempo_Alarme)
hora_alarme.innerHTML="Hora do Alarme: " + dt_alarme.getHours() + ": " + dt_alarme.getMinutes() + ": " + dt_alarme.getSeconds()
});

btn_parar.addEventListener('click',()=> {
    alarme_ativado = false
    alarme_tocando = false
    hora_alarme.innerHTML = "Hora do Alarme: "
    tmp_alarme.value = 0;
    timer.classList.remove("alarme")
    Audio.pause()
    Audio.currentTime = 0;


})