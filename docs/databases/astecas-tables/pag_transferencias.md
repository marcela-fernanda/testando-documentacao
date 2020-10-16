Tabela responsável por armazenar os dados do pagamento de uma transferência bancária realizada pela empresa.

- **Descrição dos campos da tabela:**

  | Campo                   | Tipo        | Descrição                                                                                     |
  | :---------------------- | :---------- | :-------------------------------------------------------------------------------------------- |
  | `id`                    | int8        | Indentificador da tabela (Primary Key).                                                       |
  | `empresa_id`            | int8        | Foreing Key da tabela [empresas](#empresas).                                                  |
  | `fornecedor_cliente_id` | int8        | Foreing Key da tabela [fornecedores_clientes](#fornecedores_clientes).                        |
  | `descricao`             | text        | Descrição da transferência realizada.                                                         |
  | `banco`                 | varchar(40) | Banco envolvido na transferência.                                                             |
  | `agencia`               | varchar(40) | Agência bancária envolvida na transferência.                                                  |
  | `conta`                 | varchar(40) | Conta bancária envolvida na transferência.                                                    |
  | `status`                | varchar(1)  | Status do pagamento da transferência no sistema. Valores padrão: "A" (ativo) e "I" (inativo). |
  | `created_at`            | timestamp   |                                                                                               |
  | `updated_at`            | timestamp   |                                                                                               |
  | `favorito`              | varchar(1)  | Opção para favoritar uma transferência, o que, na prática, deixa os dados daquela transferência salvos para uso posterior. |

- **Relacionamentos:**

  | Tabela                                            | Tipo        | Descrição                                                                       |
  | :------------------------------------------------ | :---------- | :------------------------------------------------------------------------------ |
  | [`empresas`](#empresas)                           | Foreing Key | Cada empresa pode realizar transferências entre a mesma e os seus fornecedores. |
  | [`fornecedores_clientes`](#fornecedores_clientes) | Foreing Key | Fornecedores realizam transferências entre eles e empresas.                     |
  | [`lancamentos`](#lancamentos)                     | Primary Key | As transferências constarão nos lançamentos da empresa.                         |
  | [`lancamentos_baixas`](#lancamentos_baixas)       | Primary Key | Os lançamentos, que contém os pagamentos de transferência, passarão pelo processo de "baixa" dentro do sistema. |