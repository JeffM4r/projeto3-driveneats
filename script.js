let prato;
let bebida;
let sobremesa;

let nomePrato;
let nomeBebida;
let nomeSobremesa;

let precoPrato = 0;
let precoBebida = 0;
let precoSobremesa = 0;

let somado;

function somando(){
    somado = parseFloat(precoPrato + precoBebida + precoSobremesa).toFixed(2);
}

function selecionarPrato(visto) {

    prato = visto.innerHTML;
    let botaoClicado = document.querySelector(".pratoprincipal .selecionado");
    
    if (botaoClicado !== null){
        botaoClicado.classList.remove("selecionado");
    }
    
    visto.classList.add ("selecionado");

    nomePrato = visto.querySelector(".pratoprincipal .selecionado .nome").innerHTML;
    precoPrato = visto.querySelector(".pratoprincipal .selecionado .soma").innerHTML;
    precoPrato = precoPrato.replace(",",".");
    precoPrato = Number(precoPrato)

    confirmarPedido()
    somando()
};

function selecionarBebida(visto2) {

    bebida = visto2.innerHTML;
    let botaoClicado = document.querySelector(".bebidas .selecionado");
    
    if (botaoClicado !== null){
        botaoClicado.classList.remove("selecionado");
    }
    
    visto2.classList.add ("selecionado");
    
    nomeBebida = visto2.querySelector(".bebidas .selecionado .nome").innerHTML;
    precoBebida = visto2.querySelector(".bebidas .selecionado .soma").innerHTML;
    precoBebida = precoBebida.replace(",",".");
    precoBebida = Number(precoBebida)

    confirmarPedido()
    somando()
};

function selecionarSobremesa(visto3) {

    sobremesa = visto3.innerHTML;
    let botaoClicado = document.querySelector(".sobremesa .selecionado");
    
    if (botaoClicado !== null){
        botaoClicado.classList.remove("selecionado");
    }
    
    visto3.classList.add ("selecionado");

    nomeSobremesa = visto3.querySelector(".sobremesa .selecionado .nome").innerHTML;
    precoSobremesa = visto3.querySelector(".sobremesa .selecionado .soma").innerHTML;
    precoSobremesa = precoSobremesa.replace(",",".");
    precoSobremesa = Number(precoSobremesa)

    confirmarPedido()
    somando()
};

function confirmarPedido(){

    let pronto;

    if (prato && bebida && sobremesa) {

        pronto = document.querySelector(".confirmar");
        pronto.classList.add("selecionado2");
        pronto.innerHTML = "Fechar pedido";
        pronto.onclick = function confirmado(){
            
            window.location.href = `https://wa.me/5521969427831?text=Ol%C3%A1%2C+gostaria+de+fazer+o+pedido%3A%0D%0A-+Prato%3A+${encodeURIComponent(nomePrato)}%0D%0A-+Bebida%3A+${encodeURIComponent(nomeBebida)}%0D%0A-+Sobremesa%3A+${encodeURIComponent(nomeSobremesa)}%0D%0ATotal%3A+R%24+${encodeURIComponent(somado)}`;
        };

    } else {
        pronto.classList.remove("selecionado2");
    }

};

