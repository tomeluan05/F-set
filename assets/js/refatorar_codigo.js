// Dados do modal desktop
let dados_modal_desktop = [
    {id: 'modalPrincipal1', titulo: 'Uptaste', caminho_imagem: './assets/images/imagens_carousel/uptaste_banner.jpeg'},
    {id: 'modalPrincipal2', titulo: 'Adeste', caminho_imagem: './assets/images/imagens_carousel/adeste_banner.jpeg'},
    {id: 'modalPrincipal3', titulo: 'Anna Pegova', caminho_imagem: './assets/images/imagens_carousel/anna_banner.jpeg'},
    {id: 'modalPrincipal4', titulo: 'Nortel', caminho_imagem: './assets/images/imagens_carousel/nortel_banner.jpeg'},
    {id: 'modalPrincipal5', titulo: 'Intermarine', caminho_imagem: './assets/images/imagens_carousel/intermarine_banner.jpeg'},
    {id: 'modalPrincipal6', titulo: 'Blink', caminho_imagem: './assets/images//imagens_carousel/blink_banner.jpeg'},
    {id: 'modalPrincipal7', titulo: 'Ge', caminho_imagem: './assets/images/imagens_carousel/ge_banner.jpeg'},
    {id: 'modalPrincipal8', titulo: 'Volkswagem SUV', caminho_imagem: './assets/images/imagens_carousel/suv_banner.png'},
    {id: 'modalPrincipal9', titulo: 'Volkswagem Salão', caminho_imagem: './assets/images/imagens_carousel/salao_banner.jpeg'},
    {id: 'modalPrincipal10', titulo: 'Volkswagem Híbrido', caminho_imagem: './assets/images/imagens_carousel/volks_banner.jpeg'},
    {id: 'modalPrincipal11', titulo: 'Volkswagem Delivery', caminho_imagem: './assets/images/imagens_carousel/caminhao_azul_banner.jpg'},
    {id: 'modalPrincipal12', titulo: 'Volkswagem Caminhões e Ônibus', caminho_imagem: './assets/images/imagens_carousel/feira_banner.png'},
]

// Criando o modal desktop
let modal_desktop = document.querySelector('.modal_desktop')

dados_modal_desktop.forEach((elemento)=>{
    modal_desktop.innerHTML += `
    <div class="modal fade" id="${elemento.id}" tabindex="-2" aria-labelledby="modalPrincipalLabel"
    aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered d-flex justify-content-center">
      <div class="modal-content">
        <div class="modal-header">
          <h3 class="modal-title" id="modalPrincipalLabel">${elemento.titulo}</h3>
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
