<h1 align="center">
  <img src="https://res.cloudinary.com/dhqnvbd52/image/upload/v1595975364/GoFinances/logo.408488e0_qpx4dy.svg" width="400"/>
</h1>

<p align="center">
🚀Aplicação de gerenciamento de transações para treinar o Node.js com o Typecript, o banco    de dados com o TypeORM e os arquivos de envio com o Multer.
</p>

## Tabela de conteúdos 

<p align="center">
 <a href="#objetivo">Objetivo</a> •
 <a href="#roadmap">Roadmap</a> • 
 <a href="#tecnologias">Tecnologias</a> • 
 <a href="#contribuicao">Contribuição</a> • 
 <a href="#licenc-a">Licença</a> • 
 <a href="#autor">Autor</a>
</p>

## Status do Projeto

<h4 align="center"> 
  ✔	Concluido ✔
</h4>

### Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:

[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/), [Yarn](https://yarnpkg.com/), [Docker](https://www.docker.com/) ou [PostgreSQL](https://www.postgresql.org/), 
Além disto é bom ter um editor para trabalhar com o código como [VSCode](https://code.visualstudio.com/)

### 🎲 Rodando a aplicação 

```bash
# Clone este repositório
$ git clone <https://www.github.com/wilsonmjunior/go-finances-api>

# Acesse a pasta do projeto no terminal/cmd
$ cd go-finances-api

# Instale as dependências
$ yarn

# Crie o container no docker 
docker-compose -f "docker-compose.yml" up -d --build

# Execute a aplicação em modo de desenvolvimento
$ yarn dev:server

# O servidor inciará na porta:3333 - acesse <http://localhost:3333>
```

### Testando a api
Rotas da aplicação

```bash
POST /transactions
{
  "id": "uuid",
  "title": "Salário",
  "value": 3000,
  "type": "income",
  "category": "Salario"  
}

GET /transactions
{
  "transactions": [
    {
      "id": "uuid",
      "title": "Salário",
      "value": 4000,
      "type": "income"
    },
    {
      "id": "uuid",
      "title": "Freela",
      "value": 2000,
      "type": "income"
    },
    {
      "id": "uuid",
      "title": "Pagamento da fatura",
      "value": 4000,
      "type": "outcome"
    },
    {
      "id": "uuid",
      "title": "Cadeira Gamer",
      "value": 1200,
      "type": "outcome"
    }
  ],
  "balance": {
    "income": 6000,
    "outcome": 5200,
    "total": 800
  }
}
```

## Tecnologias utilizadas

### 🛠 Tecnologias

As seguintes ferramentas foram usadas na construção do projeto:

- [Node.js](https://nodejs.org/en/)
- [React](https://pt-br.reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [TypeORM](https://typeorm.io/)
- [Docker](https://www.docker.com/)
- [PostgreSQL](https://www.postgresql.org/)

## Autor

Feito por [Wilson Matokanovic Junior](https://gtihub.com/wilsonmjunior)

[![Linkedin Badge](https://img.shields.io/badge/-Wilson%20Matokanovic%20Junior-blue?style=flat-square&logo=Linkedin&logoColor=%23fff&link=https://www.linkedin.com/in/wilsonmatokanovic/)](https://www.linkedin.com/in/wilsonmatokanovic/)
[![Gmail Badge](https://img.shields.io/badge/-wilsonmjuniorx@gmail.com-c14438?style=flat-square&logo=Gmail&logoColor=white&link=mailto:wilsonmjuniorx@gmail.com)](mailto:wilsonmjuniorx@gmail.com)


