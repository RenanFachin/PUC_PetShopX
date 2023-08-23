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

// Armazenando na cosntante addButton o elemento de id addButton da página
const addButton = document.getElementById('addButton')

// Capturando os elementos com os IDs desejados e adicionando uma observação com o evento de clique
document.getElementById('dogButton').addEventListener('click', toggleAddButton)
document.getElementById('catButton').addEventListener('click', toggleAddButton)

function toggleAddButton() {
  // Função de toggle, ou seja, se active fazer virar disabled, e o contrário também
  if (dogButton.classList.contains('active') || catButton.classList.contains('active')) {
    addButton.removeAttribute('disabled')
  
  } else {
    addButton.setAttribute('disabled', true)
  }
}