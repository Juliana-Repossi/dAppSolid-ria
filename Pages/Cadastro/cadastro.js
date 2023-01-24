//Criar um map de usuarios
//var MapUsuarios = new Map;
var usuarios = [];

function errorCadastro(input,msg){
    //pegar o formulário
    const form =input.parentElement;
    const small = form.querySelector('small');

    //add msg de error
    small.innerText = msg;

    //add classe de erro
    form.className = "form-control-name error";
}

//função para adicionar um usuario no localStorage:
function addUsuario(novoUsuario,nomeInput){

    if (localStorage.listaUsuarios)
    {
        usuarios = JSON.parse(localStorage.getItem("listaUsuarios"));
    }

    //teste simples de duplicidade
    for(i=0; i<usuarios.length;i++){
        if(usuarios[i].nome == novoUsuario.nome)
        {
            //nome de usuário ja existe
            errorCadastro(nomeInput,"Esse nome de usuário já está em uso");  
            return;
        }
    }

    //salvar novo usuário
    usuarios.push(novoUsuario);
    localStorage.listaUsuarios = JSON.stringify(usuarios);

    window.location.href = "../Home/home.html"
}

//botao de cadastrar
const botaoCadastrar = document.querySelector("#cadastrar-usuario");


function CadastrarUsuario(){
    //pegando os dados digitados
    //abstração: como é um projeto de curto prazo
    //verificações importantes como validar cpf e verificar se vazio não foram feitas
    
    //nome
    const nomeInput = document.querySelector("#nome");
    //cpf
    const cpfInput = document.querySelector("#cpf");
    //senha
    const senhaInput = document.querySelector("#senha");

    const usuario = {
     nome: nomeInput.value,
     cpf: cpfInput.value,
     senha: senhaInput.value,
     bloqueado: false
    }

    nomeInput.value = '';
    cpfInput.value = '';
    senhaInput.value = '';

    addUsuario(usuario,nomeInput);
    
}

// evento click do botão
botaoCadastrar.addEventListener("click",CadastrarUsuario);