// Atualiza ano no rodapé automaticamente
document.getElementById('year').textContent = new Date().getFullYear();

// CTA form alert
document.getElementById('cta-form').addEventListener('submit', function(e){
  e.preventDefault();
  alert('Obrigado! Entraremos em contato.');
});