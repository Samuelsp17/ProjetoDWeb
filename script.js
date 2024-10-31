function navigateTo(page) {
    window.location.href = page;
}
document.querySelector('.header-banner').onclick = function() {
    window.location.href = 'index.html';
};

const Myobserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
      } else {
        entry.target.classList.remove('show');
      }
    });
  });
  
  // Corrigindo o seletor para '.hidden' e chamando observe ao invés de observer
  const elements = document.querySelectorAll('.hidden');
  elements.forEach((element) => Myobserver.observe(element));
  