# Login

## Processo de login

Para realizar o login, o usuário precisa estar previamento [cadastrado](#) no Astecas. A partir disto, o seguinte processo será realizado:

<figure class="images">
    <img src="../../../assets/diagramas/login.svg" />
</figure>

* **Legenda**:

| Processo              | Descrição                                                                                                                    |
| :-------------------- | :--------------------------------------------------------------------------------------------------------------------------- |
| 1. Gerar Access Token | Gera um token de acesso para o usuário, possibilitando que o mesmo acesse recursos protegidos..                              |
| 2. Checar permissões  | Checa as permissões de utilização do sistema do usuário. Por exemplo, o usuário A pode ter acesso a algo que o B não possui. |
| 3. Salvar sessão      | Salva a sessão do usuário.                                                                                                   |

## Subprocessos

### Gerar Access Token

<figure class="images">
    <img src="../../../assets/diagramas/login-access-token.svg" />
</figure>

* **Legenda**:

| Processo              | Descrição                                                                                                                    |
| :-------------------- | :--------------------------------------------------------------------------------------------------------------------------- |
| 1. OAuth              | Verifica os dados do usuário para confirmação se estes estão, de fato, corretos.                                             |
| 2. Gerar Bearer Token | Gera um Bearer Token para o Acess Token a ser criado.                                                                        |