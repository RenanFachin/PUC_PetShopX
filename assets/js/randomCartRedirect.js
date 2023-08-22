function redirectToRandomPage() {
  // Gerando um número aleatório
  const randomNumber = Math.random()

  const cartPageWithProductsAdded = '../../pages/cart.html'
  const emptyCartPage = '../../pages/emptyCart.html'

  // Utilizando operador ternário para decidir para qual página o usuário será direcionado
  // isto só está sendo criado para a entrega do projeto, em produção isto não seria necessário.
  const targetPage = randomNumber < 0.5 ? cartPageWithProductsAdded : emptyCartPage


  window.location.href = targetPage;
}