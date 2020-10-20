Tabela responsável pelo armazenamento dos dados referentes aos bancos que estão ligados a uma dada conta bancária utilizada durante alguma transação bancária.

- **Descrição dos campos da tabela:**

  | Campo        | Tipo         | Descrição                               |
  | :----------- | :----------- | :-------------------------------------- |
  | `id`         | int8         | Indentificador da tabela (Primary Key). |
  | `descricao`  | varchar(150) | Descrição sobre o banco.                |
  | `codigo`     | varchar(15)  | Código referente ao banco.              |
  | `logo`       | varchar(255) | Logo do banco.                          |
  | `created_at` | timestamp    |                                         |
  | `updated_at` | timestamp    |                                         |
  | `nome`       | varchar(255) | Nome do banco.                          |

- **Relacionamentos:**

  | Tabela                                    | Tipo        | Descrição                          |
  | :---------------------------------------- | :---------- | :----------------------------------|
  | [^^`contasbancarias`^^](#contasbancarias) | Primary Key | A conta bancária está ligada a um banco, assim como o mesmo banco possui várias contas bancárias ligadas a ele. |