# Frontend para Gerenciamento de Cursos

Bem-vindo ao frontend para gerenciamento de cursos! Este projeto é uma aplicação web desenvolvida com [Next.js](https://nextjs.org/docs) para interagir com a API de backend de gerenciamento de cursos e carrinho de compras.

## Atenção
O servidor utilizado para o backend e armazenamento do banco de dados é hospedado na Render com uma licença gratuita. Devido a isso, pode haver momentos em que o servidor entra em hibernação, fazendo com que a primeira requisição demore a ser respondida, mas após a primeira requisição, o servidor encerra seu ciclo de hibernação e começa a funcionar de forma satisfatória e eficiente.

## Link para o Site Deployado

Acesse a aplicação frontend implantada através do seguinte link:

[https://gerenciamento-de-cursos-frontend.vercel.app/]
## URL Base do Backend

Para que o frontend funcione corretamente, você precisará do backend disponível no seguinte link:

[https://gerenciamento-de-cursos-backend.onrender.com]

## Funcionalidades

- **Login de Usuário:** É necessário inserir apenas o nome, sem cadastrar senha. O sistema salvará seu nome no banco de dados e armazenará suas informações de compra e carrinho.

- **Visualização de Cursos:** Exibe uma lista de cursos disponíveis e, ao clicar em um curso, permite aos usuários visualizar detalhes mmais precisos de cada curso.

- **Cadastro de Cursos:** Permite aos usuários adicionar novos cursos à plataforma, inserindo informações como nome, link para imagem, preço, preço com desconto, total de horas do curso e uma descrição detalhada do que será aprendido.

- **Gerenciamento do Carrinho:** É possível adicionar vários cursos ao carrinho de compra, removê-los e finalizar a compra, mudando o status para comprado.


## Requisitos

- **Node.js**: Certifique-se de ter o Node.js instalado. Recomendado a versão LTS.
- **npm** ou **yarn**: Gerenciador de pacotes para instalar as dependências.

## Instalação

1. Clone o repositório:

   ```bash
   git clone https://github.com/FelipeMedeiros99/Gerenciamento-de-cursos-frontend.git(https://github.com/FelipeMedeiros99/Gerenciamento-de-cursos-frontend.git)

2. Navegue até o diretório do projeto:
    
    cd plataforma-cursos-frontend


3. Instale as dependências:

    npm install
    ou
    yarn install


## Configuração 

1. Crie um arquivo .env na raiz do projeto e adicione a URL base do backend:
    
    NEXT_PUBLIC_LINK_SERVER=https://gerenciamento-de-cursos-backend.onrender.com

## Uso

1. Inicie o servidor de desenvolvimento:
    
    npm start
    # ou
    yarn start

2. Abra seu navegador e acesse http://localhost:3000 para visualizar a aplicação.

## Rotas utilizadas

- **/** É a tela inicial de login, onde o usuário deverá informar o seu nome

- **/cursos** Tela principal, onde ficam todos os cursos cadastrados no sistema

- **/curso/id?...** Tela de detalhes do curso, utiliza-se as querys para pegar as informações do curso 

- **/cadastrar**  Tela de cadastro, para inserir um novo curso no sistema

- **/cadastrar?nome=""...** Tela de edição, segue a mesma rota da tela de cadastro, mas utiliza-se as querys para pegar as informações. É enviado o id do carrinho para o servidor para ser feita a manipulação no banco de dados

- **/Carrinho** Tela onde ficam os cursos que o usuário adicionou. Podem ser feitas operações de compra (fechar pedido) e de remoção. Ao efetuar qualquer uma dessas operações, o status do produto muda, ou ele some do carrinho, respectivamente.


## Documentação do backen

https://github.com/FelipeMedeiros99/Gerenciamento-de-cursos-backend.git
