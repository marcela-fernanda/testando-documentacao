Tabela responsável por armazenar os cargos que cada empresa possui.

- **Descrição dos campos da tabela:**

  | Campo        | Tipo        | Descrição                                        |
  | :----------- | :---------- | :----------------------------------------------- |
  | `id`         | int8        | Indentificador da tabela (Primary Key).          |
  | `empresa_id` | int8        | Foreing Key da tabela [^^empresas^^](#empresas). |
  | `nome`       | varchar(40) | Nome do cargo.                                   |
  | `descricao`  | text        | Descrição do cargo.                              |
  | `created_at` | timestamp   |                                                  |
  | `updated_at` | timestamp   |                                                  |

- **Relacionamentos:**

  | Tabela                                | Tipo        | Descrição                                                                  |
  | :------------------------------------ | :---------- | :------------------------------------------------------------------------- |
  | [^^`empresas`^^](#empresas)           | Foreing Key | Cada empresa possui diversos cargos, e cargos estão ligados a uma empresa. |
  | [^^`colaboradores`^^](#colaboradores) | Primary Key | Cada colaborador exerce um cargo dentro de uma determinada empresa.        |