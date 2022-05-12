const btnMobile = document.getElementById('btn-mobile');

function toggleMenu(event) {
  if (event.type === 'touchstart') event.preventDefault();
  const nav = document.getElementById('nav');
  nav.classList.toggle('active');
  const active = nav.classList.contains('active');
  event.currentTarget.setAttribute('aria-expanded', active);
  if (active) {
    event.currentTarget.setAttribute('aria-label', 'Fechar Menu');
  } else {
    event.currentTarget.setAttribute('aria-label', 'Abrir Menu');
  }
}

btnMobile.addEventListener('click', toggleMenu);
btnMobile.addEventListener('touchstart', toggleMenu);

function leiaMais() {
  var pontos = document.querySelector('.pontos');
  var maisTexto = document.querySelector('.mais');
  var btnLeiaMais = document.querySelector('.btnLeiaMais');
  
  if(pontos.style.display === "none") {
    pontos.style.display = "inline";
    maisTexto.style.display = "none";
    btnLeiaMais.innerHTML = "Leia Mais"
  } else {
    pontos.style.display = "none";
    maisTexto.style.display = "inline";
    btnLeiaMais.innerHTML = "Leia Menos";
  }
}

function leiaMais2() {
  var pontos2 = document.querySelector('.pontos2');
  var maisTexto2 = document.querySelector('.mais2');
  var btnLeiaMais2 = document.querySelector('.btnLeiaMais2');
  
  if(pontos2.style.display === "none") {
    pontos2.style.display = "inline";
    maisTexto2.style.display = "none";
    btnLeiaMais2.innerHTML = "Leia Mais"
  } else {
    pontos2.style.display = "none";
    maisTexto2.style.display = "inline";
    btnLeiaMais2.innerHTML = "Leia Menos";
  }
}