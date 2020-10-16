Tabela que armazena planos padronizados que um lançamento pode possuir.

- **Descrição dos campos da tabela:**

  | Campo                       | Tipo         | Descrição                                                                                             |
  | :-------------------------- | :----------- | :---------------------------------------------------------------------------------------------------- |
  | `id`                        | int8         | Indentificador da tabela (Primary Key).                                                               |
  | `id_pai`                    | int8         | Identificador usado para aninhamento dos dados, mostrando qual é o item pai dentro de um aninhamento. |
  | `nome`                      | varchar(120) | Nome do plano.                                                                                        |
  | `ordem`                     | varchar(12)  | Ordenação realizada na UI.                                                                            |
  | `nivel`                     | int4         | Nível dentro do aninhamento.                                                                          |
  | `descricao`                 | text         | Descrição do plano.                                                                                   |
  | `created_at`                | timestamp    |                                                                                                       |
  | `updated_at`                | timestamp    |                                                                                                       |
  | `planoconta_padrao_tipo_id` | int8         | Foreing Key da tabela [planocontas_padrao_tipos](#planocontas_padrao_tipos).                          |
  | `codconta`                  | varchar(10)  | Categorização da conta em 1 - Desembolso e 2 - Ingresso.                                              |
  | `fc`                        | int4         | Informação relacionada ao fluxo de caixa.                                                             |

- **Relacionamentos:**

  | Tabela                                                  | Tipo        | Descrição                                                                 |
  | :------------------------------------------------------ | :---------- | :------------------------------------------------------------------------ |
  | [`planocontas_padrao_tipos`](#planocontas_padrao_tipos) | Foreing Key | Cada plano pode ter um tipo, que é discriminado na tabela correspondente. |