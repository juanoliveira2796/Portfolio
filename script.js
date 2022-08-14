

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
    const elemento = document.querySelector('.botao')
    const paragrafo = document.querySelector('.botao p')
    const teste = document.querySelectorAll("div.selecionado"); // pega todas as divs
    console.log(teste.length);                                  // que tem a classe .selecionado

    if(teste.length === 3){
        elemento.classList.add('botao-liberado')
        paragrafo.innerHTML = 'Fechar pedido' 
    }
}