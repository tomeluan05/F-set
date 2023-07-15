// muda a cor do menu quando rola a página
const desiredElement = document.querySelector('.navbar') // elemento alvo
const pixelsAmount = '75'; // Quantidade de pixels a contar do TOP até definir a cor

window.addEventListener('scroll', function() {
    if (window.scrollY > pixelsAmount) {
    	desiredElement.classList.add('onTop'); // adiciona classe "changeColor"
    } else {
      desiredElement.classList.remove('onTop'); // remove classe "changeColor"
    }
});

//Função para recolher o menu hamburguer ao clicar em um item
document.addEventListener("DOMContentLoaded", function () {
  let links = document.querySelectorAll(".nav-item");
  for (let i = 0; i < links.length; i++) {
      links[i].onclick = function () {
          document.querySelector("button.navbar-toggler").click();
      }
  }
});

// Fazendo a imagem desaparecer
window.addEventListener('load', ()=>{
  setTimeout(() => {
    let image = document.querySelector('#logo_main')
    image.style.opacity = '0'
  }, 1000);
})

// Fazendo a imagem aparecer
window.addEventListener('load', ()=>{
  setTimeout(() => {
    let image = document.querySelector('#logo_menu')
    image.style.opacity = '1'
  }, 1500);
})


// Aparecer o texto
window.addEventListener('load', function() {
  setTimeout(function() {
    let meuTexto = document.getElementById('meuTexto');
    meuTexto.style.opacity = 1;
    meuTexto.style.transform = 'translateY(0)';
    let imagem = document.querySelector('#logo_main')
    imagem.style.display = 'none'
  }, 2500);
});

// Carregar o vídeo
// window.addEventListener('load', function() {
  setTimeout(function() {
    var video = document.getElementById('my-video');
    video.play();
    if(window.innerWidth <= 768){
      video.setAttribute('poster', '/assets/media/teste2.gif')
    }
    document.body.classList.add('video-loaded');
  }, 3000);
// });

// Fazer o efeito suave ao navegar dentro da página através dos menus

const menuItems = document.querySelectorAll('.efeito_suave');
console.log(menuItems)

menuItems.forEach(item => {
  item.addEventListener('click', scrollToIdOnClick);
})

function getScrollTopByHref(element) {
  const id = element.getAttribute('href');
  return document.querySelector(id).offsetTop;
}

function scrollToIdOnClick(event) {
  event.preventDefault();
  const to = getScrollTopByHref(event.target) - 80;
  scrollToPosition(to);
}

function scrollToPosition(to) {
  smoothScrollTo(0, to);
}

/**
 * Smooth scroll animation
 * @param {int} endX: destination x coordinate
 * @param {int} endY: destination y coordinate
 * @param {int} duration: animation duration in ms
 */
function smoothScrollTo(endX, endY, duration) {
  const startX = window.scrollX || window.pageXOffset;
  const startY = window.scrollY || window.pageYOffset;
  const distanceX = endX - startX;
  const distanceY = endY - startY;
  const startTime = new Date().getTime();

  duration = typeof duration !== 'undefined' ? duration : 400;

  // Easing function
  const easeInOutQuart = (time, from, distance, duration) => {
    if ((time /= duration / 2) < 1) return distance / 2 * time * time * time * time + from;
    return -distance / 2 * ((time -= 2) * time * time * time - 2) + from;
  };

  const timer = setInterval(() => {
    const time = new Date().getTime() - startTime;
    const newX = easeInOutQuart(time, startX, distanceX, duration);
    const newY = easeInOutQuart(time, startY, distanceY, duration);
    if (time >= duration) {
      clearInterval(timer);
    }
    window.scroll(newX, newY);
  }, 1000 / 60); // 60 fps
};