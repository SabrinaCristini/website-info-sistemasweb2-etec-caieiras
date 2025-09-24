// Atualiza ano no rodapé automaticamente (se existir)
if (document.getElementById('year')) {
  document.getElementById('year').textContent = new Date().getFullYear();
}

// CTA form alert (se existir)
if (document.getElementById('cta-form')) {
  document.getElementById('cta-form').addEventListener('submit', function(e){
    e.preventDefault();
    alert('Obrigado! Entraremos em contato.');
  });
}

// Validação e busca de endereço por CEP no login
const cepInput = document.getElementById('cep');
const enderecoInput = document.getElementById('endereco');
const cepMsg = document.getElementById('cep-msg');
if (cepInput && enderecoInput && cepMsg) {
  cepInput.addEventListener('blur', function() {
    const cep = cepInput.value.replace(/\D/g, '');
    if (cep.length !== 8) {
      cepMsg.textContent = 'CEP inválido';
      enderecoInput.value = '';
      return;
    }
    cepMsg.textContent = 'Buscando endereço...';
    fetch(`https://viacep.com.br/ws/${cep}/json/`)
      .then(res => res.json())
      .then(data => {
        if (data.erro) {
          cepMsg.textContent = 'CEP não encontrado';
          enderecoInput.value = '';
        } else {
          cepMsg.textContent = '';
          enderecoInput.value = `${data.logradouro}, ${data.bairro}, ${data.localidade} - ${data.uf}`;
        }
      })
      .catch(() => {
        cepMsg.textContent = 'Erro ao buscar CEP';
        enderecoInput.value = '';
      });
  });
}

// Alerta de login (exemplo)
const loginForm = document.getElementById('login-form');
if (loginForm) {
  loginForm.addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Login realizado com sucesso!');
  });
}