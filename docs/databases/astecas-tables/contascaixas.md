Tabela responsável por englobar transações financeiras advindas de diversas fontes, como pagamentos por contas bancárias, dinheiro, etc.

- **Descrição dos campos da tabela:**

  | Campo              | Tipo        | Descrição                                                                |
  | :----------------- | :---------- | :----------------------------------------------------------------------- |
  | `id`               | int8        | Indentificador da tabela (Primary Key).                                  |
  | `empresa_id`       | int8        | Foreing Key da tabela [^^empresas^^](#empresas).                         |
  | `unidade_id`       | int8        | Foreing Key da tabela [^^unidades^^](#unidades).                         |
  | `contabancaria_id` | int8        | Foreing Key da tabela [^^contasbancarias^^](#contasbancarias).           |
  | `tipo`             | varchar(40) | Tipo de conta caixa (transação).                                         |
  | `saldoinicial`     | numeric     | Saldo inicial da conta antes do desconto da transação.                   |
  | `saldo`            | numeric     | Saldo final da conta após o desconto da transação.                       |
  | `status`           | varchar(1)  | Status da conta no sistema. Valores padrão: "A" (ativo) e "I" (inativo). |
  | `descricao`        | text        | Descrição da transação.                                                  |
  | `created_at`       | timestamp   |                                                                          |
  | `updated_at`       | timestamp   |                                                                          |

- **Relacionamentos:**

  | Tabela                                          | Tipo        | Descrição                                                                                  |
  | :---------------------------------------------- | :---------- | :----------------------------------------------------------------------------------------- |
  | [^^`empresas`^^](#empresas)                     | Foreing Key | As conta caixa estão ligadas a uma empresa, sendo que a mesma pode ter várias conta caixa. |
  | [^^`unidades`^^](#unidades)                     | Foreing Key | As conta caixa estão ligadas a uma unidade, sendo que a mesma pode ter várias conta caixa. |
  | [^^`contasbancarias`^^](#contasbancarias)       | Foreing Key | As transações armazenadas na conta caixa podem ser originadas de contas bancárias.         |
  | [^^`lancamentos_baixas`^^](#lancamentos_baixas) | Primary Key | Os dados armazenados na tabela contascaixas serão utilizados nas baixas dos lançamentos.   |