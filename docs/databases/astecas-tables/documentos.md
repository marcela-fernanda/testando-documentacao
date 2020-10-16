Tabela responsável por armazenar os documentos (anexos) referentes aos lançamentos de cada empresa.

- **Descrição dos campos da tabela:**

  | Campo               | Tipo         | Descrição                                                       |
  | :------------------ | :----------- | :-------------------------------------------------------------- |
  | `id`                | int8         | Indentificador da tabela (Primary Key).                         |
  | `empresa_id`        | int8         | Foreing Key da tabela [empresas](#empresas).                    |
  | `documento_tipo_id` | int8         | Foreing Key da tabela [documentos_tipos](#empresas).            |
  | `nome`              | varchar(80)  | Nome do documento no sistema.                                   |
  | `tags`              | jsonb        | Tags relacionadas ao documento em questão.                      |
  | `link`              | varchar(255) | Link para acessar o documento.                                  |
  | `user_id`           | int8         | Foreing Key da tabela [users](db-admin.md#users) (banco admin). |
  | `created_at`        | timestamp    |                                                                 |
  | `updated_at`        | timestamp    |                                                                 |
  | `extensao`          | varchar(5)   | Extensão do arquivo.                                            |
  | `tamanho`           | float8       | Tamanho do arquivo.                                             |
  | `nome_original`     | varchar(255) | Nome original do arquivo.                                       |

- **Relacionamentos:**

  | Tabela                                                            | Tipo        | Descrição                                         |
  | :---------------------------------------------------------------- | :---------- | :------------------------------------------------ |
  | [`empresas`](#empresas)                                           | Foreing Key | Os documentos estão ligados a uma empresa, sendo que a mesma pode ter vários documentos presentes no sistema. |
  | [`documentos_tipos`](#documentos_tipos)                           | Foreing Key | Todo documento possui um tipo específico.         |
  | [`admin.users`](db-admin.md#users)                                | Primary Key | Os documentos são enviados (como anexos) pelos usuários para o sistema. |
  | [`lancamentos_baixas_documentos`](#lancamentos_baixas_documentos) | Primary Key | Está em um intermediário onde um documento é ligado a uma baixa de um lançamento específico. |
  | [`lancamentos_documentos`](#lancamentos_documentos)               | Primary Key | Refere-se ao documento presente em um lançamento. |