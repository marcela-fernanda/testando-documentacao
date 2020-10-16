Tabela responsável por armazenar os dados de pagamentos ligados a uma conta.

- **Descrição dos campos da tabela:**

  | Campo                   | Tipo         | Descrição                                                              |
  | :---------------------- | :----------- | :--------------------------------------------------------------------- |
  | `idaccount`             | int8         | Identificador da conta.                                                |
  | `idadjustment`          | int8         | Identificador do ajuste.                                               |
  | `idissuer`              | int8         | Identificador do emissor.                                              |
  | `barcodenumber`         | varchar(100) | Número do código de barras.                                            |
  | `description`           | varchar(100) | Descrição do boleto de pagamento.                                      |
  | `duedate`               | timestamp    | Data de vencimento.                                                    |
  | `fine`                  | numeric      | Total da multa no boleto de pagamento.                                 |
  | `assignor`              | varchar(100) | Nome do beneficiário envolvido no pagamento.                           |
  | `transactioncode`       | varchar(100) | Código da transação de pagamento.                                      |
  | `transactiondate`       | timestamp    | Data da transação de pagamento.                                        |
  | `status`                | varchar(20)  | Status da transação de pagamento.                                      |
  | `idpaymentconfirmation` | varchar(100) | Identificador do pagamento que é gerado assim que o mesmo é concluído. |
  | `assignordocument`      | varchar(100) | Documento do pagamento do beneficiário.                                |
  | `discount`              | numeric      | Desconto no boleto de pagamento.                                       |
  | `interest`              | numeric      | Taxa de juros do boleto de pagamento.                                  |
  | `amount`                | numeric      | Quantitativo a ser pago.                                               |
  | `id`                    | int8         | Identificador da tabela (Primary Key).                                 |
  | `created_at`            | timestamp    |                                                                        |
  | `updated_at`            | timestamp    |                                                                        |