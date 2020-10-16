Tabela responsável por armazenar os tipos de documentos presentes no sistema.

- **Descrição dos campos da tabela:**

  | Campo          | Tipo         | Descrição                                                                                    |
  | :------------- | :----------- | :------------------------------------------------------------------------------------------- |
  | `id`           | int8         | Indentificador da tabela (Primary Key).                                                      |
  | `empresa_id`   | int8         | Foreing Key da tabela [empresas](#empresas).                                                 |
  | `fornecedor`   | varchar(1)   | Controle que informa se a empresa é um fornecedor de produtos/serviços ou apenas um cliente. |
  | `cliente`      | varchar(1)   | Controle que informa se a empresa é cliente ou não.                                          |
  | `cpfcnpj`      | varchar(14)  | CPF ou CNPJ do fornecedor.                                                                   |
  | `nome`         | varchar(140) | Nome do fornecedor.                                                                          |
  | `razao_social` | varchar(140) | Razão social do fornecedor.                                                                  |
  | `tipo`         | varchar(2)   | Tipo de fornecedor.                                                                          |
  | `pais`         | varchar(3)   | País do fornecedor.                                                                          |
  | `estado`       | varchar(2)   | Estado no qual se encontra o fornecedor.                                                     |
  | `municipio`    | varchar(100) | Município em que está o fornecedor.                                                          |
  | `bairro`       | varchar(140) | Bairro em que está o fornecedor.                                                             |
  | `logradouro`   | varchar(140) | Logradouro no qual se encontra o fornecedor.                                                 |
  | `numero`       | varchar(10)  | Número do endereço do fornecedor.                                                            |
  | `complemento`  | varchar(140) | Complemento do endereço do fornecedor.                                                       |
  | `cep`          | varchar(8)   | CEP do endereço do fornecedor.                                                               |
  | `contatos`     | jsonb        | Números para contatos com o fornecedor.                                                      |
  | `status`       | varchar(1)   | Status do fornecedor no sistema. Valores padrão: "A" (ativo) e "I" (inativo).                |
  | `created_at`   | timestamp    |                                                                                              |
  | `updated_at`   | timestamp    |                                                                                              |
  | `email`        | varchar(120) | E-mail para contato com o fornecedor.                                                        |
  | `unidade_id`   | int8         | Foreing Key da tabela [unidades](#unidades).                                                 |

- **Relacionamentos:**

  | Tabela                                              | Tipo        | Descrição                                                                       |
  | :-------------------------------------------------- | :---------- | :------------------------------------------------------------------------------ |
  | [`empresas`](#empresas)                             | Foreing Key | Cada empresa pode ter vários fornecedores ligados a ela.                        |
  | [`unidades`](#unidades)                             | Foreing Key | Cada unidade, assim como a empresa, pode ter vários fornecedores ligados a ela. |
  | [`lancamentos_baixas`](#lancamentos_baixas)         | Primary Key | Os dados dos fornecedores (empresas) constarão nas baixas dos lançamentos.      |
  | [`pag_transferencia`](#pag_transferencias)          | Primary Key | A empresa (fornecedor/a) pode realizar transferência.                           |
  | [`orcamentos_lancamentos`](#orcamentos_lancamentos) | Primary Key | Os lançamentos contidos nos orçamentos conterão os dados dos fornecedores.      |
  | [`lancamentos`](#lancamentos)                       | Primary Key | Os lançamentos conterão os dados dos fornecedores.                              |