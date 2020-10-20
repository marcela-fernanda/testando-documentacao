Tabela responsável por armazenar os diferentes módulos acessíveis a um usuário no sistema.

- **Descrição dos campos da tabela:**

  | Campo        | Tipo         | Descrição                                                                 |
  | :----------- | :----------- | :------------------------------------------------------------------------ |
  | `id`         | int8         | Indentificador da tabela (Primary Key).                                   |
  | `nome`       | varchar(40)  | Nome do módulo.                                                           |
  | `descricao`  | text         | Descrição do módulo.                                                      |
  | `status`     | varchar(255) | Status do módulo no sistema. Valores padrão: "A" (ativo) e "I" (inativo). |
  | `created_at` | timestamp    |                                                                           |
  | `updated_at` | timestamp    |                                                                           |

- **Relacionamentos:**

  | Tabela                          | Tipo        | Descrição                                                                            |
  | :------------------------------ | :---------- | :----------------------------------------------------------------------------------- |
  | [^^`permissoes`^^](#permissoes) | Primary Key | As permissões que os usuários possuem para acesso a determinados módulos do sistema. |