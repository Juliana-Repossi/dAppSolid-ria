// instancia do contrato
let SoliContract;

// endereço do contrato e ABI para instanciar o contrato
const Soli_Contract_Address = "0x8bbdB862AfB06F349D8ee0A9B8Ea9f5a7AA9D44b";
const Soli_Contract_ABI = [
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "comprador",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "vendedor",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "item",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "valor",
				"type": "uint256"
			}
		],
		"name": "compradorCancelaCompra",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "comprador",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "vendedor",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "item",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "preco",
				"type": "uint256"
			}
		],
		"name": "compradorRecebeCompra",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "comprador",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "vendedor",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "item",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "valor",
				"type": "uint256"
			}
		],
		"name": "criaCompra",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "string",
				"name": "vendedor",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "item",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "valor",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "comprador",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "bool",
				"name": "situacao",
				"type": "bool"
			}
		],
		"name": "notificaVenda",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "string",
				"name": "vendedor",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "comprador",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "item",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "valor",
				"type": "uint256"
			}
		],
		"name": "pedidoCancelado",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "string",
				"name": "vendedor",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "comprador",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "item",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "preco",
				"type": "uint256"
			}
		],
		"name": "pedidoEnviado",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "codinome",
				"type": "string"
			}
		],
		"name": "recompensaCadastro",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "codinome",
				"type": "string"
			}
		],
		"name": "recompensaOfertaItem",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "string",
				"name": "proprietario",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "saldo",
				"type": "uint256"
			}
		],
		"name": "saldoAlterado",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "string",
				"name": "comprador",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "vendedor",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "item",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "valor",
				"type": "uint256"
			}
		],
		"name": "valorLiberadoVendedor",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "comprador",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "vendedor",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "item",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "preco",
				"type": "uint256"
			}
		],
		"name": "vendedorEnviaCompra",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"name": "compras",
		"outputs": [
			{
				"internalType": "contract Compra",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"name": "saldo",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "codinome",
				"type": "string"
			}
		],
		"name": "SaldoLivreCodinome",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"name": "usuarios",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
]

const usuarioLogado = localStorage.getItem("usuario");

 
// itens para enviar -> localStorage respectivo : itensParaEnviarStorage
var itensParaEnviar = [];
// itens para receber pagamento -> localStorage respectivo : itensParaReceberValorStorage
var itensParaReceberValor = [];
//compras realizadas aguardando envio -> localStorage respectivo : itensAguardandoEnvioStorage
var itensAguardandoEnvio = [];
//compras realizadas aguardando chegada-> localStorage respectivo : itensAguardandoChegadaStorage
var itensAguardandoChegada = [];

var itens = []; 

window.onload = async () => {

	/* 3. Prompt user to sign in to MetaMask */
	const provider = new ethers.providers.Web3Provider(window.ethereum, "goerli");
	provider.send("eth_requestAccounts", []).then(() => {
	provider.listAccounts().then( async (accounts) => {
		const signer = provider.getSigner(accounts[0]);

		/* 3.1 Create instance of Turing smart contract */
		SoliContract = new ethers.Contract(
			Soli_Contract_Address,
			Soli_Contract_ABI,
			signer
		);

	//exibir o saldo do usuario logado
	exibeSaldo();

	//eventos que podem ser ouvidos nessa pag
	confirmaCompra();
	compraEnviadaPeloVendedor();
	compraRecebidaPeloComprador();
	compraCanceladaPeloComprador();

	//monta as tabelas
	montaTabelas();

	atualizaSaldo();

	});
	});
}

