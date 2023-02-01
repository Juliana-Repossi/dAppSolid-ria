// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.0;
import "./Compra.sol";

contract SoliFactory {

    address private owner;

    //tipo de saldo
    string constant saldoLivre = "Livre";
    string constant saldoBlock = "Block";
    
    //Mapeamento de codinome -> endereço
    mapping (string => address) public usuarios;

    //Mapeamento de codinome -> tipo de saldo -> saldo em $oli
    mapping (string => mapping(string => uint)) public saldo;

    constructor(){
        owner = msg.sender;
    }

    event saldoAlterado(string proprietario,uint saldo);

    //oferta inicial de Soli para quem se cadastrar
    function recompensaCadastro(string memory codinome) public
    {
        //insere no mapeamento
        usuarios[codinome] = msg.sender;
        //inicializa saldos - com ofera inicial
        saldo[codinome][saldoLivre] = 1000 ; 
        saldo[codinome][saldoBlock] = 0 ; 

        emit saldoAlterado(codinome,SaldoLivreCodinome(codinome));
    }

    //recompensa por cadastrar um produto
    function recompensaOfertaItem(string memory codinome) public
    {
        saldo[codinome][saldoLivre] = saldo[codinome][saldoLivre] + 10;
        emit saldoAlterado(codinome,SaldoLivreCodinome(codinome));
    }

    // balanco a partir do codinome
    function SaldoLivreCodinome(string memory codinome) public view returns (uint)
    {
        return saldo[codinome][saldoLivre];
    }

    //Fábrica de contratos
    //Apenas uma das modalidades executada - venda
    
    //adimitindo uma compra por vez entre o par comprador e vendedor
    //vendedor - comprador - compra
    mapping(string => mapping(string => Compra)) public compras;
    
    //transacao de compra e venda
    event notificaVenda(string vendedor, string item, uint valor, string comprador, bool situacao);

    function criaCompra(string memory comprador, string memory vendedor, string memory item, uint valor) public{
        
        //pode fazer a compra
        if(SaldoLivreCodinome(comprador) >= valor)
        {            
            //bloqueia o valor da compra
            saldo[comprador][saldoLivre] = saldo[comprador][saldoLivre] - valor;
            saldo[comprador][saldoBlock] = saldo[comprador][saldoBlock] + valor;
            
            compras[vendedor][comprador] = new Compra(item,valor,usuarios[vendedor],usuarios[comprador]);
            //notifica vendedor
            emit notificaVenda(vendedor, item, valor,comprador,true);
            emit saldoAlterado(comprador,SaldoLivreCodinome(comprador));
        } 
        //compra não efetuada por falta de saldo
        emit notificaVenda(vendedor, item, valor,comprador,false); 
    } 

    //evento de pedido enviado pelo vendedor
    event pedidoEnviado(string vendedor, string comprador, string item, uint preco);

    function vendedorEnviaCompra(string memory comprador, string memory vendedor, string memory item, uint preco) public {
        Compra(compras[vendedor][comprador]).enviaCompra(msg.sender);
        saldo[vendedor][saldoLivre] = saldo[vendedor][saldoLivre] + 30;
        emit pedidoEnviado(vendedor,comprador,item,preco);
        emit saldoAlterado(vendedor,SaldoLivreCodinome(vendedor));
    }

    //valor de venda liberado
    event valorLiberadoVendedor(string comprador, string vendedor, string item,uint valor);

    function compradorRecebeCompra(string memory comprador, string memory vendedor,string memory item, uint preco) public {
        Compra(compras[vendedor][comprador]).recebeCompra(msg.sender);

        // vendedor recebe o pagamento do saldo bloqueado do comprador;
        saldo[comprador][saldoBlock] = saldo[comprador][saldoBlock] - preco;
        saldo[vendedor][saldoLivre] = saldo[vendedor][saldoLivre] + preco;
        //recompensa comprador por confirmar entrega
        saldo[comprador][saldoLivre] = saldo[comprador][saldoLivre] + 30;

        
        emit valorLiberadoVendedor(comprador,vendedor,item,preco);
        emit saldoAlterado(vendedor,SaldoLivreCodinome(vendedor));
        emit saldoAlterado(comprador,SaldoLivreCodinome(comprador));
    } 

    //evento de cancelamento de pedido
    event pedidoCancelado(string vendedor, string comprador, string item, uint valor);

    function compradorCancelaCompra(string memory comprador, string memory vendedor, string memory item,uint valor) public {
        
        Compra(compras[vendedor][comprador]).cancelaCompra(msg.sender);

        // comprador recebe de volta o pagamento
        saldo[comprador][saldoBlock] = saldo[comprador][saldoBlock] - valor;
        saldo[comprador][saldoLivre] = saldo[comprador][saldoLivre] + valor;

        emit pedidoCancelado(vendedor,comprador,item,valor);
    }    
}