# Permissões

## Gerenciamento de permissões

A área de permissões permite atribuir diferentes permissões relacionadas a um módulo, e que, essas permissões, serão atribuídos a diferentes perfis no sistema.

<figure class="images">
    <img src="../../../../assets/prints-operacional/permissoes.jpg" />
</figure>

A tabela de dados contém as seguintes informações:

`Código`
: Número de identificação de uma determinada permissão.

`Nome`
: Nome da permissão.

`Slug`
: O slug corresponde a um identificador "amigável" que da permissão. Por exemplo, se o nome da permissão é "administrador principal" o slug pode ser "admin_principal".

`Módulo`
: Corresponde ao módulo cuja a permissão está atribuída.

`Alterado em`
: Data e hora da última alteração realizada na permissão.

`Status`
: Status da permissão, podendo ser:

    * Ativo
    * Inativo

`Ver`
: Opção para a visualização dos dados da permissão.

## Visualizando dados das permissões criadas

Para visualizar os dados de uma permissão já criada, basta clicar no ícone correspondente a um olho, como na imagem a seguir:

<figure class="images">
    <img src="../../../../assets/prints-operacional/modulos-olho.jpg" />
</figure>

Após isso, as informações sobre a permissão escolhida serão apresentadas:

<figure class="images">
    <img src="../../../../assets/prints-operacional/permissoes-visualizando.jpg" />
</figure>

Caso seja necessária a alteração dos dados, basta inserir os novos dados nos campos desejados e, por fim, clicar em **alterar registro**.

## Criando novas permissões

Para criar uma nova permissão, basta selecionar a opção "novo permissão", localizada no canto superior direito, como na imagem a seguir:

<figure class="images">
    <img src="../../../../assets/prints-operacional/permissoes-nova-permissao.jpg" />
</figure>

Após isso, a seguinte tela será apresentada:

<figure class="images">
    <img src="../../../../assets/prints-operacional/permissoes-novo.jpg" />
</figure>

Assim, basta inserir os seguintes dados sobre a nova permissão:

`Nome`
: Nome da nova permissão.

`Slug`
: URL de acesso do usuário, que irá identificar qual a permissão do usuário.

`Módulo`
: Módulo a qual será ligada a permissão que está sendo criada.

`Status`
: Status da permissão, podendo ser:

    * Ativo
    * Inativo

## Filtrando dados

A filtragem de dados é possível através da escolha de um módulo e um status que se deseja visualizar. Por exemplo, se for desejado ver todos os módulos e todos os status, basta selecionar a opção "todos" (como na imagem). Caso o desejo seja exibir todos os módulos que as permissões estão com status "inativo", basta selecionar a opção correspondente em "status" e clicar em "filtrar".

<figure class="images">
    <img src="../../../../assets/prints-operacional/permissoes-filtro.jpg" />
</figure>