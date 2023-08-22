// Variáveis de controle
let totalCartItens = []

let totalProduct1 = 0 // Ração GranPlus Choice Gatos
let totalProduct2 = 0 // Ração Golden Gatos Castrados
let totalProduct3 = 0 // Ração úmida Whikas Sachê
let totalProduct4 = 0 // Ração úmida GrabPlus

function addItemToCart(product) {
  // Atualizando o total de itens no carrinho
  totalCartItens.push(product)

  // Fazendo a conferência sobre qual produto foi clicado
  if (product === 'product1') {
    totalProduct1++
    updateBuyButton('buyButtonProduct1', totalProduct1)
  } else if (product === 'product2') {
    totalProduct2++
    updateBuyButton('buyButtonProduct2', totalProduct2)
  }

  // Fazendo o update do botão
  updateCartButton()

  console.log(totalCartItens)
}

function updateBuyButton(buttonId, total) {
  let buyButton = document.getElementById(buttonId)

  // Atualizando na página o valor do item no botão do card
  buyButton.innerHTML = `
  <i class='bx bx-sm bx-cart'></i>
  Comprar (${total})
  `
}

function updateCartButton() {
  let cartButton = document.getElementById('cartButton')

  // Atualizando na página o valor total de itens no carrinho
  cartButton.innerHTML = `
  <i class='bx bx-sm bx-cart'></i>
  Meus pedidos (${totalCartItens.length})
  `
}


// Trigger de "chamada" para o evento de clique em determinado botão
let buyButtons = document.querySelectorAll('.buy-button')

// Adicionando para cada botão que tenha a classe .buy-button um evento de listerner de click
buyButtons.forEach(function (button) {
  button.addEventListener('click', function () {
    // Capturando o valor do data-product
    let productId = button.getAttribute('data-product')
    addItemToCart(productId)
  })
})

