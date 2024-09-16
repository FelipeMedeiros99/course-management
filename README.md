# Frontend para Gerenciamento de Cursos

Bem-vindo ao frontend para gerenciamento de cursos! Este projeto é uma aplicação web desenvolvida com [Next.js](https://nextjs.org/docs) para interagir com a API de backend de gerenciamento de cursos e carrinho de compras.

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
   git clone https://github.com/SEU_USUARIO/REPOSITORIO_FRONTEND.git

2. Navegue até o diretório do projeto:
    
    cd REPOSITORIO_FRONTEND


3. Instale as dependências:

    npm install
    # ou
    yarn install


## Configuração 

1. Crie um arquivo .env na raiz do projeto e adicione a URL base do backend:
    
    REACT_APP_BACKEND_URL=https://gerenciamento-de-cursos-backend.onrender.com
