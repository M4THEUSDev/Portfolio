function scrollToAnchor(anchorId) {
  const targetElement = document.getElementById(anchorId);
  if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
  }
}



document.addEventListener("DOMContentLoaded", function() {
    var elements = document.querySelectorAll('.apresentacao , .apresentacao img');
    
    elements.forEach(function(element, index) {
        setTimeout(function() {
            element.style.opacity = '1'; // Altera a opacidade para 1, tornando o elemento visível
        }, (index + 1) * 500); // Atraso crescente para cada elemento
    });
});


function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
    );
  }

  // Função para verificar todas as seções e exibi-las se estiverem visíveis
  function checkVisibility() {
    var sections = document.querySelectorAll('.hidden');
    sections.forEach(function(section) {
      if (isElementInViewport(section)) {
        section.classList.remove('hidden');
      }
    });
  }

  // Verifique a visibilidade das seções quando a página for carregada e quando a página for rolada
  document.addEventListener('DOMContentLoaded', checkVisibility);
  window.addEventListener('scroll', checkVisibility);


  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();

      const target = document.querySelector(this.getAttribute('href'));
      const offsetTop = target.offsetTop;

      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth' // Adiciona a animação suave
      });
    });
  });

