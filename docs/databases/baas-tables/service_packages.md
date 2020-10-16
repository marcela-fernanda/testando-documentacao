Tabela responsável por armazenar os dados dos pacotes de utilização dos serviços bancários.

- **Descrição dos campos da tabela:**

  | Campo             | Tipo         | Descrição                                    |
  | :---------------- | :----------- | :------------------------------------------- |
  | `id`              | int4         | Identificador da tabela (Primary Key).       |
  | `name`            | varchar(120) | Nome do pacote de serviços.                  |
  | `description`     | text         | Descrição do pacote de serviços.             |
  | `created_at`      | timestamp    |                                              |
  | `updated_at`      | timestamp    |                                              |
  | `status`          | varchar(20)  | Status do pacote de serviços.                |
  | `ted_free`        | int4         | Quantidade de TED's gratuitos.               |
  | `ted_fee`         | numeric      | Taxa para realização de um TED.              |
  | `p2p_free`        | int4         | Quantidade de transferências P2P gratuitas.  |
  | `p2p_fee`         | numeric      | Taxa para realização de transferências P2P.  |
  | `billet_free`     | int4         | Quantidade de gerações de boletos gratuitas. |
  | `billet_fee`      | numeric      | Taxa para geração de boletos.                |
  | `card_free`       | int4         | Quantidade de gerações de cartões gratuitos. |
  | `card_fee`        | numeric      | Taxa para geração de cartões.                |
  | `monthly_payment` | numeric      | Valor mensal pago pelo pacote.               |