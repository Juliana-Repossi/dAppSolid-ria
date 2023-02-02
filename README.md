Informações importantes sobre esse projeto

O projeto consiste em uma dApp que implementa uma rede de colaboração mútua. Esse rede de colaboração usa blockchain para promover confiabilidade do sistema. Assim, há as modalidades de compra, venda, aluguel e doação de itens, imóveis e etc. A ideia é de que toda essas transações sejam feitas com recursos inernos a plataforma e que seus usuários se comportem da melhor maneira, atráves de um sistema de recompensas e histórico fiel, já que as transações feitas por um usuário estarão cunhadas "em pedras" por um sistema de contrato inteligente que usa Blockchain.



Como esse projeto desenvolvido por um curto periodo de tempo - entre duas e três semanas, para uma disciplina optativa de Blockchain do curso de Ciência da Computação da UFES.

--Pontos que poderiam ser melhorados:

- O contrato usa criptomoeda, porém não utilizou o padrão com  ERC20 de início, pois ainda não conhecia as funções com payable;
- O app usa o localStorage para armazenamento de dados, em vez de um banco, devido ao prazo do projeto e seu escopo;
- Usa contratos inteligentes para implementar uma rede colaborativa, porém apenas a função venda foi coberta pela Contract Factory;
- Limitação da modalidade de compra: apenas uma compra entre o par (comprador,vendedor) é realizada por vez;
- Devido a problemas com o import e export do js dados de ABI e endereço do contrato estão duplicados em todas as páginas js necessárias;
- Caberia mais funcionalidades e integrações, mas o projeto desenvolvido até então é um MVP. E validações triviais como de CPF, ou criptografia de senhas, não foram implementadas a fim de garantir foco no proposto pelo trabalho final da disciplina.
- Como foi feito com localStorage alguns ajustes e limitações foram aplicadas na captura de eventos


Para executar basta usar a extensao 'liveServer' o arquivo index.html e possuir uma conta no MetaMask na rede de teste Goerli.