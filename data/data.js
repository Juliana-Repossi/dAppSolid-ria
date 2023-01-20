//criando os dados sem persistencia para serem usados no app 
function usuario (nome, cpf, senha, bloqueado){
    this.nome = nome;
    this.cpf = cpf;
    this.senha = senha;
    this.bloqueado = bloqueado;
    return true;
}
//Map (cpf, usuario) para armazenar cadastros
MapUsuarios = [];

function addUsuario(usuario){
    MapUsuarios.add(usuario[cpf],usuario);
}

function retornaUsuario(cpf){
   return MapUsuarios[cpf];
}