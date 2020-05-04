:: POC-TINDER-BACKEND ::

- yarn
- yarn dev

:: ENDPOINTS ::
**/:userId deve ser passado como parâmetro no header: {user: id} - corresponde ao usuário logado no sistema**
- GET http://localhost:8090/user : Lista todos os usuários disponíveis para like e dislike
- POST http://localhost:8090/user : Cria usuário
- POST http://localhost:8090/:userId/likes : Like no usuário
- POST http://localhost:8090/:userId/dislikes : Dislike no usuário