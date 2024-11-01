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

  function toggleMessage(box) {
    const message = box.querySelector(".box-message");
    const arrow = box.querySelector(".arrow");
  
    if (message.style.display === "none" || message.style.display === "") {
      message.style.display = "block";
      arrow.style.transform = "rotate(90deg)";
    } else {
      message.style.display = "none";
      arrow.style.transform = "rotate(0deg)";
    }
  }
  