# Esquema Astecas - Tabelas
### Bancos

Tabela responsável pelo armazenamento dos dados referentes aos bancos que estão ligados a uma dada conta bancária utilizada durante alguma transação bancária.

- **Descrição dos campos da tabela:**

  | Campo        | Tipo         | Descrição                               |
  | :----------- | :----------- | :-------------------------------------- |
  | `id`         | int8         | Indentificador da tabela (Primary Key). |
  | `descricao`  | varchar(150) | Descrição sobre o banco.                |
  | `codigo`     | varchar(15)  | Código referente ao banco.              |
  | `logo`       | varchar(255) | Logo do banco.                          |
  | `created_at` | timestamp    |                                         |
  | `updated_at` | timestamp    |                                         |
  | `nome`       | varchar(255) | Nome do banco.                          |

- **Relacionamentos:**

  | Tabela                                    | Tipo        | Descrição                          |
  | :---------------------------------------- | :---------- | :----------------------------------|
  | [^^`contasbancarias`^^](#contasbancarias) | Primary Key | A conta bancária está ligada a um banco, assim como o mesmo banco possui várias contas bancárias ligadas a ele. |

### Cargos

Tabela responsável por armazenar os cargos que cada empresa possui.

- **Descrição dos campos da tabela:**

  | Campo        | Tipo        | Descrição                                        |
  | :----------- | :---------- | :----------------------------------------------- |
  | `id`         | int8        | Indentificador da tabela (Primary Key).          |
  | `empresa_id` | int8        | Foreing Key da tabela [^^empresas^^](#empresas). |
  | `nome`       | varchar(40) | Nome do cargo.                                   |
  | `descricao`  | text        | Descrição do cargo.                              |
  | `created_at` | timestamp   |                                                  |
  | `updated_at` | timestamp   |                                                  |

- **Relacionamentos:**

  | Tabela                                | Tipo        | Descrição                                                                  |
  | :------------------------------------ | :---------- | :------------------------------------------------------------------------- |
  | [^^`empresas`^^](#empresas)           | Foreing Key | Cada empresa possui diversos cargos, e cargos estão ligados a uma empresa. |
  | [^^`colaboradores`^^](#colaboradores) | Primary Key | Cada colaborador exerce um cargo dentro de uma determinada empresa.        |

### CentroCustos

Tabela responsável por agrupar as receitas e despesas relacionadas a uma empresa.

- **Descrição dos campos da tabela:**

  | Campo        | Tipo        | Descrição                                    |
  | :----------- | :---------- | :------------------------------------------- |
  | `id`         | int8        | Indentificador da tabela (Primary Key).      |
  | `empresa_id` | int8        | Foreing Key da tabela [^^empresas^^](#empresas). |
  | `unidade_id` | int8        | Foreing Key da tabela [^^unidades^^](#unidades). |
  | `nome`       | varchar(40) | Nome do centro de custos.                    |
  | `descricao`  | text        | Descrição do centro de custos.               |
  | `created_at` | timestamp   |                                              |
  | `updated_at` | timestamp   |                                              |

- **Relacionamentos:**

  | Tabela                                                  | Tipo        | Descrição                                                                           |
  | :------------------------------------------------------ | :---------- | :---------------------------------------------------------------------------------- |
  | [^^`empresas`^^](#empresas)                             | Foreing Key | Uma empresa possui centros de custos, e esses estão ligados a uma empresa.          |
  | [^^`unidades`^^](#unidades)                             | Foreing Key | Unidades possuem centros de custos e os mesmos estão relacionados a uma unidade.    |
  | [^^`orcamentos_lancamentos`^^](#orcamentos_lancamentos) | Primary Key | Os dados dos centros de custos constarão nos lançamentos dos orçamentos da empresa. |
  | [^^`lancamentos_baixas`^^](#lancamentos_baixas)         | Primary Key | Os dados dos centros de custos estão inseridos nos lançamentos que passarão pelo processo de "baixa". |
  | [^^`lancamentos`^^](#lancamentos)                       | Primary Key | Os dados centros de custos estão contidos em lançamentos.                           |

### Colaboradores

Tabela responsável por armazenar os dados de um colaborador de uma determinada empresa e qual cargo este exerce na mesma.

- **Descrição dos campos da tabela:**

  | Campo        | Tipo         | Descrição                                                                      |
  | :----------- | :----------- | :----------------------------------------------------------------------------- |
  | `id`         | int8         | Indentificador da tabela (Primary Key).                                        |
  | `empresa_id` | int8         | Foreing Key da tabela [^^empresas^^](#empresas).                               |
  | `cargo_id`   | int8         | Foreing Key da tabela [^^cargos^^](#cargos).                                   |
  | `nome`       | varchar(140) | Nome do colaborador.                                                           |
  | `matricula`  | varchar(40)  | Matrícula do colaborador.                                                      |
  | `salario`    | numeric      | Salário do colaborador.                                                        |
  | `status`     | varchar(1)   | Status do colaborador no sistema. Valores padrão: "A" (ativo) e "I" (inativo). |
  | `descricao`  | text         | Descrição sobre o colaborador.                                                 |
  | `created_at` | timestamp    |                                                                                |
  | `updated_at` | timestamp    |                                                                                |
  | `unidade_id` | int8         | Foreign Key da tabela [^^unidades^^](#unidades).                               |

- **Relacionamentos:**

  | Tabela                                          | Tipo        | Descrição                                                                                   |
  | :---------------------------------------------- | :---------- | :------------------------------------------------------------------------------------------ |
  | [^^`empresas`^^](#empresas)                     | Foreing Key | As empresas contam com diversos colaboradores, assim como esses fazem parte de uma empresa. |
  | [^^`cargos`^^](#cargos)                         | Foreing Key | Cada colaborador exerce um cargo dentro de uma empresa, e os cargos podem ser exercidos por vários colaboradores. |
  | [^^`unidades`^^](#unidades)                     | Foreing Key | Os colaboradores estão ligados a uma unidade, e uma unidade possui, ligada a ela, diversos colaboradores. |
  | [^^`lancamentos`^^](#lancamentos)               | Primary Key | Os dados dos colaboradores estão contidos nos lançamentos das empresas.                     |
  | [^^`lancamentos_baixas`^^](#lancamentos_baixas) | Primary Key | Os lançamentos (que contém dados dos colaboradores) passarão pelo processo de "baixa" no sistema. |
  | [^^`orcamentos_baixas`^^](#orcamentos_baixas)   | Primary Key | As "baixas" dos orçamentos presentes no sistema também conterão os dados dos colaboradores das empresas. |

### ContasBancarias

A tabela corresponde as contas bancárias das empresas, utilizadas para movimentação financeira.

- **Descrição dos campos da tabela:**

  | Campo                   | Tipo        | Descrição                                                                                      |
  | :---------------------- | :---------- | :--------------------------------------------------------------------------------------------- |
  | `id`                    | int8        | Indentificador da tabela (Primary Key).                                                        |
  | `banco_id`              | int8        | Foreing Key da tabela [^^bancos^^](#bancos).                                                   |
  | `contabancaria_tipo_id` | int8        | Foreing Key da tabela [^^contasbancarias_tipo^^](#contasbancarias_tipo).                       |
  | `agencia`               | varchar(40) | Número da agencia referente a conta bancária.                                                  |
  | `conta`                 | varchar(40) | Conta bancária da empresa.                                                                     |
  | `acesso`                | jsonb       | Dados de acesso para o sistema.                                                                |
  | `status`                | varchar(1)  | Status da conta no sistema. Valores padrão: "A" (ativo) ou "I" (inativo).                      |
  | `astecas`               | varchar(1)  | Status para identificar se é ou não uma conta Astecas. Valores padrão: "S" (Sim) ou "N" (não). |
  | `descricao`             | text        | Descrição da conta bancária.                                                                   |
  | `created_at`            | timestamp   |                                                                                                |
  | `updated_at`            | timestamp   |                                                                                                |
  | `checked`               | bool(1)     | Confirma se o termo foi aceito ou não.                                                         |
  | `ip`                    | inet        | IP relacionado ao dispositivo onde foi feito o aceite do termo.                                |
  | `data`                  | timestamp   | Data em que o termo foi aceito (formato ISO 8601).                                             |
  | `idregistration`        | varchar(50) | Identificador da conta bancária no BAAS.                                                       |

*[BAAS]: Bank as a Service

- **Relacionamentos:**

  | Tabela                                              | Tipo        | Descrição                                                                       |
  | :-------------------------------------------------- | :---------- | :------------------------------------------------------------------------------ |
  | [^^`bancos`^^](#bancos)                             | Foreing Key | Cada conta bancária está atrelada a um banco, assim como o banco pode conter várias contas bancárias. |
  | [^^`contasbancarias_tipo`^^](#contasbancarias_tipo) | Foreing Key | Cada conta bancária contém um tipo, por exemplo: conta corrente, poupança, etc. |
  | [^^`extratos`^^](#extratos)                         | Primary Key | As movimentações financeiras feitas na conta corrente geram extratos.           |
  | [^^`contascaixas`^^](#contascaixas)                 | Primary Key | As contas bancárias estão ligadas as contas caixas, ou seja, as transações financeiras podem ser tanto feitas por uma conta bancária quanto por outros tipos de meios, que serão controlados na conta caixa. |

### ContasBancarias_Tipo

Tabela responsável por armazenar os tipos de contas bancárias existentes.

- **Descrição dos campos da tabela:**

  | Campo        | Tipo        | Descrição                               |
  | :----------- | :---------- | :-------------------------------------- |
  | `id`         | int8        | Indentificador da tabela (Primary Key). |
  | `nome`       | varchar(40) | Tipo (nome) da conta bancária.          |
  | `descricao`  | text        | Descrição do tipo de conta bancária.    |
  | `created_at` | timestamp   |                                         |
  | `updated_at` | timestamp   |                                         |

- **Relacionamentos:**

  | Tabela                                    | Tipo        | Descrição                                                                                        |
  | :---------------------------------------- | :---------- | :----------------------------------------------------------------------------------------------- |
  | [^^`contasbancarias`^^](#contasbancarias) | Primary Key | Cada conta bancária possui um tipo específico, por exemplo: conta corrente, conta poupança, etc. |

### ContasCaixas

Tabela responsável por englobar transações financeiras advindas de diversas fontes, como pagamentos por contas bancárias, dinheiro, etc.

- **Descrição dos campos da tabela:**

  | Campo              | Tipo        | Descrição                                                                |
  | :----------------- | :---------- | :----------------------------------------------------------------------- |
  | `id`               | int8        | Indentificador da tabela (Primary Key).                                  |
  | `empresa_id`       | int8        | Foreing Key da tabela [^^empresas^^](#empresas).                         |
  | `unidade_id`       | int8        | Foreing Key da tabela [^^unidades^^](#unidades).                         |
  | `contabancaria_id` | int8        | Foreing Key da tabela [^^contasbancarias^^](#contasbancarias).           |
  | `tipo`             | varchar(40) | Tipo de conta caixa (transação).                                         |
  | `saldoinicial`     | numeric     | Saldo inicial da conta antes do desconto da transação.                   |
  | `saldo`            | numeric     | Saldo final da conta após o desconto da transação.                       |
  | `status`           | varchar(1)  | Status da conta no sistema. Valores padrão: "A" (ativo) e "I" (inativo). |
  | `descricao`        | text        | Descrição da transação.                                                  |
  | `created_at`       | timestamp   |                                                                          |
  | `updated_at`       | timestamp   |                                                                          |

- **Relacionamentos:**

  | Tabela                                          | Tipo        | Descrição                                                                                  |
  | :---------------------------------------------- | :---------- | :----------------------------------------------------------------------------------------- |
  | [^^`empresas`^^](#empresas)                     | Foreing Key | As conta caixa estão ligadas a uma empresa, sendo que a mesma pode ter várias conta caixa. |
  | [^^`unidades`^^](#unidades)                     | Foreing Key | As conta caixa estão ligadas a uma unidade, sendo que a mesma pode ter várias conta caixa. |
  | [^^`contasbancarias`^^](#contasbancarias)       | Foreing Key | As transações armazenadas na conta caixa podem ser originadas de contas bancárias.         |
  | [^^`lancamentos_baixas`^^](#lancamentos_baixas) | Primary Key | Os dados armazenados na tabela contascaixas serão utilizados nas baixas dos lançamentos.   |

### Contratos

Tabela responsável por armazenar os contratos que cada empresa assina ao firmar um acordo de utilização do sistema.

- **Descrição dos campos da tabela:**

  | Campo              | Tipo         | Descrição                                                                     |
  | :----------------- | :----------- | :---------------------------------------------------------------------------- |
  | `id`               | int8         | Indentificador da tabela (Primary Key).                                       |
  | `descricao`        | text         | Descrição do contrato a ser firmado.                                          |
  | `vigencia_inicial` | date         | Data que indica o início do prazo de validade do contrato (formato ISO 8601). |
  | `vigencia_final`   | date         | Data que indica o fim do prazo de validade do contrato (formato ISO 8601).    |
  | `empresa_id`       | int8         | Foreing Key da tabela [^^empresas^^](#empresas).                              |
  | `plano_id`         | int8         | Foreing Key da tabela [^^planos^^](#planos).                                  |
  | `status`           | varchar(255) | Status do contrato. Valores padrão: "A" (ativo) e "I" (inativo).              |
  | `created_at`       | timestamp    |                                                                               |
  | `updated_at`       | timestamp    |                                                                               |
  | `valor`            | numeric      | Valor a ser pago pelo contrato do serviço.                                    |

- **Relacionamentos:**

  | Tabela                      | Tipo        | Descrição                                                                                                    |
  | :-------------------------- | :---------- | :----------------------------------------------------------------------------------------------------------- |
  | [^^`empresas`^^](#empresas) | Foreing Key | Os contratos são firmados com empresas, sendo assim, cada empresa pode realizar vários contratos.            |
  | [^^`planos`^^](#planos)     | Foreing Key | Cada contrato possui um plano de utilização do sistema, e os planos podem estar contidos em vários contratos.|

### Departamentos

Tabela responsável por armazenar os dados dos departamentos que cada empresa/unidade pode ter.

- **Descrição dos campos da tabela:**

  | Campo        | Tipo        | Descrição                                        |
  | :----------- | :---------- | :----------------------------------------------- |
  | `id`         | int8        | Indentificador da tabela (Primary Key).          |
  | `empresa_id` | int8        | Foreing Key da tabela [^^empresas^^](#empresas). |
  | `unidade_id` | int8        | Foreing Key da tabela [^^unidades^^](#unidades). |
  | `nome`       | varchar(40) | Nome do departamento.                            |
  | `sigla`      | varchar(10) | Sigla referente ao nome do departamento.         |
  | `descricao`  | text        | Descrição do departamento.                       |
  | `created_at` | timestamp   |                                                  |
  | `updated_at` | timestamp   |                                                  |

- **Relacionamentos:**

  | Tabela                                                  | Tipo        | Descrição                                                                        |
  | :------------------------------------------------------ | :---------- | :------------------------------------------------------------------------------- |
  | [^^`empresas`^^](#empresas)                             | Foreing Key | O mesmo departamento pode ser vinculado a várias empresas, e empresas tem vários departamentos. |
  | [^^`unidades`^^](#unidades)                             | Foreing Key | Cada unidade pode ter vários departamentos.                                      |
  | [^^`orcamentos_lancamentos`^^](#orcamentos_lancamentos) | Primary Key | Os dados referentes a cada departamento constarão nos lançamentos dos orçamentos.|
  | [^^`lancamentos`^^](#lancamentos)                       | Primary Key | Os dados referentes a cada departamento constarão nos lançamentos.               |
  | [^^`lancamentos_baixas`^^](#lancamentos_baixas)         | Primary Key | Os dados referentes a cada departamento constarão nas baixas dos lançamentos.    |

### Documentos

Tabela responsável por armazenar os documentos (anexos) referentes aos lançamentos de cada empresa.

- **Descrição dos campos da tabela:**

  | Campo               | Tipo         | Descrição                                                       |
  | :------------------ | :----------- | :-------------------------------------------------------------- |
  | `id`                | int8         | Indentificador da tabela (Primary Key).                         |
  | `empresa_id`        | int8         | Foreing Key da tabela [^^empresas^^](#empresas).                    |
  | `documento_tipo_id` | int8         | Foreing Key da tabela [^^documentos_tipos^^](#empresas).            |
  | `nome`              | varchar(80)  | Nome do documento no sistema.                                   |
  | `tags`              | jsonb        | Tags relacionadas ao documento em questão.                      |
  | `link`              | varchar(255) | Link para acessar o documento.                                  |
  | `user_id`           | int8         | Foreing Key da tabela [^^users^^](db-admin.md#users) (banco admin). |
  | `created_at`        | timestamp    |                                                                 |
  | `updated_at`        | timestamp    |                                                                 |
  | `extensao`          | varchar(5)   | Extensão do arquivo.                                            |
  | `tamanho`           | float8       | Tamanho do arquivo.                                             |
  | `nome_original`     | varchar(255) | Nome original do arquivo.                                       |

- **Relacionamentos:**

  | Tabela                                                                | Tipo        | Descrição                                         |
  | :-------------------------------------------------------------------- | :---------- | :------------------------------------------------ |
  | [^^`empresas`^^](#empresas)                                           | Foreing Key | Os documentos estão ligados a uma empresa, sendo que a mesma pode ter vários documentos presentes no sistema. |
  | [^^`documentos_tipos`^^](#documentos_tipos)                           | Foreing Key | Todo documento possui um tipo específico.         |
  | [^^`admin.users`^^](db-admin.md#users)                                | Primary Key | Os documentos são enviados (como anexos) pelos usuários para o sistema. |
  | [^^`lancamentos_baixas_documentos`^^](#lancamentos_baixas_documentos) | Primary Key | Está em um intermediário onde um documento é ligado a uma baixa de um lançamento específico. |
  | [^^`lancamentos_documentos`^^](#lancamentos_documentos)               | Primary Key | Refere-se ao documento presente em um lançamento. |

### Documentos_Tipos

Tabela responsável por armazenar os tipos de documentos presentes no sistema.

- **Descrição dos campos da tabela:**

  | Campo        | Tipo        | Descrição                               |
  | :----------- | :---------- | :-------------------------------------- |
  | `id`         | int8        | Indentificador da tabela (Primary Key). |
  | `nome`       | varchar(40) | Tipo do documento.                      |
  | `descricao`  | text        | Descrição do tipo do documento.         |
  | `created_at` | timestamp   |                                         |
  | `updated_at` | timestamp   |                                         |

- **Relacionamentos:**

  | Tabela                          | Tipo        | Descrição                                                                                              |
  | :------------------------------ | :---------- | :----------------------------------------------------------------------------------------------------- |
  | [^^`documentos`^^](#documentos) | Primary Key | Os tipos de documentos estão atrelados aos documentos, ou seja, cada documento tem um tipo específico. |

### Empresas

Tabela responsável pelo armazenamento dos dados a cada empresa presente em um grupo.

- **Descrição dos campos da tabela:**

  | Campo           | Tipo         | Descrição                                                                        |
  | :-------------- | :----------- | :------------------------------------------------------------------------------- |
  | `id`            | int8         | Indentificador da tabela (Primary Key).                                          |
  | `grupo_id`      | int8         | Foreing key da tabela [^^grupos^^](#grupos).                                     |
  | `nome`          | varchar(140) | Nome da empresa.                                                                 |
  | `identificacao` | varchar(10)  | Identificador da empresa para controle no sistema.                               |
  | `descricao`     | text         | Descrição da empresa.                                                            |
  | `created_at`    | timestamp    |                                                                                  |
  | `updated_at`    | timestamp    |                                                                                  |
  | `status`        | varchar(1)   | Status atual da empresa no sistema. Valores padrão: "A" (ativo) e "I" (inativo). |

- **Relacionamentos:**

  | Tabela                                                | Tipo        | Descrição                                                                          |
  | :---------------------------------------------------- | :---------- | :--------------------------------------------------------------------------------- |
  | [^^`departamentos`^^](#departamentos)                 | Primary Key | Cada empresa pode conter vários departamentos.                                     |
  | [^^`unidades`^^](#unidades)                           | Primary Key | As empresas possuem unidades, ou seja, ramificações da mesma empresa em locais diferentes. |
  | [^^`colaboradores`^^](#colaboradores)                 | Primary Key | A empresa possui diversos colaboradores ligados a ela.                             |
  | [^^`cargos`^^](#cargos)                               | Primary Key | A empresa possui vários cargos a serem exercidos, que serão ligados aos colaboradores. |
  | [^^`socios`^^](#socios)                               | Primary Key | Cada empresa pode possuir um ou mais sócios ligados a ela.                         |
  | [^^`extratos`^^](#extratos)                           | Primary Key | A empresa, a partir de suas transações bancárias, gera extratos que serão armazenados na tabela de nome correspondente. |
  | [^^`extratos_lancamentos`^^](#extratos_lancamentos)   | Primary Key | Os lançamentos presentes nos extratos serão ligados a uma empresa.                 |
  | [^^`contascaixas`^^](#contascaixas)                   | Primary Key | As empresas podem ter várias contas caixas que irão gerir o meio pelo qual uma transação financeira foi realizada. |
  | [^^`planocontas`^^](#planocontas)                     | Primary Key | Cada lançamento possui uma categoria (plano) diferente, e os mesmos estão ligados a uma empresa específica. |
  | [^^`fornecedores_clientes`^^](#fornecedores_clientes) | Primary Key | Empresas possuem fornecedores ou podem ser fornecedoras, sendo os dados destes armazenados na tabela correspondente. |
  | [^^`centrocustos`^^](#centrocustos)                   | Primary Key | Cada empresa possui um centro de custos, que agrupará receitas e despesas da mesma.|
  | [^^`painel_dados`^^](#painel_dados)                   | Primary Key | Cada empresa tem um painel de dados, onde ela tem acesso as informações necessárias para sua gestão financeira. |
  | [^^`pag_transferencia`^^](#pag_transferencia)         | Primary Key | As empresas podem realizar pagamentos por transferência bancária, sendo esses armazenados na tabela de nome correspondente. |
  | [^^`lancamentos`^^](#lancamentos)                     | Primary Key | Os lançamentos vão estar atrelados a uma empresa.                                  |
  | [^^`lancamentos_baixas`^^](#lancamentos_baixas)       | Primary Key | Os lançamentos das empresas passarão pelo processo de "baixa".                     |
  | [^^`contratos`^^](#contratos)                         | Primary Key | Cada empresa assina um contrato de utilização do sistema, onde o mesmo contará com um plano que discriminará o que a empresa poderá ou não fazer no sistema. |
  | [^^`documentos`^^](#documentos)                       | Primary Key | A empresa possui documentos atrelados a ela.                                       |
  | [^^`grupos`^^](#grupos)                               | Foreing Key | Cada empresa faz parte de um grupo específico de várias empresas.                  |

### Extratos

Tabela utilizada para armazenar os extratos bancários de uma empresa.

- **Descrição dos campos da tabela:**

  | Campo              | Tipo         | Descrição                                                                  |
  | :----------------- | :----------- | :------------------------------------------------------------------------- |
  | `id`               | int8         | Indentificador da tabela (Primary Key).                                    |
  | `empresa_id`       | int8         | Foreing Key da tabela [^^empresas^^](#empresas).                           |
  | `contabancaria_id` | int8         | Foreing Key da tabela [^^contasbancarias^^](#contas_bancarias).            |
  | `user_id`          | int8         | Foreing Key da tabela [^^users^^](db-admin.md#users) (banco admin).        |
  | `conteudo`         | jsonb        | Conteúdo do extrato.                                                       |
  | `metodo`           | varchar(40)  | Método de recebimento do extrato no sistema.                               |
  | `created_at`       | timestamp    |                                                                            |
  | `updated_at`       | timestamp    |                                                                            |
  | `link_s3`          | varchar(255) | Link do S3 da Amazon.                                                      |
  | `status`           | varchar(1)   | Status do extrato no sistema. Valores padrão: "A" (ativo) e "I" (inativo). |
  | `analista`         | int8         | Pessoa responsável por realizar a análise do extrato (operacional).        |
  | `saldo_inicio`     | numeric      | Saldo inicial da conta bancária atrelada ao extrato.                       |
  | `saldo_fim`        | numeric      | Saldo final da conta bancária atrelada ao extrato.                         |
  | `data_inicio`      | date         | Data de início dos lançamentos que constam no extrato (formato ISO 8601).  |
  | `data_fim`         | date         | Data de fim dos lançamentos que constam no extrato (formato ISO 8601).     |
  | `registros`        | int4         | Registro do extrato.                                                       |

*[S3 da Amazon]: Amazon Simple Storage Service

- **Relacionamentos:**

  | Tabela                                              | Tipo        | Descrição                                                                          |
  | :-------------------------------------------------- | :---------- | :----------------------------------------------------------------------------------|
  | [^^`empresas`^^](#empresas)                         | Foreing Key | Os extratos estão ligados a uma empresa e a mesma pode ter vários extratos.        |
  | [^^`contasbancarias`^^](#contasbancarias)           | Foreing Key | Um extrato é advindo das movimentações financeiras realizadas em contas bancárias. |
  | [^^`admin.users`^^](db-admin.md#users)              | Foreing Key | Cada extrato está ligado a um usuário dentro do sistema.                           |
  | [^^`extratos_lancamentos`^^](#extratos_lancamentos) | Primary Key | Os extratos são compostos por lançamentos.                                         |

### Extratos_Lancamentos

Tabela responsável por agrupar todos os lançamentos contidos em um extrato.

- **Descrição dos campos da tabela:**

  | Campo                 | Tipo        | Descrição                                                                     |
  | :-------------------- | :---------- | :---------------------------------------------------------------------------- |
  | `id`                  | int8        | Indentificador da tabela (Primary Key).                                       |
  | `empresa_id`          | int8        | Foreing Key da tabela [^^empresas^^](#empresas).                              |
  | `extrato_id`          | int8        | Foreing Key da tabela [^^extratos^^](#extratos).                              |
  | `valor`               | date        | Data de criação do lançamento (formato ISO 8601).                             |
  | `data`                | numeric     | Valor total dos extratos presentes no lançamento.                             |
  | `checknum`            | varchar(40) | Número de controle do lançamento usando pelo BAAS.                            |
  | `descricao`           | text        | Descrição do lançamento.                                                      |
  | `identificador`       | text        | Identificação do BAAS para cada lançamento.                                   |
  | `created_at`          | timestamp   | Status do lançamento no sistema. Valores padrão: "A" (ativo) e "I" (inativo). |
  | `updated_at`          | timestamp   |                                                                               |
  | `status`              | varchar(1)  |                                                                               |
  | `lancamentos_id_temp` | int8        |                                                                               |
  
- **Relacionamentos:**

  | Tabela                                                                                    | Tipo        | Descrição                              |
  | :---------------------------------------------------------------------------------------- | :---------- | :------------------------------------- |
  | [^^`empresas`^^](#empresas)                                                               | Foreing Key | Os lançamentos correspondem a uma empresa, e a mesma pode ter vários lançamentos. |
  | [^^`extratos`^^](#extratos)                                                               | Foreing Key | Os lançamentos contém vários extratos. |
  | [^^`lancamentos_baixas_extratos_lancamentos`^^](#lancamentos_baixas_extratos_lancamentos) | Primary Key | Os lançamentos de extratos passam pelo processo de "baixa" dentro do sistema. |

### Fornecedores_Clientes

Tabela responsável por armazenar os tipos de documentos presentes no sistema.

- **Descrição dos campos da tabela:**

  | Campo          | Tipo         | Descrição                                                                                    |
  | :------------- | :----------- | :------------------------------------------------------------------------------------------- |
  | `id`           | int8         | Indentificador da tabela (Primary Key).                                                      |
  | `empresa_id`   | int8         | Foreing Key da tabela [^^empresas^^](#empresas).                                             |
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
  | `unidade_id`   | int8         | Foreing Key da tabela [^^unidades^^](#unidades).                                             |

*[CPF]: Cadastro de pessoas físicas
*[CNPJ] : Cadastro de pessoas jurídicas
*[CEP]: Código de endereço postal

- **Relacionamentos:**

  | Tabela                                                  | Tipo        | Descrição                                                                       |
  | :------------------------------------------------------ | :---------- | :------------------------------------------------------------------------------ |
  | [^^`empresas`^^](#empresas)                             | Foreing Key | Cada empresa pode ter vários fornecedores ligados a ela.                        |
  | [^^`unidades`^^](#unidades)                             | Foreing Key | Cada unidade, assim como a empresa, pode ter vários fornecedores ligados a ela. |
  | [^^`lancamentos_baixas`^^](#lancamentos_baixas)         | Primary Key | Os dados dos fornecedores (empresas) constarão nas baixas dos lançamentos.      |
  | [^^`pag_transferencia`^^](#pag_transferencias)          | Primary Key | A empresa (fornecedor/a) pode realizar transferência.                           |
  | [^^`orcamentos_lancamentos`^^](#orcamentos_lancamentos) | Primary Key | Os lançamentos contidos nos orçamentos conterão os dados dos fornecedores.      |
  | [^^`lancamentos`^^](#lancamentos)                       | Primary Key | Os lançamentos conterão os dados dos fornecedores.                              |

### Grupos

Tabela que armazena os dados do grupo do qual cada empresa faz parte.

- **Descrição dos campos da tabela:**

  | Campo        | Tipo        | Descrição                                                                      |
  | :----------- | :---------- | :----------------------------------------------------------------------------- |
  | `id`         | int8        | Indentificador da tabela (Primary Key).                                        |
  | `nome`       | varchar(40) | Nome do grupo cuja empresa pertence.                                           |
  | `descricao`  | text        | Descrição do grupo ao qual a empresa pertence.                                 |
  | `created_at` | timestamp   |                                                                                |
  | `updated_at` | timestamp   |                                                                                |
  | `status`     | varchar(1)  | Status atual do grupo no sistema. Valores padrão: "A" (ativo) e "I" (inativo). |

- **Relacionamentos:**

  | Tabela                      | Tipo        | Descrição                                                                               |
  | :-------------------------- | :---------- | :-------------------------------------------------------------------------------------- |
  | [^^`empresas`^^](#empresas) | Primary Key | Cada empresa pertence a um grupo, e os grupos possuem várias empresas atreladas a eles. |

### Lancamentos

Tabela responsável por armazenar os dados dos lançamentos de uma empresa no sistema. Um lançamento é um registro de algo que pode vir a (futuro) afetar, financeiramente, uma empresa. No sistema, os lançamentos podem assumir 3 estados: 

`"P" (pendente)`
:   Estão pendentes de análise pelo setor operacional e pedentes de pagamento/recebimento.  

`"A" (analisado)`
:   Lançamentos com esse status já foram devidamente analisados pelo setor operacional. 

`"B" (baixado/baixa)`
:   onde dado lançamento já passou pelo processo de análise e já foi pago/recebido.


- **Descrição dos campos da tabela:**

  | Campo                   | Tipo         | Descrição                                                                                        |
  | :---------------------- | :----------- | :----------------------------------------------------------------------------------------------- |
  | `id`                    | int8         | Indentificador da tabela (Primary Key).                                                          |
  | `empresa_id`            | int8         | Foreing Key da tabela [^^empresas^^](#empresas).                                                 |
  | `departamento_id`       | int8         | Foreing Key da tabela [^^departamentos^^](#departamentos).                                       |
  | `fornecedor_cliente_id` | int8         | Foreing Key da tabela [^^fornecedores_clientes^^](#fornecedores_clientes).                       |
  | `colaborador_id`        | int8         | Foreing Key da tabela [^^colaboradores^^](#colaboradores).                                       |
  | `unidade_id`            | int8         | Foreing Key da tabela [^^unidades^^](#centrocustos).                                             |
  | `centrocusto_id`        | int8         | Foreing Key da tabela [^^centrocustos^^](#centrocustos).                                         |
  | `pag_transferencia_id`  | int8         | Foreing Key da tabela [^^pag_transferencias^^](#pag_transferencias).                             |
  | `planoconta_id`         | int8         | Foreing Key da tabela [^^planocontas^^](#planocontas).                                           |
  | `valor`                 | numeric      | Valor "original" do lançamento.                                                                  |
  | `valor_acrescimo`       | numeric      | Valor de acréscimo a um lançamento (pagamento em atraso).                                        |
  | `valor_desconto`        | numeric      | Valor de desconto em um lançamento.                                                              |
  | `vencimento`            | date         | Data de vencimento do lançamento.                                                                |
  | `identificacao`         | varchar(50)  | Identificação alternativa para o lançamento.                                                     |
  | `notafiscal`            | varchar(40)  | Nota fiscal referente ao lançamento.                                                             |
  | `codigobarras`          | varchar(255) | Código de barras de um lançamento.                                                               |
  | `descricao`             | text         | Descrição do lançamento.                                                                         |
  | `lancado_por`           | int8         | Referente a quem fez o lançamento.                                                               |
  | `lancado_em`            | timestamp    | Data em que o lançamento foi realizado (formato ISO 8601).                                       |
  | `analisado_por`         | int8         | Referente a quem fez a análise do lançamento (operacional).                                      |
  | `analisado_em`          | timestamp    | Data em que foi realizada a análise (formato ISO 8601).                                          |
  | `status`                | varchar(255) | Status do lançamento no sistema. Valores: "P" (pendente), "A" (analisado) e "B" (baixado/baixa). |
  | `contabil`              | varchar(1)   | Verificação para saber se é ou não um lançamento contábil.                                       |
  | `created_at`            | timestamp    |                                                                                                  |
  | `updated_at`            | timestamp    |                                                                                                  |
  | `autorizado`            | varchar(1)   | Verificação para saber se o lançamento está ou não autorizado.                                   |
  | `autorizado_por`        | int8         | Referente a pessoa que realizou a autorização do lançamento.                                     |
  | `autorizado_em`         | timestamp    | Data em que foi realizada a autorização do lançamento (formato ISO 8601).                        |

- **Relacionamentos:**

  | Tabela                                                  | Tipo        | Descrição                                                                          |
  | :------------------------------------------------------ | :---------- | :--------------------------------------------------------------------------------- |
  | [^^`empresas`^^](#empresas)                             | Foreing Key | O lançamento refere-se a uma empresa, a qual ele está ligado.                      |
  | [^^`departamentos`^^](#departamentos)                   | Foreing Key | O lançamento refere-se a um departamento, a qual ele está ligado.                  |
  | [^^`fornecedor_clientes`^^](#fornecedor_clientes)       | Foreing Key | Os dados do fornecedor constarão em um lançamento.                                 |
  | [^^`colaboradores`^^](#colaboradores)                   | Foreing Key | Os dados refentes ao colaborador estão contidos em um lançamento.                  |
  | [^^`unidades`^^](#unidades)                             | Foreing Key | O lançamento refere-se a uma unidade, a qual ele está ligado.                      |
  | [^^`centrocustos`^^](#centrocustos)                     | Foreing Key | Os dados do centro de custos da empresa estará contido no lançamento.              |
  | [^^`pag_transferencias`^^](#pag_transferencias)         | Foreing Key | Os dados referentes aos pagamentos de transferências estão contidos no lançamento. |
  | [^^`planocontas`^^](#planocontas)                       | Foreing Key | Corresponde a categoria do lançamento.                                             |
  | [^^`lancamentos_baixas`^^](#lancamentos_baixas)         | Primary Key | Os lançamentos passarão, no sistema, pelo processo de baixa.                       |
  | [^^`lancamentos_documentos`^^](#lancamentos_documentos) | Primary Key | Os lançamentos possuem documentos (anexos) que estão atrelados a eles.             |

### Lancamentos_Baixas

Tabela que armazena os lançamentos que já sofreram baixa, ou seja, foram pagos ou recebidos. Um lançamento pode, também, ser inserido pelo usuário já tendo sido "baixado", e, nesse caso, posteriormente passará pelo processo de análise.

- **Descrição dos campos da tabela:**

  | Campo                   | Tipo         | Descrição                                                                                |
  | :---------------------- | :----------- | :--------------------------------------------------------------------------------------- |
  | `id`                    | int8         | Identificador da tabela (Primary Key).                                                   |
  | `lancamento_id`         | int8         | Foreing Key da tabela [^^lancamentos^^](#lancamentos).                                   |
  | `empresa_id`            | int8         | Foreing Key da tabela [^^empresas^^](#empresas).                                         |
  | `departamento_id`       | int8         | Foreing Key da tabela [^^departamentos^^](#departamentos).                               |
  | `fornecedor_cliente_id` | int8         | Foreing Key da tabela [^^fornecedores_clientes^^](#fornecedores_clientes).               |
  | `colaborador_id`        | int8         | Foreing Key da tabela [^^colaboradores^^](#colaboradores).                               |
  | `unidade_id`            | int8         | Foreing Key da tabela [^^unidades^^](#unidades).                                         |
  | `centrocusto_id`        | int8         | Foreing Key da tabela [^^centrocustos^^](#centrocustos).                                 |
  | `pag_transferencia_id`  | int8         | Foreing Key da tabela [^^pag_transferencias^^](#pag_transferencias).                     |
  | `planoconta_id`         | int8         | Foreing Key da tabela [^^planocontas^^](#planocontas).                                   |
  | `contacaixa_id`         | int8         | Foreing Key da tabela [^^contascaixas^^](#contascaixas).                                 |
  | `valor`                 | numeric      | Valor pago em relação ao lançamento.                                                     |
  | `valor_acrescimo`       | numeric      | Valor de acréscimo no lançamento, em casos de, por exemplo, pagamento atrasado de conta. |
  | `valor_desconto`        | numeric      | Valor de desconto em um lançamento.                                                      |
  | `data`                  | date         | Data em que o lançamento foi pago/recebido (formato ISO 8601).                           |
  | `identificacao`         | varchar(50)  | Identificador do lançamento.                                                             |
  | `notafiscal`            | varchar(40)  | Nota fiscal do lançamento.                                                               |
  | `codigobarras`          | varchar(255) | Código de barras do lançamento.                                                          |
  | `descricao`             | text         | Descrição do lançamento.                                                                 |
  | `lancado_por`           | int8         | Usuário que inseriu o lançamento no sistema.                                             |
  | `lancado_em`            | timestamp    | Quando o usuário inseriu o lançamento no sistema.                                        |
  | `analisado_por`         | int8         | Quem realizou a análise do lançamento.                                                   |
  | `analisado_em`          | timestamp    | Quando a análise do lançamento foi realizada.                                            |
  | `status`                | varchar(1)   | Status do lançamento. Valores: "A" (analisado) e "B" (baixado/baixa).                    |
  | `created_at`            | timestamp    |                                                                                          |
  | `updated_at`            | timestamp    |                                                                                          |

- **Relacionamentos:**

  | Tabela                                                                                    | Tipo        | Descrição                          |
  | :---------------------------------------------------------------------------------------- | :---------- | :--------------------------------- |
  | [^^`lancamentos`^^](#lancamentos)                                                         | Foreing Key | Corresponde aos lançamentos, antes de serem "baixados". |
  | [^^`empresas`^^](#empresas)                                                               | Foreing Key | Dados da empresa que estão contidos no lançamento. |
  | [^^`departamentos`^^](#departamentos)                                                     | Foreing Key | Dados do departamento que estão contidos no lançamento. |
  | [^^`fornecedores_clientes`^^](#fornecedores_clientes)                                     | Foreing Key | Dados do fornecedor, que estão contidos nos lançamentos. |
  | [^^`colaboradores`^^](#colaboradores)                                                     | Foreing Key | Dados dos colaboradores, que estão contidos nos lançamentos. |
  | [^^`unidades`^^](#unidades)                                                               | Foreing Key | Dados das unidades, que estão contidos nos lançamentos. |
  | [^^`centrocustos`^^](#centrocustos)                                                       | Foreing Key | Dados dos centros de custos, que estão contidos nos lançamentos. |
  | [^^`pag_transferencias`^^](#pag_transferencias)                                           | Foreing Key | Dados de transferências, que estão contidos nos lançamentos. |
  | [^^`planocontas`^^](#planocontas)                                                         | Foreing Key | Categoria do lançamento em questão. |
  | [^^`contascaixas`^^](#contascaixas)                                                       | Foreing Key | Dados das contas caixas, que estão contidos nos lançamentos. |
  | [^^`lancamentos_baixas_extratos_lancamentos`^^](#lancamentos_baixas_extratos_lancamentos) | Primary Key | Intermediário que liga os lançamentos contidos nos extratos aos lançamentos baixados. |
  | [^^`lancamentos_baixas_documentos`^^](#lancamentos_baixas_documentos)                     | Primary Key | Intermediário que liga o documento (anexo) de um dado lançamento ao mesmo. |

### Lancamentos_Baixas_Documentos

Tabela responsável por intermediar o relacionamento entre um lançamento "baixado" e o documento do respectivo lançamento, relacionando, também, o usuário ao qual tais dados estão ligados.

- **Descrição dos campos da tabela:**

  | Campo                 | Tipo      | Descrição                                                            |
  | :-------------------- | :-------- | :------------------------------------------------------------------- |
  | `id`                  | int8      | Indentificador da tabela (Primary Key).                              |
  | `lancamento_baixa_id` | int8      | Foreing Key da tabela [^^lancamentos_baixas^^](#lancamentos_baixas). |
  | `documento_id`        | int8      | Foreing Key da tabela [^^documentos^^](#documentos).                 |
  | `user_id`             | int8      | Foreing Key da tabela [^^users^^](db-admin.md#users) (banco admin).  |
  | `created_at`          | timestamp |                                                                      |
  | `updated_at`          | timestamp |                                                                      |

- **Relacionamentos:**

  | Tabela                                          | Tipo        | Descrição                                                        |
  | :---------------------------------------------- | :---------- | :--------------------------------------------------------------- |
  | [^^`lancamentos_baixas`^^](#lancamentos_baixas) | Foreing Key | Lançamentos que já passaram pelo processo de "baixa" no sistema. |
  | [^^`documentos`^^](#documentos)                 | Foreing Key | Documentos referentes aos lançamentos (anexos).                  |
  | [^^`admin.users`^^](db-admin.md#users)          | Foreing Key | Usuário correspondente de um lançamento específico.              |

### Lancamentos_Baixas_Extratos_Lancamentos

Tabela que intermedeia os lançamentos que foram "baixados" e os lançamentos que estão contidos em um extrato.

- **Descrição dos campos da tabela:**

  | Campo                   | Tipo      | Descrição                                                                |
  | :---------------------- | :-------- | :----------------------------------------------------------------------- |
  | `id`                    | int8      | Indentificador da tabela (Primary Key).                                  |
  | `lancamento_baixa_id`   | int8      | Foreing Key da tabela [^^lancamentos_baixas^^](#lancamentos_baixas).     |
  | `extrato_lancamento_id` | int8      | Foreing Key da tabela [^^extratos_lancamentos^^](#extratos_lancamentos). |
  | `user_id`               | int8      | Foreing Key da tabela [^^users^^](db-admin.md#users) (banco admin).      |
  | `created_at`            | timestamp |                                                                          |
  | `updated_at`            | timestamp |                                                                          |

- **Relacionamentos:**

  | Tabela                                              | Tipo        | Descrição                                                  |
  | :-------------------------------------------------- | :---------- | :--------------------------------------------------------- |
  | [^^`lancamentos_baixas`^^](#lancamentos_baixas)     | Foreing Key | Lançamentos que já foram "baixados".                       |
  | [^^`extratos_lancamentos`^^](#extratos_lancamentos) | Foreing Key | Lançamentos com um dado status contidos em um extrato.     |
  | [^^`admin.users`^^](db-admin.md#users)              | Foreing Key | Os dados dos usuários ao qual os lançamentos correspondem. |

### Lancamentos_Documentos

Tabela responsável por intermediar o relacionamento entre a tabela que contém os lançamentos e a tabela que contém os documentos desses lançamentos.

- **Descrição dos campos da tabela:**

  | Campo           | Tipo      | Descrição                                                            |
  | :-------------- | :-------- | :------------------------------------------------------------------- |
  | `id`            | int8      | Indentificador da tabela (Primary Key).                              |
  | `lancamento_id` | int8      | Foreing Key da tabela [^^lancamentos^^](#lancamentos).               |
  | `documento_id`  | int8      | Foreing Key da tabela [^^documentos^^](#documetos).                  |
  | `user_id`       | int8      | Foreing Key da tabela [^^users^^](db-admin.md#users) (banco admin).  |
  | `created_at`    | timestamp |                                                                      |
  | `updated_at`    | timestamp |                                                                      |

- **Relacionamentos:**

  | Tabela                                 | Tipo        | Descrição                                                |
  | :------------------------------------- | :---------- | :------------------------------------------------------- |
  | [^^`lancamentos`^^](#lancamentos)      | Foreing Key | Lançamentos de uma empresa presentes no sistema.         |
  | [^^`documentos`^^](#documentos)        | Foreing Key | Documentos referentes ao lançamento (anexos).            |
  | [^^`admin.users`^^](db-admin.md#users) | Foreing Key | Usuário ao qual corresponde aquele lançamento/documento. |

### Orcamentos_Lancamentos

Tabela que agrupa os lançamentos presentes no orçamento de uma determinada empresa.

- **Descrição dos campos da tabela:**

  | Campo                   | Tipo       | Descrição                                                                  |
  | :---------------------- | :--------- | :------------------------------------------------------------------------- |
  | `id`                    | int8       | Indentificador da tabela (Primary Key).                                    |
  | `empresa_id`            | int8       | Foreing Key da tabela [^^empresas^^](#empresas).                           |
  | `departamento_id`       | int8       | Foreing Key da tabela [^^departamentos^^](#departamentos).                 |
  | `fornecedor_cliente_id` | int8       | Foreing Key da tabela [^^fornecedores_clientes^^](#fornecedores_clientes). |
  | `colaborador_id`        | int8       | Foreing Key da tabela [^^colaboradores^^](#colaboradores).                 |
  | `unidade_id`            | int8       | Foreing Key da tabela [^^unidades^^](#unidades).                           |
  | `centrocusto_id`        | int8       | Foreing Key da tabela [^^centrocustos^^](#centrocustos).                   |
  | `planoconta_id`         | int8       | Foreing Key da tabela [^^planocontas^^](#planocontas).                     |
  | `valor`                 | numeric    | Valor do lançamento.                                                       |
  | `data`                  | date       | Data de inserção do lançamento (formato ISO 8601).                         |
  | `descricao`             | text       | Descrição do lançamento.                                                   |
  | `lancado_por`           | int8       | Indicativo do usuário que realizou o lançamento.                           |
  | `lancado_em`            | timestamp  | Data em que o lançamento foi realizado (formato ISO 8601).                 |
  | `analisado_por`         | int8       | Responsável pela análise do lançamento.                                    |
  | `analisado_em`          | timestamp  | Data da análise do lançamento (formato ISO 8601).                          |
  | `status`                | varchar(1) |                                                                            |
  | `created_at`            | timestamp  |                                                                            |
  | `updated_at`            | timestamp  |                                                                            |

- **Relacionamentos:**

  | Tabela                                                | Tipo        | Descrição                                                                            |
  | :---------------------------------------------------- | :---------- | :----------------------------------------------------------------------------------- |
  | [^^`empresas`^^](#empresas)                           | Foreing Key | Cada empresa vai possuir orçamentos, e os mesmos possuem lançamentos que o compõem.  |
  | [^^`departamentos`^^](#departamentos)                 | Foreing Key | Os departamentos possuem orçamentos, e os mesmos possuem lançamentos que os compõem. |
  | [^^`fornecedores_clientes`^^](#fornecedores_clientes) | Foreing Key | Os dados dos fornecedores estão presentes nos lançamentos de orçamentos.             |
  | [^^`colaboradores`^^](#colaboradores)                 | Foreing Key | Os dados dos colaboradores estão presentes nos lançamentos de orçamentos.            |
  | [^^`unidades`^^](#unidades)                           | Foreing Key | Os dados das unidades estão presentes nos lançamentos de orçamentos.                 |
  | [^^`centrocustos`^^](#centrocustos)                   | Foreing Key | Os dados dos centros de custos estão presentes nos lançamentos de orçamentos.        |
  | [^^`planocontas`^^](#planocontas)                     | Foreing Key | O informativo sobre a categoria do lançamento em questão.                            |


### Pag_Transferencias

Tabela responsável por armazenar os dados do pagamento de uma transferência bancária realizada pela empresa.

- **Descrição dos campos da tabela:**

  | Campo                   | Tipo        | Descrição                                                                                     |
  | :---------------------- | :---------- | :-------------------------------------------------------------------------------------------- |
  | `id`                    | int8        | Indentificador da tabela (Primary Key).                                                       |
  | `empresa_id`            | int8        | Foreing Key da tabela [^^empresas^^](#empresas).                                                  |
  | `fornecedor_cliente_id` | int8        | Foreing Key da tabela [^^fornecedores_clientes^^](#fornecedores_clientes).                        |
  | `descricao`             | text        | Descrição da transferência realizada.                                                         |
  | `banco`                 | varchar(40) | Banco envolvido na transferência.                                                             |
  | `agencia`               | varchar(40) | Agência bancária envolvida na transferência.                                                  |
  | `conta`                 | varchar(40) | Conta bancária envolvida na transferência.                                                    |
  | `status`                | varchar(1)  | Status do pagamento da transferência no sistema. Valores padrão: "A" (ativo) e "I" (inativo). |
  | `created_at`            | timestamp   |                                                                                               |
  | `updated_at`            | timestamp   |                                                                                               |
  | `favorito`              | varchar(1)  | Opção para favoritar uma transferência, o que, na prática, deixa os dados daquela transferência salvos para uso posterior. |

- **Relacionamentos:**

  | Tabela                                                | Tipo        | Descrição                                                                       |
  | :---------------------------------------------------- | :---------- | :------------------------------------------------------------------------------ |
  | [^^`empresas`^^](#empresas)                           | Foreing Key | Cada empresa pode realizar transferências entre a mesma e os seus fornecedores. |
  | [^^`fornecedores_clientes`^^](#fornecedores_clientes) | Foreing Key | Fornecedores realizam transferências entre eles e empresas.                     |
  | [^^`lancamentos`^^](#lancamentos)                     | Primary Key | As transferências constarão nos lançamentos da empresa.                         |
  | [^^`lancamentos_baixas`^^](#lancamentos_baixas)       | Primary Key | Os lançamentos, que contém os pagamentos de transferência, passarão pelo processo de "baixa" dentro do sistema. |

### Painel_Dados

Tabela responsável por armazenar os dados da empresa, que serão mostrados (UI) no seu painel de dados no sistema.

- **Descrição dos campos da tabela:**

  | Campo                   | Tipo      | Descrição                                                                  |
  | :---------------------- | :-------- | :------------------------------------------------------------------------- |
  | `id`                    | int8      | Indentificador da tabela (Primary Key).                                    |
  | `empresa_id`            | int8      | Foreing Key da tabela [^^empresas^^](#empresas).                           |
  | `unidade_id`            | int8      | Foreing Key da tabela [^^unidades^^](#unidades).                           |
  | `ano`                   | int4      | Ano vigente.                                                               |
  | `mes`                   | int4      | Mês vigente.                                                               |
  | `geracao_liquida_caixa` | numeric   | Correspondente ao valor da geração líquida de caixa.                       |
  | `capital_giro`          | numeric   | Correspondente ao valor de capital de giro da empresa.                     |
  | `saldo_caixa`           | numeric   | Correspondente ao valor de saldo em caixa no momento.                      |
  | `saldo_banco`           | numeric   | Correspondente ao valor de saldo no banco do momento.                      |
  | `contas_pagar`          | numeric   | Correspondente ao valor de contas a serem pagas pela empresa.              |
  | `contas_receber`        | numeric   | Correspondente ao valor de contas a serem recebidas pela empresa.          |
  | `ebitda`                | numeric   | Corresponde aos lucros antes de juros, impostos depreciação e amortização. |
  | `faturamento`           | numeric   | Valor correspondente ao faturamento da empresa.                            |
  | `created_at`            | timestamp |                                                                            |
  | `updated_at`            | timestamp |                                                                            |

- **Relacionamentos:**

  | Tabela                      | Tipo        | Descrição                                                                                              |
  | :-------------------------- | :---------- | :----------------------------------------------------------------------------------------------------- |
  | [^^`empresas`^^](#empresas) | Foreing Key | O painel de dados irá apresentar dados da empresa no sistema.                                          |
  | [^^`unidades`^^](#unidades) | Foreing Key | O painel de dados contará, também, com os dados de cada unidade pertencente a uma determinada empresa. |

### PlanoContas

Tabela responsável por armazenar a categoria de lançamentos presentes no sistema.

- **Descrição dos campos da tabela:**

  | Campo        | Tipo         | Descrição                                                                             |
  | :----------- | :----------- | :------------------------------------------------------------------------------------ |
  | `id`         | int8         | Indentificador da tabela (Primary Key).                                               |
  | `id_pai`     | int8         | Identificador usado para apontar para o pai em um aninhamento contendo pais e filhos. |
  | `empresa`    | int8         | Foreing Key da tabela [^^empresas^^](#empresas).                                      |
  | `nome`       | varchar(140) | Nome do plano a ser contratado.                                                       |
  | `ordem`      | varchar(12)  | Ordenação realizada na UI.                                                            |
  | `nivel`      | int4         | Nível dentro no aninhamento.                                                          |
  | `fc`         | int4         | Informação relacionada ao fluxo de caixa.                                             |
  | `descricao`  | text         | Descrição do plano a ser contratado.                                                  |
  | `created_at` | timestamp    |                                                                                       |
  | `updated_at` | timestamp    |                                                                                       |
  | `codconta`   | varchar(10)  | Categorização da conta em 1 - Desembolso e 2 - Ingresso.                              |

*[UI]: User Interface

- **Relacionamentos:**

  | Tabela                      | Tipo        | Descrição                                                       |
  | :-------------------------- | :---------- | :-------------------------------------------------------------- |
  | [^^`empresas`^^](#empresas) | Foreing Key | Empresa cujo lançamento pertence, e que receberá uma categoria. |

### PlanoContas_Padrao

Tabela que armazena planos padronizados que um lançamento pode possuir.

- **Descrição dos campos da tabela:**

  | Campo                       | Tipo         | Descrição                                                                                             |
  | :-------------------------- | :----------- | :---------------------------------------------------------------------------------------------------- |
  | `id`                        | int8         | Indentificador da tabela (Primary Key).                                                               |
  | `id_pai`                    | int8         | Identificador usado para aninhamento dos dados, mostrando qual é o item pai dentro de um aninhamento. |
  | `nome`                      | varchar(120) | Nome do plano.                                                                                        |
  | `ordem`                     | varchar(12)  | Ordenação realizada na UI.                                                                            |
  | `nivel`                     | int4         | Nível dentro do aninhamento.                                                                          |
  | `descricao`                 | text         | Descrição do plano.                                                                                   |
  | `created_at`                | timestamp    |                                                                                                       |
  | `updated_at`                | timestamp    |                                                                                                       |
  | `planoconta_padrao_tipo_id` | int8         | Foreing Key da tabela [^^planocontas_padrao_tipos^^](#planocontas_padrao_tipos).                      |
  | `codconta`                  | varchar(10)  | Categorização da conta em 1 - Desembolso e 2 - Ingresso.                                              |
  | `fc`                        | int4         | Informação relacionada ao fluxo de caixa.                                                             |

- **Relacionamentos:**

  | Tabela                                                      | Tipo        | Descrição                                                                 |
  | :---------------------------------------------------------- | :---------- | :------------------------------------------------------------------------ |
  | [^^`planocontas_padrao_tipos`^^](#planocontas_padrao_tipos) | Foreing Key | Cada plano pode ter um tipo, que é discriminado na tabela correspondente. |

### PlanoContas_Padrao_Tipos

Tabela que armazena os diferentes tipos de planos que as contas podem possuir.

- **Descrição dos campos da tabela:**

  | Campo        | Tipo        | Descrição                               |
  | :----------- | :---------- | :-------------------------------------- |
  | `id`         | int8        | Indentificador da tabela (Primary Key). |
  | `nome`       | varchar(40) | Nome do tipo de plano.                  |
  | `descricao`  | text        | Descrição do tipo de plano.             |
  | `created_at` | timestamp   |                                         |
  | `updated_at` | timestamp   |                                         |

- **Relacionamentos:**

  | Tabela                                          | Tipo        | Descrição                                                                   |
  | :---------------------------------------------- | :---------- | :-------------------------------------------------------------------------- |
  | [^^`planocontas_padrao`^^](#planocontas_padrao) | Primary Key | Cada plano terá um tipo especifico, e será atrelado a uma conta específica. |

### Planos

Tabela responsável por armazenar os dados referentes aos planos que poderão ser contratados por uma determinada empresa.

- **Descrição dos campos da tabela:**

  | Campo        | Tipo         | Descrição                                                                |
  | :----------- | :----------- | :----------------------------------------------------------------------- |
  | `id`         | int8         | Indentificador da tabela (Primary Key).                                  |
  | `nome`       | varchar(255) | Nome do plano a ser contratado.                                          |
  | `descricao`  | text         | Descrição do plano.                                                      |
  | `status`     | varchar(255) | Status do plano no sistema. Valores padrão: "A" (ativo) e "I" (inativo). |
  | `created_at` | timestamp    |                                                                          |
  | `updated_at` | timestamp    |                                                                          |

- **Relacionamentos:**

  | Tabela                                  | Tipo        | Descrição                                                                          |
  | :-------------------------------------- | :---------- | :--------------------------------------------------------------------------------- |
  | [^^`planos_modulos`^^](#planos_modulos) | Primary Key | Os planos contém diferentes módulos, armazenados na tabela de nome correspondente. |
  | [^^`contratos`^^](#contratos)           | Primary Key | Um plano é adquirido através de um contrato, este sendo feito com empresas.        |

### Planos_Modulos

Tabela responsável por armazenar os diferentes módulos que um plano possui.

- **Descrição dos campos da tabela:**

  | Campo        | Tipo      | Descrição                                                               |
  | :----------- | :-------- | :---------------------------------------------------------------------- |
  | `id`         | int8      | Indentificador da tabela (Primary Key).                                 |
  | `plano_id`   | int8      | Foreing Key da tabela [^^planos^^](#planos).                            |
  | `modulo_id`  | int8      | Foreing Key da tabela [^^modulos^^](db-admin.md#modulos) (banco admin). |
  | `created_at` | timestamp |                                                                         |
  | `updated_at` | timestamp |                                                                         |

- **Relacionamentos:**

  | Tabela                                     | Tipo        | Descrição                                                         |
  | :----------------------------------------- | :---------- | :---------------------------------------------------------------- |
  | [^^`planos`^^](#planos)                    | Foreing Key | Plano que contém um módulo e que será contratado por uma empresa. |
  | [^^`admin.modulos`^^](db-admin.md#modulos) | Foreing Key | Liga o módulo do plano ao usuário que o contratou.                |

### Socios

Tabela responsável por armazenar os dados referentes a um sócio de uma determinada empresa.

- **Descrição dos campos da tabela:**

  | Campo                         | Tipo         | Descrição                                                                                        |
  | :---------------------------- | :----------- | :----------------------------------------------------------------------------------------------- |
  | `id`                          | int8         | Indentificador da tabela (Primary Key).                                                          |
  | `empresa_id`                  | int8         | Foreing Key da tabela [^^empresas^^](#empresas).                                                 |
  | `nome`                        | varchar(140) | Nome do sócio.                                                                                   |
  | `cpfcnpj`                     | varchar(14)  | CPF ou CNPJ do sócio.                                                                            |
  | `data_nascimento`             | date         | Data de nascimento do sócio (formato ISO 8601).                                                  |
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
  | `rg_numero`                   | varchar(25)  | Número do RG do sócio.                                                                           |
  | `rg_orgao`                    | varchar(25)  | Órgão expeditor do RG do sócio.                                                                  |
  | `rg_uf`                       | varchar(2)   | Unidade federativa que consta no RG do sócio                                                     |
  | `rg_emissao`                  | date         | Data de emissão do RG do sócio (formato ISO 8601).                                               |
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
  | `user_id`                     | int8         | Foreing Key da tabela [^^users^^](db-admin.md#users) (banco admin).                              |
  | `renda`                       | numeric      | Renda atual do sócio.                                                                            |
  | `unidade_id`                  | int8         | Foreing Key da tabela [^^unidades^^](#unidades).                                                 |
  | `doc_selfie`                  | varchar(255) | Documento referente a selfie feita pelo sócio.                                                   |
  | `status_doc_selfie`           | varchar(1)   | Status da selfie do sócio. Valores: "W" (aguardando) e "E" (enviado).                            |
  | `data_doc_selfie`             | timestamp    | Data de recebimento da selfie (formato ISO 8601).                                                |
  | `qualificacao`                | varchar(2)   | Qualificação do sócio dentro da empresa.                                                         |
  | `participacao`                | numeric      | Porcentagem de participação do sócio na empresa.                                                 |
  | `doc_identity_card_front`     | varchar(255) | Documento de identidade do sócio - anverso.                                                      |
  | `status_identity_card_front`  | varchar(1)   | Status do documento de identidade do sócio - anverso. Valores: "W" (aguardando) e "E" (enviado). |
  | `data_identity_card_front`    | timestamp    | Data de recebimento do documento de identidade - anverso (formato ISO 8601).                     |
  | `doc_driver_license_front`    | varchar(255) | CNH do sócio - anverso.                                                                          |
  | `status_driver_license_front` | varchar(1)   | Status da CNH do sócio - anverso. Valores: "W" (aguardando) e "E" (enviado).                     |
  | `data_driver_license_front`   | timestamp    | Data de recebimento da CNH - anverso (formato ISO 8601).                                         |
  | `doc_driver_license_verse`    | varchar(255) | CNH do sócio - verso.                                                                            |
  | `status_driver_license_verse` | varchar(1)   | Status da CNH do sócio - verso. Valores: "W" (aguardando) e "E" (enviado).                       |
  | `data_driver_license_verse`   | timestamp    | Data de recebimento da CNH - verso (formato ISO 8601).                                           |
  | `doc_identity_card_verse`     | varchar(255) | Documento de identidade do sócio - verso.                                                        |
  | `status_identity_card_verse`  | varchar(1)   | Status do documento de identidade do sócio - verso. Valores: "W" (aguardando) e "E" (enviado).   |
  | `data_identity_card_verse`    | timestamp    | Data de recebimento do documento de identidade - verso (formato ISO 8601).                       |

*[RG]: Registro Geral
*[DDI]: Discagem Direta Internacional
*[DDD]: Discagem Direta à Distância
*[CNH]: Carteira Nacional de Habilitação

- **Relacionamentos:**

  | Tabela                                 | Tipo        | Descrição                                                                           |
  | :------------------------------------- | :---------- | :---------------------------------------------------------------------------------- |
  | [^^`empresas`^^](#empresas)            | Foreing Key | Os sócios estão associados a uma empresa, e a mesma pode conter diversos sócios.    |
  | [^^`unidades`^^](#unidades)            | Foreing Key | Um sócio pode estar associado a unidades de uma mesma empresa de formas diferentes. |
  | [^^`admin.users`^^](db-admin.md#users) | Foreing Key | Cada sócio é um diferente usuário dentro do sistema.                                |

### Unidades

Tabela responsável por armazenar os dados de cada unidade de uma empresa no sistema.

- **Descrição dos campos da tabela:**

  | Campo                          | Tipo         | Descrição                                                                  |
  | :----------------------------- | :----------- | :------------------------------------------------------------------------- |
  | `id`                           | int8         | Indentificador da tabela (Primary Key).                                    |
  | `empresa_id`                   | int8         | Foreing Key da tabela [^^empresas^^](#empresas).                           |
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
  | `data_abertura`                | date         | Data de abertura da unidade (formato ISO 8601).                            |
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
  | `data_doc_atos_constitutivos`  | timestamp    | Data de recebimento do documento de Atos Constitutivos (formato ISO 8601). |
  | `inscricao_estadual`           | varchar(50)  | Registro da unidade a nível estadual.                                      |
  | `inscricao_municipal`          | varchar(50)  | Registro da unidade a nível municipal.                                     |
  | `apelido`                      | varchar(120) | Apelido utilizado para relações informais da empresa.                      |
  | `printedcardname`              | varchar(21)  | Nome a ser mostrado no cartão da empresa.                                  |
  
*[CNAE]: Classificação Nacional de Atividades Econômicas
*[MEI]: Microeemprendedor Individual
*[EIRELI]: Empresa Individual de responsabilidade limitada 

- **Relacionamentos:**

  | Tabela                                | Tipo        | Descrição                                                                                 |
  | :------------------------------------ | :---------- | :---------------------------------------------------------------------------------------- |
  | [^^`empresas`^^](#empresas)           | Foreing Key | As unidades são pertencentes as empresas, sendo que a mesma pode ter várias unidades.     |
  | [^^`centrocustos`^^](#centrocustos)   | Primary Key | Cada unidade possui seu centro de custos próprio, agrupando receitas e despesas da mesma. |
  | [^^`contascaixas`^^](#contascaixas)   | Primary Key | Cada unidade possui sua conta caixa, para gerenciamento das transações financeiras.       |
  | [^^`painel_dados`^^](#painel_dados)   | Primary Key | Os dados das unidades estarão presentes, também, no painel de dados no sistema.           |
  | [^^`departamentos`^^](#departamentos) | Primary Key | Cada unidade pode ter seus departamentos particulares.                                    |
  | [^^`lancamentos`^^](#lancamentos)     | Primary Key | Os dados das unidades estarão presentes nos lançamentos.                                  |