const editDataProfile = document.getElementById('addNewData')

function submitButtonDisabled() {

  // Obtendo as caracteristicas iniciais do botão
  const originalButtonText = editDataProfile.innerHTML

  // Alterações imediatas no estado do botão
  editDataProfile.disabled = true
  editDataProfile.innerHTML = 'Editando...'

  setTimeout(() => {
    editDataProfile.disabled = false
    editDataProfile.innerHTML = originalButtonText
  }, 5000)
}

editDataProfile.addEventListener('click', submitButtonDisabled)
