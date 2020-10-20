Tabela que armazena os dados do grupo do qual cada empresa faz parte.

- **Descrição dos campos da tabela:**

  | Campo        | Tipo        | Descrição                                                                      |
  | :----------- | :---------- | :----------------------------------------------------------------------------- |
  | `id`         | int8        | Indentificador da tabela (Primary Key).                                        |
  | `nome`       | varchar(40) | Nome do grupo cuja empresa pertence.                                           |
  | `descricao`  | text        | Descrição do grupo ao qual a empresa pertence.                                 |
  | `created_at` | timestamp   |                                                                                |
  | `updated_at` | timestamp   |                                                                                |
  | `status`     | varchar(1)  | Status atual do grupo no sistema. Valores padrão: "A" (ativo) e "I" (inativo). |

- **Relacionamentos:**

  | Tabela                      | Tipo        | Descrição                                                                               |
  | :-------------------------- | :---------- | :-------------------------------------------------------------------------------------- |
  | [^^`empresas`^^](#empresas) | Primary Key | Cada empresa pertence a um grupo, e os grupos possuem várias empresas atreladas a eles. |