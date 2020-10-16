Tabela responsável os boletos de pagamento cujo pessoa que o emitiu será a mesma que o irá pagar.

- **Descrição dos campos da tabela:**

  | Campo              | Tipo         | Descrição                                                                                                       |
  | :----------------- | :----------- | :-------------------------------------------------------------------------------------------------------------- |
  | `id`               | int4         | Identificador da tabela (Primary Key).                                                                          |
  | `idaccount`        | int4         | Identificador da conta original.                                                                                |
  | `covenantnumber`   | int4         | Número de convenho.                                                                                             |
  | `issuerbanknumber` | varchar(10)  | Número do banco emissor.                                                                                        |
  | `idbanknumber`     | varchar(10)  | Identificador do banco destinatário.                                                                            |
  | `uniqueid`         | varchar(25)  | Identificador de um boleto de pagamento específico.                                                             |
  | `duedate`          | date         | Data de vencimento.                                                                                             |
  | `amount`           | numeric      | Valor a ser pago.                                                                                               |
  | `datedocument`     | date         | Data de criação do documento de pagamento.                                                                      |
  | `payer`            | jsonb        | Objeto contendo os dados sobre o pagador do boleto.                                                             |
  | `beneficiary`      | jsonb        | Objeto contendo os dados do beneficiário.                                                                       |
  | `cobeneficiary`    | jsonb        | Objeto contendo os dados da empresa que realizou a venda responsável pela geração de boleto (sacador avalista). |
  | `bankbranchnumber` | int4         | Número da agência do banco responsável pela criação do boleto de pagamento.                                     |
  | `banknumber`       | int4         | Número do banco responsável pela criação do boleto.                                                             |
  | `instructions`     | varchar(200) | Instruções de pagamento do boleto.                                                                              |
  | `acceptance`       | varchar(1)   | Controla se o boleto foi ou não aceito pelo beneficiário.                                                       |
  | `status`           | int4         | Status do boleto de pagamento.                                                                                  |
  | `barcode`          | varchar(60)  | Código de barras.                                                                                               |
  | `barcodenumber`    | varchar(60)  | Número do código de barras.                                                                                     |
  | `type`             | int4         | Tipo de boleto de pagamento gerado.                                                                             |
  | `created_at`       | timestamp    |                                                                                                                 |
  | `updated_at`       | timestamp    |                                                                                                                 |
  | `lancamento_id`    | int8         | Foreing Key da tabela [lancamentos](db-astecas.md#lancamentos) (banco astecas).                                 |

A seguir, encontram-se os dados contidos nos objetos da tabela payment_slip_recharger:

{!databases/baas-tables/details/details-payment_slip_recharger.md!}

- **Relacionamentos:**

  | Tabela                                             | Tipo        | Descrição                                         |
  | :------------------------------------------------- | :---------- | :------------------------------------------------ |
  | [`astecas.lancamentos`](db-astecas.md#lancamentos) | Foreing Key | Os boleto gerados são vinculados a um lançamento. |
  