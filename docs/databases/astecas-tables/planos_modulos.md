Tabela responsável por armazenar os diferentes módulos que um plano possui.

- **Descrição dos campos da tabela:**

  | Campo        | Tipo      | Descrição                                                               |
  | :----------- | :-------- | :---------------------------------------------------------------------- |
  | `id`         | int8      | Indentificador da tabela (Primary Key).                                 |
  | `plano_id`   | int8      | Foreing Key da tabela [^^planos^^](#planos).                            |
  | `modulo_id`  | int8      | Foreing Key da tabela [^^modulos^^](db-admin.md#modulos) (banco admin). |
  | `created_at` | timestamp |                                                                         |
  | `updated_at` | timestamp |                                                                         |

- **Relacionamentos:**

  | Tabela                                     | Tipo        | Descrição                                                         |
  | :----------------------------------------- | :---------- | :---------------------------------------------------------------- |
  | [^^`planos`^^](#planos)                    | Foreing Key | Plano que contém um módulo e que será contratado por uma empresa. |
  | [^^`admin.modulos`^^](db-admin.md#modulos) | Foreing Key | Liga o módulo do plano ao usuário que o contratou.                |