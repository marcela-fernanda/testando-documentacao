Tabela que armazena os diferentes tipos de planos que as contas podem possuir.

- **Descrição dos campos da tabela:**

  | Campo        | Tipo        | Descrição                               |
  | :----------- | :---------- | :-------------------------------------- |
  | `id`         | int8        | Indentificador da tabela (Primary Key). |
  | `nome`       | varchar(40) | Nome do tipo de plano.                  |
  | `descricao`  | text        | Descrição do tipo de plano.             |
  | `created_at` | timestamp   |                                         |
  | `updated_at` | timestamp   |                                         |

- **Relacionamentos:**

  | Tabela                                          | Tipo        | Descrição                                                                   |
  | :---------------------------------------------- | :---------- | :-------------------------------------------------------------------------- |
  | [^^`planocontas_padrao`^^](#planocontas_padrao) | Primary Key | Cada plano terá um tipo especifico, e será atrelado a uma conta específica. |