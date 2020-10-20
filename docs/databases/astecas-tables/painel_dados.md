Tabela responsável por armazenar os dados da empresa, que serão mostrados (UI) no seu painel de dados no sistema.

- **Descrição dos campos da tabela:**

  | Campo                   | Tipo      | Descrição                                                                  |
  | :---------------------- | :-------- | :------------------------------------------------------------------------- |
  | `id`                    | int8      | Indentificador da tabela (Primary Key).                                    |
  | `empresa_id`            | int8      | Foreing Key da tabela [^^empresas^^](#empresas).                           |
  | `unidade_id`            | int8      | Foreing Key da tabela [^^unidades^^](#unidades).                           |
  | `ano`                   | int4      | Ano vigente.                                                               |
  | `mes`                   | int4      | Mês vigente.                                                               |
  | `geracao_liquida_caixa` | numeric   | Correspondente ao valor da geração líquida de caixa.                       |
  | `capital_giro`          | numeric   | Correspondente ao valor de capital de giro da empresa.                     |
  | `saldo_caixa`           | numeric   | Correspondente ao valor de saldo em caixa no momento.                      |
  | `saldo_banco`           | numeric   | Correspondente ao valor de saldo no banco do momento.                      |
  | `contas_pagar`          | numeric   | Correspondente ao valor de contas a serem pagas pela empresa.              |
  | `contas_receber`        | numeric   | Correspondente ao valor de contas a serem recebidas pela empresa.          |
  | `ebitda`                | numeric   | Corresponde aos lucros antes de juros, impostos depreciação e amortização. |
  | `faturamento`           | numeric   | Valor correspondente ao faturamento da empresa.                            |
  | `created_at`            | timestamp |                                                                            |
  | `updated_at`            | timestamp |                                                                            |

- **Relacionamentos:**

  | Tabela                      | Tipo        | Descrição                                                                                              |
  | :-------------------------- | :---------- | :----------------------------------------------------------------------------------------------------- |
  | [^^`empresas`^^](#empresas) | Foreing Key | O painel de dados irá apresentar dados da empresa no sistema.                                          |
  | [^^`unidades`^^](#unidades) | Foreing Key | O painel de dados contará, também, com os dados de cada unidade pertencente a uma determinada empresa. |