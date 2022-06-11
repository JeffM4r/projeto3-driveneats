function selecionarPrato(visto) {

    let botaoClicado = document.querySelector(".pratoprincipal .selecionado");
    
    if (botaoClicado !== null){
        botaoClicado.classList.remove("selecionado");
    }
    
    visto.classList.add ("selecionado");
};

function selecionarBebida(visto2) {

    let botaoClicado = document.querySelector(".bebidas .selecionado");
    
    if (botaoClicado !== null){
        botaoClicado.classList.remove("selecionado");
    }
    
    visto2.classList.add ("selecionado");
};

function selecionarSobremesa(visto3) {

    let botaoClicado = document.querySelector(".sobremesa .selecionado");
    
    if (botaoClicado !== null){
        botaoClicado.classList.remove("selecionado");
    }
    
    visto3.classList.add ("selecionado");
};

