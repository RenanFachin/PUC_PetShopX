function increaseCount(button) {
  // Selecionando o elemento que contenha a classe count
  const countElement = button.parentElement.querySelector('.count')

  // Convertendo o que está lá para um número inteiro para que depois seja possível somar sem que haja uma concatenação
  let count = parseInt(countElement.textContent)
  count = count + 1

  // Montando o elemento html na tela
  countElement.textContent = count

  hideAlert()
}

function decreaseCount(button) {
  const countElement = button.parentElement.querySelector('.count')
  let count = parseInt(countElement.textContent)
  
  if (count > 1) {
    count = count -1
    countElement.textContent = count
    hideAlert() 
  } else {
    showAlert() 
  }
}


function showAlert() {
  const alertMessage = document.querySelector('.alert-message')
  alertMessage.classList.remove('hidden')
  alertMessage.style.opacity = 1
}

function hideAlert() {
  const alertMessage = document.querySelector('.alert-message')
  alertMessage.classList.add('hidden')
  alertMessage.style.opacity = 0
}