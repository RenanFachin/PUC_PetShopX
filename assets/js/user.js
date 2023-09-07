const profileImageInput = document.getElementById('profile-image-input')
const profileImage = document.getElementById('profile-image')

profileImageInput.addEventListener('change', function (event) {
  // Pegando ao imagem enviada na posição 0, mesmo o input não sendo do tipo multiple precisa passar a posição do array
  const selectedFile = event.target.files[0]


  // Caso exista uma imagem na posição 0 do array
  if (selectedFile) {
    profileImage.src = URL.createObjectURL(selectedFile)
  }

  // Testando se estava chegando até este ponto da função
  // console.log('trocou')
})