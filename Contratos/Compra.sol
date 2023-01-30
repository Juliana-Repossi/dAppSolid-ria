// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.0;

contract Compra{

    string public item;
    uint public valor;
    address public vendedor;
    address public comprador;
    string public situacao;
    address public fabrica;

    constructor(string memory _item, uint _valor, address _vendedor, address _comprador){
        item = _item;
        valor = _valor;
        vendedor = _vendedor;
        comprador = _comprador;
        situacao = "Aguardando entrega";
        fabrica = msg.sender;
    }

    modifier onlyFactory() {
        require(msg.sender == fabrica, "Voce precisa usar a fabrica");
        _;
    }

    modifier onlyVendedor(address caller) {
        require(caller == vendedor, "Voce precisa ser o vendedor da compra");
        _;
    }

    modifier onlyComprador(address caller) {
        require(caller == comprador, "Voce precisa ser o comprador da compra");
        _;
    }

    function enviaCompra (address caller) public onlyFactory onlyVendedor (caller){
        situacao = "Pedido enviado pelo vendedor";
    }

    function recebeCompra (address caller) public onlyFactory onlyComprador (caller){
        situacao = "Pedido entregue";
    }

    function cancelaCompra (address caller) public onlyFactory onlyComprador (caller){
        situacao = "Pedido cancelado";
    }
}