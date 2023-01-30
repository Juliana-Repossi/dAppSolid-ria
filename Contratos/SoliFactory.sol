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

    //oferta inicial de Soli para quem se cadastrar
    function recompensaCadastro(string memory codinome) public
    {
        //insere no mapeamento
        usuarios[codinome] = msg.sender;
        //insere no mapeamento
        saldo[codinome][saldoLivre] = 1000 ; 
        saldo[codinome][saldoBlock] = 0 ; 
    }

    //recompensa por cadastrar um produto
    function recompensaOfertaItem(string memory codinome) public
    {
        saldo[codinome][saldoLivre] = saldo[codinome][saldoLivre] + 10 ;
    }

    // balanco a partir do codinome
    function SaldoLivreCodinome(string memory codinome) public view returns (uint)
    {
        return saldo[codinome][saldoLivre];
    }

    // balanco a partir do codinome
    function SaldoBlockCodinome(string memory codinome) public view returns (uint)
    {
        return saldo[codinome][saldoBlock];
    }

    //Fábrica de contratos
    //Apenas uma das modalidades executada - venda
    
    //adimitindo uma compra por vez entre o par comprador e vendedor
    //vendedor - comprador - compra
    mapping(string => mapping(string => Compra)) public compras;
    
    //transacao de compra e venda feita com sucesso 
    event notificaVenda(string indexed vendedor, string item, uint valor, string comprador);

    function criaCompra(string memory comprador, string memory vendedor, string memory item, uint valor) public{
        
        //pode fazer a compra
        if(SaldoLivreCodinome(comprador) >= valor)
        {            
            //bloqueia o valor da compra
            saldo[comprador][saldoLivre] = saldo[comprador][saldoLivre] - valor;
            saldo[comprador][saldoBlock] = saldo[comprador][saldoBlock] + valor;
            
            compras[vendedor][comprador] = new Compra(item,valor,usuarios[vendedor],usuarios[comprador]);
            //notifica vendedor
            emit notificaVenda(vendedor, item, valor,comprador);
        }  
    } 

    //evento de pedido enviado pelo vendedor
    event pedidoEnviado(string vendedor, string indexed comprador, string item);

    function vendedorEnviaCompra(string memory comprador, string memory vendedor, string memory item) public {
        Compra(compras[vendedor][comprador]).enviaCompra(msg.sender);
        emit pedidoEnviado(vendedor,comprador,item);
    }

    //valor de venda liberado
    event valorLiberadoVendedor(string indexed vendedor, uint valor);

    function compradorRecebeCompra(string memory comprador, string memory vendedor, uint valor) public {
        Compra(compras[vendedor][comprador]).recebeCompra(msg.sender);

        // vendedor recebe o pagamento do saldo bloqueado do comprador;
        saldo[comprador][saldoBlock] = saldo[comprador][saldoBlock] - valor;
        saldo[vendedor][saldoLivre] = saldo[vendedor][saldoLivre] + valor;
        
        emit valorLiberadoVendedor(vendedor,valor);
    } 

    //evento de cancelamento de pedido
    event pedidoCancelado(string indexed vendedor, string comprador, string item, uint valor);

    function compradorCancelaCompra(string memory comprador, string memory vendedor, string memory item,uint valor) public {
        
        Compra(compras[vendedor][comprador]).cancelaCompra(msg.sender);

        // comprador recebe de volta o pagamento
        saldo[comprador][saldoBlock] = saldo[comprador][saldoBlock] - valor;
        saldo[comprador][saldoLivre] = saldo[comprador][saldoLivre] + valor;

        emit pedidoCancelado(vendedor,comprador,item,valor);
    }    
}

