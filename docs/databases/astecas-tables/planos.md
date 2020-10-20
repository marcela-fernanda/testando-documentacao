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