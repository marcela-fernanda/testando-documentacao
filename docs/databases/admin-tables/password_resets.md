Tabela responsável por controlar solicitação de resets de senhas pelo usuário.

- **Descrição dos campos da tabela:**

  | Campo        | Tipo         | Descrição                   |
  | :----------- | :----------- | :-------------------------- |
  | `email`      | varchar(255) | E-mail do usuário.          |
  | `token`      | varchar(255) | Token de acesso do usuário. |
  | `created_at` | timestamp    |                             |