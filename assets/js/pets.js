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


// Criando função para criar um toast de notificação para o usuário após o submit do formulário
function showToast() {

  // Criando uma forma de randomizar a aparência para melhor visualização dos estados da aplicação - Erro ou pet cadastrad com sucesso

  // Gerando um número aleatório
  const randomNumber = Math.random()

  // Após o sorteio da constante randomNumber, fazendo um ternário para definir qual função será chamada
  // desta forma estou simulando que 65% das vezes aparecerá acerto e 35% aparecerá erro
  randomNumber < 0.65 ? showSuccessToastAlert() : showErrorAlertToast()

  function showSuccessToastAlert() {
    Toastify({
      text: "Pet adicionado com sucesso!",
      duration: 2000,
      gravity: "bottom",
      position: "right",
      stopOnFocus: true,
      close: true,
      offset: {
        x: 50,
        y: 10
      },
      style: {
        background: "linear-gradient(to right, #6633cc, #a64dff)"
      },
    }).showToast();
  }

  function showErrorAlertToast() {
    Toastify({
      text: "Ops! Algo de errado aconteceu ao cadastrar o seu pet",
      duration: 2000,
      gravity: "bottom",
      position: "right",
      stopOnFocus: true,
      close: true,
      offset: {
        x: 50,
        y: 10
      },
      style: {
        background: "linear-gradient(to right,  #b30000, #ff4d4d)"
      },
    }).showToast();
  }

}