window.montaTabelas = async () => {

	let tabelaParaEnviar = document.getElementById("tabela-para-enviar");

    //adicionar produto na lista
    if (localStorage.itensParaEnviarStorage)
    {
        itensParaEnviar = JSON.parse(localStorage.getItem("itensParaEnviarStorage"));
    }

    for(let i=0; i<itensParaEnviar.length;i++){
        //criar cada linha
        let tr = tabelaParaEnviar.insertRow();

        let td_id = tr.insertCell();
        let td_nome = tr.insertCell();
        let td_comprador = tr.insertCell();
        let td_preco = tr.insertCell();

        td_id.innerText = i+1;
        td_nome.innerText = itensParaEnviar[i].nome;
        td_comprador.innerText = itensParaEnviar[i].comprador;
        td_preco.innerText = itensParaEnviar[i].preco;
    }

	let tabelaParaReceberValor = document.getElementById("tabela-receber-valor");

    //adicionar produto na lista
    if (localStorage.itensParaReceberValorStorage)
    {
        itensParaReceberValor = JSON.parse(localStorage.getItem("itensParaReceberValorStorage"));
    }

    for(let i=0; i<itensParaReceberValor.length;i++){
        //criar cada linha
        let tr = tabelaParaReceberValor.insertRow();

        let td_id = tr.insertCell();
        let td_nome = tr.insertCell();
        let td_comprador = tr.insertCell();
        let td_preco = tr.insertCell();

        td_id.innerText = i+1;
        td_nome.innerText = itensParaReceberValor[i].nome;
        td_comprador.innerText = itensParaReceberValor[i].comprador;
        td_preco.innerText = itensParaReceberValor[i].preco;
    }

	let tabelaAguardandoEnvio = document.getElementById("tabela-aguardando-envio");

    if (localStorage.itensAguardandoEnvioStorage)
    {
        itensAguardandoEnvio = JSON.parse(localStorage.getItem("itensAguardandoEnvioStorage"));
    }

    for(let i=0; i<itensAguardandoEnvio.length;i++){

        //criar cada linha
        let tr = tabelaAguardandoEnvio.insertRow();

        let td_id = tr.insertCell();
        let td_nome = tr.insertCell();
        let td_vendedor = tr.insertCell();
        let td_preco = tr.insertCell();

        td_id.innerText = i+1;
        td_nome.innerText = itensAguardandoEnvio[i].nome;
        td_vendedor.innerText = itensAguardandoEnvio[i].vendedor;
        td_preco.innerText = itensAguardandoEnvio[i].preco;
    }

	let tabelaAguardandoChegada = document.getElementById("tabela-para-confirmar-recebimento");

    //adicionar produto na lista
    if (localStorage.itensAguardandoChegadaStorage)
    {
        itensAguardandoChegada = JSON.parse(localStorage.getItem("itensAguardandoChegadaStorage"));
    }

    for(let i=0; i<tabelaAguardandoChegada.length;i++){
        //criar cada linha
        let tr = tabelaAguardandoChegada.insertRow();

        let td_id = tr.insertCell();
        let td_nome = tr.insertCell();
        let td_vendedor = tr.insertCell();
        let td_preco = tr.insertCell();

        td_id.innerText = i+1;
        td_nome.innerText = tabelaAguardandoChegada[i].nome;
        td_vendedor.innerText = tabelaAguardandoChegada[i].vendedor;
        td_preco.innerText = tabelaAguardandoChegada[i].preco;
    }
}

window.exibeSaldo = () => {
	SoliContract.SaldoLivreCodinome(usuarioLogado).then((saldo) =>{
		let meuSaldo = document.getElementById("ExibeSaldo");
		meuSaldo.innerText = saldo;
	})
	.catch((err) =>{
		alert(err);
	})
}

window.confirmaCompra = async () => {

    SoliContract.on("notificaVenda", (vendedor, nome, preco,comprador,estado) => {

		//monta item
		const item = {
			nome: nome,
			preco: parseInt(preco),
			comprador:comprador,
			vendedor: vendedor
		}	

		//vê se a compra é sua - não fiz com indexed pq gasta mais gas
		if(usuarioLogado == vendedor && estado == true)
		{
			//alguem comprou um item seu
			if(localStorage.itensParaEnviarStorage)
			{
				itensParaEnviar = JSON.parse(localStorage.getItem("itensParaEnviarStorage"));
			}

			itensParaEnviar.push(item);
			localStorage.itensParaEnviarStorage = JSON.stringify(itensParaEnviar);	
			
			alert("Você recebeu um pedido");
		}
		else if(usuarioLogado == comprador)
		{
			if(estado == true)
			{
				//compra confirmada
				alert("Sua compra foi confirmada. Agora é só esperar o envio pelo vendedor");

				if(localStorage.itensAguardandoEnvioStorage)
				{
					itensAguardandoEnvio = JSON.parse(localStorage.getItem("itensAguardandoEnvioStorage"));
				}	
				itensAguardandoEnvio.push(item);
				localStorage.itensAguardandoEnvioStorage = JSON.stringify(itensAguardandoEnvio);	
			}
			else
			{
				alert("Seu saldo é insuficiente para essa compra :C Contribua mais com a rede para ganahr mais $oli");
			}
		}
    })
}

