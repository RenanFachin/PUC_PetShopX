// Simulação de um sistema de login
import { ErrorToastAlert } from "./utils/toast/errorToastAlert.js";
import { SuccessToastAlert } from "./utils/toast/successToastAlert.js";
import { getUserInDB } from "./utils/getUserInDB.js";

const form = document.getElementById('login-form')
form.addEventListener('submit', (event) => {
  event.preventDefault()

  const username = document.getElementById("username").value
  const password = document.getElementById("password").value

  // Chamando a função para verificar a existência deste usuário no banco de dados
  const userExists = getUserInDB(username, password)

  if (userExists) {
    new SuccessToastAlert("Login efetuado com sucesso!").showToast()


    setTimeout(() => {
      window.location.href = '../index.html'
    }, 600);

  } else {
    new ErrorToastAlert("Usuário ou senha informados são inválidos.").showToast()
  }
})