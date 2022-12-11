// ---------- FERRAMENTAS ------------
const caixaFerramentas = document.getElementById("ferramentas");

const arquivos_li = document.getElementById("arquivos_li");
const detalhes_li = document.getElementById("detalhes_li");

// ---------- FERRAMENTAS ------------

// -------------- ARRAYS ------------------

var caminhoDoClique = [];
var toquesX = [];
var filhosDoClicado = [];

// -------------- ARRAYS ------------------

// ------------ CONSTANTES -----------------

const arquivos_imagens = document.getElementById("arquivos_imagens");
const caixa_imagens = document.getElementById("caixa-imagens");
const imagens = document.getElementById("imagens");
const upload_imagens = document.getElementById("upload_imagens");

// ------------ CONSTANTES -----------------

// ----------- FRECHAS ------------

const frecha1 = document.querySelector('.frecha1');
const frecha2 = document.querySelector('.frecha2');

// ----------- FRECHAS ------------

// ------------ TOUCH ---------------

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

// ------------ TOUCH ---------------

// ----------- CLIQUES ---------------

caixaFerramentas.addEventListener("click", function(e){
    caminhoDoClique = e.composedPath();
    filhosDoClicado = caminhoDoClique[0].children;

    // console.log('==========================')
    // console.log('==========================')
    
    if(caminhoDoClique[0] != '[object HTMLInputElement]' && caminhoDoClique[0] != '[object HTMLLabelElement]' && caminhoDoClique[0] != '[object HTMLSpanElement]' && filhosDoClicado[2].style.display == 'none'){
        filhosDoClicado[2].style.display = 'block';
    }
    else if(caminhoDoClique[0] != '[object HTMLInputElement]' && caminhoDoClique[0] != '[object HTMLLabelElement]' && caminhoDoClique[0] != '[object HTMLSpanElement]' && filhosDoClicado[2].style.display == 'block'){
        filhosDoClicado[2].style.display = 'none';
    }
})

// ----------- CLIQUES ---------------
