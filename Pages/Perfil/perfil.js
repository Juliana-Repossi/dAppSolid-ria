// instancia do contrato
let SoliContract;

// endereço do contrato e ABI para instanciar o contrato
const Soli_Contract_Address = "0xDB6F2793187C3cAF5a1c8dd04327bba87c4E06BB";
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
			},
			{
				"internalType": "uint256",
				"name": "idItem",
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
				"name": "comprador",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "idItem",
				"type": "uint256"
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

 
// itens para enviar -> localStorage respectivo : itensParaEnviar+codinome
var itensParaEnviar = [];
var itensParaEnviarNome = "itensParaEnviar" + usuarioLogado;
// itens para receber pagamento -> localStorage respectivo : itensParaReceberValor+codinome
var itensParaReceberValor = [];
var itensParaReceberValorNome = "itensParaReceberValor" + usuarioLogado;
//compras realizadas aguardando envio -> localStorage respectivo : itensAguardandoEnvio+codinome
var itensAguardandoEnvio = [];
var itensAguardandoEnvioNome = "itensAguardandoEnvio" + usuarioLogado;
//compras realizadas aguardando chegada-> localStorage respectivo : itensAguardandoChegada+codinome
var itensAguardandoChegada = [];
var itensAguardandoChegadaNome = "itensAguardandoChegada" + usuarioLogado;

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
	

	atualizaSaldo();

	});
	});
	montaTabelas();
}

