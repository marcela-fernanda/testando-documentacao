Tabela responsável por armazenar os dados referentes a um sócio de uma determinada empresa.

- **Descrição dos campos da tabela:**

  | Campo                         | Tipo         | Descrição                                                                                        |
  | :---------------------------- | :----------- | :----------------------------------------------------------------------------------------------- |
  | `id`                          | int8         | Indentificador da tabela (Primary Key).                                                          |
  | `empresa_id`                  | int8         | Foreing Key da tabela [empresas](#empresas).                                                     |
  | `nome`                        | varchar(140) | Nome do sócio.                                                                                   |
  | `cpfcnpj`                     | varchar(14)  | CPF ou CNPJ do sócio.                                                                            |
  | `data_nascimento`             | date         | Data de nascimento do sócio.                                                                     |
  | `created_at`                  | timestamp    |                                                                                                  |
  | `updated_at`                  | timestamp    |                                                                                                  |
  | `perfil`                      | varchar(25)  | Dados do perfil no sistema do sócio.                                                             |
  | `tipo`                        | varchar(25)  | Tipo de sócio.                                                                                   |
  | `nome_mae`                    | varchar(255) | Nome da mãe do sócio.                                                                            |
  | `sexo`                        | varchar(1)   | Sexo do sócio.                                                                                   |
  | `estado_civil`                | varchar(25)  | Estado civil do sócio.                                                                           |
  | `email`                       | varchar(255) | E-mail do sócio.                                                                                 |
  | `profissao`                   | varchar(255) | Profissão que o sócio exerce.                                                                    |
  | `pep`                         | varchar(1)   | Controla se a pessoa é politicamente exposta.                                                    |
  | `rg_numero`                   | varchar(25)  | Número do registro geral (RG) do sócio.                                                          |
  | `rg_orgao`                    | varchar(25)  | Órgão expeditor do RG do sócio.                                                                  |
  | `rg_uf`                       | varchar(2)   | Unidade federativa que consta no RG do sócio                                                     |
  | `rg_emissao`                  | date         | Data de emissão do RG do sócio.                                                                  |
  | `telefone_ddi`                | int4         | DDI do tefelone do sócio.                                                                        |
  | `telefone_ddd`                | int4         | DDD do telefone do sócio.                                                                        |
  | `telefone_numero`             | int4         | Número de telefone do sócio.                                                                     |
  | `telefone_tipo`               | varchar(25)  | Tipo de número informado pelo sócio.                                                             |
  | `endereco_rua`                | varchar(255) | Nome da rua em que o sócio mora.                                                                 |
  | `endereco_numero`             | varchar(25)  | Número do local onde o sócio mora.                                                               |
  | `endereco_complemento`        | varchar(25)  | Complemento para localização do local onde o sócio mora.                                         |
  | `endereco_cep`                | varchar(8)   | CEP correspondente ao local onde o sócio mora.                                                   |
  | `endereco_bairro`             | varchar(255) | Bairro onde o sócio mora.                                                                        |
  | `endereco_cidade`             | varchar(255) | Cidade onde o sócio mora.                                                                        |
  | `endereco_uf`                 | varchar(2)   | Estado no qual o sócio mora.                                                                     |
  | `enderecoo_pais`              | varchar(25)  | País no qual o sócio mora.                                                                       |
  | `user_id`                     | int8         | Foreing Key da tabela [users](db-admin.md#users) (banco admin).                                  |
  | `renda`                       | numeric      | Renda atual do sócio.                                                                            |
  | `unidade_id`                  | int8         | Foreing Key da tabela [unidades](#unidades).                                                     |
  | `doc_selfie`                  | varchar(255) | Documento referente a selfie feita pelo sócio.                                                   |
  | `status_doc_selfie`           | varchar(1)   | Status da selfie do sócio. Valores: "W" (aguardando) e "E" (enviado).                            |
  | `data_doc_selfie`             | timestamp    | Data de recebimento da selfie.                                                                   |
  | `qualificacao`                | varchar(2)   | Qualificação do sócio dentro da empresa.                                                         |
  | `participacao`                | numeric      | Porcentagem de participação do sócio na empresa.                                                 |
  | `doc_identity_card_front`     | varchar(255) | Documento de identidade do sócio - anverso.                                                      |
  | `status_identity_card_front`  | varchar(1)   | Status do documento de identidade do sócio - anverso. Valores: "W" (aguardando) e "E" (enviado). |
  | `data_identity_card_front`    | timestamp    | Data de recebimento do documento de identidade - anverso.                                        |
  | `doc_driver_license_front`    | varchar(255) | CNH do sócio - anverso.                                                                          |
  | `status_driver_license_front` | varchar(1)   | Status da CNH do sócio - anverso. Valores: "W" (aguardando) e "E" (enviado).                     |
  | `data_driver_license_front`   | timestamp    | Data de recebimento da CNH - anverso.                                                            |
  | `doc_driver_license_verse`    | varchar(255) | CNH do sócio - verso.                                                                            |
  | `status_driver_license_verse` | varchar(1)   | Status da CNH do sócio - verso. Valores: "W" (aguardando) e "E" (enviado).                       |
  | `data_driver_license_verse`   | timestamp    | Data de recebimento da CNH - verso.                                                              |
  | `doc_identity_card_verse`     | varchar(255) | Documento de identidade do sócio - verso.                                                        |
  | `status_identity_card_verse`  | varchar(1)   | Status do documento de identidade do sócio - verso. Valores: "W" (aguardando) e "E" (enviado).   |
  | `data_identity_card_verse`    | timestamp    | Data de recebimento do documento de identidade - verso.                                          |

- **Relacionamentos:**

  | Tabela                              | Tipo        | Descrição                                                                           |
  | :---------------------------------- | :---------- | :---------------------------------------------------------------------------------- |
  | [`empresas`](#empresas)             | Foreing Key | Os sócios estão associados a uma empresa, e a mesma pode conter diversos sócios.    |
  | [`unidades`](#unidades)             | Foreing Key | Um sócio pode estar associado a unidades de uma mesma empresa de formas diferentes. |
  | [`admin.users`](db-admin.md#users) | Foreing Key | Cada sócio é um diferente usuário dentro do sistema.                                 |