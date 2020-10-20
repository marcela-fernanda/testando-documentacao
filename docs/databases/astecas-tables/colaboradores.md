Tabela responsável por armazenar os dados de um colaborador de uma determinada empresa e qual cargo este exerce na mesma.

- **Descrição dos campos da tabela:**

  | Campo        | Tipo         | Descrição                                                                      |
  | :----------- | :----------- | :----------------------------------------------------------------------------- |
  | `id`         | int8         | Indentificador da tabela (Primary Key).                                        |
  | `empresa_id` | int8         | Foreing Key da tabela [^^empresas^^](#empresas).                               |
  | `cargo_id`   | int8         | Foreing Key da tabela [^^cargos^^](#cargos).                                   |
  | `nome`       | varchar(140) | Nome do colaborador.                                                           |
  | `matricula`  | varchar(40)  | Matrícula do colaborador.                                                      |
  | `salario`    | numeric      | Salário do colaborador.                                                        |
  | `status`     | varchar(1)   | Status do colaborador no sistema. Valores padrão: "A" (ativo) e "I" (inativo). |
  | `descricao`  | text         | Descrição sobre o colaborador.                                                 |
  | `created_at` | timestamp    |                                                                                |
  | `updated_at` | timestamp    |                                                                                |
  | `unidade_id` | int8         | Foreign Key da tabela [^^unidades^^](#unidades).                               |

- **Relacionamentos:**

  | Tabela                                          | Tipo        | Descrição                                                                                   |
  | :---------------------------------------------- | :---------- | :------------------------------------------------------------------------------------------ |
  | [^^`empresas`^^](#empresas)                     | Foreing Key | As empresas contam com diversos colaboradores, assim como esses fazem parte de uma empresa. |
  | [^^`cargos`^^](#cargos)                         | Foreing Key | Cada colaborador exerce um cargo dentro de uma empresa, e os cargos podem ser exercidos por vários colaboradores. |
  | [^^`unidades`^^](#unidades)                     | Foreing Key | Os colaboradores estão ligados a uma unidade, e uma unidade possui, ligada a ela, diversos colaboradores. |
  | [^^`lancamentos`^^](#lancamentos)               | Primary Key | Os dados dos colaboradores estão contidos nos lançamentos das empresas.                     |
  | [^^`lancamentos_baixas`^^](#lancamentos_baixas) | Primary Key | Os lançamentos (que contém dados dos colaboradores) passarão pelo processo de "baixa" no sistema. |
  | [^^`orcamentos_baixas`^^](#orcamentos_baixas)   | Primary Key | As "baixas" dos orçamentos presentes no sistema também conterão os dados dos colaboradores das empresas. |