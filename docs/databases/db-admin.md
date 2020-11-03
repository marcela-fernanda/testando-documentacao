# Esquema Admin - Tabelas
## Modulos

Tabela responsável por armazenar os diferentes módulos acessíveis a um usuário no sistema.

- **Descrição dos campos da tabela:**

  | Campo        | Tipo         | Descrição                                                                 |
  | :----------- | :----------- | :------------------------------------------------------------------------ |
  | `id`         | int8         | Indentificador da tabela (Primary Key).                                   |
  | `nome`       | varchar(40)  | Nome do módulo.                                                           |
  | `descricao`  | text         | Descrição do módulo.                                                      |
  | `status`     | varchar(255) | Status do módulo no sistema. Valores padrão: "A" (ativo) e "I" (inativo). |
  | `created_at` | timestamp    |                                                                           |
  | `updated_at` | timestamp    |                                                                           |

- **Relacionamentos:**

  | Tabela                          | Tipo        | Descrição                                                                            |
  | :------------------------------ | :---------- | :----------------------------------------------------------------------------------- |
  | [^^`permissoes`^^](#permissoes) | Primary Key | As permissões que os usuários possuem para acesso a determinados módulos do sistema. |

## Oauth_Access_Tokens

Tabela responsável por armazenar os tokens de acesso de cada usuário nas sessões do sistema.

- **Descrição dos campos da tabela:**

  | Campo        | Tipo         | Descrição                                               |
  | :----------- | :----------- | :------------------------------------------------------ |
  | `id`         | varchar(100) | Indentificador da tabela (Primary Key).                 |
  | `user_id`    | int8         | Foreing Key da tabela [^^users^^](#users).              |
  | `client_id`  | int4         | Identificador do cliente.                               |
  | `name`       | varchar(255) | Nome do cliente.                                        |
  | `scopes`     | text         | Refere-se a permissão do usuário dentro do sistema.     |
  | `revoked`    | bool(1)      | Verificação relacionada a expiração do token de acesso. |
  | `created_at` | timestamp    |                                                         |
  | `updated_at` | timestamp    |                                                         |
  | `expires_at` | timestamp    |                                                         |

- **Relacionamentos:**

  | Tabela                | Tipo        | Descrição                                           |
  | :-------------------- | :---------- | :-------------------------------------------------- |
  | [^^`users`^^](#users) | Foreing Key | Usuário a qual o token de acesso está relacionado.  |

## Oauth_Auth_Codes

Tabela que armazena um código único ligado a um nome de domínio (URL) e que será usado para solicitar o token de acesso.

- **Descrição dos campos da tabela:**

  | Campo        | Tipo         | Descrição                                             |
  | :----------- | :----------- | :---------------------------------------------------- |
  | `id`         | varchar(100) | Indentificador da tabela (Primary Key).               |
  | `user_id`    | int8         | Foreing Key da tabela [^^users^^](#users).            |
  | `client_id`  | int4         | Identificador do cliente.                             |
  | `scopes`     | text         | Permissões de uso do sistema relacionados ao usuário. |
  | `revoked`    | bool(1)      | Verificação de expiração do token de acesso.          |
  | `expires_at` | timestamp    |                                                       |

- **Relacionamentos:**

  | Tabela                | Tipo        | Descrição                                                                                 |
  | :-------------------- | :---------- | :---------------------------------------------------------------------------------------- |
  | [^^`users`^^](#users) | Foreing Key | Cada usuário, ao realizar o retorno ao cliente pela URL, gerará um código de autorização. |

## Oauth_Clients

Tabela utilizada para controlar as sessões do usuário dentro do sistema, de forma a garantir a segurança dos dados do mesmo.

- **Descrição dos campos da tabela:**

  | Campo                    | Tipo         | Descrição                                                               |
  | :----------------------- | :----------- | :---------------------------------------------------------------------- |
  | `id`                     | int4         | Indentificador da tabela (Primary Key).                                 |
  | `user_id`                | int8         | Foreing Key da tabela [^^users^^](#users).                              |
  | `name`                   | varchar(255) | Nome do cliente.                                                        |
  | `secret`                 | varchar(100) | Chave secreta do cliente.                                               |
  | `redirect`               | text         | URL de redirecionamento do usuário assim que o mesmo inicia sua sessão. |
  | `personal_access_client` | bool(1)      | Acesso do usuário para acesso ao sistema.                               |
  | `password_client`        | bool(1)      | Senha do usuário para acesso ao sistema.                                |
  | `revoked`                | bool(1)      | Verificação da expiração do token de acesso do usuário.                 |
  | `created_at`             | timestamp    |                                                                         |
  | `updated_at`             | timestamp    |                                                                         |

- **Relacionamentos:**

  | Tabela                | Tipo        | Descrição     |
  | :-------------------- | :---------- | :------------ |
  | [^^`users`^^](#users) | Foreing Key | Cada usuário terá seus dados utilizados pela tabela descrita nesse documento, a fim de garantir a segurança dos dados do mesmo. |

## Oauth_Personal_Access_Clients

Tabela que controla quais clientes possuem tokens de acesso, logo, possuirão acesso aos recursos do sistema.

- **Descrição dos campos da tabela:**

  | Campo        | Tipo      | Descrição                                               |
  | :----------- | :-------- | :------------------------------------------------------ |
  | `id`         | int4      | Indentificador da tabela (Primary Key).                 |
  | `client_id`  | int4      | Identificador do cliente.                               |
  | `created_at` | timestamp |                                                         |
  | `updated_at` | timestamp |                                                         |

## Oauth_Refresh_Tokens

Tabela que controla o processo de refresh de um token, ou seja, caso haja necessidade, um token pode ser gerado novamente, garantindo assim, a segurança dos dados do usuário.

- **Descrição dos campos da tabela:**

  | Campo             | Tipo         | Descrição                                               |
  | :---------------- | :----------- | :------------------------------------------------------ |
  | `id`              | varchar(100) | Indentificador da tabela (Primary Key).                 |
  | `access_token_id` | varchar(100) | Identificador do token de acesso.                       |
  | `revoked`         | bool(1)      | Verificação da expiração do token de acesso.            |
  | `expires_at`      | timestamp    |                                                         |

## Password_Resets

Tabela responsável por controlar solicitação de resets de senhas pelo usuário.

- **Descrição dos campos da tabela:**

  | Campo        | Tipo         | Descrição                   |
  | :----------- | :----------- | :-------------------------- |
  | `email`      | varchar(255) | E-mail do usuário.          |
  | `token`      | varchar(255) | Token de acesso do usuário. |
  | `created_at` | timestamp    |                             |

## Perfis

Tabela que intermedeia a ligação entre as permissões de uso do sistema que cada perfil possuirá.

- **Descrição dos campos da tabela:**

  | Campo           | Tipo         | Descrição                                                                                            |
  | :-------------- | :----------- | :--------------------------------------------------------------------------------------------------- |
  | `id`            | int8         | Indentificador da tabela (Primary Key).                                                              |
  | `permissoes_id` | int8         | Foreing Key da tabela [^^permissoes^^](#permissoes).                                                 |
  | `perfil_id`     | int8         | Foreing Key da tabela [^^perfis^^](#perfis).                                                         |
  | `created_at`    | timestamp    |                                                                                                      |
  | `updated_at`    | timestamp    |                                                                                                      |
  | `status`        | varchar(255) | Status das permissões atribuídas aos perfis no sistema. Valores padrão: "A" (ativo) e "I" (inativo). |

- **Relacionamentos:**

  | Tabela                          | Tipo        | Descrição                                                          |
  | :------------------------------ | :---------- | :----------------------------------------------------------------- |
  | [^^`permissoes`^^](#permissoes) | Foreing Key | Permissões atribuídas aos diferentes perfis dentro de uma empresa. |
  | [^^`perfis`^^](#perfis)         | Foreing Key | Perfis da empresa dentro do sistema.                               |


## Perfis_Permissoes

Tabela que armazena os diferentes tipos de permissões atribuídos a cada perfil de uma empresa no sistema.

- **Descrição dos campos da tabela:**

  | Campo        | Tipo         | Descrição                                                                                     |
  | :------------| :----------- | :-------------------------------------------------------------------------------------------- |
  | `id`         | int8         | Indentificador da tabela (Primary Key).                                                       |
  | `nome`       | varchar(255) | Nome da permissão.                                                                            |
  | `slug`       | varchar(255) | Identifica a permissão de uma forma resumida e "amigável".  |
  | `modulo_id`  | int8         | Foreing Key da tabela [^^modulos^^](#modulos). Por exemplo, se o nome da permissão é "administrador principal" o slug pode ser "admin_principal". |
  | `created_at` | timestamp    |                                                                                               |
  | `updated_at` | timestamp    |                                                                                               |
  | `status`     | varchar(255) | Status das permissões no sistema. Valores padrão: "A" (ativo) e "I" (inativo).                |

- **Relacionamentos:**

  | Tabela                                        | Tipo        | Descrição                                                      |
  | :-------------------------------------------- | :---------- | :------------------------------------------------------------- |
  | [^^`modulos`^^](#modulos)                     | Foreing Key | As permissões são diferentes módulos do sistema cujo usuário, através de seu perfil, possui acesso. |
  | [^^`perfis_permissoes`^^](#perfis_permissoes) | Primary Key | Cada perfil possui diferentes permissões de acesso ao sistema. |

## Permissoes

Armazena os diferentes perfis ligados a uma empresa dentro do sistema, e que serão, neste, atribuídos a diferentes usuários.

- **Descrição dos campos da tabela:**

  | Campo        | Tipo         | Descrição                                                                      |
  | :----------- | :----------- | :----------------------------------------------------------------------------- |
  | `id`         | int8         | Indentificador da tabela (Primary Key).                                        |
  | `nome`       | varchar(255) | Nome do perfil.                                                                |
  | `descricao`  | text         | Descrição do perfil.                                                           |
  | `status`     | varchar(255) | Status dos perfis no sistema. Valores padrão: "A" (ativo) e "I" (inativo).     |
  | `created_at` | timestamp    |                                                                                |
  | `updated_at` | timestamp    |                                                                                |
  | `empresa_id` | int8         | Foreing Key da tabela [^^empresas^^](db-astecas.md#empresas) (banco astecas).  |

- **Relacionamentos:**

  | Tabela                                           | Tipo        | Descrição                                                 |
  | :----------------------------------------------- | :---------- | :-------------------------------------------------------- |
  | [^^`users_perfil`^^](#users_perfil)              | Primary Key | Intermedeia a ligação entre os diferentes perfis de uma empresa e os usuários que estarão ligados a esses perfis. |
  | [^^`users`^^](#users)                            | Primary Key | Usuários que serão ligados a perfis da empresa.           |
  | [^^`perfis_permissoes`^^](#perfis_permissoes)    | Primary Key | Cada perfil terá diferentes permissões de uso do sistema. |
  | [^^`astecas.empresas`^^](db-astecas.md#empresas) | Foreing Key | Os perfis estão diretamente ligados a empresa, podendo, a mesma, possuir mais de 1 perfil. |

## Users

Tabela que armazena os dados dos usuários que utilizam o sistema.

- **Descrição dos campos da tabela:**

  | Campo                  | Tipo         | Descrição                                                                                          |
  | :--------------------- | :----------- | :------------------------------------------------------------------------------------------------- |
  | `id`                   | int8         | Indentificador da tabela (Primary Key).                                                            |
  | `name`                 | varchar(255) | Nome do usuário.                                                                                   |
  | `status`               | varchar(255) | Status dos usuários no sistema. Valores padrão: "A" (ativo) e "I" (inativo).                       |
  | `email`                | varchar(255) | E-mail do usuário.                                                                                 |
  | `email_verified_at`    | timestamp    | Data de verificação do e-mail (formato ISO 8601).                                                  |
  | `password`             | varchar(255) | Senha do usuário.                                                                                  |
  | `perfil_id`            | int8         | Foreing Key da tabela [^^perfis^^](#perfis).                                                       |
  | `remember_token`       | varchar(100) | Token de acesso no usuário, usado como medida de segurança dentro do sistema.                      |
  | `created_at`           | timestamp    |                                                                                                    |
  | `updated_at`           | timestamp    |                                                                                                    |
  | `cpf`                  | varchar(11)  | CPF do usuário.                                                                                    |
  | `cellphone`            | varchar(20)  | Número de telefone (DDD + número) do usuário.                                                      |
  | `force_reset_password` | bool(1)      | Controla a necessidade de inserção de nova senha pelo usuário durante o login do mesmo no sistema. |

*[CPF]: Cadastro de pessoas físicas

- **Relacionamentos:**

  | Tabela                                            | Tipo        | Descrição                                                                                 |
  | :------------------------------------------------ | :---------- | :---------------------------------------------------------------------------------------- |
  | [^^`oauth_clients`^^](#oauth_clients)             | Primary Key | Relação entre um dado usuário e sua sessão dentro do sistema.                             |
  | [^^`oauth_access_tokens`^^](#oauth_access_tokens) | Primary Key | Cada usuário possui um token de acesso como medida de segurança.                          |
  | [^^`oauth_auth_codes`^^](#oauth_auth_codes)       | Primary Key | Cada usuário, ao realizar o retorno ao cliente pela URL, gerará um código de autorização. |
  | [^^`users_perfil`^^](#users_perfil)               | Primary Key | Tabela que intermedeia perfil está ligado a um usuário.                                   |
  | [^^`perfis`^^](#perfis)                           | Foreing Key | Cada usuário possui um perfil no sistema.                                                 |

## Users_Perfil

Tabela que intermedeia o relacionamento entre o usuário e qual perfil está atribuído a esse.

- **Descrição dos campos da tabela:**

  | Campo        | Tipo      | Descrição                                    |
  | :----------- | :-------- | :------------------------------------------- |
  | `id`         | int8      | Indentificador da tabela (Primary Key).      |
  | `user_id`    | int8      | Foreing Key da tabela [^^users^^](#users).   |
  | `perfil_id`  | int4      | Foreing Key da tabela [^^perfis^^](#perfis). |
  | `created_at` | timestamp |                                              |
  | `updated_at` | timestamp |                                              |

- **Relacionamentos:**

  | Tabela                  | Tipo        | Descrição                                                       |
  | :---------------------- | :---------- | :-------------------------------------------------------------- |
  | [^^`users`^^](#users)   | Foreing Key | Usuários do sistema que possuem um perfil a eles atribuído.     |
  | [^^`perfis`^^](#perfis) | Foreing Key | Perfis da empresa no sistema que serão atribuídos aos usuários. |