//ouvir evento de compra enviada
window.compraEnviadaPeloVendedor = async () => {
    
    SoliContract.on("pedidoEnviado", (vendedor, comprador,item,preco)=>{
		if(usuarioLogado == vendedor)
		{
			//tirar dos itens para enviar e colocar nos itens para receber valor
			if (localStorage.itensParaEnviarStorage)
			{
				itensParaEnviar = JSON.parse(localStorage.getItem("itensParaEnviarStorage"));
			}
			if (localStorage.itensParaReceberValorStorage)
			{
				itensParaReceberValor = JSON.parse(localStorage.getItem("itensParaReceberValorStorage"));
			}
			//remove item da lista 
			const itemRemovido = itensParaEnviar.splice(itensParaEnviar.find((itemArray) => itemArray.nome === item), 1);

			localStorage.itensParaEnviarStorage = JSON.stringify(itensParaEnviar);

			//coloca ele na 2º lista
			itensParaReceberValor.push(itemRemovido);
			localStorage.itensParaReceberValorStorage = JSON.stringify(itensParaReceberValor);	

			alert("Pedido enviado com sucesso. Você ganhou 30 $oli pelo compromisso!");
		}
		else if(usuarioLogado == comprador)
		{
			//tirar dos itens aguardando envio e colocar nos itens a confirmar recebimento
			if (localStorage.itensAguardandoEnvioStorage)
			{
				itensAguardandoEnvio = JSON.parse(localStorage.getItem("itensAguardandoEnvioStorage"));
			}
			if (localStorage.itensAguardandoChegadaStorage)
			{
				itensAguardandoChegada = JSON.parse(localStorage.getItem("itensAguardandoChegadaStorage"));
			}

			//remove item da 1 lista 
			const itemRemovido = itensAguardandoEnvio.splice(itensAguardandoEnvio.find((itemArray) => itemArray.nome === item), 1);

			localStorage.itensAguardandoEnvioStorage = JSON.stringify(itensAguardandoEnvio);

			//coloca ele na 2 lista
			itensAguardandoChegada.push(itemRemovido);
			localStorage.itensAguardandoChegadaStorage = JSON.stringify(itensAguardandoChegada);
			
			alert("Seu pedido foi enviado pelo vendedor!");
		}
	})		
}

//ouvir evento de compra recebida
window.compraRecebidaPeloComprador = async () => {
    
    SoliContract.on("valorLiberadoVendedor", (comprador, vendedor, item,preco)=>{
		//tirar das listas itens para itensParaReceberValor e itensAguardandoChegada
		if(usuarioLogado == vendedor)
		{
			//tirar dos itens para enviar e colocar nos itens para receber valor
			if (localStorage.itensParaReceberValorStorage)
			{
				itensParaReceberValor = JSON.parse(localStorage.getItem("itensParaReceberValorStorage"));
			}

			//remove item da 1 lista 
			itensParaReceberValor.splice(itensParaReceberValor.find((itemArray) => itemArray.nome === item), 1);

			localStorage.itensParaReceberValorStorage = JSON.stringify(itensParaReceberValor);

			alert("Você recebeu " + preco + " $oli, pelo produto " + item + ".Parabéns pela venda!" );

		}
		else if(usuarioLogado == comprador)
		{
			//tirar dos itens aguardando chegada
			if (localStorage.itensAguardandoChegadaStorage)
			{
				itensAguardandoChegada = JSON.parse(localStorage.getItem("itensAguardandoChegadaStorage"));
			}

			//remove item da 1 lista 
			itensAguardandoChegada.splice(itensAguardandoChegada.find((itemArray) => itemArray.nome === item), 1);

			localStorage.itensAguardandoChegadaStorage = JSON.stringify(itensAguardandoChegada);
			
			alert("Obrigada por confirmar a chegada do seu item. De presente você recebe 30 $oli")
		}
	})
		
}

