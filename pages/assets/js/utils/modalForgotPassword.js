
const openButton = document.getElementById('openForgotPasswordDialog')
const dialog = document.getElementById('dialog')
const closeButton = document.getElementById('close')
const closeButtonBottom = document.getElementById('closeBottom')
const overlay = document.getElementById('overlay')

openButton.addEventListener('click', function () {
  dialog.classList.remove('hidden')
  overlay.classList.remove('hidden')
})

// hide the overlay and the dialog
closeButton.addEventListener('click', function () {
  dialog.classList.add('hidden')
  overlay.classList.add('hidden')
})

closeButtonBottom.addEventListener('click', function () {
  dialog.classList.add('hidden')
  overlay.classList.add('hidden')
})


