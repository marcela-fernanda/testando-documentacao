# Contas a Pagar

## Visão Geral

Ao entrar na opção de contas a pagar a **visão geral** é similar a da imagem abaixo.

<figure class="images">
    <img src="../../../../assets/prints-ui/contas-pagar-painel.jpg" />
</figure>

Nos próximos tópicos, serão descrevidas as opções possíveis nessa área do sistema.

## Filtro

<figure class="images">
    <img src="../../../../assets/prints-ui/contas-pagar-filtro.jpg" />
</figure>

Nesta opção, é possível **filtrar os dados** que serão exibidos na tabela atavés das seguintes opções:

`Entre data`
: Seleciona um período de tempo cujo dados serão exibidos. Por exemplo, é possível exibir os últimos 7 dias, o mês atual, etc.

`Unidade/Filial`
: Filtra por diferentes unidades/filiais de uma empresa.

`Centro de Custo`
: Filtra pelos diferentes centros de custos de uma determinada empresa.

`Departamento`
: Exibe as contas a pagar de acordo com o departamento da empresa.

`Categoria`
: Filtra pelas categorias disponibilizadas. De forma geral, existem duas categorias: ingressos e desembolsos. Nessas categorias, existem subcategorias específicas que atendem casos específicos.

`Status`
: Exibem as contas que estão pendentes de análise ou analisados.

## Tabela de dados

Na tabela são exibidos os **dados referentes as contas pendentes de pagamento**.

<figure class="images">
    <img src="../../../../assets/prints-ui/contas-pagar-tabela.jpg" />
</figure>

Os dados exibidos são:

`Vencimento` 
: Referente a data de vencimento da respectiva conta.

`Valor` 
: Valor a ser pago pela respectiva conta.

`Categoria`
: Corresponde a categoria da conta.

`Criado Por`
: Referente ao usuário que fez a inserção do lançamento de conta a pagar.

`Descrição`
: Descrição da conta a ser paga.

`Status`
: Situação atual do documento, podendo ser: pendente, em análise ou analisado.

`Visualizar`
: Opção que disponibiliza a visualização da conta a ser paga. Ao clicar nessa opção, será exibida uma tela contendo todas as informações relacionadas a conta em questão. Além da visualização do lançamento, o usuário pode ver os dados do mesmo após o processo de baixa, clicando na opção respectiva.

<figure class="images">
    <img src="../../../../assets/prints-ui/contas-pagar-visualizar.jpg" />
</figure>

### Opções de exibição

A **tabela de exibição dos dados** referentes as contas a pagar possui duas opções:

1. Alterar o número de linhas exibidas da tabela. Dependendo do número de de dados totais que a tabela possua, exibir mais linhas pode resultar em todos os dados sendo exibidos em uma única página.

<figure class="images">
    <img src="../../../../assets/prints-ui/enviar-extrato-exibir-linhas.jpg" />
</figure>

<ol start="2">
  <li>Alterar a página que está sendo exibida atualmente.</li>
</ol>

<figure class="images">
    <img src="../../../../assets/prints-ui/enviar-extrato-paginas.jpg" />
</figure>

## Novo Lançamento

Para acessar a área de adição de novos lançamentos, basta clicar no botão **novo lançamento**, localizado no canto superior esquedo, acima da área de aplicação de filtros.

<figure class="images">
    <img src="../../../../assets/prints-ui/contas-pagar.jpg" />
</figure>

Ao acessar a página, é possível ver uma tela similar a essa. A mesma será descrita a seguir.

<figure class="images">
    <img src="../../../../assets/prints-ui/contas-pagar-painel-novo.jpg" />
</figure>

### Inserção de dados

Para fazer um novo lançamento, você deve preencher o formulário similar a tela abaixo:

<figure class="images">
    <img src="../../../../assets/prints-ui/contas-pagar-dados-lancamento.jpg" />
</figure>

Note que o formulária está com mais campos se comparado ao da tela apresentada anteriormente. Isso é possível através da opção **mais informações**, localizada no canto inferior direito, abaixo do formulário. Ela é utilizada caso a empresa tiver **mais de uma unidade/filial** ou se quiser **informar um departamento** para esse lançamento. 

??? warning "Dados importantes para envio de lançamentos"
    * Para realizar o pagamento de forma automática pela conta digital ASTECAS, é necessário informar o código de barras ou lignha digitável quando houver.
    * Caso o pagamento seja realizado através de TED/DOC, é importante informar o fornecedor.

A seguir, serão descritos os campos necessários para o lançamento de uma nova conta a pagar:

`Código de Barras/Linha Digitável`
: Código de barras ou linha digitável da conta a pagar.

`Descrição`
: Descrição sobre a conta.

`Categoria`
: Categoria da conta. Em contas a pagar, a categoria geral será desembolso. Nessa categoria, existem subcategorias onde a conta pode ser melhor identificada.

`Fornecedor`
: Fornecedor envolvido da conta a ser paga (informação opcional).

`Data de Vencimento`
: Data de vencimento da conta.

`Valor`
: Valor pago pelo conta.

Ao clicar em **mais informações**, os campos a seguir poderão ser preenchidos:

`Unidade que gerou a despesa`
: Unidade que gerou a conta que deverá ser paga.

`Centro de Custo`
: Centro de custos relacionado a conta a ser paga.

`Departamento`
: Departamento relacionado a conta.

`Identificação`
: Número de identificação da conta.

`N. Nota Fiscal`
: Número da nota fiscal da conta.

Após finalizar a inserção de dados, basta clicar em **salvar** e o lançamento será salvo.