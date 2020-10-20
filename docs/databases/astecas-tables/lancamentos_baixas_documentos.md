Tabela responsável por intermediar o relacionamento entre um lançamento "baixado" e o documento do respectivo lançamento, relacionando, também, o usuário ao qual tais dados estão ligados.

- **Descrição dos campos da tabela:**

  | Campo                 | Tipo      | Descrição                                                            |
  | :-------------------- | :-------- | :------------------------------------------------------------------- |
  | `id`                  | int8      | Indentificador da tabela (Primary Key).                              |
  | `lancamento_baixa_id` | int8      | Foreing Key da tabela [^^lancamentos_baixas^^](#lancamentos_baixas). |
  | `documento_id`        | int8      | Foreing Key da tabela [^^documentos^^](#documentos).                 |
  | `user_id`             | int8      | Foreing Key da tabela [^^users^^](db-admin.md#users) (banco admin).  |
  | `created_at`          | timestamp |                                                                      |
  | `updated_at`          | timestamp |                                                                      |

- **Relacionamentos:**

  | Tabela                                          | Tipo        | Descrição                                                        |
  | :---------------------------------------------- | :---------- | :--------------------------------------------------------------- |
  | [^^`lancamentos_baixas`^^](#lancamentos_baixas) | Foreing Key | Lançamentos que já passaram pelo processo de "baixa" no sistema. |
  | [^^`documentos`^^](#documentos)                 | Foreing Key | Documentos referentes aos lançamentos (anexos).                  |
  | [^^`admin.users`^^](db-admin.md#users)          | Foreing Key | Usuário correspondente de um lançamento específico.              |