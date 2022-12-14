// ---------- FERRAMENTAS ------------
const caixaFerramentas = document.getElementById("ferramentas");

const arquivos_li = document.getElementById("arquivos_li");
const detalhes_li = document.getElementById("detalhes_li");

// ---------- FERRAMENTAS ------------

// ---------- PROPRIEDADES ------------

const caixaPropriedades = document.getElementById("propriedades");

// ---------- PROPRIEDADES ------------

// -------------- ARRAYS ------------------

var caminhoDoClique = [];
var toquesX = [];
var filhosDoClicado = [];
var filhosDoMain = [];

// -------------- ARRAYS ------------------

// -------------- VARIÁVEIS ------------------

var CaixaFerramentasAberta = false;
var CaixaPropriedadesAberta = false;

// -------------- VARIÁVEIS ------------------

// ------------ CONSTANTES -----------------

const arquivos_imagens = document.getElementById("arquivos_imagens");
const caixa_imagens = document.getElementById("caixa-imagens");
const upload_imagens = document.getElementById("upload_imagens");
const arquivos_imagens_input = document.getElementById("arquivo_img");
const btn_upload = document.getElementById("btn_upload");
const label = document.querySelector('.upload-img');
const imagensParaAdicionarNoSite = document.querySelector('.imagem');
const AvisoSemImagens = document.getElementById("SemImagens");
const SiteCriado = document.getElementById("SiteCriado");

// ------------ CONSTANTES -----------------

// ------------ TOUCH ---------------

document.addEventListener("touchmove", function(e){
    [...e.changedTouches].forEach(touch =>{

        toquesX.unshift(touch.pageX);

        if(toquesX[0] > toquesX[1] && toquesX[1] > toquesX[2] && toquesX[2] > toquesX[3] && CaixaPropriedadesAberta == false){
            caixaFerramentas.style.animation = "surgirEsquerda 1s linear forwards";
            CaixaFerramentasAberta = true;
        }
        else if(toquesX[0] < toquesX[1] && toquesX[1] < toquesX[2] && toquesX[2] < toquesX[3] && CaixaFerramentasAberta == true){
            caixaFerramentas.style.animation = "sumirEsquerda 1s linear forwards";
            setTimeout(() => {CaixaFerramentasAberta = false}, 1100);
            
        }

        else if(toquesX[0] < toquesX[1] && toquesX[1] < toquesX[2] && toquesX[2] < toquesX[3] && CaixaFerramentasAberta == false){
            caixaPropriedades.style.animation = "surgirDireita 1s linear forwards";
            CaixaPropriedadesAberta = true;
        }
        else if(toquesX[0] > toquesX[1] && toquesX[1] > toquesX[2] && toquesX[2] > toquesX[3] && CaixaPropriedadesAberta == true){
            caixaPropriedades.style.animation = "sumirDireita 1s linear forwards";
            setTimeout(() => {CaixaPropriedadesAberta = false}, 1100);
        }
    })
})

// ------------ ABRIR E FECHAR PELO BOTÃO ---------------

document.addEventListener("click", function(e){
    var caminhoDoClique2 = e.composedPath();

    if(caminhoDoClique2[0] == '[object HTMLSpanElement]' && caminhoDoClique2[0].id == 'fecharFerramentas'){
        caixaFerramentas.style.animation = "sumirEsquerda 1s linear forwards";
        setTimeout(() => {CaixaFerramentasAberta = false}, 1100);
    }
    else if(caminhoDoClique2[0] == '[object HTMLSpanElement]' && caminhoDoClique2[0].id == 'fecharPropriedades'){
        caixaPropriedades.style.animation = "sumirDireita 1s linear forwards";
        setTimeout(() => {CaixaPropriedadesAberta = false}, 1100);
    }
})

// ------------ ABRIR E FECHAR PELO BOTÃO ---------------

// ------------ TOUCH ---------------


// ----------- CLIQUES ---------------

caixaFerramentas.addEventListener("click", function(e){
    caminhoDoClique = e.composedPath();
    filhosDoClicado = caminhoDoClique[0].children;

    if(caminhoDoClique[0] == '[object HTMLLIElement]' && filhosDoClicado[2] && filhosDoClicado[2].style.display == 'none'){
        filhosDoClicado[2].style.display = 'block';
    }
    else if(caminhoDoClique[0] == '[object HTMLLIElement]' && filhosDoClicado[2] && filhosDoClicado[2].style.display == 'block'){
        filhosDoClicado[2].style.display = 'none';
    }
})

// ----------- CLIQUES ---------------

// ----------- UPLOAD IMAGENS --------

btn_upload.addEventListener('click', function(e){
    label.click();
})

arquivos_imagens_input.addEventListener('change', function(e){
    const inputTarget = e.target;
    const file = inputTarget.files[0];

    if(file){
        const leitor = new FileReader();

        leitor.addEventListener('load', function(e){
            const alvoLeitor = e.target;

            const imagem = document.createElement('img');
            imagem.src = alvoLeitor.result;
            imagem.classList.add('imagem');

            AvisoSemImagens.style.display = 'none';
            upload_imagens.insertBefore(imagem, btn_upload);
        })

        leitor.readAsDataURL(file);
    }
})

document.addEventListener('click', function(e){
    var AlvoInicial = e.composedPath();

    if(AlvoInicial[0] == '[object HTMLImageElement]' && AlvoInicial[0].classList.contains('imagem')){
        var duplicata = document.createElement('img');
        duplicata.src = AlvoInicial[0].src;
        duplicata.classList.add('clones');
        var PerguntaAdicionar = confirm('Quer adicionar essa imagem no seu site?')
        if(PerguntaAdicionar == true){
            SiteCriado.appendChild(duplicata)
        }
    }
})

// ----------- UPLOAD IMAGENS --------

// ------------------ PROPRIEDADES ----------

SiteCriado.addEventListener("click", function(e){
    var caminhoDoClique3 = e.composedPath();
    filhosDoMain = SiteCriado.getElementsByTagName("*");

    [...filhosDoMain].forEach(elemento =>{
        elemento.classList.remove('selecionado');
    })
    caminhoDoClique3[0].classList.add('selecionado');
})

// ------------------ PROPRIEDADES ----------