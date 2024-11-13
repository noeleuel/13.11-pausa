const img = document.querySelectorAll(".pequeno")
const botao = document.getElementById("botao")

function mudarClasse(){
    
    img[0].classList.remove("pequeno")
    img[0].classList.toggle("grande")
    

}


botao.addEventListener("click")
