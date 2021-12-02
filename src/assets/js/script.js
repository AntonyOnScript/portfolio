let principal = document.querySelector('.principal')
let habilidades = document.querySelector('.habilidades')
let projetos = document.querySelector('.projetos')

function passaSecao(num){
    if(num === 1){
        principal.style.animation = "none"
        setTimeout(() => {
            principal.style.animation = "transicao 1s"
            principal.style.zIndex = 2
            habilidades.style.zIndex = -1
            projetos.style.zIndex = -1
        }, 30);   
    }
    if(num === 2){
        habilidades.style.animation = "none"
        setTimeout(() => {
            habilidades.style.animation = "transicao 1s"
            principal.style.zIndex = -1
            habilidades.style.zIndex = 2
            projetos.style.zIndex = -1 
        }, 30);
    }
    if(num === 3){
        projetos.style.animation = "none"
        setTimeout(() => {
            projetos.style.animation = "transicao 1s"
            principal.style.zIndex = -1
            habilidades.style.zIndex = -1
            projetos.style.zIndex = 2
        }, 30);
    }
}