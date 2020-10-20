Tabela que armazena os dados dos usuários que utilizam o sistema.

- **Descrição dos campos da tabela:**

  | Campo                  | Tipo         | Descrição                                                                                          |
  | :--------------------- | :----------- | :------------------------------------------------------------------------------------------------- |
  | `id`                   | int8         | Indentificador da tabela (Primary Key).                                                            |
  | `name`                 | varchar(255) | Nome do usuário.                                                                                   |
  | `status`               | varchar(255) | Status dos usuários no sistema. Valores padrão: "A" (ativo) e "I" (inativo).                       |
  | `email`                | varchar(255) | E-mail do usuário.                                                                                 |
  | `email_verified_at`    | timestamp    | Data de verificação do e-mail.                                                                     |
  | `password`             | varchar(255) | Senha do usuário.                                                                                  |
  | `perfil_id`            | int8         | Foreing Key da tabela [^^perfis^^](#perfis).                                                       |
  | `remember_token`       | varchar(100) | Token de acesso no usuário, usado como medida de segurança dentro do sistema.                      |
  | `created_at`           | timestamp    |                                                                                                    |
  | `updated_at`           | timestamp    |                                                                                                    |
  | `cpf`                  | varchar(11)  | CPF do usuário.                                                                                    |
  | `cellphone`            | varchar(20)  | Número de telefone (DDD + número) do usuário.                                                      |
  | `force_reset_password` | bool(1)      | Controla a necessidade de inserção de nova senha pelo usuário durante o login do mesmo no sistema. |

- **Relacionamentos:**

  | Tabela                                            | Tipo        | Descrição                                                                                 |
  | :------------------------------------------------ | :---------- | :---------------------------------------------------------------------------------------- |
  | [^^`oauth_clients`^^](#oauth_clients)             | Primary Key | Relação entre um dado usuário e sua sessão dentro do sistema.                             |
  | [^^`oauth_access_tokens`^^](#oauth_access_tokens) | Primary Key | Cada usuário possui um token de acesso como medida de segurança.                          |
  | [^^`oauth_auth_codes`^^](#oauth_auth_codes)       | Primary Key | Cada usuário, ao realizar o retorno ao cliente pela URL, gerará um código de autorização. |
  | [^^`users_perfil`^^](#users_perfil)               | Primary Key | Tabela que intermedeia perfil está ligado a um usuário.                                   |
  | [^^`perfis`^^](#perfis)                           | Foreing Key | Cada usuário possui um perfil no sistema.                                                 |