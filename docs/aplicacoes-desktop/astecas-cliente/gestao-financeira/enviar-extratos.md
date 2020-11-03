# Enviar Extratos

## Visão Geral

Ao entrar na opção de envio de extratos a **visão geral** é similar a da imagem abaixo. Nos próximos tópicos, serão descrevidas as opções possíveis nessa área do sistema.

<figure class="images">
    <img src="../../../../assets/prints-ui/enviar-extrato-painel.jpg" />
</figure>

## Filtro

Nesta opção, é possível **filtrar os dados** que serão exibidos na tabela.

<figure class="images">
    <img src="../../../../assets/prints-ui/enviar-extrato-filtro.jpg" />
</figure>
 
A filtragem pode ser realizada através das seguintes opções:

`Entre data`
: Seleciona um período de tempo cujo dados serão exibidos. Por exemplo, é possível exibir os últimos 7 dias, o mês atual, etc.

`Usuário`
: Filtra pelos usuários do sistemas que estão ligados a empresa em questão.

`Conta`
: Seleciona através do número da conta bancária (o mesmo exibido na tabela).

`Situação`
: Exibe os extratos que estão pendentes ou analisados.

## Tabela de dados

Na tabela são exibidos os **dados referentes aos extratos enviados**.

<figure class="images">
    <img src="../../../../assets/prints-ui/enviar-extrato-tabela.jpg" />
</figure>

Os dados exibidos são:

`Banco` 
: Referente ao banco que corresponde esse extrato.

`Agência` 
: Referente a agência bancária.

`N. Conta`
: Número da respectiva conta bancária.

`Enviado Por`
: Usuário que realizou o envio do extrato.

`Enviado Em`
: Data de envio do extrato.

`Situação`
: Situação atual do documento, podendo ser: pendente, em análise ou analisado.

`Visualizar`
: Opção que disponibiliza a visualização do documento enviado. Ao estar nessa tela, é possível ver o extrato enviado, os dados bancários a qual o documento se refere e uma tabela que lista todos os itens do extrato. Caso o extrato ainda esteja em análise, é possível alterar os dados bancários referentes ao mesmo, bem como apagar o extrato.

<figure class="images">
    <img src="../../../../assets/prints-ui/enviar-extrato-visualizar.jpg" />
</figure>

### Opções de exibição

A **tabela de exibição dos dados** referentes aos extratos possui duas opções:

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

## Enviar Extratos

Para acessar a área de envio de extrato, basta clicar no botão **enviar extrato**, localizado no canto superior esquedo, acima da área de aplicação de filtros.

<figure class="images">
    <img src="../../../../assets/prints-ui/enviar-extrato.jpg" />
</figure>

Ao acessar a página, é possível ver uma tela similar a essa. A mesma será descrita a seguir.

<figure class="images">
    <img src="../../../../assets/prints-ui/enviar-extrato-painel-envio.jpg" />
</figure>

### Opções de envio

O **envio de extrato** possui 3 opções:

<figure class="images">
    <img src="../../../../assets/prints-ui/enviar-extrato-opcoes-envio.jpg" />
</figure>

* **Adicionar extratos PDF**: Permite que o usuário selecione um arquivo (nesse caso, um extrato) e realize o envio para o sistema.
* **Enviar todos**: Após enviar os arquivos desejados, o usuário pode realizar o envio dos mesmos de forma generalizada. Isso significa que todos os arquivos que foram adicionados serão enviados.
* **Cancelar envio**: Caso deseje, o usuário pode cancelar o envio de todos os documentos que foram adicionados.

??? warning "Possibilidades de envio"
    Para envio de extratos, é necessário que os mesmos estejam em formato **PDF** e possuam **até 1mb**.

### Visualizando extratos adicionados

Após adicionar um extrato, o usuário pode visualizá-lo na tabela disponibilizada:

<figure class="images">
    <img src="../../../../assets/prints-ui/enviar-extrato-adicionar.jpg" />
</figure>

É importante notar que o documento, nesse momento, apenas foi **adicionado**. Caso o usuário deseje **enviá-lo**, o mesmo pode utilizar a opção **enviar todos**, ou, caso queira enviar individualmente, pode realizar isso na opção **enviar**. Esta mesma regra é válida para cancelamento de envio.

Após enviar, o extrato será exibido dessa forma:

<figure class="images">
    <img src="../../../../assets/prints-ui/enviar-extrato-nao-identificado.jpg" />
</figure>

Note que o extrato foi enviado, porém, os dados bancários referentes ao mesmo não foram identificados. Para realizar esse processo, basta clicar em **visualizar**. Caso deseje, o usuário pode apagar o extrato também.

Ao clicar para visualizar o extrato, a seguinte tela será exibida:

<figure class="images">
    <img src="../../../../assets/prints-ui/enviar-extrato-selecionar-banco.jpg" />
</figure>

A partir dessa tela, será possível selecionar os dados bancários que se referem aquele extrato em específico. 

O usuário, nessa tela, também pode anexar o OFX do arquivo, caso desejar, no botão correspondente, como na imagem a seguir:

<figure class="images">
    <img src="../../../../assets/prints-ui/enviar-extrato-ofx.jpg" />
</figure>