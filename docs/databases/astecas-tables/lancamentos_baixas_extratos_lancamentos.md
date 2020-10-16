Tabela que intermedeia os lançamentos que foram "baixados" e os lançamentos que estão contidos em um extrato.

- **Descrição dos campos da tabela:**

  | Campo                   | Tipo      | Descrição                                                            |
  | :---------------------- | :-------- | :------------------------------------------------------------------- |
  | `id`                    | int8      | Indentificador da tabela (Primary Key).                              |
  | `lancamento_baixa_id`   | int8      | Foreing Key da tabela [lancamentos_baixas](#lancamentos_baixas).     |
  | `extrato_lancamento_id` | int8      | Foreing Key da tabela [extratos_lancamentos](#extratos_lancamentos). |
  | `user_id`               | int8      | Foreing Key da tabela [users](db-admin.md#users) (banco admin).     |
  | `created_at`            | timestamp |                                                                      |
  | `updated_at`            | timestamp |                                                                      |

- **Relacionamentos:**

  | Tabela                                          | Tipo        | Descrição                                                  |
  | :---------------------------------------------- | :---------- | :--------------------------------------------------------- |
  | [`lancamentos_baixas`](#lancamentos_baixas)     | Foreing Key | Lançamentos que já foram "baixados".                       |
  | [`extratos_lancamentos`](#extratos_lancamentos) | Foreing Key | Lançamentos com um dado status contidos em um extrato.     |
  | [`admin.users`](db-admin.md#users)              | Foreing Key | Os dados dos usuários ao qual os lançamentos correspondem. |