Tabela que controla quais clientes possuem tokens de acesso, logo, possuirão acesso aos recursos do sistema.

- **Descrição dos campos da tabela:**

  | Campo        | Tipo      | Descrição                                               |
  | :----------- | :-------- | :------------------------------------------------------ |
  | `id`         | int4      | Indentificador da tabela (Primary Key).                 |
  | `client_id`  | int4      | Identificador do cliente.                               |
  | `created_at` | timestamp |                                                         |
  | `updated_at` | timestamp |                                                         |