//ouvir evento de compra recebida
window.compraCanceladaPeloComprador = async () => {
    
    SoliContract.on("pedidoCancelado", (vendedor, comprador,item,preco)=>{
		//tirar das listas itens para itensParaReceberValor e itensAguardandoChegada
		if(usuarioLogado == vendedor)
		{
			//esta na lista de itens a receber
			if (localStorage.itensParaReceberValorStorage)
			{
				itensParaReceberValor = JSON.parse(localStorage.getItem("itensParaReceberValorStorage"));
			}

			itensParaReceberValor.splice(itensParaReceberValor.find((itemArray) => itemArray.nome === item),1);
			localStorage.itensParaReceberValorStorage = JSON.stringify(itensParaReceberValor);

			alert("O pedido: " + item + "foi cancelado pelo comprador" );

		}
		else if(usuarioLogado == comprador)
		{
			
			//esta na lista de itens a receber
			if (localStorage.itensAguardandoChegadaStorage)
			{
				itensAguardandoChegada = JSON.parse(localStorage.getItem("itensAguardandoChegadaStorage"));
			}

			itensAguardandoChegada.splice(itensAguardandoChegada.find((itemArray) => itemArray.nome === item),1);
			localStorage.itensAguardandoChegadaStorage = JSON.stringify(itensAguardandoChegada);			

			alert("O pedido de cancelamento do " + item + "foi efetuado!" );
		}
	})
		
}

window.atualizaSaldo = async () => {
	SoliContract.on("saldoAlterado",(codinome,saldo)=>{
		//verifica se foi o seu saldo que mudou
		if(usuarioLogado == codinome)
		{
			let saldoAtual = document.getElementById("ExibeSaldo");
			saldoAtual.innerText = saldo;
		}
	})
}

const botaoEnvio = document.querySelector("#enviar");

const confirmarEnvio = () => {

	//pegar o n digitado
	const num = (document.querySelector("#enviar-esse-item")).value - 1;

	const itemEnviado = itensParaEnviar[num];


    SoliContract.vendedorEnviaCompra(itemEnviado.comprador,itemEnviado.vendedor,itemEnviado.nome,itemEnviado.preco).then(() => {
		
		alert("Você enviou o " + itemEnviado.nome );
	})
	.catch((err) => {
	// If error occurs, display error message
		alert(err);
	});        
} 

botaoEnvio.addEventListener("click", confirmarEnvio);

const botaoConfirmaRecebimento = document.querySelector("#Recebi");

const confirmarRecebimentoItem = () => {

	//pegar o item
	const num = (document.querySelector("#esse-item").value) - 1;

	const itemRecebido = itensAguardandoChegada[num];

    SoliContract.compradorRecebeCompra(itemRecebido.comprador,itemRecebido.vendedor,itemRecebido.nome,itemRecebido.preco).then(() => {
		
		alert("confirmou o recebimento do item: " + itemRecebido.nome );
	})
	.catch((err) => {
	// If error occurs, display error message
		alert(err);
	});        
} 

botaoConfirmaRecebimento.addEventListener("click", confirmarRecebimentoItem);

const botaoCancelaCompra = document.querySelector("#Cancelar");

const cancelarCompra = () => {

	//pegar o item
	const nItem = document.querySelector("#esse-item").value - 1;
	const itemCancelado = itensAguardandoChegada[nItem];

    SoliContract.compradorCancelaCompra(itemCancelado.comprador,itemCancelado.vendedor,itemCancelado.nome,itemCancelado.preco).then(() => {
		
		alert("Você cancelou o item: " + itemCancelado.nome );
	})
	.catch((err) => {
	// If error occurs, display error message
		alert(err);
	});        
} 

botaoCancelaCompra.addEventListener("click", cancelarCompra);
