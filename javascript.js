let contador = 0

let pratoEscolhido = ''
let precoPratoEscolhido = ''
let bebidaEscolhida = ''
let precoBebidaEscolhida = ''
let sobremesaEscolhida = ''
let precoSobremesaEscolhida = ''



function selecionarComida(prato, descricao, preco){

  desmarcarProduto('.prato')
  const selecionado = document.querySelector("." + prato);
  selecionado.classList.add("selecao");

  contador = contador + 1;
  
  pratoEscolhido = descricao;
  precoPratoEscolhido = preco;

  finalizarPedido();
  
}

function selecionarBebida(bebida, descricao, preco){

    desmarcarProduto('.bebida')
    const selecionado = document.querySelector("." + bebida);
    selecionado.classList.add("selecao");

    contador = contador + 1;
    
    bebidaEscolhida = descricao;
    precoBebidaEscolhida = preco; 

    finalizarPedido();
}

function selecionarSobremesa(sobremesa, descricao, preco){

    desmarcarProduto('.sobremesa')
    const selecionado = document.querySelector("." + sobremesa);
    selecionado.classList.add("selecao");

    contador = contador + 1;
    
    sobremesaEscolhida = descricao;
    precoSobremesaEscolhida = preco;

    finalizarPedido();
}


function desmarcarProduto(produto){
    const selecionado = document.querySelector(produto).querySelector(".selecao");
    console.log("ola")
    if (selecionado !== null){
        selecionado.classList.remove("selecao")  
        contador = contador -1; 
    } 

}

function finalizarPedido(){
    const botaoFinal = document.querySelector('button')
    if(contador===3){
        
        botaoFinal.classList.add("final")

        botaoFinal.innerHTML='Fechar pedido'
    }
}


function enviarMensagemWhatsApp(){
    let valorFinal = (precoPratoEscolhido + precoBebidaEscolhida + precoSobremesaEscolhida).toFixed(2);

    let mensagemEnviada = (`Olá, gostaria de fazer o pedido: 
    - Prato: ${pratoEscolhido} 
    - Bebida: ${bebidaEscolhida} 
    - Sobremesa: ${sobremesaEscolhida} 
    Total: R$ ${valorFinal}`);

    window.open(`https://wa.me/+5521994827528?text=${mensagemEnviada}`)

}