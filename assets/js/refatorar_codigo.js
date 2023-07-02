let dados_modal = [
    {id: 'modalPrincipal1', caminho_imagem: './assets/images/imagens_carousel/volks_banner.jpeg'},
    {id: 'modalPrincipal2', caminho_imagem: './assets/images/imagens_carousel/uptaste_banner.jpeg'},
    {id: 'modalPrincipal3', caminho_imagem: './assets/images/imagens_carousel/tektrade_banner.jpeg'},
    {id: 'modalPrincipal4', caminho_imagem: './assets/images/imagens_carousel/ge_banner.jpeg'},
    {id: 'modalPrincipal5', caminho_imagem: './assets/images/imagens_carousel/intermarine_banner.jpeg'},
    {id: 'modalPrincipal6', caminho_imagem: './assets/images//imagens_carousel/adeste_banner.jpeg'},
    {id: 'modalPrincipal7', caminho_imagem: './assets/images/imagens_carousel/nortel_banner.jpeg'},
    {id: 'modalPrincipal8', caminho_imagem: './assets/images/imagens_carousel/blink_banner.jpeg'},
    {id: 'modalPrincipal9', caminho_imagem: './assets/images/imagens_carousel/anna_banner.jpeg'},
    {id: 'modalPrincipal10', caminho_imagem: './assets/images/imagens_carousel/feira_banner.png'},
    {id: 'modalPrincipal11', caminho_imagem: './assets/images/imagens_carousel/kanechom_banner.png'},
    {id: 'modalPrincipal12', caminho_imagem: './assets/images/imagens_carousel/feira_banner.png'},
]

// Criando o modal desktop

let modal_desktop = document.querySelector('.modal_desktop')

dados_modal.forEach((elemento)=>{
    modal_desktop.innerHTML += `
    <div class="modal fade" id="${elemento.id}" tabindex="-2" aria-labelledby="modalPrincipalLabel"
    aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered d-flex justify-content-center">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="modalPrincipalLabel"></h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Fechar"></button>
        </div>
        <div class="modal-body">
          <img src="${elemento.caminho_imagem}" width="100%" alt="Imagem Principal">
        </div>
      </div>
    </div>
  </div>
    `
})