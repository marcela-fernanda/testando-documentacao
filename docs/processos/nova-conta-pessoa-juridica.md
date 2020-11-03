# Nova Conta - Pessoa Jurídica

## Processo de criação de uma nova conta jurídica

<figure class="images">
    <img src="../../../assets/diagramas/nova-conta-astecas-juridico.svg" />
</figure>

* **Legenda**:

| Processo                                  | Descrição                                                                                                          |
| :---------------------------------------- | :----------------------------------------------------------------------------------------------------------------- |
| 1. Sócio realiza login                    | Sócio insere seus dados e realiza login.                                                                           |
| 2. Realiza aceite dos termos              | Sócio realiza a leitura dos termos de uso e aceita.                                                                |
| 3. Confirma se os dados estão corretos    | Sócio visualiza os dados e confirma se estão corretos ou não.                                                      |
| 4. Recebe formulário para edição de dados | Caso os dados estejam errados, o sócio receberá um e-mail com um formulário para edição dos dados.                 |
| 5. Cria conta bancária                    | Cria uma conta bancária (Astecas) inativa (status = I).                                                            |
| 6. Cria conta caixa                       | Cria uma conta caixa inativa (status = I).                                                                         |
| 7. Monta dados da empresa / sócio         | Monta os dados no padrão asolicitado pelo BaaS (json).                                                             |
| 8. Salva Payload                          | Salva o conteúdo (payload) para realizar o envio pro BaaS.                                                         |
| 9. Realiza registro no BaaS               | Envia os dados contidos no payload para uma tentativa de registro no BaaS.                                         |
| 10. Atualiza Payload (status = 400)       | Caso o registro no BaaS dê errado, o payload será atualizado com status = 400, indicando erro no processo.         |
| 11. Atualiza Payload                      | Atualiza o payload com a resposta do BaaS (json), com uma mensagem e um idRegistration (utilizado para consultas). |
| 12. Atualiza conta bancária               | Atualiza a conta bancária anteriormente criada com um indicativo de que, agora, ela é uma conta Astecas (astecas = s) e que está aguardando o envio dos documentos (status = w). |
| 13. Realiza envio de documentos           | Realiza envio dos documentos do sócio.                                                                             |

## Subprocessos

### SendDocs

<figure class="images">
    <img src="../../../assets/diagramas/nova-conta-astecas-juridico-senddocs.svg" />
</figure>

* **Legenda**:

| Processo                           | Descrição                                                                                                                  |
| :--------------------------------- | :------------------------------------------------------------------------------------------------------------------------- |
| 1. Recupera dados da empresa       | Na prática, no código, há a recuperação (get) dos dados da empresa.                                                        |
| 2. Recupera dados da conta caixa   | Na prática, no código, há a recuperação (get) dos dados das contas caixa da empresa.                                       |
| 3. Identifica formato jurídico     | Identifica a empresa entre os formatos jurídicos que essa pode possuir ([ver código](#identificacao-de-formato-juridico)). |
| 4. Envia para o BaaS               | Envia os dados da empresa para os BaaS.                                                                                    |
| 5. Salva dados enviados no Payload | Salva os dados enviados no payload (não inclui a resposta do BaaS).                                                        |
| 6. Atualiza unidade                | Atualiza a unidade (da empresa) com novo status, informando envio dos documentos. (status_docs_atos = e).                  |

#### Identificação de formato jurídico

Para identificar o formato jurídico da empresa, no código, é feito um `switch` para identificar os diferentes tipos de formatos.

``` php linenums="1"
switch ($empresa->formato_juridico) {
    case 'MEI': //Microempreendedor Individual
        $document = 'CCMEI'; //Certificado da Condição do Microempreendedor Individual
        break;
    case 'SA': //Sociedade Anônima
        $document = 'COMPANY_BYLAWS'; //Estatuto Social
        break;
    case 'EIRELI': //Empresa Individual de Responsabilidade Limitada
        $document = 'EIRELI_INCORPORATION_STATEMENT'; //Contrato Social
        break;
    case 'EI': //Empresário Individual
        $document = 'EI_REGISTRATION_REQUIREMENT'; // Registro de Empresário Individual
        break;
    default:
        $document = 'ARTICLES_OF_ASSOCIATION'; //Contrato de sociedade
        break;
}
```