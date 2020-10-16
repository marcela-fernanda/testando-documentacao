Tabela responsável por armazenar os dados referentes aos destinatários envolvidos em  uma transferência bancária.

- **Descrição dos campos da tabela:**

  | Campo                | Tipo         | Descrição                                            |
  | :------------------- | :----------- | :--------------------------------------------------- |
  | `lid`                | int8         | Identificador da tabela (Primary Key).               |
  | `idoriginalaccount`  | int4         | Identificador da conta original.                     |
  | `subissuercode`      | varchar(255) | Corresponde ao código do sub-emissor.                |
  | `description`        | varchar(255) | Descrição do banco cuja transferência corresponde.   |
  | `identificador`      | varchar(255) | Controlador interno do sub-emissor.                  |
  | `type`               | varchar(255) | Tipo de beneficiário.                                |
  | `docidcpfcnpjeinssn` | varchar(255) | Documentos do beneficiário.                          |
  | `name`               | varchar(255) | Nome do beneficiário.                                |
  | `bankid`             | int4         | Identificador da agência bancária.                   |
  | `agency`             | int4         | Número da agência bancária do beneficiário.          |
  | `agencydigit`        | varchar(255) | Dígito da agência do beneficiário.                   |
  | `account`            | int4         | Número da conta do beneficiário.                     |
  | `accountdigit`       | varchar(255) | Dígito da conta do beneficiário.                     |
  | `accounttype`        | varchar(255) | Tipo de conta que o beneficiário possui.             |
  | `value`              | numeric      | Valor a ser transferido.                             |
  | `idissuer`           | int4         | Código de identificação do emissor.                  |
  | `tariffcode`         | varchar(255) | Código da tarifa.                                    |
  | `uid`                | varchar(255) | Identificador da transferência.                      |
  | `date`               | timestamp    | Destino da transação.                                |
  | `transactioncode`    | varchar(255) | Código da transação.                                 |
  | `idadjustment`       | int4         | Código dos ajustes de identificação.                 |
  | `user_id`            | int4         | Identificador do usuário envolvido na transferência. |
  | `updated_a`          | timestamp    |                                                      |
  | `created_a`          | timestamp    |                                                      |