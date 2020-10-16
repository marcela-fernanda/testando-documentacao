Tabela responsável por armazenar os dados dos departamentos que cada empresa/unidade pode ter.

- **Descrição dos campos da tabela:**

  | Campo        | Tipo        | Descrição                                    |
  | :----------- | :---------- | :------------------------------------------- |
  | `id`         | int8        | Indentificador da tabela (Primary Key).      |
  | `empresa_id` | int8        | Foreing Key da tabela [empresas](#empresas). |
  | `unidade_id` | int8        | Foreing Key da tabela [unidades](#unidades). |
  | `nome`       | varchar(40) | Nome do departamento.                        |
  | `sigla`      | varchar(10) | Sigla referente ao nome do departamento.     |
  | `descricao`  | text        | Descrição do departamento.                   |
  | `created_at` | timestamp   |                                              |
  | `updated_at` | timestamp   |                                              |

- **Relacionamentos:**

  | Tabela                                              | Tipo        | Descrição                                                                        |
  | :-------------------------------------------------- | :---------- | :------------------------------------------------------------------------------- |
  | [`empresas`](#empresas)                             | Foreing Key | O mesmo departamento pode ser vinculado a várias empresas, e empresas tem vários departamentos. |
  | [`unidades`](#unidades)                             | Foreing Key | Cada unidade pode ter vários departamentos.                                      |
  | [`orcamentos_lancamentos`](#orcamentos_lancamentos) | Primary Key | Os dados referentes a cada departamento constarão nos lançamentos dos orçamentos.|
  | [`lancamentos`](#lancamentos)                       | Primary Key | Os dados referentes a cada departamento constarão nos lançamentos.               |
  | [`lancamentos_baixas`](#lancamentos_baixas)         | Primary Key | Os dados referentes a cada departamento constarão nas baixas dos lançamentos.    |