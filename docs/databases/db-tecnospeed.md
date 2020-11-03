# Esquema TecnoSpeed - Tabelas
## Pagador

Tabela responsável por armazenar os dados do dono da conta cujo extrato será extraído.

- **Descrição dos campos da tabela:**

  | Campo                | Tipo         | Descrição                                                                   |
  | :------------------- | :----------- | :-------------------------------------------------------------------------- |
  | `id`                 | int4         | Indentificador da tabela (Primary Key).                                     |
  | `name`               | varchar(255) | Nome do pagador.                                                            |
  | `cpfcnpj`            | varchar(14)  | CPF / CNPJ do pagador.                                                      |
  | `accounts`           | jsonb        | Dados das contas que o pagador possui e que serão fontes de extrato.        |
  | `street`             | varchar(255) | Rua onde o pagador mora.                                                    |
  | `neighborhood`       | varchar(255) | Bairro onde o pagador mora.                                                 |
  | `addressnumber`      | varchar(10)  | Número de onde o pagador mora.                                              |
  | `adddresscomplement` | varchar(255) | Complemento de onde o pagador mora.                                         |
  | `city`               | varchar(255) | Cidade onde o pagador mora.                                                 |
  | `zipcode`            | varchar(10)  | Código postal do pagador.                                                   |
  | `token`              | varchar(255) | Identificador do pagador.                                                   |
  | `empresa_id`         | int8         | Foreing Key da tabela [empresas](db-astecas.md#empresas) (esquema astecas). |
  | `unidade_id`         | int8         | Foreing Key da tabela [unidades](db-astecas.md#unidades) (esquema astecas). |
  | `created_at`         | timestamp    |                                                                             |
  | `updated_at`         | timestamp    |                                                                             |

*[CPF]: Cadastro de pessoas físicas,
*[CNPJ] : Cadastro de pessoas jurídicas

- **Relacionamentos:**

  | Tabela                                           | Tipo        | Descrição                                                      |
  | :----------------------------------------------- | :---------- | :------------------------------------------------------------- |
  | [^^`astecas.empresas`^^](db-astecas.md#empresas) | Foreing Key | As contas bancárias de um pagador estão ligadas a uma empresa. |
  | [^^`astecas.unidades`^^](db-astecas.md#unidades) | Foreing Key | As contas bancárias de um pagador estão ligadas a uma unidade. |
  | [^^`log`^^](#log)                               | Primary Key | As contas bancárias do pagador gerarão informações que serão armazenadas na tabela de logs. |

## Log

Tabela responsável por armazenar os extratos recebidos das contas bancárias.

- **Descrição dos campos da tabela:**

  | Campo        | Tipo         | Descrição                                                                  |
  | :----------- | :----------- | :------------------------------------------------------------------------- |
  | `id`         | serial       | Indentificador da tabela (Primary Key).                                    |
  | `pagador_id` | int8         | Foreing Key da tabela [pagador](#pagador).                                 |
  | `evento`     | varchar(255) | Recebe o evento da API de pagamento.                                       |
  | `response`   | jsonb        | Armazena as informações de resposta.                                       |
  | `endpoint`   | varchar(255) | Rota de resposta da requisição.                                            |
  | `ip`         | varchar(100) | IP recebido durante a resposta da requisição.                              |
  | `created_at` | timestamp    |                                                                            |
  | `updated_at` | timestamp    |                                                                            |

- **Relacionamentos:**

  | Tabela                    | Tipo        | Descrição                                                                     |
  | :------------------------ | :---------- | :---------------------------------------------------------------------------- |
  | [^^`pagador`^^](#pagador) | Foreing Key | As contas bancárias do pagador gerarão informaçõe que serão aqui armazenadas. |