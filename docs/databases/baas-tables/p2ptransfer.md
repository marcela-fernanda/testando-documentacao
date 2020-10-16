Tabela responsável por armazenar os dados referentes as transferências bancárias do tipo P2P.

*[P2P]: Person to Person

- **Descrição dos campos da tabela:**

  | Campo                     | Tipo         | Descrição                                                                         |
  | :------------------------ | :----------- | :-------------------------------------------------------------------------------- |
  | `transactionuuid`         | varchar(100) | Identificador da transação de transferência P2P. Pode ser gerado automaticamente. |
  | `transactioncode`         | varchar(100) | Identificador da transação de transferência P2P.                                  |
  | `originalaccount`         | int8         | O identificador da conta que origina a operação de transferência.                 |
  | `destinationaccount`      | int8         | O identificador da conta de destino da transferência.                             |
  | `amount`                  | numeric      | O quantitativo que será transferido da conta originária para o destinatário.      |
  | `transactiondate`         | timestamp    | Data em que a transação foi realizada.                                            |
  | `description`             | varchar(255) | Descrição da transação.                                                           |
  | `idadjustment`            | int8         | Identificador do ajuste da operação na conta originária.                          |
  | `idissuer`                | int8         | Identificador do emissor.                                                         |
  | `status`                  | varchar(20)  | Status da transação.                                                              |
  | `idadjustmentdestination` | int8         | Identificador do ajuste da operação na conta de destino.                          |
  | `cause`                   | varchar(255) | Causa do erro na transferência.                                                   |
  | `created_at`              | timestamp    |                                                                                   |
  | `updated_at`              | timestamp    |                                                                                   |
  | `id`                      | int8         | Identificador da tabela (Primary Key).                                            |
  | `user_id`                 | int8         | Foreing Key da tabela [users](db-admin.md#users) (banco admin).                   |

- **Relacionamentos:**

  | Tabela                             | Tipo        | Descrição                                             |
  | :--------------------------------- | :---------- | :---------------------------------------------------- |
  | [`admin.users`](db-admin.md#users) | Foreing Key | Identifica qual usuário realizou a transferência P2P. |