var itens = [];

const botaoCadastrar = document.querySelector("#cadastrar-item");

//função para captar a opcao escolhida no select
function atualizaSelectAnuncio(){
    let select = document.querySelector("#anuncio");
    let opcaoValue = select.options[select.selectedIndex];
    let value = opcaoValue.value;

    return value;
}

//erro de precificação: doação com valor de venda
function errorPrecificacao(input,msg){
    //pegar o formulário
    const form = input.parentElement;
    const small = form.querySelector('small');
 
    //add msg de error
    small.innerText = msg;
 
    //add classe de erro
    form.className = "form-control-valor error";

}

function cadastrarItem(){

    //pegar os valores das entradas
    const inputName = document.querySelector("#nome");
    const inputDescricao = document.querySelector("#descricao");
    const inputTipoAnuncio = atualizaSelectAnuncio();
    const inputPreco = document.querySelector("#valor");
        
    if(inputTipoAnuncio == "doacao" && inputPreco.value != 0)
    {
       errorPrecificacao(inputPreco,"Uma doação não pode ter um valor diferente de 0 !");
       inputPreco.value = 0;
       return;
    }
    
    const novoItem = {
        nome: inputName.value,
        descricao : inputDescricao.value,
        tipo : inputTipoAnuncio,
        preco: inputPreco.value,
        dono: localStorage.getItem("usuario")
    }

    //adicionar produto na lista
    if (localStorage.listaItens)
    {
        itens = JSON.parse(localStorage.getItem("listaItens"));
    }

    //salvar novo item
    itens.push(novoItem);
    localStorage.listaItens = JSON.stringify(itens);

    //direciona para a pag home
    window.location.href = "../Home/home.html"
}

botaoCadastrar.addEventListener("click",cadastrarItem);