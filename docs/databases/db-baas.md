# Esquema BAAS - Tabelas
### Accounts

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

### BankTransfers

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
  | `date`               | timestamp    | Data de realização da transferência (ISO 8601).      |
  | `transactioncode`    | varchar(255) | Código da transação.                                 |
  | `idadjustment`       | int4         | Código dos ajustes de identificação.                 |
  | `user_id`            | int4         | Identificador do usuário envolvido na transferência. |
  | `updated_a`          | timestamp    |                                                      |
  | `created_a`          | timestamp    |                                                      |

### Cards

Tabela responsável por armazenar os dados refentes aos cartões associados a uma determinada conta.

- **Descrição dos campos da tabela:**

  | Campo                          | Tipo         | Descrição                                                                      |
  | :----------------------------- | :----------- | :----------------------------------------------------------------------------- |
  | `id`                           | varchar(100) | Identificador da tabela (Primary Key).                                         |
  | `idcard`                       | int4         | Identificador do cartão.                                                       |
  | `flagtitular`                  | int4         | Indica se o titular do cartão é o titular da conta cujo cartão está ligado.    |
  | `idpessoa`                     | int4         | Código atribuído a pessoa cujo cartão pertence.                                |
  | `sequencialcartao`             | int4         | Número de um cartão específico em uma lista de cartões associados a uma conta. |
  | `idconta`                      | int4         | Identificador da conta.                                                        |
  | `idstatus`                     | int4         | Status do cartão.                                                              |
  | `datastatus`                   | timestamp    | Data correspondente a última mudança de status do cartão (formato ISO 8601).   |
  | `idestagio`                    | int4         | Identificador referente ao estágio do cartão.                                  |
  | `dataestagio`                  | timestamp    | Data da última mudança de estágio (formato ISO 8601).                          |
  | `numerobin`                    | int4         | Número de identificação do banco.                                              |
  | `numerocartao`                 | varchar(16)  | Número do cartão.                                                              |
  | `numerocartaohash`             | int4         | Número do cartão em hash.                                                      |
  | `numerocartaocriptografado`    | varchar(100) | Número do cartão criptografado.                                                |
  | `dataemissao`                  | timestamp    | Data de criação do cartão (formato ISO 8601).                                  |
  | `datavalidade`                 | timestamp    | Data de validade do cartão (formato ISO 8601).                                 |
  | `cartaovirtual`                | int4         | Indica se o cartão é ou não virtual.                                           |
  | `impressaoavulsa`              | int4         | Indica a origem da impressão comercial do cartão.                              |
  | `dataimpressao`                | timestamp    | Data da impressão do cartão.                                                   |
  | `nomearquivoimpressao`         | varchar(120) | Nome do arquivo de impressão do cartão.                                        |
  | `idproduto`                    | int4         | Identificador do produto.                                                      |
  | `nomeimpresso`                 | varchar(100) | Nome impresso no cartão.                                                       |
  | `codigodesbloqueio`            | varchar(4)   | Código que é utilizado no processo de desbloqueio do cartão.                   |
  | `tipoportador`                 | varchar(1)   | Mostra o tipo de portador do cartão.                                           |
  | `idstatuscartao`               | int4         | Identificador do status do cartão.                                             |
  | `datastatuscartao`             | timestamp    | Data da última mudança de status do cartão (formato ISO 8601).                 |
  | `idestagiocartao`              | int4         | Identificador do estágio do cartão.                                            |
  | `dataestagiocartao`            | timestamp    | Data da última modificação de estágio do cartão (formato ISO 8601).            |
  | `datageracao`                  | timestamp    | Data de criação do cartão.                                                     |
  | `flagvirtual`                  | int4         | Indica se o cartão é ou não virtual.                                           |
  | `flagimpressaoorigemcomercial` | int4         | Indica se o cartão foi impresso na origem comercial ou não.                    |
  | `arquivoimpressao`             | varchar(100) | Nome do arquivo de impressão do cartão.                                        |
  | `portador`                     | int4         | Nome do portador do cartão.                                                    |
  | `created_at`                   | timestamp    |                                                                                |
  | `updated_at`                   | timestamp    |                                                                                |

