Tabela responsável por armazenar a categoria de lançamentos presentes no sistema.

- **Descrição dos campos da tabela:**

  | Campo        | Tipo         | Descrição                                                                             |
  | :----------- | :----------- | :------------------------------------------------------------------------------------ |
  | `id`         | int8         | Indentificador da tabela (Primary Key).                                               |
  | `id_pai`     | int8         | Identificador usado para apontar para o pai em um aninhamento contendo pais e filhos. |
  | `empresa`    | int8         | Foreing Key da tabela [empresas](#empresas).                                          |
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

  | Tabela                  | Tipo        | Descrição                                                       |
  | :---------------------- | :---------- | :-------------------------------------------------------------- |
  | [`empresas`](#empresas) | Foreing Key | Empresa cujo lançamento pertence, e que receberá uma categoria. |