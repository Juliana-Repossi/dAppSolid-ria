# dApp Solidaria

Aplicação de um desapego descentralizado e seguro que usa smart contracts e blockchain.


## Informações importantes sobre esse projeto

O projeto consiste em uma dApp que implementa uma rede de colaboração mútua. Essa rede de colaboração usa blockchain para promover confiabilidade do sistema. Assim, há no app as modalidades de compra, venda, aluguel e doação de itens, imóveis e etc. A ideia é de que toda essas transações sejam feitas com recursos(moedas) da própria plataforma e que seus usuários se comportem da melhor maneira, atráves de um sistema de recompensas e histórico fiel, já que as transações feitas por um usuário estarão cunhadas "em pedra" por um sistema de contrato inteligente que usa Blockchain.


Como esse projeto desenvolvido por um curto periodo de tempo - entre duas e três semanas, para uma disciplina optativa de Blockchain do curso de Ciência da Computação da UFES, ele tem algumas limitações e pontos que podem ser melhorados, como:

- O contrato usa criptomoeda, porém não utilizou o padrão com  ERC20 de início, pois ainda não conhecia as funções payable;
- O app usa o localStorage para armazenamento de dados, em vez de um banco, devido ao prazo do projeto e seu escopo;
- Usa contratos inteligentes para implementar uma rede colaborativa, porém apenas a função venda foi coberta pela Contract Factory;
- Devido a problemas com o import e export do js os dados "ABI" e "endereço do contrato" estão duplicados em todas as páginas js necessárias;
- Caberia mais funcionalidades e integrações, mas o projeto desenvolvido até então é um MVP. E validações triviais como de CPF, ou criptografia de senhas, não foram implementadas a fim de garantir foco no proposto pelo trabalho final da disciplina.
- Como foi feito com localStorage alguns ajustes e limitações foram aplicados principalmente nos códigos de captura de eventos, para que fosse possível visualizar os crítérios pedidos pelo projeto da disciplina.


Para executar basta usar a extensao 'liveServer' no arquivo index.html e possuir uma conta no MetaMask na rede de teste Goerli.
