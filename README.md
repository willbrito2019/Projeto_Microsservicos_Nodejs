# Microsserviços - Sistema de Pedidos

## Descrição
   Este projeto demonstra uma arquitetura de microsserviços utilizando Node.js e MongoDB. Os serviços estão divididos entre:

   - **Serviço de Usuários**: responsável por cadastro e listagem de usuários.
   - **Serviço de Pedidos**: realiza a criação e associação de pedidos aos usuários.

   Essa separação facilita a escalabilidade, organização e manutenibilidade do sistema. A comunicação entre os serviços é feita via APIs REST.

## Tecnologias Utilizadas
   - Linguagem: JavaScript
   - Framework: Node.js (Express)
   - Banco de dados: MongoDB

## Como Executar

1. Inicie o MongoDB:  
   - mongod

2. Rode os serviços:
   - Users Service	
      - cd users-service
      - npm install
      - node server.js

   - Orders Service
      - cd orders-service
      - npm install
      - node server.js
      
Endpoints de Teste     
   - GET http://localhost:4000/users
   - POST http://localhost:4000/users
   - POST http://localhost:5000/orders       

