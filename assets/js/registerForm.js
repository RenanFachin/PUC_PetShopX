import { SuccessToastAlert } from "./utils/toast/successToastAlert.js"
import { ErrorToastAlert } from "./utils/toast/errorToastAlert.js"
import { validaUsername, passwordSecurity } from "./utils/inputPattern/validationInputs.js"

const userDataArray = []

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
  disablingSubmitButton(event)

  // Variável de controle, se houver erros na validação, altero para false
  let isUserCreated = true

  // Simulando um tempo de conexão com o database
  setTimeout(function () {
    const username = document.getElementById('username').value
    const cpf = document.getElementById('cpf').value
    const email = document.getElementById('email').value
    const birthday = document.getElementById('birthday').value
    const phone = document.getElementById('phone').value
    const password = document.getElementById('password').value
    const confirmPassword = document.getElementById('confirmPassword').value
    const checkBox1 = document.getElementById('check-box-1').checked
    const checkBox2 = document.getElementById('check-box-2').checked

    // Validando que o usuário aceitou o "Li e estou de acordo com as regras do site"
    if (!checkBox2) {

      enablingSubmitButton()

      return new ErrorToastAlert("É necessário estar de acordo com as políticas da empresa e de privacidade.").showToast()
    }

    // Validando os campo sde entrada
    if (password !== confirmPassword) {
      new ErrorToastAlert('Senha e confirmação de senha não são iguais.').showToast()

      // return para garantir que a função não vá seguir
      return isUserCreated = false
    }

    // Conferindo o que está chegando neste ponto
    // console.log(`
    //   username: ${username}, 
    //   cpf: ${cpf}, 
    //   e-mail: ${email}, 
    //   data de nascimento: ${birthday},
    //   telefone: ${phone}, 
    //   senha: ${password}, 
    //   confirmação de senha: ${confirmPassword}, 
    //   check1: ${checkBox1}, 
    //   check2: ${checkBox2}
    // `)

    const userData = {
      username,
      cpf,
      email,
      birthday,
      phone,
      password,
      checkBox1,
      checkBox2,
      createdAt: new Date()
    }

    // Adicionado ao array de usuários (simulando um db)
    userDataArray.push(userData);

    new SuccessToastAlert("Usuário cadastrado com sucesso!").showToast()

    // se estiver tudo certo, mostrar o toast e resetar o formulário
    cleanInput()

    enablingSubmitButton()
  }, 4000);
})


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
  submitButton.innerHTML = '<i class="bx bx-edit-alt bx-sm"></i>CONTINUAR'
  submitButton.disabled = false
}

function disablingSubmitButton(event) {
  const submitButton = event.target.querySelector('button[type="submit"]')
  submitButton.disabled = true

  submitButton.innerHTML = '<i class="bx bx-loader bx-spin"></i> Aguarde...'
}