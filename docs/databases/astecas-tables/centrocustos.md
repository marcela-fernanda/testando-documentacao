Tabela responsável por agrupar as receitas e despesas relacionadas a uma empresa.

- **Descrição dos campos da tabela:**

  | Campo        | Tipo        | Descrição                                    |
  | :----------- | :---------- | :------------------------------------------- |
  | `id`         | int8        | Indentificador da tabela (Primary Key).      |
  | `empresa_id` | int8        | Foreing Key da tabela [^^empresas^^](#empresas). |
  | `unidade_id` | int8        | Foreing Key da tabela [^^unidades^^](#unidades). |
  | `nome`       | varchar(40) | Nome do centro de custos.                    |
  | `descricao`  | text        | Descrição do centro de custos.               |
  | `created_at` | timestamp   |                                              |
  | `updated_at` | timestamp   |                                              |

- **Relacionamentos:**

  | Tabela                                                  | Tipo        | Descrição                                                                           |
  | :------------------------------------------------------ | :---------- | :---------------------------------------------------------------------------------- |
  | [^^`empresas`^^](#empresas)                             | Foreing Key | Uma empresa possui centros de custos, e esses estão ligados a uma empresa.          |
  | [^^`unidades`^^](#unidades)                             | Foreing Key | Unidades possuem centros de custos e os mesmos estão relacionados a uma unidade.    |
  | [^^`orcamentos_lancamentos`^^](#orcamentos_lancamentos) | Primary Key | Os dados dos centros de custos constarão nos lançamentos dos orçamentos da empresa. |
  | [^^`lancamentos_baixas`^^](#lancamentos_baixas)         | Primary Key | Os dados dos centros de custos estão inseridos nos lançamentos que passarão pelo processo de "baixa". |
  | [^^`lancamentos`^^](#lancamentos)                       | Primary Key | Os dados centros de custos estão contidos em lançamentos.                           |