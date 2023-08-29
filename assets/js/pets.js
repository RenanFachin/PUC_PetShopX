import { SuccessToastAlert } from './utils/toast/successToastAlert.js'
import { ErrorToastAlert } from './utils/toast/errorToastAlert.js'

const animalCards = document.querySelectorAll('.animal-card')

animalCards.forEach(card => {
  card.addEventListener('click', () => {

    animalCards.forEach(card => {
      card.classList.remove('active')
    })


    card.classList.add('active')
  })
})

// Armazenando na constante addButton o elemento de id addButton da página e o formContainer também
const addButton = document.getElementById('addButton')
const formContainer = document.getElementById('formContainer')
const dogButton = document.getElementById('dogButton')
const catButton = document.getElementById('catButton')

// Capturando os elementos com os IDs desejados e adicionando uma observação com o evento de clique
dogButton.addEventListener('click', toggleAddButton)
catButton.addEventListener('click', toggleAddButton)

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

addButton.addEventListener('click', () => {
  // O .value faz retornar o valor que consta no campo
  const petName = document.getElementById("petName").value
  const petBirthday = document.getElementById("petBirthday").value
  const petNickname = document.getElementById("nickname").value
  const size = document.getElementById("size").value
  let type

  if (dogButton.classList.contains('active')) {
    type = 'Cachorro'
  } else {
    type = 'Gato'
  }

  // Debbuging -> vendo se estão chegando os dados dos campos de input
  console.log(petName, petNickname, petBirthday, size, type)

  // Validação dos campos required
  if (petName === "" || petNickname === "" || petBirthday === "" || size === "") {
    new ErrorToastAlert("Ops! Algo de errado aconteceu ao cadastrar o seu pet").showToast()
  } else {
    new SuccessToastAlert("Pet adicionado com sucesso!").showToast()
  }
})
