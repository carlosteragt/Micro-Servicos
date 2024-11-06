
## Instruções

#### npm install express sequelize sqlite3 zod bcrypt dotenv
#### npm install --save-dev sequelize-cli

### Para Serviço de Usuários:
#### cd usuario-servico/src
#### npx sequelize-cli db:migrate
#### node index.js

### Exemplo:
#### (post) http://localhost:8001/cadastro
{
  "nome": "Marcos",
  "email": "Marcos@univas.com",
  "senha": "123456",
  "cpf": "12345678901",
  "nascimento": "2000-01-01"
}
#### (get) http://localhost:8001/usuarios