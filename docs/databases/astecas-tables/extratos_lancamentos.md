Tabela responsável por agrupar todos os lançamentos contidos em um extrato.

- **Descrição dos campos da tabela:**

  | Campo                 | Tipo        | Descrição                                                                     |
  | :-------------------- | :---------- | :---------------------------------------------------------------------------- |
  | `id`                  | int8        | Indentificador da tabela (Primary Key).                                       |
  | `empresa_id`          | int8        | Foreing Key da tabela [empresas](#empresas).                                  |
  | `extrato_id`          | int8        | Foreing Key da tabela [extratos](#extratos).                                  |
  | `valor`               | date        | Data de criação do lançamento.                                                |
  | `data`                | numeric     | Valor total dos extratos presentes no lançamento.                             |
  | `checknum`            | varchar(40) | Número de controle do lançamento usando pelo BAAS.                            |
  | `descricao`           | text        | Descrição do lançamento.                                                      |
  | `identificador`       | text        | Identificação do BAAS para cada lançamento.                                   |
  | `created_at`          | timestamp   | Status do lançamento no sistema. Valores padrão: "A" (ativo) e "I" (inativo). |
  | `updated_at`          | timestamp   |                                                                               |
  | `status`              | varchar(1)  |                                                                               |
  | `lancamentos_id_temp` | int8        |                                                                               |
  
- **Relacionamentos:**

  | Tabela                      | Tipo                                                    | Descrição                                            |
  | :------------------------------------------------------------------------------------ | :---------- | :------------------------------------- |
  | [`empresas`](#empresas)                                                               | Foreing Key | Os lançamentos correspondem a uma empresa, e a mesma pode ter vários lançamentos. |
  | [`extratos`](#extratos)                                                               | Foreing Key | Os lançamentos contém vários extratos. |
  | [`lancamentos_baixas_extratos_lancamentos`](#lancamentos_baixas_extratos_lancamentos) | Primary Key | Os lançamentos de extratos passam pelo processo de "baixa" dentro do sistema. |