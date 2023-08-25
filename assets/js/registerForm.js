const userDataArray = [];


function submitRegisterForm(event) {
  // Fazendo o formulário não ter o comportamento padrão, que é de enviar
  event.preventDefault()

  // desabilitando o botão após o submit. Motivo: Usuários clicar várias vezes e fazer múltiplas chamadas
  const submitButton = event.target.querySelector('button[type="submit"]')
  submitButton.disabled = true;

  submitButton.innerHTML = '<i class="bx bx-loader bx-spin"></i> Aguarde...';

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
    const checkBox1 = document.getElementById('check-box-1').checked;
    const checkBox2 = document.getElementById('check-box-2').checked;

    // Validando os campo sde entrada
    if (password != confirmPassword) {
      alert('Senha e confirmação de senha não são iguais.')
      isUserCreated = false
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
    };


    if (isUserCreated == true) {
      // Adicionado ao array de usuários (simulando um db)
      userDataArray.push(userData);

      // se estiver tudo certo, mostrar o toast e resetar o formulário
      document.getElementById('username').value = '';
      document.getElementById('cpf').value = '';
      document.getElementById('email').value = '';
      document.getElementById('birthday').value = '';
      document.getElementById('phone').value = '';
      document.getElementById('password').value = '';
      document.getElementById('confirmPassword').value = '';
      document.getElementById('check-box-1').checked = false;
      document.getElementById('check-box-2').checked = false;

      createUserSuccessToast()

      // Mostrando no console o usuário adicionado ao array
      console.log(userDataArray)
    }

    submitButton.innerHTML = '<i class="bx bx-edit-alt bx-sm"></i>CONTINUAR';
    submitButton.disabled = false;
  }, 4000);
}


function createUserSuccessToast() {
  Toastify({
    text: "Usuário cadastrado com sucesso!",
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
