Tabela utilizada no processo de atualização dos dados de uma determinada companhia.

- **Descrição dos campos da tabela:**

  | Campo             | Tipo        | Descrição                                         |
  | :---------------- | :---------- | :------------------------------------------------ |
  | `id`              | int4        | Identificador da tabela (Primary Key).            |
  | `idegistration`   | varchar(36) | Identificador do código de registro da companhia. |
  | `company`         | jsonb       | Objeto contendo detalhes sobre a companhia.       |
  | `productsettings` | json        | Objeto contendo detalhes sobre o produto.         |
  | `created_at`      | timestamp   |                                                   |
  | `updated_at`      | timestamp   |                                                   |

A seguir, encontram-se os dados contidos nos objetos da tabela registrations_updates:

{!databases/baas-tables/details/details-registrations.md!}