### P2PTransfer

Tabela responsável por armazenar os dados referentes as transferências bancárias do tipo P2P.

*[P2P]: Person to Person

- **Descrição dos campos da tabela:**

  | Campo                     | Tipo         | Descrição                                                                         |
  | :------------------------ | :----------- | :-------------------------------------------------------------------------------- |
  | `transactionuuid`         | varchar(100) | Identificador da transação de transferência P2P. Pode ser gerado automaticamente. |
  | `transactioncode`         | varchar(100) | Identificador da transação de transferência P2P.                                  |
  | `originalaccount`         | int8         | O identificador da conta que origina a operação de transferência.                 |
  | `destinationaccount`      | int8         | O identificador da conta de destino da transferência.                             |
  | `amount`                  | numeric      | O quantitativo que será transferido da conta originária para o destinatário.      |
  | `transactiondate`         | timestamp    | Data em que a transação foi realizada (formato ISO 8601).                         |
  | `description`             | varchar(255) | Descrição da transação.                                                           |
  | `idadjustment`            | int8         | Identificador do ajuste da operação na conta originária.                          |
  | `idissuer`                | int8         | Identificador do emissor.                                                         |
  | `status`                  | varchar(20)  | Status da transação.                                                              |
  | `idadjustmentdestination` | int8         | Identificador do ajuste da operação na conta de destino.                          |
  | `cause`                   | varchar(255) | Causa do erro na transferência.                                                   |
  | `created_at`              | timestamp    |                                                                                   |
  | `updated_at`              | timestamp    |                                                                                   |
  | `id`                      | int8         | Identificador da tabela (Primary Key).                                            |
  | `user_id`                 | int8         | Foreing Key da tabela [^^users^^](db-admin.md#users) (banco admin).               |

- **Relacionamentos:**

  | Tabela                                 | Tipo        | Descrição                                             |
  | :------------------------------------- | :---------- | :---------------------------------------------------- |
  | [^^`admin.users`^^](db-admin.md#users) | Foreing Key | Identifica qual usuário realizou a transferência P2P. |

### Payments

Tabela responsável por armazenar os dados de pagamentos ligados a uma conta.

- **Descrição dos campos da tabela:**

  | Campo                   | Tipo         | Descrição                                                                                   |
  | :---------------------- | :----------- | :------------------------------------------------------------------------------------------ |
  | `idaccount`             | int8         | Identificador da conta.                                                                     |
  | `idadjustment`          | int8         | Identificador do ajuste.                                                                    |
  | `idissuer`              | int8         | Identificador do emissor.                                                                   |
  | `barcodenumber`         | varchar(100) | Número do código de barras.                                                                 |
  | `description`           | varchar(100) | Descrição do boleto de pagamento.                                                           |
  | `duedate`               | timestamp    | Data de vencimento (formato ISO 8601).                                                      |
  | `fine`                  | numeric      | Total da multa no boleto de pagamento.                                                      |
  | `assignor`              | varchar(100) | Nome do beneficiário envolvido no pagamento.                                                |
  | `transactioncode`       | varchar(100) | Código da transação de pagamento (é gerada mesmo se o pagamento não ocorrer). Formato UUID. |
  | `transactiondate`       | timestamp    | Data da transação de pagamento (é gerada mesmo se o pagamento não ocorrer).                 |
  | `status`                | varchar(20)  | Status da transação de pagamento.                                                           |
  | `idpaymentconfirmation` | varchar(100) | Identificador do pagamento que é gerado assim que o mesmo é concluído.                      |
  | `assignordocument`      | varchar(100) | Documento do pagamento do beneficiário.                                                     |
  | `discount`              | numeric      | Desconto no boleto de pagamento.                                                            |
  | `interest`              | numeric      | Taxa de juros do boleto de pagamento.                                                       |
  | `amount`                | numeric      | Quantitativo a ser pago.                                                                    |
  | `id`                    | int8         | Identificador da tabela (Primary Key).                                                      |
  | `created_at`            | timestamp    |                                                                                             |
  | `updated_at`            | timestamp    |                                                                                             |

### Payment_Slip_Invoice

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

#### Objetos da tabela - Payment_Slip_Invoice

???+ info "Dados"

    === "Beneficiary"
        * **`documentType`:** Tipo de documento do beneficiário.
        * **`name`:** Nome do beneficiário.
        * **`state`:** Unidade federativa do beneficiário.
        * **`address`:** Endereço do beneficiário.
        * **`numberAddress`:** Número relacionando ao endereço do beneficiário.
        * **`neighborhood`:** Bairro relacionado ao endereço do beneficiário.
        * **`city`:** Cidade do beneficiário.
        * **`zipCode`:** Código postal do beneficiário.

    === "Cobeneficiary"
        * **`documentType`:** Tipo de documento do co-beneficiário.
        * **`documentNumber`:** Número do documento.
        * **`name`:** Nome do co-beneficiário.

    === "PaymentSlip"
        * **`documentType`:** Tipo de documento, podendo ser: duplicata mercantil ou duplicata de serviço.
        * **`dueDate`:** Data de pagamento do boleto.
        * **`amount`:** Valor a ser pago.

    === "Fine"
        * **`code`:** Código da multa, podendo ser: "1" = não registrada, "2" = valor fixo e "3" = multa percentual.
        * **`date`:** Data da multa.
        * **`amount`:** Valor da multa.

    === "Discount"
        * **`code`:** Código do desconto, podedo ser: "1" = porcentagem até a data informada ou "2" = porcentagem sobre os dias antecipados.
        * **`date`:** Data do desconto.
        * **`amount`:** Valor do desconto.
  
    === "Interest"
        * **`code`:** Código da taxa de juros, podendo ser: "1" = valor fixo ou "2" = * porcentagem.
        * **`date`:** Data da taxa de juros.
        * **`amountPerDay`:** Valor diário.

    === "Others"
        * **`acceptance`:** Descreve se o boleto teve o aceite realizado pelo beneficiário.
        * **`typeAutomaticCancellation`:** Tipo de cancelamento automático do boleto, podendo ser: "01" = tem cancelamento automático ou "02" = não tem cancelamento automático.
        * **`deadlineAutomaticCancellation`:** Data limite para cancelamento automático do boleto após o dia de vencimento.
        * **`typeContestation`:** Protesto de título, podendo ser: "01" = tem contestação o "02" = não tem contestação.
        * **`contestationNumberOfDays`:** Dias de protesto de título após a data de vencimento.

    === "Payer"
        * **`documentType`:** Tipo de pagador, podendo ser: "F" = individual (pessoa física) ou "J" = companhia (pessoa jurídica).
        * **`documentNumber`:** Documento do pagador.
        * **`name`:** Nome do pagador.
        * **`tradeName`:** Nome comercial.
        * **`address`:** Endereço do pagador.
        * **`city`:** Cidade do pagador.
        * **`state`:** Unidade federativa do pagador.
        * **`zipCode`:** Código postal do pagador.
    
- **Relacionamentos:**

  | Tabela                                                                     | Tipo        | Descrição                                            |
  | :------------------------------------------------------------------------- | :---------- | :--------------------------------------------------- |
  | [^^`astecas.lancamentos`^^](db-astecas.md#lancamentos)                     | Foreing Key | Os boletos gerados estão vinculados a um lançamento. |
  | [^^`astecas.fornecedores_clientes`^^](db-astecas.md#fornecedores_clientes) | Foreing Key | Cada lançamento possui um fornecedor_cliente.        |
  | [^^`astecas.documentos`^^](db-astecas.md#documentos)                       | Foreing Key | Refere-se aos documentos gerados e que são armazenados no Amazon S3. |

*[Amazon S3]: Amazon Simple Storage Service

### Payment_Slip_Recharger

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
  | `datedocument`     | date         | Data de criação do documento de pagamento (formato ISO 8601).                                                   |
  | `payer`            | jsonb        | Objeto contendo os [^^dados^^](#__tabbed_2_1) sobre o pagador do boleto.                                        |
  | `beneficiary`      | jsonb        | Objeto contendo os [^^dados^^](#__tabbed_2_2) do beneficiário.                                                  |
  | `cobeneficiary`    | jsonb        | Objeto contendo os [^^dados^^](#__tabbed_2_3) da empresa que realizou a venda responsável pela geração de boleto (sacador avalista). |
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
  | `lancamento_id`    | int8         | Foreing Key da tabela [^^lancamentos^^](db-astecas.md#lancamentos) (banco astecas).                             |

#### Objetos da tabela - Payment_Slip_Recharger

???+ info "Dados"
    
    === "Payer"
        * **`documentType`:** Tipo de documento do pagador, podendo ser: "F" = individual (pessoa física) ou "J" = companhia (pessoa jurídica).
        * **`documentNumber`:** Número do documento.
        * **`name`:** Nome do pagador.
    
    === "Beneficiary"
        * **`documentType`:** Tipo de documento do beneficiário, podendo ser: "F" = individual (pessoa física) ou "J" = companhia (pessoa jurídica).
        * **`documentNumber`:** Número do documento.
        * **`name`:** Nome do beneficiário.

    === "Cobeneficiary"
        * **`documentType`:** Tipo de documento do sacador avalista, podendo ser: "F" = individual (pessoa física) ou "J" = companhia (pessoa jurídica).
        * **`documentNumber`:** Número do documento.
        name: Nome do sacador avalista.  

- **Relacionamentos:**

  | Tabela                                                 | Tipo        | Descrição                                         |
  | :----------------------------------------------------- | :---------- | :------------------------------------------------ |
  | [^^`astecas.lancamentos`^^](db-astecas.md#lancamentos) | Foreing Key | Os boleto gerados são vinculados a um lançamento. |
  

### Registrations

Tabela responsável por armazenar os dados das companhias (empresas).

- **Descrição dos campos da tabela:**

  | Campo            | Tipo        | Descrição                                                                     |
  | :--------------- | :---------- | :---------------------------------------------------------------------------- |
  | `id`             | int4        | Identificador da tabela (Primary Key).                                        |
  | `idegistration`  | varchar(36) | Identificador do código de registro.                                          |
  | `status`         | varchar(20) | Status do registro.                                                           |
  | `company`        | jsonb       | Objeto contendo os [^^dados^^](#__tabbed_3_1) de uma companhia.               |
  | `productsetting` | jsonb       | Objeto contendo os [^^dados^^](#__tabbed_3_2) de um produto.                  |
  | `empresa_id`     | int8        | Foreing Key da tabela [^^empresas^^](db-astecas.md#empresas) (banco astecas). |
  | `created_at`     | timestamp   |                                                                               |
  | `updated_at`     | timestamp   |                                                                               |

#### Objetos da tabela - Registrations

??? info "Dados"

    === "Company"
        * **`nationalRegistration`:** CNPJ da empresa.
        * **`legalName`:** Nome legal da empresa.
        * **`legalNature`:** Natureza legal da empresa.
        * **`tradeName`:** Nome comercial da empresa.
        * **`dateEstablishment`:** Data de fundação da empresa. Deve corresponder ao passado.
        * **`stateRegistration`:** Registro estadual da empresa.
        * **`email`:** E-mail da empresa.
        * **`revenue`:** Receita anual da empresa.
        * **`partnerChanged`:** Identifica se houve uma mudança recente nas parcerias de negócio.
        * **`mainCnae`:** CNAE (Classificação Nacional de Atividades Econômicas) da empresa.
        * **`cnaes`:** CNAE adicionais.
        * **`mainPhone`:** Número de telefone principal, que contém:
            * `type`: Tipo de telefone.
            * `countryCode`: Código do país.
            * `area`: Código da área.
            * `number`: Número de telefone (aceita 9 dígitos apenas se o primeiro for "9").
        * **`phones`:** Números adicionais, que contém:
            * `type`: Tipo de telefone.
            * `countryCode`: Código do país.
            * `area`: Código da área.
            * `number`: Número de telefone (aceita 9 dígitos apenas se o primeiro for "9").
        * **`mainAddress`:** Endereço principal, que contém:
            * `zip`: Código postal.
            * `country`: Nome do país.
            * `state`: Nome da unidade federativa abreviado.
            * `city`: Nome da cidade.
            * `neighborhood`: Nome do bairro.
            * `street`: Nome da rua.
            * `number`: Número com valores maiores que 0.
            * `complement`: Complemento para o endereço.
        * **`addresses`:** Endereços complementares, que contém:
            * `zip`: Código postal.
            * `country`: Nome do país.
            * `state`: Nome da unidade federativa abreviado.
            * `city`: Nome da cidade.
            * `neighborhood`: Nome do bairro.
            * `street`: Nome da rua.
            * `number`: Número com valores maiores que 0.
            * `complement`: Complemento para o endereço.
        * **`partners`:** Sócios da empresa, que contém:
            * **`individuals`:** Indivíduos, cujos dados são:
                * `nationalRegistration`: Registro nacional do indivíduo.
                * `name`: Nome do indivíduo.
                * `motherName`: Nome da mãe do indivíduo (requerido quando "type = master").
                * `dateBirth`: Data de aniversário (requerido quando "type = master").
                revenue: Receita anual do indivíduo.
                * `email`: Endereço de e-mail (requerido quando "type = master").
                * `isPep`: Indica se a pessoa é politicamente exposta.
                * `occupation`: Ocupação do indivíduo.
                * `gender`: Gênero do indivíduo.
                * `maritalStatus`: Estado civil do indivíduo.
                * `profile`: Nível hierárquico do indivíduo.
                * `type`: Tipo de perfil.
                * **`identityCard`:** Dados da carteira de identidade do indivíduo, sendo:
                    * `number`: número de registro (RG).
                    * `dispatcher`: Órgão emissor.
                    * `federativeUnit`: Estado cuja identidade foi emitida.
                    * `dateIssuance`: Data em que a identidade foi emitida.
                * **`mainAddress`:** Endereço principal, contendo:
                    * `zip`: Código postal.
                    * `country`: Nome do país.
                    * `state`: Nome da unidade federativa abreviado.
                    * `city`: Nome da cidade.
                    * `neighborhood`: Nome do bairro.
                    * `street`: Nome da rua.
                    * `number`: Número com valores maiores que 0.
                    * `complement`: Complemento para o endereço.
                * **`addresses`:** Endereços complementares, contendo:
                    * `zip`: Código postal.
                    * `country`: Nome do país.
                    * `state`: Nome da unidade federativa abreviado.
                    * `city`: Nome da cidade.
                    * `neighborhood`: Nome do bairro.
                    * `street`: Nome da rua.
                    * `number`: Número com valores maiores que 0.
                    * `complement`: Complemento para o endereço.
                * **`mainPhone`:** Telefone principal, contendo:
                    * `type`: Tipo de telefone.
                    * `countryCode`: Código do país.
                    * `area`: Código da área.
                    * `number`: Número de telefone (aceita 9 dígitos apenas se o primeiro for "9").
                * **`phones`:** Telefones adicionais, contendo:
                    * `type`: Tipo de telefone.
                    * `countryCode`: Código do país.
                    * `area`: Código da área.
                    * `number`: Número de telefone (aceita 9 dígitos apenas se o primeiro for "9").
            * **`companies`:** Carga útil da empresa.
    === "ProductSetting"
        * **`idProduct`:** Identificador do produto empresarial.
        * **`idBusinessSource`:** Identificador da fonte de negócios.
        * **`printedCardName`:** Nome impresso no cartão.
        * **`externalAccountNumber`:** Autorização externa.
        * **`termsAndConditionsTokens`:** Termos e condições, política de privacidade e outros tokens aplicáveis, gerados pelo RegDocs API.
        * **`deviceIdentification`:** Detalhes de identificação do dispositivo, contendo:
            * `fingerprint`: Identicação do dispositivo (agente de usuário do navegador ou número de série do dispositivo, e endereço ipv4, separados por um #).

- **Relacionamentos:**

  | Tabela                                           | Tipo        | Descrição                                |
  | :----------------------------------------------- | :---------- | :--------------------------------------- |
  | [^^`astecas.empresas`^^](db-astecas.md#empresas) | Foreing Key | Busca os dados da empresa para registro. |

### Registrations_Documents

Armazena os documentos para o registro de uma empresa.

- **Descrição dos campos da tabela:**

  | Campo           | Tipo         | Descrição                                                                         |
  | :-------------- | :----------- | :-------------------------------------------------------------------------------- |
  | `id`            | int4         | Identificador da tabela (Primary Key).                                            |
  | `idegistration` | varchar(36)  | Identificador do código de registro de uma companhia.                             |
  | `category`      | varchar(50)  | Categoria do documento.                                                           |
  | `iddocument`    | varchar(36)  | Identificador do documento.                                                       |
  | `url`           | varchar(255) | URL do documento.                                                                 |
  | `created_at`    | timestamp    |                                                                                   |
  | `documento_id`  | int8         | Foreing Key da tabela [^^documentos^^](db-astecas.md#documentos) (banco astecas). |

- **Relacionamentos:**

  | Tabela                                               | Tipo        | Descrição                                       |
  | :--------------------------------------------------- | :---------- | :---------------------------------------------- |
  | [^^`astecas.documentos`^^](db-astecas.md#documentos) | Foreing Key | Busca os documentos relacionados a uma empresa. |

### Registrations_Updates

Tabela utilizada no processo de atualização dos dados de uma determinada companhia.

- **Descrição dos campos da tabela:**

  | Campo             | Tipo        | Descrição                                                                |
  | :---------------- | :---------- | :----------------------------------------------------------------------- |
  | `id`              | int4        | Identificador da tabela (Primary Key).                                   |
  | `idegistration`   | varchar(36) | Identificador do código de registro da companhia.                        |
  | `company`         | jsonb       | Objeto contendo detalhes ([^^dados^^](#__tabbed_4_1)) sobre a companhia. |
  | `productsettings` | json        | Objeto contendo detalhes ([^^dados^^](#__tabbed_4_2)) sobre o produto.   |
  | `created_at`      | timestamp   |                                                                          |
  | `updated_at`      | timestamp   |                                                                          |

#### Objetos da tabela - Registrations_Updates

??? info "Dados"

    === "Company"
        * **`nationalRegistration`:** CNPJ da empresa.
        * **`legalName`:** Nome legal da empresa.
        * **`legalNature`:** Natureza legal da empresa.
        * **`tradeName`:** Nome comercial da empresa.
        * **`dateEstablishment`:** Data de fundação da empresa. Deve corresponder ao passado.
        * **`stateRegistration`:** Registro estadual da empresa.
        * **`email`:** E-mail da empresa.
        * **`revenue`:** Receita anual da empresa.
        * **`partnerChanged`:** Identifica se houve uma mudança recente nas parcerias de negócio.
        * **`mainCnae`:** CNAE (Classificação Nacional de Atividades Econômicas) da empresa.
        * **`cnaes`:** CNAE adicionais.
        * **`mainPhone`:** Número de telefone principal, que contém:
            * `type`: Tipo de telefone.
            * `countryCode`: Código do país.
            * `area`: Código da área.
            * `number`: Número de telefone (aceita 9 dígitos apenas se o primeiro for "9").
        * **`phones`:** Números adicionais, que contém:
            * `type`: Tipo de telefone.
            * `countryCode`: Código do país.
            * `area`: Código da área.
            * `number`: Número de telefone (aceita 9 dígitos apenas se o primeiro for "9").
        * **`mainAddress`:** Endereço principal, que contém:
            * `zip`: Código postal.
            * `country`: Nome do país.
            * `state`: Nome da unidade federativa abreviado.
            * `city`: Nome da cidade.
            * `neighborhood`: Nome do bairro.
            * `street`: Nome da rua.
            * `number`: Número com valores maiores que 0.
            * `complement`: Complemento para o endereço.
        * **`addresses`:** Endereços complementares, que contém:
            * `zip`: Código postal.
            * `country`: Nome do país.
            * `state`: Nome da unidade federativa abreviado.
            * `city`: Nome da cidade.
            * `neighborhood`: Nome do bairro.
            * `street`: Nome da rua.
            * `number`: Número com valores maiores que 0.
            * `complement`: Complemento para o endereço.
        * **`partners`:** Sócios da empresa, que contém:
            * **`individuals`:** Indivíduos, cujos dados são:
                * `nationalRegistration`: Registro nacional do indivíduo.
                * `name`: Nome do indivíduo.
                * `motherName`: Nome da mãe do indivíduo (requerido quando "type = master").
                * `dateBirth`: Data de aniversário (requerido quando "type = master").
                revenue: Receita anual do indivíduo.
                * `email`: Endereço de e-mail (requerido quando "type = master").
                * `isPep`: Indica se a pessoa é politicamente exposta.
                * `occupation`: Ocupação do indivíduo.
                * `gender`: Gênero do indivíduo.
                * `maritalStatus`: Estado civil do indivíduo.
                * `profile`: Nível hierárquico do indivíduo.
                * `type`: Tipo de perfil.
                * **`identityCard`:** Dados da carteira de identidade do indivíduo, sendo:
                    * `number`: número de registro (RG).
                    * `dispatcher`: Órgão emissor.
                    * `federativeUnit`: Estado cuja identidade foi emitida.
                    * `dateIssuance`: Data em que a identidade foi emitida.
                * **`mainAddress`:** Endereço principal, contendo:
                    * `zip`: Código postal.
                    * `country`: Nome do país.
                    * `state`: Nome da unidade federativa abreviado.
                    * `city`: Nome da cidade.
                    * `neighborhood`: Nome do bairro.
                    * `street`: Nome da rua.
                    * `number`: Número com valores maiores que 0.
                    * `complement`: Complemento para o endereço.
                * **`addresses`:** Endereços complementares, contendo:
                    * `zip`: Código postal.
                    * `country`: Nome do país.
                    * `state`: Nome da unidade federativa abreviado.
                    * `city`: Nome da cidade.
                    * `neighborhood`: Nome do bairro.
                    * `street`: Nome da rua.
                    * `number`: Número com valores maiores que 0.
                    * `complement`: Complemento para o endereço.
                * **`mainPhone`:** Telefone principal, contendo:
                    * `type`: Tipo de telefone.
                    * `countryCode`: Código do país.
                    * `area`: Código da área.
                    * `number`: Número de telefone (aceita 9 dígitos apenas se o primeiro for "9").
                * **`phones`:** Telefones adicionais, contendo:
                    * `type`: Tipo de telefone.
                    * `countryCode`: Código do país.
                    * `area`: Código da área.
                    * `number`: Número de telefone (aceita 9 dígitos apenas se o primeiro for "9").
            * **`companies`:** Carga útil da empresa.
    === "ProductSetting"
        * **`idProduct`:** Identificador do produto empresarial.
        * **`idBusinessSource`:** Identificador da fonte de negócios.
        * **`printedCardName`:** Nome impresso no cartão.
        * **`externalAccountNumber`:** Autorização externa.
        * **`termsAndConditionsTokens`:** Termos e condições, política de privacidade e outros tokens aplicáveis, gerados pelo RegDocs API.
        * **`deviceIdentification`:** Detalhes de identificação do dispositivo, contendo:
            * `fingerprint`: Identicação do dispositivo (agente de usuário do navegador ou número de série do dispositivo, e endereço ipv4, separados por um #).

### Service_Packages

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