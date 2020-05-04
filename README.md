<h1>POC-TINDER-BACKEND</h1>

- yarn
- yarn dev

<h1>ENDPOINTS</h1>
**/:userId deve ser passado como parâmetro no header: {user: id} - corresponde ao usuário logado no sistema**
- GET http://localhost:8090/user : Lista todos os usuários disponíveis para like e dislike
- POST http://localhost:8090/user : Cria usuário
- POST http://localhost:8090/:userId/likes : Like no usuário
- POST http://localhost:8090/:userId/dislikes : Dislike no usuário