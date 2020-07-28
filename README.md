<div align="center">
  <img src="https://res.cloudinary.com/dhqnvbd52/image/upload/v1595975364/GoFinances/logo.408488e0_qpx4dy.svg" width="400"/>
</div>

## Description
Transaction management applciation to train Node.js with Typescript, database with TypeORM and sendings files with Multer.

## How to use 

```
git clone https://github.com/wilsonmjunior/go-finances-api

cd go-finances-api
  
yarn 

docker-compose -f "docker-compose.yml" up -d --build

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
