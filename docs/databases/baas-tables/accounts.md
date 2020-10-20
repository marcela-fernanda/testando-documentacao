Tabela responsável por receber os dados da conta bancária, dados do titular da conta e os dados da empresa e associá-los a conta digital respectiva.

- **Descrição dos campos da tabela:**

  | Campo                            | Tipo         | Descrição                                                                                        |
  | :------------------------------- | :----------- | :----------------------------------------------------------------------------------------------- |
  | `id`                             | int4         | Identificador da tabela (Primary Key).                                                           |
  | `idaccount`                      | int4         | Identificador da conta bancária.                                                                 |
  | `idpessoa`                       | int4         | Identificador do titular da conta.                                                               |
  | `nome`                           | varchar(100) | Nome da pessoa ao qual a conta refere-se.                                                        |
  | `idproduto`                      | int4         | Identificador do produto.                                                                        |
  | `idorigemcomercial`              | int4         | Identificador da origem comercial da empresa.                                                    |
  | `nomeorigemcomercial`            | varchar(120) | Nome da origem comercial da empresa.                                                             |
  | `idfantasiabasica`               | int4         | Identificador do nome fantasia.                                                                  |
  | `nomefantasiabasica`             | varchar(120) | Nome fantasia da empresa.                                                                        |
  | `idstatusconta`                  | int4         | Identificador do status da conta.                                                                |
  | `statusconta`                    | varchar(50)  | Status da conta.                                                                                 |
  | `diavencimento`                  | int4         | Dia de vencimento da fatura do cartão.                                                           |
  | `melhordiacompra`                | int4         | Corresponde aos melhores dias para realização de compras.                                        |
  | `datastatusconta`                | timestamp    | Data do status da conta (formato ISO 8601).                                                      |
  | `datacadastro`                   | timestamp    | Data do registro do status da conta (formato ISO 8601).                                          |
  | `dataultimaalteracaovencimento`  | timestamp    | Data da última alteração na data do vencimento da fatura do cartão (formato ISO 8601).           |
  | `datahoraultimacompra`           | timestamp    | A data e a hora da última compra realizada.                                                      |
  | `numeroagencia`                  | int4         | Número da agência da conta.                                                                      |
  | `numerocontacorrente`            | varchar(50)  | Número da conta corrente.                                                                        |
  | `valorrenda`                     | numeric      | Valor da renda comprovada da pessoa cuja conta corresponde.                                      |
  | `formaenviofatura`               | varchar(120) | Forma de envio da fatura a pessoa correspondente.                                                |
  | `titular`                        | bool(1)      | Controla se a pessoa correspondente a conta é ou não a titular do cartão.                        |
  | `limiteglobal`                   | numeric      | Limite de crédito do cartão atualmente.                                                          |
  | `limitesaqueglobal`              | numeric      | Valor do limite de crédito para saques nacionais.                                                |
  | `saldodisponivelglobal`          | numeric      | Crédito disponível para transações nacionais.                                                    |
  | `saldodisponivelsaque`           | numeric      | Crédito disponível para saques nacionais.                                                        |
  | `impedidofinanciamento`          | bool(1)      | Controla se há algum impedimento para realização de pedidos de financiamentos (Lei nº. 4595/64). |
  | `diasatraso`                     | int4         | Quantidade de dias em que uma conta está atrasada.                                               |
  | `proximovencimentopadrao`        | date         | Padrão para a próxima data de vencimento (DD/MM/YYYY).                                           |
  | `idproposta`                     | int4         | Identificador da proposta.                                                                       |
  | `quantidadepagamentos`           | int4         | Corresponde ao número de pagamentos realizados.                                                  |
  | `correspondencia`                | int4         | Campo de controle.                                                                               |
  | `datainicioatraso`               | date         | Data de vencimento de faturas.                                                                   |
  | `rotativopagajuros`              | numeric      | Taxa de juros rotativa.                                                                          |
  | `totalposprox`                   | numeric      | Valor da próxima fatura.                                                                         |
  | `saldoatualfinal`                | numeric      | Valor final do saldo.                                                                            |
  | `saldoextratoanterior`           | numeric      | Saldo anterior da conta.                                                                         |
  | `aceitanovacontaporgrupoproduto` | varchar(20)  | Indica o aceite da abertura de novas contas por um grupo de produtos (empresas).                 |
  | `funcaoativa`                    | varchar(50)  | Funções ativas para aquela conta. Valores possíveis: DEBITO_CREDITO, CREDITO e DEBITO.           |
  | `possuioverlimit`                | bool(1)      | Indica se o OverLimit da conta está ou não ativo.                                                |
  | `created_at`                     | timestamp    |                                                                                                  |
  | `updated_at`                     | timestamp    |                                                                                                  |
  | `service_package_id`             | int4         | Foreing key da tabela [^^service_packages^^](#service_packages).                                 |
  | `ted_free`                       | int4         | Saldo de TED's gratuitos da conta.                                                               |
  | `p2p_free`                       | int4         | Saldo de transferências P2P gratuitos da conta.                                                  |
  | `billet_free`                    | int4         | Saldo de boletos gratuitos da conta.                                                             |
  | `banknumber`                     | varchar(5)   | Número do banco.                                                                                 |
  | `bankbranchnumber`               | varchar(10)  | Número da agência bancária.                                                                      |
  | `bankaccountnumber`              | varchar(20)  | Número da conta bancária.                                                                        |
  | `bankaccountstatus`              | varchar(20)  | Status da conta bancária.                                                                        |
  | `card_free`                      | int4         | Saldo de emissão de cartões gratuitos da conta.                                                  |

*[TED]: Transferência Eletrônica Disponível

- **Relacionamentos:**

  | Tabela                                      | Tipo        | Descrição                                                                      |
  | :------------------------------------------ | :---------- | :----------------------------------------------------------------------------- |
  | [^^`service_packages`^^](#service_packages) | Foreing Key | Cada conta terá um pacote de utilização mensal, com seus respectivos serviços. |