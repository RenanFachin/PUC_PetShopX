const animalCards = document.querySelectorAll('.animal-card')

animalCards.forEach(card => {
  card.addEventListener('click', () => {

    animalCards.forEach(card => {
      card.classList.remove('active')
    })


    card.classList.add('active')
  })
})


// Toggle de seleção do vo pet

// Armazenando na constante addButton o elemento de id addButton da página e o formContainer também
const addButton = document.getElementById('addButton')
const formContainer = document.getElementById('formContainer')

// Capturando os elementos com os IDs desejados e adicionando uma observação com o evento de clique
document.getElementById('dogButton').addEventListener('click', toggleAddButton)
document.getElementById('catButton').addEventListener('click', toggleAddButton)

function toggleAddButton() {
  // Função de toggle, ou seja, se active fazer virar disabled, e o contrário também
  if (dogButton.classList.contains('active') || catButton.classList.contains('active')) {
    addButton.removeAttribute('disabled')

    // formContainer.style.display = 'block'
    formContainer.classList.remove('hidden')

    setTimeout(() => {
      formContainer.classList.remove('opacity-0')
    }, 10)

  }
}