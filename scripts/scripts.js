const atizap = document.querySelector('.wats');
const telefone = document.querySelector('.fone');
const imagem_header = document.querySelector('.fundo-header');

// -----------------------------------------------------------------

window.addEventListener("click", function(e){
    if(e.path[0] == '[object HTMLLIElement]' && e.path[0].innerHTML == 'Diferencial'){
        window.scroll(0,363);
    }
});

window.addEventListener("click", function(e){
    if(e.path[0] == '[object HTMLLIElement]' && e.path[0].innerHTML == 'Projetos Recentes'){
        window.scroll(0,2400);
    }
});

window.addEventListener("click", function(e){
    if(e.path[0] == '[object HTMLLIElement]' && e.path[0].innerHTML == 'Contato'){
        window.scroll(0,4000);
    }
});

// -------------- AREA DE TRANFERÊNCIA --------------- 

atizap.addEventListener("click", function(e){
    atizap.select();
    document.execCommand("copy");
});

telefone.addEventListener("click", function(e){
    telefone.select();
    document.execCommand("copy");
});

// -------------- FUNDO HEADER -----------

if(window.screen.width <= 500){
    imagem_header.src = 'imagens/logo_500.webp';
}

if(window.screen.width > 500 && window.screen.width <= 800){
    imagem_header.src = 'imagens/logo_800.webp';
}

if(window.screen.width > 800 && window.screen.width <= 1200){
    imagem_header.src = 'imagens/logo_1200.webp';
}

if(window.screen.width > 1200 && window.screen.width <= 1500){
    imagem_header.src = 'imagens/logo_1500.webp';
}
