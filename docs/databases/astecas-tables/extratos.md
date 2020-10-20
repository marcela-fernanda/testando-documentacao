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