// 1. Declare global variable to store the smart contract instance
let SoliContract;

// 2. Set contract address and ABI
const Soli_Contract_Address = "0xa698722a18b46f6999ac6bd682c584022b3c6ab5";
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
				"internalType": "uint256",
				"name": "valor",
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
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
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
				"name": "vendedor",
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
		"name": "SaldoBlockCodinome",
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

/* 3. Prompt user to sign in to MetaMask */
const provider = new ethers.providers.Web3Provider(window.ethereum, "goerli");
provider.send("eth_requestAccounts", []).then(() => {
  provider.listAccounts().then((accounts) => {
    const signer = provider.getSigner(accounts[0]);

    /* 3.1 Create instance of Turing smart contract */
    SoliContract = new ethers.Contract(
        Soli_Contract_Address,
        Soli_Contract_ABI,
        signer
    );
  });
});

var itens = [];

function recuperarItemSelecionado()
{
    if (localStorage.item)
    {
        nItem = JSON.parse(localStorage.getItem("item"));
    }

    if (localStorage.listaItens)
    {
        itens = JSON.parse(localStorage.getItem("listaItens"));
    }

    return itens[nItem];
}

window.onload = function listaTabela() {

    let tabela = document.getElementById("tabela");

    let tr = tabela.insertRow();

    let td_nome = tr.insertCell();
    let td_descricao = tr.insertCell();
    let td_tipo = tr.insertCell();
    let td_preco = tr.insertCell();

    itemEscolhido = recuperarItemSelecionado();

    td_nome.innerText = itemEscolhido.nome;
    td_descricao.innerText = itemEscolhido.descricao;
    td_tipo.innerText = itemEscolhido.tipo;
    td_preco.innerText = itemEscolhido.preco;

};

const botaoSaldo = document.querySelector("#VerSaldo");

const exibeSaldo = () => {

	//usuario logado
	usr = localStorage.getItem("usuario");

    SoliContract.SaldoLivreCodinome(usr).then((res) => {
		
		let saldoAtual = document.getElementById("ExibeSaldo");
		
		saldoAtual.innerText = res;
	})
	.catch((err) => {
	// If error occurs, display error message
		alert("Erro ao cadastrar usuário");
	});        
} 


botaoSaldo.addEventListener("click", exibeSaldo);

const botaoSolicitar = document.querySelector("#solicitar");

let pendentes = [];

const solicitaItem = () => {

	//usuario logado
	comprador = localStorage.getItem("usuario");
	//item solicitado
	item = recuperarItemSelecionado();

	const itemSolicitado = {
		comprador: comprador,
		vendedor: item.dono,
		nome: item.nome,
		preco: item.preco
	}

    SoliContract.criaCompra(comprador,item.dono,item.nome,item.preco).then(() => {
		
		alert("Solicitação de compra feita com sucesso! Aguarde a aprovação.");
		if (localStorage.solicitacoesPendentes)
		{
			pendentes = JSON.parse(localStorage.getItem("solicitacoesPendentes"));
		}
		pendentes.push(itemSolicitado);
		localStorage.solicitacoesPendentes = JSON.stringify(pendentes);

		//direciona para a pag perfim
        window.location.href = "../Perfil/perfil.html"
	})
	.catch((err) => {
	// If error occurs, display error message
		alert(err);
	});      
} 


botaoSolicitar.addEventListener("click", solicitaItem);