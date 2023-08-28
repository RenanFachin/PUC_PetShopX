// Simulação de um sistema de login

const users = [
  { username: "user1", password: 'password' },
  { username: "user2", password: 'password' },
]

function login(event) {
  event.preventDefault()

  const username = document.getElementById("username").value
  const password = document.getElementById("password").value


  // chamando uma função para verificar a existência deste usuário no array
  getUserInDB(username, password)
}


function getUserInDB(username, password) {
  const userExists = users.find(user => user.username === username && user.password === password)

  // console.log(userExists)

  if (userExists) {
    showSuccessToastAlert()

    setTimeout(() => {
      window.location.href = '../index.html'
    }, 600);

  } else {
    showErrorAlertToast()
  }
}

function showSuccessToastAlert() {
  Toastify({
    text: "Login efetuado com sucesso!",
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
    text: "Usuário ou senha informados são inválidos.",
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