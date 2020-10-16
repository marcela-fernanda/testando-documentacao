??? info "Objetos da Tabela - Dados"

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
