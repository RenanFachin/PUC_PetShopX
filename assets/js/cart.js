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
  // Como os produtos com id 1e5, 2e6, 3e7 e 4e8 são mesmos (motivo: finalidade de estudo) fiz os botões usarem o valor da mesma varíavel para atualizar
  if (product === 'product1' || product === 'product5') {
    totalProduct1++
    updateBuyButton('buyButtonProduct1', totalProduct1)
    updateBuyButton('buyButtonProduct5', totalProduct1)
  } else if (product === 'product2' ||  product ==='product6') {
    totalProduct2++
    updateBuyButton('buyButtonProduct2', totalProduct2)
    updateBuyButton('buyButtonProduct6', totalProduct2)
  } else if (product === 'product3' || product === 'product7') {
    totalProduct3++
    updateBuyButton('buyButtonProduct3', totalProduct3)
    updateBuyButton('buyButtonProduct7', totalProduct3)
  } else if (product === 'product4' || product ==='product8') {
    totalProduct4++
    updateBuyButton('buyButtonProduct4', totalProduct4)
    updateBuyButton('buyButtonProduct8', totalProduct4)
  }


  // Fazendo o update do botão
  updateCartButton()

  // console.log(totalCartItens)
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

