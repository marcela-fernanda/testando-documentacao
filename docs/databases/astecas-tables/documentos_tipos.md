Tabela responsável por armazenar os tipos de documentos presentes no sistema.

- **Descrição dos campos da tabela:**

  | Campo        | Tipo        | Descrição                               |
  | :----------- | :---------- | :-------------------------------------- |
  | `id`         | int8        | Indentificador da tabela (Primary Key). |
  | `nome`       | varchar(40) | Tipo do documento.                      |
  | `descricao`  | text        | Descrição do tipo do documento.         |
  | `created_at` | timestamp   |                                         |
  | `updated_at` | timestamp   |                                         |

- **Relacionamentos:**

  | Tabela                          | Tipo        | Descrição                                                                                              |
  | :------------------------------ | :---------- | :----------------------------------------------------------------------------------------------------- |
  | [^^`documentos`^^](#documentos) | Primary Key | Os tipos de documentos estão atrelados aos documentos, ou seja, cada documento tem um tipo específico. |