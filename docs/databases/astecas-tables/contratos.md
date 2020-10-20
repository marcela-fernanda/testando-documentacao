Tabela responsável por armazenar os contratos que cada empresa assina ao firmar um acordo de utilização do sistema.

- **Descrição dos campos da tabela:**

  | Campo              | Tipo         | Descrição                                                        |
  | :----------------- | :----------- | :--------------------------------------------------------------- |
  | `id`               | int8         | Indentificador da tabela (Primary Key).                          |
  | `descricao`        | text         | Descrição do contrato a ser firmado.                             |
  | `vigencia_inicial` | date         | Data que indica o início do prazo de validade do contrato.       |
  | `vigencia_final`   | date         | Data que indica o fim do prazo de validade do contrato.          |
  | `empresa_id`       | int8         | Foreing Key da tabela [^^empresas^^](#empresas).                 |
  | `plano_id`         | int8         | Foreing Key da tabela [^^planos^^](#planos).                     |
  | `status`           | varchar(255) | Status do contrato. Valores padrão: "A" (ativo) e "I" (inativo). |
  | `created_at`       | timestamp    |                                                                  |
  | `updated_at`       | timestamp    |                                                                  |
  | `valor`            | numeric      | Valor a ser pago pelo contrato do serviço.                       |

- **Relacionamentos:**

  | Tabela                      | Tipo        | Descrição                                                                                                    |
  | :-------------------------- | :---------- | :----------------------------------------------------------------------------------------------------------- |
  | [^^`empresas`^^](#empresas) | Foreing Key | Os contratos são firmados com empresas, sendo assim, cada empresa pode realizar vários contratos.            |
  | [^^`planos`^^](#planos)     | Foreing Key | Cada contrato possui um plano de utilização do sistema, e os planos podem estar contidos em vários contratos.|