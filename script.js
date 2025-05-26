// Espera o carregamento do DOM
document.addEventListener('DOMContentLoaded', function() {
    // Seleciona o formulário e o corpo da tabela
    const form = document.getElementById('form-curriculo');
    const tabelaBody = document.querySelector('#tabela-curriculos tbody');
  
    // Evento ao enviar o formulário
    form.addEventListener('submit', function(event) {
      event.preventDefault(); // Previne o envio tradicional
  
      // Pega os valores dos campos
      const nome = form.nome.value.trim();
      const area = form.area.value;
      const experiencia = form.experiencia.value.trim();
  
      // Validação simples
      if (!nome || !area || !experiencia) {
        alert('Por favor, preencha todos os campos!');
        return;
      }
  
      // Cria uma nova linha e células da tabela
      const novaLinha = document.createElement('tr');
  
      const tdNome = document.createElement('td');
      tdNome.textContent = nome;
  
      const tdArea = document.createElement('td');
      tdArea.textContent = area;
  
      const tdExperiencia = document.createElement('td');
      tdExperiencia.textContent = experiencia;
  
      // Adiciona as células na linha
      novaLinha.appendChild(tdNome);
      novaLinha.appendChild(tdArea);
      novaLinha.appendChild(tdExperiencia);
  
      // Adiciona a linha na tabela
      tabelaBody.appendChild(novaLinha);
  
      // Limpa o formulário
      form.reset();
    });
  });
  
