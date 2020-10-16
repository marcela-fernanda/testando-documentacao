Tabela responsável por armazenar os dados de cada unidade de uma empresa no sistema.

- **Descrição dos campos da tabela:**

  | Campo                          | Tipo         | Descrição                                                                  |
  | :----------------------------- | :----------- | :------------------------------------------------------------------------- |
  | `id`                           | int8         | Indentificador da tabela (Primary Key).                                    |
  | `empresa_id`                   | int8         | Foreing Key da tabela [empresas](#empresas).                               |
  | `cpfcnpj`                      | varchar(14)  | CPF/CNPJ da unidade.                                                       |
  | `nome`                         | varchar(140) | Nome da unidade.                                                           |
  | `razao_social`                 | varchar(140) | Razão social da unidade.                                                   |
  | `pais`                         | varchar(3)   | País que se encontra a unidade.                                            |
  | `estado`                       | varchar(2)   | Estado que se encontra a unidade.                                          |
  | `municipio_ibge`               | varchar(7)   | Município que se encontra a unidade.                                       |
  | `bairro`                       | varchar(140) | Bairro que se encontra a unidade.                                          |
  | `logradouro`                   | varchar(140) | Logradouro que se encontra a unidade.                                      |
  | `numero`                       | varchar(10)  | Número da unidade.                                                         |
  | `complemento`                  | varchar(140) | Complemento para localização da unidade.                                   |
  | `cep`                          | varchar(8)   | CEP da unidade.                                                            |
  | `data_abertura`                | date         | Data de abertura da unidade.                                               |
  | `porte`                        | varchar(40)  | Porte da unidade.                                                          |
  | `cnae_principal`               | varchar(40)  | CNAE da unidade.                                                           |
  | `natureza_juridica`            | varchar(40)  | Natureza jurídica da unidade.                                              |
  | `email`                        | varchar(80)  | E-mail da unidade.                                                         |
  | `telefone`                     | varchar(50)  | Telefone da unidade.                                                       |
  | `status`                       | varchar(1)   | Status da unidade no sistema. Valores padrão: "A" (ativo) e "I" (inativo). |
  | `matriz`                       | varchar(1)   | Matriz em relação a unidade.                                               |
  | `created_at`                   | timestamp    |                                                                            |
  | `updated_at`                   | timestamp    |                                                                            |
  | `municipio`                    | varchar(220) | Município que se encontra a unidade.                                       |
  | `receita`                      | numeric      | Receita da unidade.                                                        |
  | `telefone_ddi`                 | int4         | DDI do telefone da unidade.                                                |
  | `telefone_ddd`                 | int4         | DDD do telefone da unidade.                                                |
  | `telefone_tipo`                | varchar(25)  | Tipo de número informado.                                                  |
  | `idcompany`                    | varchar(255) | Identificador para a unidade utilizado pelo BAAS.                          |
  | `regime_tributario`            | varchar(50)  | Registro tributário da unidade.                                            |
  | `formato_juridico`             | varchar(25)  | Formato jurídico da empresa. Exemplo: MEI, EIRELI, etc.                    |
  | `situacao_cadastral`           | varchar(25)  | Situação do cadastro da empresa na receita federal.                        |
  | `doc_atos_constitutivos`       | varchar(255) | Documento relacionado aos Atos Constitutivos de uma determinada unidade.   |
  | `status_doc_atos_constitutivos`| varchar(1)   | Status do documento. Valores: "W" (aguardando) e "E" (enviado).            |
  | `data_doc_atos_constitutivos`  | timestamp    | Data de recebimento do documento de Atos Constitutivos.                    |
  | `inscricao_estadual`           | varchar(50)  | Registro da unidade a nível estadual.                                      |
  | `inscricao_municipal`          | varchar(50)  | Registro da unidade a nível municipal.                                     |
  | `apelido`                      | varchar(120) | Apelido utilizado para relações informais da empresa.                      |
  | `printedcardname`              | varchar(21)  | Nome a ser mostrado no cartão da empresa.                                  |
  
*[CNAE]: Classificação Nacional de Atividades Econômicas
*[MEI]: Microeemprendedor Individual
*[EIRELI]: Empresa Individual de responsabilidade limitada 

- **Relacionamentos:**

  | Tabela                            | Tipo        | Descrição                                                                                 |
  | :------------------------------ - | :---------- | :---------------------------------------------------------------------------------------- |
  | [`empresas`](#empresas)           | Foreing Key | As unidades são pertencentes as empresas, sendo que a mesma pode ter várias unidades.     |
  | [`centrocustos`](#centrocustos)   | Primary Key | Cada unidade possui seu centro de custos próprio, agrupando receitas e despesas da mesma. |
  | [`contascaixas`](#contascaixas)   | Primary Key | Cada unidade possui sua conta caixa, para gerenciamento das transações financeiras.       |
  | [`painel_dados`](#painel_dados)   | Primary Key | Os dados das unidades estarão presentes, também, no painel de dados no sistema.           |
  | [`departamentos`](#departamentos) | Primary Key | Cada unidade pode ter seus departamentos particulares.                                    |
  | [`lancamentos`](#lancamentos)     | Primary Key | Os dados das unidades estarão presentes nos lançamentos.                                  |