Tabela responsável por armazenar os tipos de contas bancárias existentes.

- **Descrição dos campos da tabela:**

  | Campo        | Tipo        | Descrição                               |
  | :----------- | :---------- | :-------------------------------------- |
  | `id`         | int8        | Indentificador da tabela (Primary Key). |
  | `nome`       | varchar(40) | Tipo (nome) da conta bancária.          |
  | `descricao`  | text        | Descrição do tipo de conta bancária.    |
  | `created_at` | timestamp   |                                         |
  | `updated_at` | timestamp   |                                         |

- **Relacionamentos:**

  | Tabela                                    | Tipo        | Descrição                                                                                        |
  | :---------------------------------------- | :---------- | :----------------------------------------------------------------------------------------------- |
  | [^^`contasbancarias`^^](#contasbancarias) | Primary Key | Cada conta bancária possui um tipo específico, por exemplo: conta corrente, conta poupança, etc. |