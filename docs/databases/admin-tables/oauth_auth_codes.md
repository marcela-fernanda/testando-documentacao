Tabela que armazena um código único ligado a um nome de domínio (URL) e que será usado para solicitar o token de acesso.

- **Descrição dos campos da tabela:**

  | Campo        | Tipo         | Descrição                                             |
  | :----------- | :----------- | :---------------------------------------------------- |
  | `id`         | varchar(100) | Indentificador da tabela (Primary Key).               |
  | `user_id`    | int8         | Foreing Key da tabela [^^users^^](#users).            |
  | `client_id`  | int4         | Identificador do cliente.                             |
  | `scopes`     | text         | Permissões de uso do sistema relacionados ao usuário. |
  | `revoked`    | bool(1)      | Verificação de expiração do token de acesso.          |
  | `expires_at` | timestamp    |                                                       |

- **Relacionamentos:**

  | Tabela                | Tipo        | Descrição                                                                                 |
  | :-------------------- | :---------- | :---------------------------------------------------------------------------------------- |
  | [^^`users`^^](#users) | Foreing Key | Cada usuário, ao realizar o retorno ao cliente pela URL, gerará um código de autorização. |