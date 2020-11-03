# Envio de Documentos do Sócio

## Processo de envio de documentos do sócio

<figure class="images">
    <img src="../../../assets/diagramas/envio-documentos-socio.svg" />
</figure>

* **Legenda**:

| Processo                        | Descrição                                                                                  |
| :------------------------------ | :----------------------------------------------------------------------------------------- |
| 1. Upload dos arquivos          | Sócio realiza o upload (envio) dos seus documentos.                                        |
| 2. Salva arquivos no Amazon S3  | Os documentos são salvos no repositório Amazon S3.                                         |
| 3. Atualiza sócio (tabela)      | O status do sócio na tabela de mesmo nome é atualizado para enviado (status_doc_atos = e). |
| 4. Envia documentos para o BaaS | É realizado o envio dos documentos do sócio para o BaaS.                                   |