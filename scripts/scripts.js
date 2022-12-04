const atizap = document.querySelector('.wats');
const telefone = document.querySelector('.fone');

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