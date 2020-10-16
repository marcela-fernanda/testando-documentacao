Tabela que armazena os lançamentos que já sofreram baixa, ou seja, foram pagos ou recebidos. Um lançamento pode, também, ser inserido pelo usuário já tendo sido "baixado", e, nesse caso, posteriormente passará pelo processo de análise.

- **Descrição dos campos da tabela:**

  | Campo                   | Tipo         | Descrição                                                                                |
  | :---------------------- | :----------- | :--------------------------------------------------------------------------------------- |
  | `id`                    | int8         | Identificador da tabela (Primary Key).                                                   |
  | `lancamento_id`         | int8         | Foreing Key da tabela [lancamentos](#lancamentos).                                       |
  | `empresa_id`            | int8         | Foreing Key da tabela [empresas](#empresas).                                             |
  | `departamento_id`       | int8         | Foreing Key da tabela [departamentos](#departamentos).                                   |
  | `fornecedor_cliente_id` | int8         | Foreing Key da tabela [fornecedores_clientes](#fornecedores_clientes).                   |
  | `colaborador_id`        | int8         | Foreing Key da tabela [colaboradores](#colaboradores).                                   |
  | `unidade_id`            | int8         | Foreing Key da tabela [unidades](#unidades).                                             |
  | `centrocusto_id`        | int8         | Foreing Key da tabela [centrocustos](#centrocustos).                                     |
  | `pag_transferencia_id`  | int8         | Foreing Key da tabela [pag_transferencias](#pag_transferencias).                         |
  | `planoconta_id`         | int8         | Foreing Key da tabela [planocontas](#planocontas).                                       |
  | `contacaixa_id`         | int8         | Foreing Key da tabela [contascaixas](#contascaixas).                                     |
  | `valor`                 | numeric      | Valor pago em relação ao lançamento.                                                     |
  | `valor_acrescimo`       | numeric      | Valor de acréscimo no lançamento, em casos de, por exemplo, pagamento atrasado de conta. |
  | `valor_desconto`        | numeric      | Valor de desconto em um lançamento.                                                      |
  | `data`                  | date         | Data em que o lançamento foi pago/recebido.                                              |
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

  | Tabela                  | Tipo        | Descrição                                                                                         |
  | :---------------------- | :---------- | :------------------------------------------------------------------------------------------------ |
  | [`lancamentos`](#lancamentos)                                                         | Foreing Key | Corresponde aos lançamentos, antes de serem "baixados". |
  | [`empresas`](#empresas)                                                               | Foreing Key | Dados da empresa que estão contidos no lançamento. |
  | [`departamentos`](#departamentos)                                                     | Foreing Key | Dados do departamento que estão contidos no lançamento. |
  | [`fornecedores_clientes`](#fornecedores_clientes)                                     | Foreing Key | Dados do fornecedor, que estão contidos nos lançamentos. |
  | [`colaboradores`](#colaboradores)                                                     | Foreing Key | Dados dos colaboradores, que estão contidos nos lançamentos. |
  | [`unidades`](#unidades)                                                               | Foreing Key | Dados das unidades, que estão contidos nos lançamentos. |
  | [`centrocustos`](#centrocustos)                                                       | Foreing Key | Dados dos centros de custos, que estão contidos nos lançamentos. |
  | [`pag_transferencias`](#pag_transferencias)                                           | Foreing Key | Dados de transferências, que estão contidos nos lançamentos. |
  | [`planocontas`](#planocontas)                                                         | Foreing Key | Categoria do lançamento em questão. |
  | [`contascaixas`](#contascaixas)                                                       | Foreing Key | Dados das contas caixas, que estão contidos nos lançamentos. |
  | [`lancamentos_baixas_extratos_lancamentos`](#lancamentos_baixas_extratos_lancamentos) | Primary Key | Intermediário que liga os lançamentos contidos nos extratos aos lançamentos baixados. |
  | [`lancamentos_baixas_documentos`](#lancamentos_baixas_documentos)                     | Primary Key | Intermediário que liga o documento (anexo) de um dado lançamento ao mesmo. |