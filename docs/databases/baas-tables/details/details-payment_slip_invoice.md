??? info "Objetos da Tabela - Dados"

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

    === "Discount"
        * **`code`:** Código do desconto, podedo ser: "1" = porcentagem até a data informada ou "2" = porcentagem sobre os dias antecipados.
        * **`date`:** Data do desconto.
        * **`amount`:** Valor do desconto.

    === "Fine"
        * **`code`:** Código da multa, podendo ser: "1" = não registrada, "2" = valor fixo e "3" = multa percentual.
        * **`date`:** Data da multa.
        * **`amount`:** Valor da multa.

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

    === "PaymentSlip"
        * **`documentType`:** Tipo de documento, podendo ser: duplicata mercantil ou duplicata de serviço.
        * **`dueDate`:** Data de pagamento do boleto.
        * **`amount`:** Valor a ser pago.