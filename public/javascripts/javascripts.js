function showDeleteAlert(id) {
  // Localiza o espaço para o alerta dentro do acordeão específico
  const alertPlaceholder = document.getElementById(`alertPlaceholder${id}`);
  
  // Garante que o conteúdo seja atualizado com o alerta
  const alertHTML = `
    <div class="alert alert-danger alert-dismissible fade show" role="alert">
      <strong>Confirmação:</strong> Você tem certeza que deseja excluir esta receita?
      <button type="button" class="btn btn-danger" onclick="deleteReceita('${id}')">Sim, excluir</button>
      <button type="button" class="btn btn-secondary" data-bs-dismiss="alert">Cancelar</button>
    </div>
  `;
  
  // Insere o alerta no local correto
  alertPlaceholder.innerHTML = alertHTML;
}

function deleteReceita(id) {
  // Redireciona ou faz uma requisição para deletar a receita
  window.location.href = `/receitas/deletarReceita/${id}`;
}
