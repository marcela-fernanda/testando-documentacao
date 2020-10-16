Tabela responsável por armazenar os dados das companhias (empresas).

- **Descrição dos campos da tabela:**

  | Campo            | Tipo        | Descrição                                                                 |
  | :--------------- | :---------- | :------------------------------------------------------------------------ |
  | `id`             | int4        | Identificador da tabela (Primary Key).                                    |
  | `idegistration`  | varchar(36) | Identificador do código de registro.                                      |
  | `status`         | varchar(20) | Status do registro.                                                       |
  | `company`        | jsonb       | Objeto contendo os dados de uma companhia.                                |
  | `productsetting` | jsonb       | Objeto contendo os dados de um produto.                                   |
  | `empresa_id`     | int8        | Foreing Key da tabela [empresas](db-astecas.md#empresas) (banco astecas). |
  | `created_at`     | timestamp   |                                                                           |
  | `updated_at`     | timestamp   |                                                                           |

A seguir, encontram-se os dados contidos nos objetos da tabela registrations:

{!databases/baas-tables/details/details-registrations.md!}

- **Relacionamentos:**

  | Tabela                                       | Tipo        | Descrição                                |
  | :------------------------------------------- | :---------- | :--------------------------------------- |
  | [`astecas.empresas`](db-astecas.md#empresas) | Foreing Key | Busca os dados da empresa para registro. |
