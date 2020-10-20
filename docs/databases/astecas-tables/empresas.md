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