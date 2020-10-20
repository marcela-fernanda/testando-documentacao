Tabela responsável por armazenar os boletos de pagamento referentes a cobranças feitas pelos clientes.

- **Descrição dos campos da tabela:**

  | Campo                   | Tipo         | Descrição                                                                                               |
  | :---------------------- | :----------- | :------------------------------------------------------------------------------------------------------ |
  | `id`                    | int4         | Identificador da tabela (Primary Key).                                                                  |
  | `idaccount`             | int4         | Identificador da conta.                                                                                 |
  | `covenantnumber`        | int4         | Número de convênio.                                                                                     |
  | `issuerbanknumber`      | varchar(50)  | Número da banco emissor.                                                                                |
  | `idbanknumber`          | varchar(50)  | Identificador do banco destinatário.                                                                    |
  | `uniqueid`              | varchar(50)  | Identificador de um boleto de pagamento específico.                                                     |
  | `datedocument`          | date         | Data do pagamento (formato ISO 8601).                                                                   |
  | `beneficiary`           | jsonb        | Objeto contendo os [^^dados^^](#__tabbed_1_1) do beneficiário.                                          |
  | `cobeneficiary`         | jsonb        | Objeto contendo os [^^dados^^](#__tabbed_1_2) da empresa que realizou a venda responsável pela geração de boleto (sacador avalista). |
  | `paymentslip`           | jsonb        | Objeto contendo os [^^dados^^](#__tabbed_1_3) do boleto de pagamento.                                   |
  | `fine`                  | jsonb        | Objeto contendo os [^^dados^^](#__tabbed_1_4) referentes a multa do boleto.                             |
  | `discount`              | jsonb        | Objeto contendo os [^^dados^^](#__tabbed_1_5) referentes aos descontos no boleto.                       |
  | `interest`              | jsonb        | Objeto contendo os [^^dados^^](#__tabbed_1_6) das taxas de juros no boleto.                             |
  | `others`                | jsonb        | Objeto contendo informações ([^^dados^^](#__tabbed_1_7)) complementares sobre o boleto.                 |
  | `payer`                 | jsonb        | Objeto contendo informações ([^^dados^^](#__tabbed_1_8)) sobre o pagador do boleto.                     |
  | `bankbranchnumber`      | int4         | Número da agência do banco responsável pela criação do boleto de pagamento.                             |
  | `banknumber`            | int4         | Número do banco responsável pela criação do boleto.                                                     |
  | `instructions`          | varchar(100) | Instruções de pagamento do boleto.                                                                      |
  | `status`                | int4         | Status do boleto de pagamento.                                                                          |
  | `barcode`               | varchar(50)  | Código de barras do boleto.                                                                             |
  | `barcodenumber`         | varchar(50)  | Número do código de barras (linha digitável).                                                           |
  | `type`                  | varchar(10)  | Tipo de boleto que foi gerado.                                                                          |
  | `created_at`            | timestamp    |                                                                                                         |
  | `updated_at`            | timestamp    |                                                                                                         |
  | `lancamento_id`         | int8         | Foreing Key da tabela [^^lancamentos^^](db-astecas.md#lancamentos) (banco astecas).                     |
  | `fornecedor_cliente_id` | int8         | Foreing Key da tabela [^^fornecedores_clientes^^](db-astecas.md#fornecedores_clientes) (banco astecas). |
  | `documento_id`          | int8         | Foreing Key da tabela [^^documentos^^](db-astecas.md#documentos) (banco astecas).                       |

A seguir, encontram-se os dados contidos nos objetos da tabela payment_slip_invoice:

{!databases/baas-tables/details/details-payment_slip_invoice.md!}

- **Relacionamentos:**

  | Tabela                                                                     | Tipo        | Descrição                                            |
  | :------------------------------------------------------------------------- | :---------- | :--------------------------------------------------- |
  | [^^`astecas.lancamentos`^^](db-astecas.md#lancamentos)                     | Foreing Key | Os boletos gerados estão vinculados a um lançamento. |
  | [^^`astecas.fornecedores_clientes`^^](db-astecas.md#fornecedores_clientes) | Foreing Key | Cada lançamento possui um fornecedor_cliente.        |
  | [^^`astecas.documentos`^^](db-astecas.md#documentos)                       | Foreing Key | Refere-se aos documentos gerados e que são armazenados no Amazon S3. |

*[Amazon S3]: Amazon Simple Storage Service