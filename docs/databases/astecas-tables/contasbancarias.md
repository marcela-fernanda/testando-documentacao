A tabela corresponde as contas bancárias das empresas, utilizadas para movimentação financeira.

- **Descrição dos campos da tabela:**

  | Campo                   | Tipo        | Descrição                                                                                      |
  | :---------------------- | :---------- | :--------------------------------------------------------------------------------------------- |
  | `id`                    | int8        | Indentificador da tabela (Primary Key).                                                        |
  | `banco_id`              | int8        | Foreing Key da tabela [^^bancos^^](#bancos).                                                   |
  | `contabancaria_tipo_id` | int8        | Foreing Key da tabela [^^contasbancarias_tipo^^](#contasbancarias_tipo).                       |
  | `agencia`               | varchar(40) | Número da agencia referente a conta bancária.                                                  |
  | `conta`                 | varchar(40) | Conta bancária da empresa.                                                                     |
  | `acesso`                | jsonb       | Dados de acesso para o sistema.                                                                |
  | `status`                | varchar(1)  | Status da conta no sistema. Valores padrão: "A" (ativo) ou "I" (inativo).                      |
  | `astecas`               | varchar(1)  | Status para identificar se é ou não uma conta Astecas. Valores padrão: "S" (Sim) ou "N" (não). |
  | `descricao`             | text        | Descrição da conta bancária.                                                                   |
  | `created_at`            | timestamp   |                                                                                                |
  | `updated_at`            | timestamp   |                                                                                                |
  | `checked`               | bool(1)     | Confirma se o termo foi aceito ou não.                                                         |
  | `ip`                    | inet        | IP relacionado ao dispositivo onde foi feito o aceite do termo.                                |
  | `data`                  | timestamp   | Data em que o termo foi aceito.                                                                |
  | `idregistration`        | varchar(50) | Identificador da conta bancária no BAAS.                                                       |

*[BAAS]: Bank as a Service

- **Relacionamentos:**

  | Tabela                                              | Tipo        | Descrição                                                                       |
  | :-------------------------------------------------- | :---------- | :------------------------------------------------------------------------------ |
  | [^^`bancos`^^](#bancos)                             | Foreing Key | Cada conta bancária está atrelada a um banco, assim como o banco pode conter várias contas bancárias. |
  | [^^`contasbancarias_tipo`^^](#contasbancarias_tipo) | Foreing Key | Cada conta bancária contém um tipo, por exemplo: conta corrente, poupança, etc. |
  | [^^`extratos`^^](#extratos)                         | Primary Key | As movimentações financeiras feitas na conta corrente geram extratos.           |
  | [^^`contascaixas`^^](#contascaixas)                 | Primary Key | As contas bancárias estão ligadas as contas caixas, ou seja, as transações financeiras podem ser tanto feitas por uma conta bancária quanto por outros tipos de meios, que serão controlados na conta caixa. |