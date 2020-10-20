Tabela que intermedeia a ligação entre as permissões de uso do sistema que cada perfil possuirá.

- **Descrição dos campos da tabela:**

  | Campo           | Tipo         | Descrição                                                                                            |
  | :-------------- | :----------- | :--------------------------------------------------------------------------------------------------- |
  | `id`            | int8         | Indentificador da tabela (Primary Key).                                                              |
  | `permissoes_id` | int8         | Foreing Key da tabela [^^permissoes^^](#permissoes).                                                 |
  | `perfil_id`     | int8         | Foreing Key da tabela [^^perfis^^](#perfis).                                                         |
  | `created_at`    | timestamp    |                                                                                                      |
  | `updated_at`    | timestamp    |                                                                                                      |
  | `status`        | varchar(255) | Status das permissões atribuídas aos perfis no sistema. Valores padrão: "A" (ativo) e "I" (inativo). |

- **Relacionamentos:**

  | Tabela                          | Tipo        | Descrição                                                          |
  | :------------------------------ | :---------- | :----------------------------------------------------------------- |
  | [^^`permissoes`^^](#permissoes) | Foreing Key | Permissões atribuídas aos diferentes perfis dentro de uma empresa. |
  | [^^`perfis`^^](#perfis)         | Foreing Key | Perfis da empresa dentro do sistema.                               |
