const caixaFerramentas = document.getElementById("ferramentas");

// -------------- ARRAYS ------------------

var caminhoDoClique = [];
var filhosDoClicado = [];
var toquesX = [];

// -------------- ARRAYS ------------------

document.addEventListener("touchmove", function(e){
    [...e.changedTouches].forEach(touch =>{

        toquesX.unshift(touch.pageX);
        
        if(toquesX[0] > toquesX[1] && toquesX[1] > toquesX[2] && toquesX[2] > toquesX[3]){
            caixaFerramentas.style.animation = "surgirEsquerda 1s linear forwards";
        }
        else if(toquesX[0] < toquesX[1] && toquesX[1] < toquesX[2] && toquesX[2] < toquesX[3]){
            caixaFerramentas.style.animation = "sumirEsquerda 1s linear forwards";
        }
    })
})

caixaFerramentas.addEventListener("click", function(e){

    caminhoDoClique = e.composedPath();
    filhosDoClicado = caminhoDoClique[0].children;

    if(caminhoDoClique[0] == '[object HTMLLIElement]' && filhosDoClicado[2].style.display == 'none'){
        filhosDoClicado[2].style.display = 'block';
        filhosDoClicado[1].classList.remove('icon-circle-down');
        filhosDoClicado[1].classList.add('icon-circle-up');
    }
    else if(caminhoDoClique[0] == '[object HTMLLIElement]' && filhosDoClicado[2].style.display == 'block'){
        filhosDoClicado[2].style.display = 'none';
        filhosDoClicado[1].classList.remove('icon-circle-up');
        filhosDoClicado[1].classList.add('icon-circle-down');
    }
})
