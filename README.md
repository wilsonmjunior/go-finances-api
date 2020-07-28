<h1 align="center">
  <img src="https://res.cloudinary.com/dhqnvbd52/image/upload/v1595975364/GoFinances/logo.408488e0_qpx4dy.svg" width="400"/>
</h1>

<p align="center">
🚀Aplicação de gerenciamento de transações para treinar o Node.js com o Typecript, o banco    de dados com o TypeORM e os arquivos de envio com o Multer.
</p>

<img src="https://img.shields.io/static/v1?label=Docker&message=Docker&color=7159c1&style=for-the-badge&logo=docker"/>
<img src="https://img.shields.io/static/v1?label=Docker&message=Docker&color=7159c1&style=for-the-badge&logo=docker"/>
<img src="https://img.shields.io/static/v1?label=Docker&message=Docker&color=7159c1&style=for-the-badge&logo=docker"/>

## Status do Projeto

<h4 align="center"> 
	Concluido
</h4>

### Pré-requisitos

![Badge](https://img.shields.io/badge/Blog-Rocketseat-%237159c1?style=for-the-badge&logo=ghost)
![Badge](https://img.shields.io/badge/Blog-Rocketseat-%237159c1?style=for-the-badge&logo=ghost)
![Badge](https://img.shields.io/badge/Blog-Rocketseat-%237159c1?style=for-the-badge&logo=ghost)


### 🎲 Rodando o Back End (servidor)

```bash
# Clone este repositório
$ git clone <https://github.com/tgmarinho/nlw1>

# Acesse a pasta do projeto no terminal/cmd
$ cd nlw1

# Vá para a pasta server
$ cd server

# Instale as dependências
$ npm install

# Crie o container no docker 
docker-compose -f "docker-compose.yml" up -d --build

# Execute a aplicação em modo de desenvolvimento
$ npm run dev:server

# O servidor inciará na porta:3333 - acesse <http://localhost:3333>
```


```
git clone https://github.com/wilsonmjunior/go-finances-api

cd go-finances-api
  
yarn 



yarn typeorm migration:run

yarn dev:server

```

## Testing api
Application routes

```
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
