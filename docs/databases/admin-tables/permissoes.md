Tabela que armazena os diferentes tipos de permissões atribuídos a cada perfil de uma empresa no sistema.

- **Descrição dos campos da tabela:**

  | Campo        | Tipo         | Descrição                                                                      |
  | :------------| :----------- | :----------------------------------------------------------------------------- |
  | `id`         | int8         | Indentificador da tabela (Primary Key).                                        |
  | `nome`       | varchar(255) | Nome da permissão.                                                             |
  | `slug`       | varchar(255) | URL de acesso do usuário assim que o mesmo inicia sua sessão.                  |
  | `modulo_id`  | int8         | Foreing Key da tabela [^^modulos^^](#modulos).                                 |
  | `created_at` | timestamp    |                                                                                |
  | `updated_at` | timestamp    |                                                                                |
  | `status`     | varchar(255) | Status das permissões no sistema. Valores padrão: "A" (ativo) e "I" (inativo). |

- **Relacionamentos:**

  | Tabela                                        | Tipo        | Descrição                                                      |
  | :-------------------------------------------- | :---------- | :------------------------------------------------------------- |
  | [^^`modulos`^^](#modulos)                     | Foreing Key | As permissões são diferentes módulos do sistema cujo usuário, através de seu perfil, possui acesso. |
  | [^^`perfis_permissoes`^^](#perfis_permissoes) | Primary Key | Cada perfil possui diferentes permissões de acesso ao sistema. |