window.montaTabelas = async () => {

	let tabelaParaEnviar = document.getElementById("tabela-para-enviar");

    //adicionar produto na lista
    if (localStorage.getItem(itensParaEnviarNome) != null)
    {
        itensParaEnviar = JSON.parse(localStorage.getItem(itensParaEnviarNome));
    }

	//limpa dados antigos da tabela
	while (tabelaParaEnviar.rows.length > 0)
	{ 
		tabelaParaEnviar.deleteRow(0); 
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
    if (localStorage.getItem(itensParaReceberValorNome) != null)
    {
        itensParaReceberValor = JSON.parse(localStorage.getItem(itensParaReceberValorNome));
    }

	//limpa dados antigos da tabela
	while (tabelaParaReceberValor.rows.length > 0)
	{ 
		tabelaParaReceberValor.deleteRow(0); 
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

    if (localStorage.getItem(itensAguardandoEnvioNome) != null)
    {
        itensAguardandoEnvio = JSON.parse(localStorage.getItem(itensAguardandoEnvioNome));
    }

	//limpa dados antigos da tabela
	while (tabelaAguardandoEnvio.rows.length > 0)
	{ 
		tabelaAguardandoEnvio.deleteRow(0); 
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
    if (localStorage.getItem(itensAguardandoChegadaNome) != null)
    {
        itensAguardandoChegada = JSON.parse(localStorage.getItem(itensAguardandoChegadaNome));
    }

	//limpa dados antigos da tabela
	while (tabelaAguardandoChegada.rows.length > 0)
	{ 
		tabelaAguardandoChegada.deleteRow(0); 
	}

    for(let i=0; i<itensAguardandoChegada.length;i++){
        //criar cada linha
        let tr = tabelaAguardandoChegada.insertRow();

        let td_id = tr.insertCell();
        let td_nome = tr.insertCell();
        let td_vendedor = tr.insertCell();
        let td_preco = tr.insertCell();

        td_id.innerText = i+1;
        td_nome.innerText = itensAguardandoChegada[i].nome;
        td_vendedor.innerText = itensAguardandoChegada[i].vendedor;
        td_preco.innerText = itensAguardandoChegada[i].preco;
    }
}

function recuperaItemId(id)
{
	itens =  JSON.parse(localStorage.getItem("listaItens"));
	return itens[id];
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

    SoliContract.on("notificaVenda", (vendedor,comprador,idItem,estado) => {

		if(estado == true)
		{
			//pegar item
			const itemComprado = recuperaItemId(parseInt(idItem));

			const venda = {
				id: itemComprado.id,
				nome: itemComprado.nome,
				preco: itemComprado.preco,
				vendedor: vendedor,
				comprador: comprador				
			}

			//if - ao inves de if - else : ajuste para conseguir testar - limitação do localStorage
			if(usuarioLogado == vendedor)
			{
				//alguem comprou um item seu
				if(localStorage.getItem(itensParaEnviarNome) != null)
				{
					itensParaEnviar = JSON.parse(localStorage.getItem(itensParaEnviarNome));
				}
				else
				{
					itensParaEnviar = [];
				}

				itensParaEnviar.push(venda);
				localStorage.setItem(itensParaEnviarNome,JSON.stringify(itensParaEnviar));
				
				alert("Você recebeu um pedido");

			}
			if(usuarioLogado == comprador)
			{
				//compra confirmada
				if(localStorage.getItem(itensAguardandoEnvioNome) != null)
				{
					itensAguardandoEnvio = JSON.parse(localStorage.getItem(itensAguardandoEnvioNome));
				}
				else
				{
					itensAguardandoEnvio = [];
				}
					
				itensAguardandoEnvio.push(venda);
				localStorage.setItem(itensAguardandoEnvioNome,JSON.stringify(itensAguardandoEnvio));	
				alert("Sua compra foi confirmada. Agora é só esperar o envio pelo vendedor");
			}
		}
		else
		{
			if(usuarioLogado == comprador)
			{
				alert("Seu saldo é insuficiente para essa compra :C Contribua mais com a rede para ganahr mais $oli");
			}
		}
		montaTabelas();
    })
}

//ouvir evento de compra enviada
window.compraEnviadaPeloVendedor = async () => {
    
    SoliContract.on("pedidoEnviado", (vendedor, comprador,item,preco)=>{
		if(usuarioLogado == vendedor)
		{
			//tirar dos itens para enviar e colocar nos itens para receber valor
			if (localStorage.getItem(itensParaEnviarNome) != null)
			{
				itensParaEnviar = JSON.parse(localStorage.getItem(itensParaEnviarNome));
			}
			if (localStorage.getItem(itensParaReceberValorNome) != null)
			{
				itensParaReceberValor = JSON.parse(localStorage.getItem(itensParaReceberValorNome));
			}
		
			//remove item da lista 
			const itemRemovido = itensParaEnviar.splice(itensParaEnviar.find((itemArray) => itemArray.nome === item), 1);

			localStorage.setItem(itensParaEnviarNome, JSON.stringify(itensParaEnviar));

			//coloca ele na 2º lista
			itensParaReceberValor.push(itemRemovido[0]);
			localStorage.setItem(itensParaReceberValorNome, JSON.stringify(itensParaReceberValor));

			alert("Pedido enviado com sucesso. Você ganhou 30 $oli pelo compromisso!");
		}
		if(usuarioLogado == comprador)
		{
			//tirar dos itens aguardando envio e colocar nos itens a confirmar recebimento
			if (localStorage.getItem(itensAguardandoEnvioNome) != null)
			{
				itensAguardandoEnvio = JSON.parse(localStorage.getItem(itensAguardandoEnvioNome));
			}
			if (localStorage.getItem(itensAguardandoChegadaNome) != null)
			{
				itensAguardandoChegada = JSON.parse(localStorage.getItem(itensAguardandoChegadaNome));
			}

			//remove item da 1 lista 
			const  itemRemovido =  itensAguardandoEnvio.splice(itensAguardandoEnvio.find((itemArray) => itemArray.nome === item), 1);

			localStorage.setItem(itensAguardandoEnvioNome,JSON.stringify(itensAguardandoEnvio));

			//coloca ele na 2 lista
			itensAguardandoChegada.push(itemRemovido[0]);
			localStorage.setItem(itensAguardandoChegadaNome, JSON.stringify(itensAguardandoChegada));
			
			alert("Seu pedido foi enviado pelo vendedor!");
		}
		montaTabelas();
	})		
}

//ouvir evento de compra recebida
window.compraRecebidaPeloComprador = async () => {
    
    SoliContract.on("valorLiberadoVendedor", (comprador, vendedor, item,preco)=>{
		//tirar das listas itens para itensParaReceberValor e itensAguardandoChegada
		if(usuarioLogado == vendedor)
		{
			//tirar dos itens para receber valor
			if (localStorage.getItem(itensParaReceberValorNome) != null)
			{
				itensParaReceberValor = JSON.parse(localStorage.getItem(itensParaReceberValorNome));
			}

			//remove item da 1 lista 
			itensParaReceberValor.splice(itensParaReceberValor.find((itemArray) => itemArray.nome === item), 1);

			localStorage.setItem(itensParaReceberValorNome,JSON.stringify(itensParaReceberValor));

			alert("Você recebeu " + preco + " $oli, pelo produto " + item + ".Parabéns pela venda!" );

		}
		if(usuarioLogado == comprador)
		{
			//tirar dos itens aguardando chegada
			if (localStorage.getItem(itensAguardandoChegadaNome) != null)
			{
				itensAguardandoChegada = JSON.parse(localStorage.getItem(itensAguardandoChegadaNome));
			}

			//remove item da 1 lista 
			itensAguardandoChegada.splice(itensAguardandoChegada.find((itemArray) => itemArray.nome === item), 1);

			localStorage.setItem(itensAguardandoChegadaNome,JSON.stringify(itensAguardandoChegada));
			
			alert("Obrigada por confirmar a chegada do seu item. De presente você recebe 30 $oli")
		}
		montaTabelas();	
	})
}

//ouvir evento de compra recebida
window.compraCanceladaPeloComprador = async () => {
    
    SoliContract.on("pedidoCancelado", (vendedor, comprador,item,preco)=>{
		//tirar das listas itens para itensParaReceberValor e itensAguardandoChegada
		if(usuarioLogado == vendedor)
		{
			//esta na lista de itens a receber
			if (localStorage.getItem(itensParaReceberValorNome) != null)
			{
				itensParaReceberValor = JSON.parse(localStorage.getItem(itensParaReceberValorNome));
			}

			itensParaReceberValor.splice(itensParaReceberValor.find((itemArray) => itemArray.nome === item),1);
			localStorage.setItem(itensParaReceberValorNome,JSON.stringify(itensParaReceberValor));

			alert("O pedido: " + item + "foi cancelado pelo comprador. Sentimos muito :.C" );

		}
		if(usuarioLogado == comprador)
		{
			//esta na lista de itens a receber
			if (localStorage.getItem(itensAguardandoChegadaNome) != null)
			{
				itensAguardandoChegada = JSON.parse(localStorage.getItem(itensAguardandoChegadaNome));
			}

			itensAguardandoChegada.splice(itensAguardandoChegada.find((itemArray) => itemArray.nome === item),1);
			localStorage.setItem(itensAguardandoChegadaNome,JSON.stringify(itensAguardandoChegada));			

			alert("O pedido de cancelamento do " + item + "foi efetuado!" );
		}
		montaTabelas();
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

function verificaFaixaValores(array,id)
{
	if(id > 0 && id <= array.length)
	{
		return true;
	}
	alert("Número escolhido é inválido");
	return false;
}


const botaoEnvio = document.querySelector("#enviar");

const confirmarEnvio = () => {

	//pegar o n digitado
	const idRecebido = document.querySelector("#enviar-esse-item");
	const id = idRecebido.value;

	//pegar item respectivo
	if(localStorage.getItem(itensParaEnviarNome) != null)
	{
		itensParaEnviar = JSON.parse(localStorage.getItem(itensParaEnviarNome));
	}

	//verificar faixa de valores
	if(verificaFaixaValores(itensParaEnviar,id))
	{
		const itemEnviado = itensParaEnviar[id-1];

		SoliContract.vendedorEnviaCompra(itemEnviado.comprador,itemEnviado.vendedor,itemEnviado.nome,itemEnviado.preco).then(() => {
			
			alert("Você enviou o item: " + itemEnviado.nome );
		})
		.catch((err) => {
		// If error occurs, display error message
			alert(err);
		});
	}
	idRecebido.value = "";
} 

botaoEnvio.addEventListener("click", confirmarEnvio);

const botaoConfirmaRecebimento = document.querySelector("#Recebi");

const confirmarRecebimentoItem = () => {

	//pegar o item
	const numInput = document.querySelector("#esse-item");
	const num = numInput.value;

	//pegar item respectivo
	if(localStorage.getItem(itensAguardandoChegadaNome) != null)
	{
		itensAguardandoChegada = JSON.parse(localStorage.getItem(itensAguardandoChegadaNome));
	}

	if(verificaFaixaValores(itensAguardandoChegada,num))
	{
		const itemRecebido = itensAguardandoChegada[num-1];

		SoliContract.compradorRecebeCompra(itemRecebido.comprador,itemRecebido.vendedor,itemRecebido.nome,itemRecebido.preco).then(() => {
			alert("confirmou o recebimento do item: " + itemRecebido.nome );
		})
		.catch((err) => {	
			alert(err);
		});    
	}
	numInput.value = "";    
} 

botaoConfirmaRecebimento.addEventListener("click", confirmarRecebimentoItem);

const botaoCancelaCompra = document.querySelector("#Cancelar");

const cancelarCompra = () => {

	//pegar o item
	const numInput = document.querySelector("#esse-item");
	const num = numInput.value;

	//pegar item respectivo
	if(localStorage.getItem(itensAguardandoChegadaNome) != null)
	{
		itensAguardandoChegada = JSON.parse(localStorage.getItem(itensAguardandoChegadaNome));
	}

	if(verificaFaixaValores(itensAguardandoChegada,num))
	{
		//pegar o item
		const itemCancelado = itensAguardandoChegada[num - 1];

		SoliContract.compradorCancelaCompra(itemCancelado.comprador,itemCancelado.vendedor,itemCancelado.nome,itemCancelado.preco).then(() => {
			
			alert("Você cancelou o item: " + itemCancelado.nome );
		})
		.catch((err) => {
		// If error occurs, display error message
			alert(err);
		});  
	}
	numInput.value = "";
} 

botaoCancelaCompra.addEventListener("click", cancelarCompra);
