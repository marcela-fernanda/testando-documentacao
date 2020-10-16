Tabela que controla o processo de refresh de um token, ou seja, caso haja necessidade, um token pod ser gerado novamente, garantindo assim, a segurança dos dados do usuário.

- **Descrição dos campos da tabela:**

  | Campo             | Tipo         | Descrição                                               |
  | :---------------- | :----------- | :------------------------------------------------------ |
  | `id`              | varchar(100) | Indentificador da tabela (Primary Key).                 |
  | `access_token_id` | varchar(100) | Identificador do token de acesso.                       |
  | `revoked`         | bool(1)      | Verificação da expiração do token de acesso.            |
  | `expires_at`      | timestamp    |                                                         |