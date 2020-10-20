Tabela responsável por armazenar os dados refentes aos cartões associados a uma determinada conta.

- **Descrição dos campos da tabela:**

  | Campo                          | Tipo         | Descrição                                                                      |
  | :----------------------------- | :----------- | :----------------------------------------------------------------------------- |
  | `id`                           | varchar(100) | Identificador da tabela (Primary Key).                                         |
  | `idcard`                       | int4         | Identificador do cartão.                                                       |
  | `flagtitular`                  | int4         | Indica se o titular do cartão é o titular da conta cujo cartão está ligado.    |
  | `idpessoa`                     | int4         | Código atribuído a pessoa cujo cartão pertence.                                |
  | `sequencialcartao`             | int4         | Número de um cartão específico em uma lista de cartões associados a uma conta. |
  | `idconta`                      | int4         | Identificador da conta.                                                        |
  | `idstatus`                     | int4         | Status do cartão.                                                              |
  | `datastatus`                   | timestamp    | Data correspondente a última mudança de status do cartão (formato ISO 8601).   |
  | `idestagio`                    | int4         | Identificador referente ao estágio do cartão.                                  |
  | `dataestagio`                  | timestamp    | Data da última mudança de estágio (formato ISO 8601).                          |
  | `numerobin`                    | int4         | Número de identificação do banco.                                              |
  | `numerocartao`                 | varchar(16)  | Número do cartão.                                                              |
  | `numerocartaohash`             | int4         | Número do cartão em hash.                                                      |
  | `numerocartaocriptografado`    | varchar(100) | Número do cartão criptografado.                                                |
  | `dataemissao`                  | timestamp    | Data de criação do cartão (formato ISO 8601).                                  |
  | `datavalidade`                 | timestamp    | Data de validade do cartão (formato ISO 8601).                                 |
  | `cartaovirtual`                | int4         | Indica se o cartão é ou não virtual.                                           |
  | `impressaoavulsa`              | int4         | Indica a origem da impressão comercial do cartão.                              |
  | `dataimpressao`                | timestamp    | Data da impressão do cartão.                                                   |
  | `nomearquivoimpressao`         | varchar(120) | Nome do arquivo de impressão do cartão.                                        |
  | `idproduto`                    | int4         | Identificador do produto.                                                      |
  | `nomeimpresso`                 | varchar(100) | Nome impresso no cartão.                                                       |
  | `codigodesbloqueio`            | varchar(4)   | Código que é utilizado no processo de desbloqueio do cartão.                   |
  | `tipoportador`                 | varchar(1)   | Mostra o tipo de portador do cartão.                                           |
  | `idstatuscartao`               | int4         | Identificador do status do cartão.                                             |
  | `datastatuscartao`             | timestamp    | Data da última mudança de status do cartão (formato ISO 8601).                 |
  | `idestagiocartao`              | int4         | Identificador do estágio do cartão.                                            |
  | `dataestagiocartao`            | timestamp    | Data da última modificação de estágio do cartão (formato ISO 8601).            |
  | `datageracao`                  | timestamp    | Data de criação do cartão.                                                     |
  | `flagvirtual`                  | int4         | Indica se o cartão é ou não virtual.                                           |
  | `flagimpressaoorigemcomercial` | int4         | Indica se o cartão foi impresso na origem comercial ou não.                    |
  | `arquivoimpressao`             | varchar(100) | Nome do arquivo de impressão do cartão.                                        |
  | `portador`                     | int4         | Nome do portador do cartão.                                                    |
  | `created_at`                   | timestamp    |                                                                                |
  | `updated_at`                   | timestamp    |                                                                                |