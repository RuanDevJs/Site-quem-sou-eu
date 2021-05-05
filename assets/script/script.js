function efeitoTypeWritter() {
  const email = document.getElementById('email');

  function typeWritter(elemento) {
    const textoArray = elemento.innerHTML.split('');
    elemento.innerHTML = '';
    textoArray.filter((letra, i) => {
      setTimeout(() => elemento.innerHTML += letra, 90 * i);
    }, clearTimeout());
  }

  const titulo1 = document.querySelector('.h1');
  typeWritter(titulo1)

  function typeWritter(elemento) {
    const textoArray = elemento.innerHTML.split('');
    elemento.innerHTML = '';
    textoArray.filter((letra, i) => {
      setTimeout(() => elemento.innerHTML += letra, 90 * i);
    });
  }

  const titulo2 = document.querySelector('p');
  typeWritter(titulo2)

  function typeWritter(elemento) {
    const textoArray = elemento.innerHTML.split('');
    elemento.innerHTML = '';
    textoArray.filter((letra, i) => {
      setTimeout(() => elemento.innerHTML += letra, 90 * i);
    }, clearTimeout());
  }

  const titulo3 = document.querySelector('#sejaBemVindo');
  typeWritter(titulo3)
} efeitoTypeWritter();


function scrollSuave() {
  const links = document.querySelectorAll('.lista li a[href^="#"]');
  links.forEach((elemento) => {
    elemento.addEventListener('click', function (e) {
      e.preventDefault();
      const href = elemento.getAttribute('href');
      const scrollDistancia = document.querySelector(href).offsetTop;
      scroll({
        behavior: 'smooth',
        top: scrollDistancia
      })
    })
  });
} scrollSuave();


function animaScroll() {
  window.addEventListener('scroll', function (e) {

    //Sobre
    const sobre = document.querySelectorAll('.foto');
    sobre.forEach((elemento) => {
      const distanciaSobre = elemento.offsetTop;
      const tamanho = elemento.clientHeight * 3 / 4;

      if (window.pageYOffset > distanciaSobre - tamanho) {
        elemento.classList.remove('animate__fadeOutLeft');
        elemento.classList.add('animate__fadeInLeft');
      } else {
        elemento.classList.remove('animate__fadeInLeft');
        elemento.classList.add('animate__fadeOutLeft');
      }
    });
    //Contato
    const contato = document.querySelector('.contatonav');
    const distanciaContato = contato.offsetTop;
    const tamanho = contato.clientHeight * 4 / 4;
    if (window.pageYOffset > distanciaContato - tamanho) {
      contato.classList.remove('animate__fadeOutLeft');
      contato.classList.add('animate__fadeInLeft');
    } else {
      contato.classList.remove('animate__fadeInLeft');
      contato.classList.add('animate__fadeOutLeft');
    }

  });
} animaScroll();


function accordionList() {
  const dt = document.querySelectorAll('.js-accordion dt');

  //nextElementSibling.nextElementSibling

  dt[0].nextElementSibling.classList.add('ativo');
  dt[0].classList.add('ativo');

  function activeAccordion() {
    this.classList.toggle('ativo');
    this.nextElementSibling.classList.toggle('ativo');
    this[1].nextElementSibling.nextElementSibling.classList.toggle('ativo');
  }

  dt.forEach((elemento) => {
    elemento.addEventListener('click', activeAccordion);
  });

}
accordionList();

function modal() {
  const h3 = document.querySelector('.footerBG h3');
}


modal();