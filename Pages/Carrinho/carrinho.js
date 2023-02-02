// 1. Declare global variable to store the smart contract instance
let SoliContract;

// endereço do contrato e ABI para instanciar o contrato nas páginas
const Soli_Contract_Address = "0x45b801c1F32661A6218A9e7bFF9A44779f1800B6";
const Soli_Contract_ABI = [
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
	}
]

const usuarioLogado = localStorage.getItem("usuario");

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
		atualizaSaldo();
	});
	});

	let tabela = document.getElementById("tabela");

    let tr = tabela.insertRow();

    let td_nome = tr.insertCell();
    let td_descricao = tr.insertCell();
    let td_tipo = tr.insertCell();
    let td_preco = tr.insertCell();
	let td_vendedor = tr.insertCell();

    const itemEscolhido = recuperarItemSelecionado();

    td_nome.innerText = itemEscolhido.nome;
    td_descricao.innerText = itemEscolhido.descricao;
    td_tipo.innerText = itemEscolhido.tipo;
    td_preco.innerText = itemEscolhido.preco;
	td_vendedor.innerText = itemEscolhido.vendedor;

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

function recuperarItemSelecionado()
{
    if (localStorage.item)
    {
        var nItem = JSON.parse(localStorage.getItem("item"));
    }

    if (localStorage.listaItens)
    {
        itens = JSON.parse(localStorage.getItem("listaItens"));
    }

    return itens[nItem];
}

const botaoSolicitar = document.querySelector("#solicitar");

const solicitaItem = () => {

	
	//item solicitado
	const item = recuperarItemSelecionado();

	//Somente a modalidade de compra/venda efetuada
	if(item.tipo == "venda")
	{
		SoliContract.criaCompra(usuarioLogado,item.vendedor,item.nome,item.preco,item.id).then(() => {
		
			alert("Solicitação de compra feita com sucesso! Aguarde a aprovação.");
	
			//direciona para a pag perfim
			window.location.href = "../Perfil/perfil.html"
		})
		.catch((err) => {
		// If error occurs, display error message
			alert(err);
		});  
		return;
	}
	//implementar aluguel
	//implementar doação
	//implementar serviço
} 

botaoSolicitar.addEventListener("click", solicitaItem);