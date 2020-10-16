Armazena os documentos para o registro de uma empresa.

- **Descrição dos campos da tabela:**

  | Campo           | Tipo         | Descrição                                                                     |
  | :-------------- | :----------- | :---------------------------------------------------------------------------- |
  | `id`            | int4         | Identificador da tabela (Primary Key).                                        |
  | `idegistration` | varchar(36)  | Identificador do código de registro de uma companhia.                         |
  | `category`      | varchar(50)  | Categoria do documento.                                                       |
  | `iddocument`    | varchar(36)  | Identificador do documento.                                                   |
  | `url`           | varchar(255) | URL do documento.                                                             |
  | `created_at`    | timestamp    |                                                                               |
  | `documento_id`  | int8         | Foreing Key da tabela [documentos](db-astecas.md#documentos) (banco astecas). |

- **Relacionamentos:**

  | Tabela                                           | Tipo        | Descrição                                       |
  | :----------------------------------------------- | :---------- | :---------------------------------------------- |
  | [`astecas.documentos`](db-astecas.md#documentos) | Foreing Key | Busca os documentos relacionados a uma empresa. |