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
  | `empresa_id`            | int8         | Foreing Key da tabela [empresas](#empresas).                                                     |
  | `departamento_id`       | int8         | Foreing Key da tabela [departamentos](#departamentos).                                           |
  | `fornecedor_cliente_id` | int8         | Foreing Key da tabela [fornecedores_clientes](#fornecedores_clientes).                           |
  | `colaborador_id`        | int8         | Foreing Key da tabela [colaboradores](#colaboradores).                                           |
  | `unidade_id`            | int8         | Foreing Key da tabela [unidades](#centrocustos).                                                 |
  | `centrocusto_id`        | int8         | Foreing Key da tabela [centrocustos](#centrocustos).                                             |
  | `pag_transferencia_id`  | int8         | Foreing Key da tabela [pag_transferencias](#pag_transferencias).                                 |
  | `planoconta_id`         | int8         | Foreing Key da tabela [planocontas](#planocontas).                                               |
  | `valor`                 | numeric      | Valor "original" do lançamento.                                                                  |
  | `valor_acrescimo`       | numeric      | Valor de acréscimo a um lançamento (pagamento em atraso).                                        |
  | `valor_desconto`        | numeric      | Valor de desconto em um lançamento.                                                              |
  | `vencimento`            | date         | Data de vencimento do lançamento.                                                                |
  | `identificacao`         | varchar(50)  | Identificação alternativa para o lançamento.                                                     |
  | `notafiscal`            | varchar(40)  | Nota fiscal referente ao lançamento.                                                             |
  | `codigobarras`          | varchar(255) | Código de barras de um lançamento.                                                               |
  | `descricao`             | text         | Descrição do lançamento.                                                                         |
  | `lancado_por`           | int8         | Referente a quem fez o lançamento.                                                               |
  | `lancado_em`            | timestamp    | Data em que o lançamento foi realizado.                                                          |
  | `analisado_por`         | int8         | Referente a quem fez a análise do lançamento (operacional).                                      |
  | `analisado_em`          | timestamp    | Data em que foi realizada a análise.                                                             |
  | `status`                | varchar(255) | Status do lançamento no sistema. Valores: "P" (pendente), "A" (analisado) e "B" (baixado/baixa). |
  | `contabil`              | varchar(1)   | Verificação para saber se é ou não um lançamento contábil.                                       |
  | `created_at`            | timestamp    |                                                                                                  |
  | `updated_at`            | timestamp    |                                                                                                  |
  | `autorizado`            | varchar(1)   | Verificação para saber se o lançamento está ou não autorizado.                                   |
  | `autorizado_por`        | int8         | Referente a pessoa que realizou a autorização do lançamento.                                     |
  | `autorizado_em`         | timestamp    | Data em que foi realizada a autorização do lançamento.                                           |

- **Relacionamentos:**

  | Tabela                                              | Tipo        | Descrição                                                              |
  | :-------------------------------------------------- | :---------- | :--------------------------------------------------------------------- |
  | [`empresas`](#empresas)                             | Foreing Key | O lançamento refere-se a uma empresa, a qual ele está ligado.          |
  | [`departamentos`](#departamentos)                   | Foreing Key | O lançamento refere-se a um departamento, a qual ele está ligado.      |
  | [`fornecedor_clientes`](#fornecedor_clientes)       | Foreing Key | Os dados do fornecedor constarão em um lançamento.                     |
  | [`colaboradores`](#colaboradores)                   | Foreing Key | Os dados refentes ao colaborador estão contidos em um lançamento.      |
  | [`unidades`](#unidades)                             | Foreing Key | O lançamento refere-se a uma unidade, a qual ele está ligado.          |
  | [`centrocustos`](#centrocustos)                     | Foreing Key | Os dados do centro de custos da empresa estará contido no lançamento.  |
  | [`pag_transferencias`](#pag_transferencias)         | Foreing Key | Os dados referentes aos pagamentos de transferências estão contidos no lançamento. |
  | [`planocontas`](#planocontas)                       | Foreing Key | Corresponde a categoria do lançamento.                                 |
  | [`lancamentos_baixas`](#lancamentos_baixas)         | Primary Key | Os lançamentos passarão, no sistema, pelo processo de baixa.           |
  | [`lancamentos_documentos`](#lancamentos_documentos) | Primary Key | Os lançamentos possuem documentos (anexos) que estão atrelados a eles. |