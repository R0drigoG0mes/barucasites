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
const propriedade_CorDeFundoInput = document.getElementById("EscolherCor");
const propriedade_CorDeFundoHex = document.getElementById("CorHex");
const propriedade_Texto = document.getElementById("propriedade_Texto");
const propriedade_AlinhamentoTexto = document.getElementById("propriedade_AlinhamentoTexto");
const propriedade_Fonte = document.getElementById("propriedade_Fonte");
const FontesDisponiveis = document.getElementById("FontesDisponiveis");
const propriedade_TamanhoFonte = document.getElementById("propriedade_TamanhoFonte");
const propriedade_TamanhoDecoracaoTexto = document.getElementById("propriedade_TamanhoDecoracaoTexto");
const propriedade_TipoDecoracaoTexto = document.getElementById("propriedade_TipoDecoracaoTexto");
const propriedade_CorDecoracaoTexto = document.getElementById("propriedade_CorDecoracaoTexto");
const propriedade_EstiloDecoracaoTexto = document.getElementById("propriedade_EstiloDecoracaoTexto");

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
var FontesCarregadas = false;
var Copiado = '';

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

    // ------------------ CAIXAS -----------------

    else if(caminhoDoClique[0].id == 'caixaComum_div'){
        var caixaDiv = document.createElement("div");
        caixaDiv.style.backgroundColor = '#eee';
        caixaDiv.textContent = 'Essa é a sua caixa comum';
        var PerguntaAdicionar = confirm('Quer adicinar essa caixa no seu site?');
        if(PerguntaAdicionar == true){
            var alturaDaDiv = prompt('Escreva a altura da caixa desejada:', '100px');
            caixaDiv.style.height = alturaDaDiv;

            if(ElementoSelecionado != null){
                ElementoSelecionado.appendChild(caixaDiv);
            }
            else{
                SiteCriado.appendChild(caixaDiv);
            }
        }
    }
    else if(caminhoDoClique[0].id == 'caixaEmLinha_span'){
        var caixaSpan = document.createElement("span");
        caixaSpan.style.backgroundColor = '#eee';
        caixaSpan.textContent = 'Essa é a sua caixa em linha';
        var PerguntaAdicionar = confirm('Quer adicinar essa caixa em linha no seu site?');
        if(PerguntaAdicionar == true){

            if(ElementoSelecionado != null){
                ElementoSelecionado.appendChild(caixaSpan);
            }
            else{
                SiteCriado.appendChild(caixaSpan);
            }
        }
    }
    else if(caminhoDoClique[0].id == 'caixaTexto_p'){
        var caixaP = document.createElement("p");
        caixaP.style.backgroundColor = '#eee';
        caixaP.textContent = 'Essa é a sua caixa de texto';
        var PerguntaAdicionar = confirm('Quer adicinar essa caixa de texto no seu site?');
        if(PerguntaAdicionar == true){

            if(ElementoSelecionado != null){
                ElementoSelecionado.appendChild(caixaP);
            }
            else{
                SiteCriado.appendChild(caixaP);
            }
        }
    }
    else if(caminhoDoClique[0].id == 'caixaCabeçalho_header'){
        var caixaHeader = document.createElement("header");
        caixaHeader.style.backgroundColor = '#eee';
        caixaHeader.textContent = 'Esse é o seu cabeçalho';
        var PerguntaAdicionar = confirm('Quer adicinar esse cabeçalho no seu site?');
        if(PerguntaAdicionar == true){
            var alturaDoHeader = prompt('Escreva a altura do cabeçalho desejado:', '70px');
            caixaHeader.style.height = alturaDoHeader;

            if(ElementoSelecionado != null){
                ElementoSelecionado.appendChild(caixaHeader);
            }
            else{
                SiteCriado.appendChild(caixaHeader);
            }
        }
    }
    else if(caminhoDoClique[0].id == 'caixaPrincipal_main'){
        var caixaMain = document.createElement("main");
        caixaMain.style.backgroundColor = '#eee';
        caixaMain.textContent = 'Essa é a sua caixa de conteúdo principal';
        var PerguntaAdicionar = confirm('Quer adicinar essa caixa de conteúdo principal no seu site?');
        if(PerguntaAdicionar == true){
            var alturaDoMain = prompt('Escreva a altura da caixa de conteúdo principal desejada:', '70px')
            caixaMain.style.height = alturaDoMain;

            if(ElementoSelecionado != null){
                ElementoSelecionado.appendChild(caixaMain);
            }
            else{
                SiteCriado.appendChild(caixaMain);
            }
        }
    }
    else if(caminhoDoClique[0].id == 'caixaRodape_footer'){
        var caixaFooter = document.createElement("footer");
        caixaFooter.style.backgroundColor = '#eee';
        caixaFooter.textContent = 'Esse é o seu rodapé';
        var PerguntaAdicionar = confirm('Quer adicinar esse rodapé no seu site?');
        if(PerguntaAdicionar == true){
            var alturaDoFooter = prompt('Escreva a altura do rodapé desejado:', '70px')
            caixaFooter.style.height = alturaDoFooter;

            if(ElementoSelecionado != null){
                ElementoSelecionado.appendChild(caixaFooter);
            }
            else{
                SiteCriado.appendChild(caixaFooter);
            }
        }
    }

    // ------------------ CAIXAS -----------------

    // ----------------- ATALHOS -----------------

    // ----------------- DELETAR------------------

    else if(caminhoDoClique[0].id == 'deletarElemento'){
        if(ElementoSelecionado != null){
            ElementoSelecionado.remove();
        }
        else{
            alert('Selecione um elemento para deletá-lo.');
        }
    }

    // ----------------- DELETAR------------------

    // ----------------- INCORPORAR ------------------

    else if(caminhoDoClique[0].id == 'incorporarElemento'){

        async function PegarTextoCopiado(){

            Copiado = await navigator.clipboard.readText();

            if(Copiado.startsWith("<style> @import url('https://fonts.googleapis.com") || Copiado.startsWith('<link rel="preconnect" href="https://fonts.googleapis.com">')){

                document.head.innerHTML += Copiado;
            }
        }
        PegarTextoCopiado();
    }

    // ----------------- INCORPORAR ------------------

    // ----------------- ATALHOS -----------------

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

        ElementoSelecionado.style.width = largura + 'px';

        propriedade_Largura.textContent = largura + 'px';

        var altura = caminhoDoClique3[0].getBoundingClientRect().height;

        ElementoSelecionado.style.width = largura + 'px';

        propriedade_Altura.textContent = altura + 'px';

        // ---------- REDIMENSIONAR - ALTURA - LARGURA --------

        // ----------- POSICIONAR - EIXO X E EIXO Y-------

        var eixoX = caminhoDoClique3[0].getBoundingClientRect().x;

        propriedade_EixoX.textContent = eixoX + 'px';

        var eixoY = caminhoDoClique3[0].getBoundingClientRect().y;

        propriedade_EixoY.textContent = eixoY + 'px';

        // ----------- POSICIONAR - EIXO X E EIXO Y-------

        // ----------- COR DE FUNDO ----------------------

        const RGB_Bruto = caminhoDoClique3[0].style.backgroundColor;

        const limpeza2 = RGB_Bruto.replaceAll('rgb', '');
        const limpeza3 = limpeza2.replaceAll(' ', '');
        const limpeza4 = limpeza3.replaceAll(')', '.');
        const limpeza5 = limpeza4.replaceAll('(', '');
        const limpeza6 = limpeza5.replaceAll(',', ' ');

        var todos = '';
        var red = '';
        var green = '';
        var blue = '';
        var contia = 0;

        [...limpeza6].forEach(caractere => {
            if(caractere != ' ' && caractere != '.'){
                todos += caractere;
            }
            else if(contia == 0){
                contia++;
                red = todos;
                todos = '';
            }
            else if(contia == 1){
                contia++;
                green = todos;
                todos = '';
            }
            else if(contia == 2){
                blue = todos;
                todos = '';
                contia = 0;
            }
        })

        var corFinal = '#' + parseInt(red).toString(16) + parseInt(green).toString(16) + parseInt(blue).toString(16);

        propriedade_CorDeFundoInput.value = corFinal;

        propriedade_CorDeFundoHex.value = corFinal;

        // ----------- COR DE FUNDO ----------------------

        // ----------- TEXTO ----------------------

        propriedade_Texto.value = ElementoSelecionado.textContent;

        // ----------- TEXTO ----------------------

        // ----------- ALINAHMENRO DO TEXTO ----------------------

        var AlinhamentoAtual = ElementoSelecionado.style.textAlign;

        if(AlinhamentoAtual == '' || AlinhamentoAtual == undefined){
            AlinhamentoAtual = window.getComputedStyle(ElementoSelecionado).textAlign;
        }

        var OpcoesDeAlinhamento = propriedade_AlinhamentoTexto.children;

        [...OpcoesDeAlinhamento].forEach(opcao => {
            if(opcao.value == AlinhamentoAtual){
                opcao.selected = true;
            }
        })

        // ----------- ALINAHMENRO DO TEXTO ----------------------

        // ----------- DECORAÇÃO - ESTILO - TAMANHO - TIPO - COR ----------------------

        var TamanhoDecoracaoTexo = ElementoSelecionado.style.textDecorationThickness;

        if(TamanhoDecoracaoTexo == '' || TamanhoDecoracaoTexo == undefined){
            TamanhoDecoracaoTexo = '2px';
        }

        var CorDecoracaoTexto = ElementoSelecionado.style.textDecorationColor;

        if(CorDecoracaoTexto == '' || CorDecoracaoTexto == undefined){
            CorDecoracaoTexto = window.getComputedStyle(ElementoSelecionado).textDecorationColor;
        }

        var TipoDecoracaoText = ElementoSelecionado.style.textDecorationStyle;

        if(TipoDecoracaoText == '' || TipoDecoracaoText == undefined){
            TipoDecoracaoText = window.getComputedStyle(ElementoSelecionado).textDecorationStyle;
        }

        var EstiloDecoracaoTexto = ElementoSelecionado.style.textDecorationLine;

        if(EstiloDecoracaoTexto == '' || EstiloDecoracaoTexto == undefined){
            EstiloDecoracaoTexto = window.getComputedStyle(ElementoSelecionado).textDecorationLine;
        }

        const Filtragem2 = CorDecoracaoTexto.replaceAll('rgb', '');
        const Filtragem3 = Filtragem2.replaceAll(' ', '');
        const Filtragem4 = Filtragem3.replaceAll(')', '.');
        const Filtragem5 = Filtragem4.replaceAll('(', '');
        const Filtragem6 = Filtragem5.replaceAll(',', ' ');

        var todos = '';
        var vermelho = '';
        var verde = '';
        var azul = '';
        var contia = 0;

        [...Filtragem6].forEach(caractere => {
            if(caractere != ' ' && caractere != '.'){
                todos += caractere;
            }
            else if(contia == 0){
                contia++;
                vermelho = todos;
                todos = '';
            }
            else if(contia == 1){
                contia++;
                verde = todos;
                todos = '';
            }
            else if(contia == 2){
                azul = todos;
                todos = '';
                contia = 0;
            }
        })

        var CorDecoracaoTextoHex = '#' + parseInt(vermelho).toString(16) + parseInt(verde).toString(16) + parseInt(azul).toString(16);

        propriedade_CorDecoracaoTexto.value = CorDecoracaoTextoHex;

        var TiposDecoracao = propriedade_TipoDecoracaoTexto.children;

        [...TiposDecoracao].forEach(tipo => {
            if(tipo.value == TipoDecoracaoText){
                tipo.selected = true;
            }
        })

        var TiposEstilosDecoracao = propriedade_EstiloDecoracaoTexto.children;

        [...TiposEstilosDecoracao].forEach(estilo => {
            if(estilo.value == EstiloDecoracaoTexto){
                estilo.selected = true;
            }
        })

        propriedade_TamanhoDecoracaoTexto.value = TamanhoDecoracaoTexo;

        // ----------- DECORAÇÃO - ESTILO - TAMANHO - TIPO - COR ----------------------

        // ----------- FONTE ----------------------

        var fonte = ElementoSelecionado.style.fontFamily;

        if(fonte == ''){
           fonte = window.getComputedStyle(ElementoSelecionado).fontFamily;
        }

        var fontefinal = fonte; 

        if(!fontefinal.includes("'") && !fontefinal.includes('"')){
            fontefinal = "'" + fontefinal + "'";
        }

        propriedade_Fonte.value = fontefinal;

        // ----------- FONTE ----------------------

        // ----------- TAMANHO DA FONTE ----------------------

        var TamanhoDaFonte = ElementoSelecionado.style.fontSize.value;

        if(TamanhoDaFonte == '' || TamanhoDaFonte == undefined){
            TamanhoDaFonte = window.getComputedStyle(ElementoSelecionado).fontSize;
        }

        propriedade_TamanhoFonte.value = TamanhoDaFonte;

        // ----------- TAMANHO DA FONTE ----------------------
    }
    else if(Ele_é_o_pai == false && !caminhoDoClique3[0].classList.contains('exibirValor') && !caminhoDoClique3[0].classList.contains('Prop')){
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

propriedade_CorDeFundoInput.addEventListener("change", function(e){
    ElementoSelecionado.style.backgroundColor = propriedade_CorDeFundoInput.value;
})

propriedade_CorDeFundoHex.addEventListener("change", function(e){
    ElementoSelecionado.style.backgroundColor = propriedade_CorDeFundoHex.value;
})

propriedade_Texto.addEventListener("change", function(e){
    ElementoSelecionado.textContent = propriedade_Texto.value;
})

propriedade_Fonte.addEventListener("click", logFontData);

async function logFontData() {
    if(FontesCarregadas == false){
        try {
            const availableFonts = await window.queryLocalFonts();
            for (const fontData of availableFonts){

              var optionNova = document.createElement("option");
              optionNova.classList.add('Prop');
              optionNova.value = fontData.family;
              optionNova.textContent = fontData.family;

              var Filtragem = fontData.fullName;

                if(!Filtragem.includes("Negrito") && !Filtragem.includes("Bold") && !Filtragem.includes("Italic") && !Filtragem.includes("Itálico") && !Filtragem.includes("Light") && !Filtragem.includes("Condensed") && !Filtragem.includes("Black") && !Filtragem.includes("Gothic") && !Filtragem.includes("Medium") && !Filtragem.includes("Mono")){
                    FontesDisponiveis.appendChild(optionNova);
                }
            }
            FontesCarregadas = true;
          } 
          catch (err){
            console.error(err.name, err.message);
          }
    }
}

propriedade_Fonte.addEventListener("change", function(e){
    ElementoSelecionado.style.fontFamily = propriedade_Fonte.value;
})

propriedade_TamanhoFonte.addEventListener("change", function(e){
    ElementoSelecionado.style.fontSize = propriedade_TamanhoFonte.value;
})

propriedade_AlinhamentoTexto.addEventListener("change", function(e){
    ElementoSelecionado.style.textAlign = propriedade_AlinhamentoTexto.value;
});

propriedade_TamanhoDecoracaoTexto.addEventListener("change", function(e){
    ElementoSelecionado.style.textDecorationThickness = propriedade_TamanhoDecoracaoTexto.value;
})

propriedade_TipoDecoracaoTexto.addEventListener("change", function(e){
    ElementoSelecionado.style.textDecorationStyle = propriedade_TipoDecoracaoTexto.value;
})

propriedade_CorDecoracaoTexto.addEventListener("change", function(e){
    ElementoSelecionado.style.textDecorationColor = propriedade_CorDecoracaoTexto.value;
})

propriedade_EstiloDecoracaoTexto.addEventListener("change", function(e){
    ElementoSelecionado.style.textDecorationLine = propriedade_EstiloDecoracaoTexto.value;
})

// =================== APLICAR MUDANÇAS NO ELEMENTO =====================
