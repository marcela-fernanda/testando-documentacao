Tabela responsável por intermediar o relacionamento entre a tabela que contém os lançamentos e a tabela que contém os documentos desses lançamentos.

- **Descrição dos campos da tabela:**

  | Campo           | Tipo      | Descrição                                                            |
  | :-------------- | :-------- | :------------------------------------------------------------------- |
  | `id`            | int8      | Indentificador da tabela (Primary Key).                              |
  | `lancamento_id` | int8      | Foreing Key da tabela [lancamentos](#lancamentos).                   |
  | `documento_id`  | int8      | Foreing Key da tabela [documentos](#documetos).                      |
  | `user_id`       | int8      | Foreing Key da tabela [users](db-admin.md#users) (banco admin).      |
  | `created_at`    | timestamp |                                                                      |
  | `updated_at`    | timestamp |                                                                      |

- **Relacionamentos:**

  | Tabela                             | Tipo        | Descrição                                                |
  | :--------------------------------- | :---------- | :------------------------------------------------------- |
  | [`lancamentos`](#lancamentos)      | Foreing Key | Lançamentos de uma empresa presentes no sistema.         |
  | [`documentos`](#documentos)        | Foreing Key | Documentos referentes ao lançamento (anexos).            |
  | [`admin.users`](db-admin.md#users) | Foreing Key | Usuário ao qual corresponde aquele lançamento/documento. |