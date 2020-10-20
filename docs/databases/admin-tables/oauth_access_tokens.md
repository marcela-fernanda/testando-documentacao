Tabela responsável por armazenar os tokens de acesso de cada usuário nas sessões do sistema.

- **Descrição dos campos da tabela:**

  | Campo        | Tipo         | Descrição                                               |
  | :----------- | :----------- | :------------------------------------------------------ |
  | `id`         | varchar(100) | Indentificador da tabela (Primary Key).                 |
  | `user_id`    | int8         | Foreing Key da tabela [^^users^^](#users).              |
  | `client_id`  | int4         | Identificador do cliente.                               |
  | `name`       | varchar(255) | Nome do cliente.                                        |
  | `scopes`     | text         | Refere-se a permissão do usuário dentro do sistema.     |
  | `revoked`    | bool(1)      | Verificação relacionada a expiração do token de acesso. |
  | `created_at` | timestamp    |                                                         |
  | `updated_at` | timestamp    |                                                         |
  | `expires_at` | timestamp    |                                                         |

- **Relacionamentos:**

  | Tabela                | Tipo        | Descrição                                           |
  | :-------------------- | :---------- | :-------------------------------------------------- |
  | [^^`users`^^](#users) | Foreing Key | Usuário ao qual o token de acesso está relacionado. |