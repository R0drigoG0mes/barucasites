const caixaFerramentas = document.getElementById("ferramentas");
const frechinha = document.getElementById("frecha");

var toquesX = [];

document.addEventListener("touchmove", function(e){
    [...e.changedTouches].forEach(touch =>{

        toquesX.unshift(touch.pageX);
        
        if(toquesX[0] > toquesX[1] && toquesX[1] > toquesX[2] && toquesX[2] > toquesX[3]){
            caixaFerramentas.style.animation = "surgirEsquerda 1s linear forwards";
            frechinha.classList.remove("icon-circle-right");
            frechinha.classList.add("icon-circle-left");
            console.log('boa surgiu');
        }
        else if(toquesX[0] < toquesX[1] && toquesX[1] < toquesX[2] && toquesX[2] < toquesX[3]){
            caixaFerramentas.style.animation = "sumirEsquerda 1s linear forwards";
            frechinha.classList.remove("icon-circle-left");
            frechinha.classList.add("icon-circle-right");
            console.log('boa sumiu');
        }
    })
})

frechinha.addEventListener("click", function(e){
    if(frechinha.classList.contains("icon-circle-right")){
        caixaFerramentas.style.animation = "surgirEsquerda 1s linear forwards";
        frechinha.classList.remove("icon-circle-right");
        frechinha.classList.add("icon-circle-left");
    }
    else{
        caixaFerramentas.style.animation = "sumirEsquerda 1s linear forwards";
        frechinha.classList.remove("icon-circle-left");
        frechinha.classList.add("icon-circle-right");
    }
})
