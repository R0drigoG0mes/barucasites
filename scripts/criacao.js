// ---------- FERRAMENTAS ------------
const caixaFerramentas = document.getElementById("ferramentas");

// ---------- FERRAMENTAS ------------

// ---------- PROPRIEDADES ------------

const caixaPropriedades = document.getElementById("propriedades");

const listaPropriedades = document.getElementById("listaPropriedades");

const propriedade_Largura = document.getElementById("propriedade_Largura");
const propriedade_Altura = document.getElementById("propriedade_Altura");
const propriedade_EixoX = document.getElementById("propriedade_EixoX");
const propriedade_EixoY = document.getElementById("propriedade_EixoY");

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

// ------------ TOUCH ---------------

document.addEventListener("touchmove", function(e){
    [...e.changedTouches].forEach(touch =>{

        toquesX.unshift(touch.pageX);

        var comparar = toquesX[10] + 75;
        var comparar2 = toquesX[10] - 75;

        if(toquesX[0] > toquesX[1] && toquesX[0] > comparar && toquesX[1] > toquesX[2] && CaixaPropriedadesAberta == false){
            caixaFerramentas.style.animation = "surgirEsquerda 1s linear forwards";
            CaixaFerramentasAberta = true;
        }
        else if(toquesX[0] < toquesX[1]  && toquesX[0] < comparar2 && toquesX[1] < toquesX[2] && CaixaFerramentasAberta == false){
            caixaPropriedades.style.animation = "surgirDireita 1s linear forwards";
            CaixaPropriedadesAberta = true;
        }
    })
})

// ------------ FECHAR PELO BOTÃO ---------------

document.addEventListener("click", function(e){
    var caminhoDoClique2 = e.composedPath();

    if(caminhoDoClique2[0] == '[object HTMLSpanElement]' && caminhoDoClique2[0].id == 'fecharFerramentas'){
        caixaFerramentas.style.animation = "sumirEsquerda 1s linear forwards";
        setTimeout(() => {CaixaFerramentasAberta = false}, 500);
    }
    else if(caminhoDoClique2[0] == '[object HTMLSpanElement]' && caminhoDoClique2[0].id == 'fecharPropriedades'){
        caixaPropriedades.style.animation = "sumirDireita 1s linear forwards";
        setTimeout(() => {CaixaPropriedadesAberta = false}, 500);
    }
})

// ------------ FECHAR PELO BOTÃO ---------------

// ------------ TOUCH ---------------



                //# FERRAMENTAS INÍCIO

caixaFerramentas.addEventListener("click", function(e){

    // ----------- MENU ÁRVORE ---------------

    caminhoDoClique = e.composedPath();
    filhosDoClicado = caminhoDoClique[0].children;

    if(caminhoDoClique[0] == '[object HTMLLIElement]' && filhosDoClicado[2] && filhosDoClicado[2].style.display == 'none'){
        filhosDoClicado[2].style.display = 'block';
    }
    else if(caminhoDoClique[0] == '[object HTMLLIElement]' && filhosDoClicado[2] && filhosDoClicado[2].style.display == 'block'){
        filhosDoClicado[2].style.display = 'none';
    }

    // ----------- MENU ÁRVORE ---------------

    // ADICIONAR IMAGEM DUPLICADA NO SITE

    else if(caminhoDoClique[0] == '[object HTMLImageElement]' && caminhoDoClique[0].classList.contains('imagem')){
        var duplicata = document.createElement('img');
        duplicata.src = caminhoDoClique[0].src;
        duplicata.classList.add('clones');
        var PerguntaAdicionar = confirm('Quer adicionar essa imagem no seu site?')
        if(PerguntaAdicionar == true){
            SiteCriado.appendChild(duplicata);
        }
    }

    // ADICIONAR IMAGEM DUPLICADA NO SITE

    
})

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

// ----------- UPLOAD IMAGENS --------

                //# FERRAMENTAS END



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

        propriedade_Largura.textContent = largura + 'px';

        var altura = caminhoDoClique3[0].getBoundingClientRect().height;

        propriedade_Altura.textContent = altura + 'px';

        // ---------- REDIMENSIONAR - ALTURA - LARGURA --------

        // ----------- POSICIONAR - EIXO X E EIXO Y-------

        var eixoX = caminhoDoClique3[0].getBoundingClientRect().x;

        propriedade_EixoX.textContent = eixoX + 'px';

        var eixoY = caminhoDoClique3[0].getBoundingClientRect().y;

        propriedade_EixoY.textContent = eixoY + 'px';

        // ----------- POSICIONAR - EIXO X E EIXO Y-------
    }
    else if(Ele_é_o_pai == false && !caminhoDoClique3[0].classList.contains('exibirValor')){
        listaPropriedades.style.display = 'none';
        AvisoSemSelecionarElemento.style.display = 'block';
        ImagemSemSelecionarElemento.style.display = 'block';

        [...filhosDoMain].forEach(elemento =>{
            elemento.classList.remove('selecionado');
        })

        ElementoSelecionado = null;
    }
})

// =================== APLICAR MUDANÇAS NO ELEMENTO =====================

propriedade_Largura.addEventListener("focusout", function(e){

    if(!propriedade_Largura.textContent.endsWith("px")){
        propriedade_Largura.textContent += 'px';
    }

    if(ElementoSelecionado != null){
        var largura = propriedade_Largura.textContent;

        ElementoSelecionado.style.width = largura;
    }
})

propriedade_Altura.addEventListener("focusout", function(e){

    if(!propriedade_Altura.textContent.endsWith("px")){
        propriedade_Altura.textContent += 'px';
    }

    if(ElementoSelecionado != null){
        var altura = propriedade_Altura.textContent;

        ElementoSelecionado.style.height = altura;
    }
})

propriedade_EixoX.addEventListener("focusout", function(e){

    if(!propriedade_EixoX.textContent.endsWith("px")){
        propriedade_EixoX.textContent += 'px';
    }

    if(ElementoSelecionado != null){
        var eixoX = propriedade_EixoX.textContent;
        var eixoY = propriedade_EixoY.textContent;
    
        ElementoSelecionado.style.position = 'absolute';
    
        ElementoSelecionado.style.top = eixoY;
        ElementoSelecionado.style.left = eixoX;
    }
})

propriedade_EixoY.addEventListener("focusout", function(e){

    if(!propriedade_EixoY.textContent.endsWith("px")){
        propriedade_EixoY.textContent += 'px';
    }

    if(ElementoSelecionado != null){
        var eixoY = propriedade_EixoY.textContent;
        var eixoX = propriedade_EixoX.textContent;
    
        ElementoSelecionado.style.position = 'absolute';
    
        ElementoSelecionado.style.left = eixoX;
        ElementoSelecionado.style.top = eixoY;
    }

})

// ------------------ PROPRIEDADES ----------