Tabela utilizada para controlar as sessões do usuário dentro do sistema, de forma a garantir a segurança dos dados do mesmo.

- **Descrição dos campos da tabela:**

  | Campo                    | Tipo         | Descrição                                                               |
  | :----------------------- | :----------- | :---------------------------------------------------------------------- |
  | `id`                     | int4         | Indentificador da tabela (Primary Key).                                 |
  | `user_id`                | int8         | Foreing Key da tabela [users](#users).                                  |
  | `name`                   | varchar(255) | Nome do cliente.                                                        |
  | `secret`                 | varchar(100) | Chave secreta do cliente.                                               |
  | `redirect`               | text         | URL de redirecionamento do usuário assim que o mesmo inicia sua sessão. |
  | `personal_access_client` | bool(1)      | Acesso do usuário para acesso ao sistema.                               |
  | `password_client`        | bool(1)      | Senha do usuário para acesso ao sistema.                                |
  | `revoked`                | bool(1)      | Verificação da expiração do token de acesso do usuário.                 |
  | `created_at`             | timestamp    |                                                                         |
  | `updated_at`             | timestamp    |                                                                         |

- **Relacionamentos:**

  | Tabela            | Tipo        | Descrição     |
  | :---------------- | :---------- | :------------ |
  | [`users`](#users) | Foreing Key | Cada usuário terá seus dados utilizados pela tabela descrita nesse documento, a fim de garantir a segurança dos dados do mesmo. |