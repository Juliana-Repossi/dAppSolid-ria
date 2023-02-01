// instancia do contrato
let SoliContract;

// endereço do contrato e ABI para instanciar o contrato
const Soli_Contract_Address = "0x7267Ff37a2fbf5E9884c48ED121F9CA38Fe2f420";
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

var itens = [];

window.onload = async () => {

	const usuarioLogado = localStorage.getItem("usuario");

	/* 3. Prompt user to sign in to MetaMask */
	const provider = new ethers.providers.Web3Provider(window.ethereum, "goerli");
	provider.send("eth_requestAccounts", []).then(() => {
	provider.listAccounts().then(async(accounts) => {
		const signer = provider.getSigner(accounts[0]);

		/* 3.1 Create instance of Turing smart contract */
		SoliContract = new ethers.Contract(
			Soli_Contract_Address,
			Soli_Contract_ABI,
			signer
		);

	//eventos que podem ser ouvidos nessa pag
	atualizaSaldo(usuarioLogado);

	//exibir o saldo do usuario logado
	exibeSaldo(usuarioLogado);

	});
	});

	let tabela = document.getElementById("tabela");

    //adicionar produto na lista
    if (localStorage.listaItens)
    {
        itens = JSON.parse(localStorage.getItem("listaItens"));
    }

    for(let i=0; i<itens.length;i++){
        //criar cada linha
        let tr = tabela.insertRow();

        let td_id = tr.insertCell();
        let td_nome = tr.insertCell();
        let td_descricao = tr.insertCell();
        let td_tipo = tr.insertCell();
        let td_preco = tr.insertCell();
		let td_vendedor = tr.insertCell();

        td_id.innerText = i+1;
        td_nome.innerText = itens[i].nome;
        td_descricao.innerText = itens[i].descricao;
        td_tipo.innerText = itens[i].tipo;
        td_preco.innerText = itens[i].preco;
		td_vendedor.innerText = itens[i].vendedor;
    }

}


window.atualizaSaldo = async (usuarioLogado) => {
	SoliContract.on("saldoAlterado",(codinome,saldo)=>{
		//verifica se foi o seu saldo que mudou
		if(usuarioLogado == codinome)
		{
			let saldoAtual = document.getElementById("ExibeSaldo");
			saldoAtual.innerText = saldo;
		}
	})
}

window.exibeSaldo = (usuarioLogado) => {
	SoliContract.SaldoLivreCodinome(usuarioLogado).then((saldo) =>{
		let meuSaldo = document.getElementById("ExibeSaldo");
		meuSaldo.innerText = saldo;
	})
	.catch((err) =>{
		alert(err);
	})
}


const botaoSolicitar = document.querySelector("#solicitar");

const SolicitaItem = () => {
    
    const itemEscolhido = document.querySelector("#itemSelecionado");
    const nItem = itemEscolhido.value;
    //ver se esta no intervalo
    if(nItem > 0 && nItem <= itens.length)
	{
		localStorage.setItem("item",nItem-1); 

		//direciona para a pag home
		window.location.href = "../Carrinho/carrinho.html"
    }
    else
    {
        alert("Produto inválido");
		itemEscolhido.value = "";
    }
}

botaoSolicitar.addEventListener("click",SolicitaItem);