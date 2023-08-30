function validaUsername() {
  const usernameInput = document.getElementById("username")
  const usernameRegexPattern = /^([a-zA-Zà-úÀ-Ú]|\s+)+$/

  if (!usernameRegexPattern.test(usernameInput.value)) {
    usernameInput.value = ''
    usernameInput.placeholder = "Informe um nome válido"

    // Adicionando estilos ao input caso o teste da expressão regular falhe
    usernameInput.classList.add('placeholder:text-red-500')
    usernameInput.classList.add('ring')
    usernameInput.classList.add('ring-offset-1')
    usernameInput.classList.add('ring-red-200')

    // Removendo quando o usuário digitar qualquer coisa no input novamente
    usernameInput.onkeydown = function keydown_nome() {
      usernameInput.placeholder = ""
      usernameInput.classList.remove('placeholder:text-red-500')
      usernameInput.classList.remove('ring')
      usernameInput.classList.remove('ring-offset-1')
      usernameInput.classList.remove('ring-red-200')
    }

    return false
  }
  return true
}

function passwordSecurity() {
  // criando uma expressão para garantir que a senha contenha ao menos 8 caracteres, 1 letra maiúscula, 1 número e 1 simbolo
  const passwordInput = document.getElementById("password")
  const confirmPasswordInput = document.getElementById("confirmPassword")

  const passwordRegexPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#])[0-9a-zA-Z$*&@#]{8,}$/

  if (!passwordRegexPattern.test(passwordInput.value)) {
    passwordInput.value = ''
    passwordInput.placeholder = "Senha fraca"

    // Adicionando estilos ao input caso o teste da expressão regular falhe
    passwordInput.classList.add('placeholder:text-red-500')
    passwordInput.classList.add('ring')
    passwordInput.classList.add('ring-offset-1')
    passwordInput.classList.add('ring-red-200')

    confirmPasswordInput.classList.add('ring')
    confirmPasswordInput.classList.add('ring-offset-1')
    confirmPasswordInput.classList.add('ring-red-200')
    

    // Removendo quando o usuário digitar qualquer coisa no input novamente
    passwordInput.onkeydown = function keydown_nome() {
      passwordInput.placeholder = ""
      passwordInput.classList.remove('placeholder:text-red-500')
      passwordInput.classList.remove('ring')
      passwordInput.classList.remove('ring-offset-1')
      passwordInput.classList.remove('ring-red-200')

      confirmPasswordInput.classList.remove('ring')
      confirmPasswordInput.classList.remove('ring-offset-1')
      confirmPasswordInput.classList.remove('ring-red-200')
    }

    return false
  }
  return true
}

export { validaUsername, passwordSecurity } 