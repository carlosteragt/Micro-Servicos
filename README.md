
## Instruções
### Instalar as dependências:
#### npm install 


### Para Iniciar os Serviços:
#### Abra 3 janelas do cmd e navegue até as pastas a seguir uma para cada janela
#### MICRO-SERVICOS\emprestimo-servico\src
#### MICRO-SERVICOS\livro-servico\src
#### MICRO-SERVICOS\usuario-servico\src

#### Depois execute o comando abaixo em cada um
#### node index.js


## No Insomnia ou na extensão Thunder Client
### Para o Serviço de Usuarios
### Exemplo:
#### (post) http://localhost:8001/usuarios
{
  "nome": "Marcos",
  "email": "Marcos@univas.com",
  "senha": "123456",
  "cpf": "12345678901",
  "nascimento": "2000-01-01"
}
#### (get) http://localhost:8001/usuarios
#### (get) http://localhost:8001/usuarios/:id

### Para o Serviço de Livros
### Exemplo:
#### (post) http://localhost:8002/livros
{
  "titulo": "Trabalho",
  "autor": "Marcos",
  "disponibilidade": true
}

#### (get) http://localhost:8002/livros
#### (get) http://localhost:8002/livros/:id

#### (patch) http://localhost:8002/livros/:id
{
  "disponibilidade": true
}

### Para o Serviço de Emprestimos
### Exemplo:
#### (post) http://localhost:8003/emprestimos
{
    "usuarioId": 1,
    "livroId": 1
}

#### (get) http://localhost:8003/emprestimos

#### (post) http://localhost:8003/emprestimos/:id/devolucao

