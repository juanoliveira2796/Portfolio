

function selecionarComida(nomeClasse) {
    const seletor = '.' + nomeClasse
    const atual = document.querySelector('.comidas .selecionado')
    const elemento = document.querySelector(seletor);

    if (atual !== null) {
        atual.classList.remove('selecionado');
    } 

    elemento.classList.add('selecionado'); 
    liberaBotao();   
}

function selecionarBebida(nomeClasse) {
    const seletor = '.' + nomeClasse
    const atual = document.querySelector('.bebidas .selecionado')
    const elemento = document.querySelector(seletor);

    if (atual !== null) {
        atual.classList.remove('selecionado');
    } 

    elemento.classList.add('selecionado'); 
    liberaBotao();   
}

function selecionarDoce(nomeClasse) {
    const seletor = '.' + nomeClasse
    const atual = document.querySelector('.sobremesas .selecionado')
    const elemento = document.querySelector(seletor);

    if (atual !== null) {
        atual.classList.remove('selecionado');
    } 

    elemento.classList.add('selecionado'); 
    liberaBotao();   
}

function liberaBotao() {
    const elemento = document.querySelector('.botao');
    const paragrafo = document.querySelector('.botao p');
    const teste = document.querySelectorAll("div.selecionado"); // pega todas as divs
    console.log(teste.length);                                  // que tem a classe .selecionado

    if(teste.length === 3){
        elemento.classList.add('botao-liberado')
        paragrafo.innerHTML = 'Fechar pedido' 
    }
}

function msgConfirmacao() {
    // Calcular o preço final
    const nomeComida = document.querySelector('.comidas .selecionado h2').innerHTML;
    const nomeBebida = document.querySelector('.bebidas .selecionado h2').innerHTML;
    const nomeSobremesa = document.querySelector('.sobremesas .selecionado h2').innerHTML;


    const precoComida = document.querySelector('.comidas .selecionado h3').innerHTML;
    const precoBebida = document.querySelector('.bebidas .selecionado h3').innerHTML;
    const precoSobremesa = document.querySelector('.sobremesas .selecionado h3').innerHTML;
    
    const precoComidaFloat = Number(precoComida.replace("R$ ","").replace(",","."));
    const precoBebidaFloat = Number(precoBebida.replace("R$ ","").replace(",","."));
    const precoSobremesaFloat = Number(precoSobremesa.replace("R$ ","").replace(",","."));

    console.log(precoComidaFloat);
    console.log(precoBebidaFloat);
    console.log(precoSobremesaFloat);

    const precoFinal = precoComidaFloat+precoBebidaFloat+precoSobremesaFloat;
    
    // mandar msg no zap
    const mensagem = "Olá, gostaria de fazer o pedido: \n - Prato: " + nomeComida + "\n - Bebida: " + nomeBebida + "\n - Sobremesa: " + nomeSobremesa + "\n Total: R$ " + precoFinal.toFixed(2); 
    const msgWpp = encodeURIComponent(mensagem);
    const link = "https://wa.me/5521994647802?text=" + msgWpp ;
    window.open(link);
    

}