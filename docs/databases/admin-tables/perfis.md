Armazena os diferentes perfis ligados a uma empresa dentro do sistema, e que serão, neste, atribuídos a diferentes usuários.

- **Descrição dos campos da tabela:**

  | Campo        | Tipo         | Descrição                                                                      |
  | :----------- | :----------- | :----------------------------------------------------------------------------- |
  | `id`         | int8         | Indentificador da tabela (Primary Key).                                        |
  | `nome`       | varchar(255) | Nome do perfil.                                                                |
  | `descricao`  | text         | Descrição do perfil.                                                           |
  | `status`     | varchar(255) | Status dos perfis no sistema. Valores padrão: "A" (ativo) e "I" (inativo).     |
  | `created_at` | timestamp    |                                                                                |
  | `updated_at` | timestamp    |                                                                                |
  | `empresa_id` | int8         | Foreing Key da tabela [^^empresas^^](db-astecas.md#empresas) (banco astecas).  |

- **Relacionamentos:**

  | Tabela                                           | Tipo        | Descrição                                                 |
  | :----------------------------------------------- | :---------- | :-------------------------------------------------------- |
  | [^^`users_perfil`^^](#users_perfil)              | Primary Key | Intermedeia a ligação entre os diferentes perfis de uma empresa e os usuários que estarão ligados a esses perfis. |
  | [^^`users`^^](#users)                            | Primary Key | Usuários que serão ligados a perfis da empresa.           |
  | [^^`perfis_permissoes`^^](#perfis_permissoes)    | Primary Key | Cada perfil terá diferentes permissões de uso do sistema. |
  | [^^`astecas.empresas`^^](db-astecas.md#empresas) | Foreing Key | Os perfis estão diretamente ligados a empresa, podendo, a mesma, possuir mais de 1 perfil. |