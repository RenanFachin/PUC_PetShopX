import { SuccessToastAlert } from "./utils/toast/successToastAlert.js"
import { ErrorToastAlert } from "./utils/toast/errorToastAlert.js"
import { validaUsername, passwordSecurity } from "./utils/inputPattern/validationInputs.js"

const userDataArray = []

let checkBox1, checkBox2;

const form = document.getElementById('formRegistration')

form.addEventListener('submit', (event) => {
  // Fazendo o formulário não ter o comportamento padrão, que é de enviar
  event.preventDefault()

  const isUsernameValid = validaUsername();
  const isPasswordSecure = passwordSecurity();

  // Testando o que foi informado pelo usuário a partir de REGEX para criar um pattern
  if (!isUsernameValid || !isPasswordSecure) {
    return
  }

  // desabilitando o botão após o submit. Motivo: Usuários clicar várias vezes e fazer múltiplas chamadas
  disablingSubmitButton()

  // Simulando um tempo de conexão com o database
  setTimeout(function () {
    // Armazena em userData o retorno da função
    const userData = checkInputValues()

    if (userData) {
      // Adicionado ao array de usuários (simulando um db)
      userDataArray.push(userData);

      // Mensagem de sucesso
      new SuccessToastAlert("Usuário cadastrado com sucesso!").showToast()

      // se estiver tudo certo, mostrar o toast e resetar o formulário
      cleanInput()

      // Habilitando o botão novamente
      enablingSubmitButton()
    }
  }, 4000);
})

function checkInputValues() {
  const username = document.getElementById('username').value
  const cpf = document.getElementById('cpf').value
  const email = document.getElementById('email').value
  const birthday = document.getElementById('birthday').value
  const phone = document.getElementById('phone').value
  const password = document.getElementById('password').value
  const confirmPassword = document.getElementById('confirmPassword').value
  checkBox1 = document.getElementById('check-box-1').checked
  checkBox2 = document.getElementById('check-box-2').checked

  if (!checkBox2) {
    enablingSubmitButton()

    return new ErrorToastAlert("É necessário estar de acordo com as políticas da empresa e de privacidade.").showToast()
  }

  const passwordSame = isPasswordMatch(password, confirmPassword)

  if (!passwordSame) {
    new ErrorToastAlert('Senha e confirmação de senha não são iguais.').showToast()
    enablingSubmitButton()
    return null;
  }

  return {
    username,
    cpf,
    email,
    birthday,
    phone,
    password,
    checkBox1,
    checkBox2,
    createdAt: new Date()
  };
}

function isPasswordMatch(password, confirmPassword) {
  return password === confirmPassword;
}

function cleanInput() {
  document.getElementById('username').value = ''
  document.getElementById('cpf').value = ''
  document.getElementById('email').value = ''
  document.getElementById('birthday').value = ''
  document.getElementById('phone').value = ''
  document.getElementById('password').value = ''
  document.getElementById('confirmPassword').value = ''
  document.getElementById('check-box-1').checked = false
  document.getElementById('check-box-2').checked = false
}

function enablingSubmitButton() {
  const submitButton = document.getElementById('submitButtonForm')

  submitButton.innerHTML = '<i class="bx bx-edit-alt bx-sm"></i>CONTINUAR'
  submitButton.disabled = false
}

function disablingSubmitButton() {
  const submitButton = document.getElementById('submitButtonForm')

  submitButton.disabled = true
  submitButton.innerHTML = '<i class="bx bx-loader bx-spin bx-sm"></i> Aguarde...'
}