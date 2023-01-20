
//lista de usuarios cadastrados
var usuarios = [];

//botao entrar
const botaoEntrar = document.querySelector("#entrar");

function errorLogin(input,msg){
    //pegar a div pai
    const form = input.parentElement;
    const small = form.querySelector("small");

    //add msg de erro
    small.innerText = msg;

    //add classe de error
    form.className = "form-control-senha error"

}

function VerificaCadastroUsuário(entradaNome,entradaSenha,) {

    const nome = entradaNome.value;
    const senha = entradaSenha.value;

    console.log(nome);
    console.log(senha);

    //receber lista de usuarios do localstorage
    if(localStorage.listaUsuarios)
    {
        usuarios = JSON.parse(localStorage.getItem("listaUsuarios"));
    }

    //procura se o usuário esta nos dados
    for(i=0; i<usuarios.length;i++){
        if(usuarios[i].nome == nome)
        {
            //verifica senha
            if(usuarios[i].senha == senha){
                //liberar acesso
                window.location.href = "Pages/Home/home.html"
                return;
            }
            else
            {
                //senha errada
                errorLogin(entradaSenha,"Senha Incorreta");  
                entradaSenha.value = "";
                return;
            }
        }
    }
    //não achou nenhum usuario com esse nome
    errorLogin(entradaSenha,"Usuario ainda não cadastrado");  
    entradaNome.value = "";
    entradaSenha.value = "";
    return;
}

const LogarUsuario = () => {
    //pegar os dados recebidos

    //nome 
    const nomeInput = document.querySelector("#nome");
    //senha
    const senhaInput = document.querySelector("#senha");

    VerificaCadastroUsuário(nomeInput,senhaInput);

}

botaoEntrar.addEventListener("click",LogarUsuario);
