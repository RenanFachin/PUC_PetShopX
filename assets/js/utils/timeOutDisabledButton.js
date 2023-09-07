const editDataProfile = document.getElementById('addNewData')

function submitButtonDisabled() {

  // Obtendo as caracteristicas iniciais do botão
  const originalButtonText = editDataProfile.innerHTML


  // Alterações imediatas no estado do botão
  editDataProfile.disabled = true
  editDataProfile.innerHTML = `
    <div class="flex-col gap-4 w-full flex items-center justify-center">
      <div class="w-5 h-5 border-2 text-white text-4xl animate-spin border-zinc-800 flex items-center justify-center border-t-white rounded-full">
      </div>
    </div>
  `

  setTimeout(() => {
    editDataProfile.disabled = false
    editDataProfile.innerHTML = originalButtonText
  }, 5000)
}

editDataProfile.addEventListener('click', submitButtonDisabled)
