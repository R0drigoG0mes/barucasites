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
var ElementoSelecionado;

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
const AvisoSemSelecionarElemento = document.getElementById("SemSelecionarElemento");
const ImagemSemSelecionarElemento = document.getElementById("SemSelecionarElemento2");

// ------------ CONSTANTES -----------------

// ------------ PROPRIEDADES ----------------
const listaPropriedades = document.getElementById("listaPropriedades");

const propriedade_Largura = document.getElementById("propriedade_Largura");
const propriedade_Altura = document.getElementById("propriedade_Altura");
const propriedade_EixoX = document.getElementById("propriedade_EixoX");
const propriedade_EixoY = document.getElementById("propriedade_EixoY");

// ------------ PROPRIEDADES ----------------

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
            SiteCriado.appendChild(duplicata);
        }
    }
})

// ----------- UPLOAD IMAGENS --------

// ------------------ PROPRIEDADES ----------

document.addEventListener("click", function(e){

    var caminhoDoClique3 = e.composedPath();
    filhosDoMain = SiteCriado.getElementsByTagName("*");
    var Ele_é_o_pai = false;

    [...filhosDoMain].forEach(filho => {
        if(caminhoDoClique3[0] == filho){
            Ele_é_o_pai = true;
        }
    });

    if(Ele_é_o_pai == true){

        listaPropriedades.style.display = 'block';
        AvisoSemSelecionarElemento.style.display = 'none';
        ImagemSemSelecionarElemento.style.display = 'none';

        [...filhosDoMain].forEach(elemento =>{
            elemento.classList.remove('selecionado');
        })

        // ------------------ SELECIONAR ELEMENTO ---------------

        if(caminhoDoClique3[0] != SiteCriado){
            caminhoDoClique3[0].classList.add('selecionado');
        }

        ElementoSelecionado = caminhoDoClique3[0];

        // ------------------ SELECIONAR ELEMENTO ---------------

        // ---------- REDIMENSIONAR - ALTURA - LARGURA --------

        var largura = caminhoDoClique3[0].getBoundingClientRect().width;

        propriedade_Largura.textContent = largura = 'px';

        var altura = caminhoDoClique3[0].getBoundingClientRect().height;

        propriedade_Altura.textContent = altura + 'px';

        // ---------- REDIMENSIONAR - ALTURA - LARGURA --------

        // ----------- POSICIONAR - EIXO X E EIXO Y-------

        var eixoX = caminhoDoClique3[0].getBoundingClientRect().x;

        propriedade_EixoX.textContent = eixoX;

        var eixoY = caminhoDoClique3[0].getBoundingClientRect().y;

        propriedade_EixoY.textContent = eixoY;

        // ----------- POSICIONAR - EIXO X E EIXO Y-------
    }
    else if(Ele_é_o_pai == false && !caminhoDoClique3[0].classList.contains('exibirValor')){
        listaPropriedades.style.display = 'none';
        AvisoSemSelecionarElemento.style.display = 'block';
        ImagemSemSelecionarElemento.style.display = 'block';

        [...filhosDoMain].forEach(elemento =>{
            elemento.classList.remove('selecionado');
        })
    }
})

// =================== APLICAR MUDANÇAS NO ELEMENTO =====================

propriedade_Largura.addEventListener("focusout", function(e){

    if(!propriedade_Largura.textContent.endsWith("px")){
        propriedade_Largura.textContent += 'px';
    }

    var largura = propriedade_Largura.textContent;

    ElementoSelecionado.style.width = largura;

})

propriedade_Altura.addEventListener("focusout", function(e){
    if(!propriedade_Altura.textContent.endsWith("px")){
        propriedade_Altura.textContent += 'px';
    }

    var altura = propriedade_Altura.textContent;

    ElementoSelecionado.style.height = altura;
})

propriedade_EixoX.addEventListener("focusout", function(e){

    var eixoX = propriedade_EixoX.textContent;

    // ElementoSelecionado.x = eixoX;
})

propriedade_EixoY.addEventListener("focusout", function(e){

    var eixoY = propriedade_EixoY.textContent;

    // ElementoSelecionado.y = eixoY;
})

// ------------------ PROPRIEDADES ----------