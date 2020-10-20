Tabela que agrupa os lançamentos presentes no orçamento de uma determinada empresa.

- **Descrição dos campos da tabela:**

  | Campo                   | Tipo       | Descrição                                                                  |
  | :---------------------- | :--------- | :------------------------------------------------------------------------- |
  | `id`                    | int8       | Indentificador da tabela (Primary Key).                                    |
  | `empresa_id`            | int8       | Foreing Key da tabela [^^empresas^^](#empresas).                           |
  | `departamento_id`       | int8       | Foreing Key da tabela [^^departamentos^^](#departamentos).                 |
  | `fornecedor_cliente_id` | int8       | Foreing Key da tabela [^^fornecedores_clientes^^](#fornecedores_clientes). |
  | `colaborador_id`        | int8       | Foreing Key da tabela [^^colaboradores^^](#colaboradores).                 |
  | `unidade_id`            | int8       | Foreing Key da tabela [^^unidades^^](#unidades).                           |
  | `centrocusto_id`        | int8       | Foreing Key da tabela [^^centrocustos^^](#centrocustos).                   |
  | `planoconta_id`         | int8       | Foreing Key da tabela [^^planocontas^^](#planocontas).                     |
  | `valor`                 | numeric    | Valor do lançamento.                                                       |
  | `data`                  | date       | Data de inserção do lançamento (formato ISO 8601).                         |
  | `descricao`             | text       | Descrição do lançamento.                                                   |
  | `lancado_por`           | int8       | Indicativo do usuário que realizou o lançamento.                           |
  | `lancado_em`            | timestamp  | Data em que o lançamento foi realizado (formato ISO 8601).                 |
  | `analisado_por`         | int8       | Responsável pela análise do lançamento.                                    |
  | `analisado_em`          | timestamp  | Data da análise do lançamento (formato ISO 8601).                          |
  | `status`                | varchar(1) |                                                                            |
  | `created_at`            | timestamp  |                                                                            |
  | `updated_at`            | timestamp  |                                                                            |

- **Relacionamentos:**

  | Tabela                                                | Tipo        | Descrição                                                                            |
  | :---------------------------------------------------- | :---------- | :----------------------------------------------------------------------------------- |
  | [^^`empresas`^^](#empresas)                           | Foreing Key | Cada empresa vai possuir orçamentos, e os mesmos possuem lançamentos que o compõem.  |
  | [^^`departamentos`^^](#departamentos)                 | Foreing Key | Os departamentos possuem orçamentos, e os mesmos possuem lançamentos que os compõem. |
  | [^^`fornecedores_clientes`^^](#fornecedores_clientes) | Foreing Key | Os dados dos fornecedores estão presentes nos lançamentos de orçamentos.             |
  | [^^`colaboradores`^^](#colaboradores)                 | Foreing Key | Os dados dos colaboradores estão presentes nos lançamentos de orçamentos.            |
  | [^^`unidades`^^](#unidades)                           | Foreing Key | Os dados das unidades estão presentes nos lançamentos de orçamentos.                 |
  | [^^`centrocustos`^^](#centrocustos)                   | Foreing Key | Os dados dos centros de custos estão presentes nos lançamentos de orçamentos.        |
  | [^^`planocontas`^^](#planocontas)                     | Foreing Key | O informativo sobre a categoria do lançamento em questão.                            |
