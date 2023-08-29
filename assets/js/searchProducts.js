const searchInput = document.getElementById('search')
const productItems = document.querySelectorAll('.product-item')

searchInput.addEventListener('input', function () {
  const searchTerm = searchInput.value.toLowerCase()

  productItems.forEach(item => {
    const productName = item.dataset.productName.toLowerCase()
    if (!searchTerm || productName.includes(searchTerm)) {
      item.style.display = 'block'
    } else {
      item.style.display = 'none'
    }
  })
})

// Evento de click em qualquer lugar da dom
document.addEventListener('click', function (event) {
  const isSearchInputClicked = event.target === searchInput

  if (!isSearchInputClicked) {
    productItems.forEach(item => {
      item.style.display = 'none'
    })
  }
})