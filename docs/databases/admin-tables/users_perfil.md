Tabela que intermedeia o relacionamento entre o usuário e qual perfil está atribuído a esse.

- **Descrição dos campos da tabela:**

  | Campo        | Tipo      | Descrição                                |
  | :----------- | :-------- | :--------------------------------------- |
  | `id`         | int8      | Indentificador da tabela (Primary Key).  |
  | `user_id`    | int8      | Foreing Key da tabela [users](#users).   |
  | `perfil_id`  | int4      | Foreing Key da tabela [perfis](#perfis). |
  | `created_at` | timestamp |                                          |
  | `updated_at` | timestamp |                                          |

- **Relacionamentos:**

  | Tabela              | Tipo        | Descrição                                                       |
  | :------------------ | :---------- | :-------------------------------------------------------------- |
  | [`users`](#users)   | Foreing Key | Usuários do sistema que possuem um perfil a eles atribuído.     |
  | [`perfis`](#perfis) | Foreing Key | Perfis da empresa no sistema que serão atribuídos aos usuários. |