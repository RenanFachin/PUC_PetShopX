
// Obtendo o parâemtro da URL
const params = new URLSearchParams(window.location.search)
const productId = params.get('id')

// Objeto com os produtos presentes no sistema
const productsData = {
  'product1': {
    produto: 'Ração GranPlus Choice Gatos',
    preco: '138,90',
    precoSemDesconto: '269,90',
    avaliacoes: '120',
    status: 'Em estoque',
    imagemProduto: '../assets/images/racao1.png',
    tamanhos: '10.1kg',
    tipoRacao: 'Premium Especial',
    indicadoPara: 'Todas as Raças',
    indicadoParaPorte: 'Filhote, Adulto, Sênior',
    produtoSimilar1: '../assets/images/ração-seca-2.png',
    produtoSimilar2: '../assets/images/racao-umida-1.png',
    produtoSimilar3: '../assets/images/racao-umida-2.png',
    redirectProdutoSimilar2: 'id=product2',
    redirectProdutoSimilar3: 'id=product3',
    redirectProdutoSimilar4: 'id=product4',
  },
  'product2': {
    produto: 'Ração Golden Gatos Castrados',
    preco: '138,90',
    precoSemDesconto: '269,90',
    avaliacoes: '300',
    status: 'Em estoque',
    imagemProduto: '../assets/images/ração-seca-2.png',
    tamanhos: '10.1kg',
    tipoRacao: 'Premium Especial',
    indicadoPara: 'Todas as Raças',
    indicadoParaPorte: 'Filhote, Adulto, Sênior',
    produtoSimilar1: '../assets/images/racao1.png',
    produtoSimilar2: '../assets/images/racao-umida-1.png',
    produtoSimilar3: '../assets/images/racao-umida-2.png',
    redirectProdutoSimilar2: 'id=product1',
    redirectProdutoSimilar3: 'id=product3',
    redirectProdutoSimilar4: 'id=product4',
  },
  'product3': {
    produto: 'Ração úmida Whikas Sachê',
    preco: '4,99',
    precoSemDesconto: '2,99',
    avaliacoes: '150',
    status: 'Em estoque',
    imagemProduto: '../assets/images/racao-umida-1.png',
    tamanhos: '85g',
    tipoRacao: 'Premium Especial',
    indicadoPara: 'Todas as Raças',
    indicadoParaPorte: 'Filhote, Adulto, Sênior',
    produtoSimilar1: '../assets/images/ração-seca-2.png',
    produtoSimilar2: '../assets/images/racao1.png',
    produtoSimilar3: '../assets/images/racao-umida-2.png',
    redirectProdutoSimilar2: 'id=product2',
    redirectProdutoSimilar3: 'id=product1',
    redirectProdutoSimilar4: 'id=product4',
  },
  'product4': {
    produto: 'Ração úmida GranPlus',
    preco: '4,99',
    precoSemDesconto: '2,99',
    avaliacoes: '150',
    status: 'Fora de estoque',
    imagemProduto: '../assets/images/racao-umida-2.png',
    tamanhos: '85g',
    tipoRacao: 'Premium Especial',
    indicadoPara: 'Todas as Raças',
    indicadoParaPorte: 'Filhote, Adulto, Sênior',
    produtoSimilar1: '../assets/images/ração-seca-2.png',
    produtoSimilar2: '../assets/images/racao1.png',
    produtoSimilar3: '../assets/images/racao-umida-1.png',
    redirectProdutoSimilar2: 'id=product2',
    redirectProdutoSimilar3: 'id=product1',
    redirectProdutoSimilar4: 'id=product3',
  },
}

// Atualizar os elementos HTML com as informações do produto
const productContainer = document.getElementById('productContainer')
// console.log(productContainer)


let content = ''


if (productId && productsData[productId]) {
  // Atribuindo para a constante product o conteúdo os dados do objeto referente à ele
  const product = productsData[productId]


  // Caso o conteúdo da propriedade status seja 'fora de estoque' vai retornar um componete um pouco diferente
  if (product.status == 'Fora de estoque') {
    content += `
  <section class="mt-10 lg:mt-20 px-5 lg:px-0 flex flex-col lg:flex-row items-start justify-between">
  <div>
    <h1 class="text-xl lg:text-2xl font-bold leading-9">${product.produto}</h1>

    <div class="flex items-center gap-2">
      <i class='bx bxs-star lg:bx-sm text-yellow-400'></i>
      <i class='bx bxs-star lg:bx-sm text-yellow-400'></i>
      <i class='bx bxs-star lg:bx-sm text-yellow-400'></i>
      <i class='bx bxs-star lg:bx-sm text-yellow-400'></i>
      <i class='bx bx-star lg:bx-sm'></i>

      <span class="text-zinc-400 text-xs ml-6">(${product.avaliacoes})</span>
    </div>
  </div>

  <div>
    <span class="text-red-600 font-semibold text-sm lg:text-base">${product.status}</span>
  </div>
</section>

<section class="flex flex-col lg:flex-row gap-12 lg:gap-36">
  <div class="flex items-center gap-4">
    <div class="hidden md:block"> 
      <div class="flex flex-col items-center gap-5">
        <img src=${product.imagemProduto} alt="Imagem do produto"
          class="max-w-[300px] max-h-[120px] w-auto h-auto">
        <img src=${product.imagemProduto} alt="Imagem do produto"
          class="max-w-[300px] max-h-[120px] w-auto h-auto">
      </div>
    </div>

    <div class="flex flex-col items-center gap-4">
      <div class="flex items-center">
        <i class='bx bx-chevron-left bx-lg cursor-pointer'></i>
        <img src=${product.imagemProduto} alt="Imagem do produto" class="max-w-[350px] h-[320px]" />

        <i class='bx bx-chevron-right bx-lg cursor-pointer'></i>
      </div>

      <div class="flex items-center gap-5">
        <div class="rounded-full w-3 h-3 lg:w-5 lg:h-5 bg-violet-500"></div>
        <div class="rounded-full w-3 h-3 lg:w-5 lg:h-5 bg-zinc-300"></div>
        <div class="rounded-full w-3 h-3 lg:w-5 lg:h-5 bg-zinc-300"></div>
        <div class="rounded-full w-3 h-3 lg:w-5 lg:h-5 bg-zinc-300"></div>
      </div>
    </div>
  </div>

  <div class="flex flex-col flex-1">

    <!-- Preço e compra -->
    <div class="flex items-center lg:items-start justify-between flex-1 gap-3 lg:gap-0">
      <div class="flex flex-col items-start">
        <!-- preço e carrinho -->
        <span class="line-through text-zinc-400 text-sm lg:text-base">R$ ${product.precoSemDesconto}</span>
        <strong class="text-xl lg:text-3xl text-violet-500 font-bold">R$ ${product.preco}</strong>

        <p class="text-zinc-400/80 text-xs lg:text-sm">À vista no PIX com até 10 % de desconto</p>
      </div>

      <button
          class="bg-violet-500 text-white py-3 flex items-center justify-center gap-5 px-6 lg:px-16 outline-none hover:bg-violet-600 text-sm group focus-within:ring-2 focus-within:ring-violet-400 focus-within:rounded-md rounded-md p-0.5 focus-within:ring-offset-2 cursor-not-allowed disabled:bg-zinc-300"
          type="button" disabled>
          <i class='bx bx-sm bx-cart'></i>
          Comprar
        </button>
    </div>

    <!-- Tamanhos do saco de ração-->
    <div class="flex flex-col gap-4 mt-3 lg:mt-0">
      <span class="font-bold">Tamanhos: </span>

      
      <div class="flex gap-3 items-center">
        <div class="rounded-full w-12 h-12 bg-violet-400 flex items-center justify-center text-sm">
          ${product.tamanhos}</div>
      </div>
    </div>

    <!-- Produtos similares -->
    <div class="flex flex-col gap-4 mt-5">
      <span class="font-bold">Produtos similares: </span>

      <div class="flex items-center gap-5">
        <a href="./product.html?${product.redirectProdutoSimilar2}" class="bg-violet-100/20 p-2 rounded-lg shadow-md cursor-pointer">
          <img src=${product.produtoSimilar1} alt="Imagem do produto"
            class="max-w-[90px] max-h-[110px] w-auto h-auto">
        </a>

        <a href="./product.html?${product.redirectProdutoSimilar3}" class="bg-violet-100/20 p-2 rounded-lg shadow-md cursor-pointer">
          <img src=${product.produtoSimilar2} alt="Imagem do produto"
            class="max-w-[90px] max-h-[110px] w-auto h-auto">
        </a>

        <a href="./product.html?${product.redirectProdutoSimilar4}" class="bg-violet-100/20 p-2 rounded-lg shadow-md cursor-pointer">
          <img src=${product.produtoSimilar3} alt="Imagem do produto"
            class="max-w-[90px] max-h-[110px] w-auto h-auto">
        </a>
      </div>
    </div>

  </div>

</section>

<section class="mt-14 text-3xl">
  <h3>Ficha técnica: </h3>

  <div class="flex flex-col">

    <div class="p-8 lg:p-20">
      <div class="flex items-center justify-between border-b">
        <span class="text-sm text-zinc-400">Tipo de Ração</span>
        <span class="text-sm text-zinc-400">${product.tipoRacao}</span>
      </div>

      <div class="flex items-center justify-between  border-b my-6">
        <span class="text-sm text-zinc-400">Peso da Ração</span>
        <span class="text-sm text-zinc-400">${product.tamanhos}</span>
      </div>

      <div class="flex items-center justify-between border-b my-6">
        <span class="text-sm text-zinc-400">Raças de Gato</span>
        <span class="text-sm text-zinc-400">${product.indicadoPara}</span>
      </div>

      <div class="flex items-center justify-between border-b my-6">
        <span class="text-sm text-zinc-400">Idade</span>
        <span class="text-sm text-zinc-400">${product.indicadoParaPorte}</span>
      </div>
    </div>
  </div>
    </section>`
  } else {
    content += `
  <section class="mt-10 lg:mt-20 px-5 lg:px-0 flex flex-col lg:flex-row items-start justify-between">
  <div>
    <h1 class="text-xl lg:text-2xl font-bold leading-9">${product.produto}</h1>

    <div class="flex items-center gap-2">
      <i class='bx bxs-star lg:bx-sm text-yellow-400'></i>
      <i class='bx bxs-star lg:bx-sm text-yellow-400'></i>
      <i class='bx bxs-star lg:bx-sm text-yellow-400'></i>
      <i class='bx bxs-star lg:bx-sm text-yellow-400'></i>
      <i class='bx bx-star lg:bx-sm'></i>

      <span class="text-zinc-400 text-xs ml-6">(${product.avaliacoes})</span>
    </div>
  </div>

  <div>
    <span class="text-green-600 font-semibold text-sm lg:text-base">${product.status}</span>
  </div>
</section>

<section class="flex flex-col lg:flex-row gap-12 lg:gap-36">
  <div class="flex items-center gap-4">
    <div class="hidden md:block"> 
      <div class="flex flex-col items-center gap-5">
        <img src=${product.imagemProduto} alt="Imagem do produto"
          class="max-w-[300px] max-h-[120px] w-auto h-auto">
        <img src=${product.imagemProduto} alt="Imagem do produto"
          class="max-w-[300px] max-h-[120px] w-auto h-auto">
      </div>
    </div>

    <div class="flex flex-col items-center gap-4">
      <div class="flex items-center">
        <i class='bx bx-chevron-left bx-lg cursor-pointer'></i>
        <img src=${product.imagemProduto} alt="Imagem do produto" class="max-w-[350px] h-[320px]" />

        <i class='bx bx-chevron-right bx-lg cursor-pointer'></i>
      </div>

      <div class="flex items-center gap-5">
        <div class="rounded-full w-3 h-3 lg:w-5 lg:h-5 bg-violet-500"></div>
        <div class="rounded-full w-3 h-3 lg:w-5 lg:h-5 bg-zinc-300"></div>
        <div class="rounded-full w-3 h-3 lg:w-5 lg:h-5 bg-zinc-300"></div>
        <div class="rounded-full w-3 h-3 lg:w-5 lg:h-5 bg-zinc-300"></div>
      </div>
    </div>
  </div>

  <div class="flex flex-col flex-1">

    <!-- Preço e compra -->
    <div class="flex items-center lg:items-start justify-between flex-1 gap-3 lg:gap-0">
      <div class="flex flex-col items-start">
        <!-- preço e carrinho -->
        <span class="line-through text-zinc-400 text-sm lg:text-base">R$ ${product.precoSemDesconto}</span>
        <strong class="text-xl lg:text-3xl text-violet-500 font-bold">R$ ${product.preco}</strong>

        <p class="text-zinc-400/80 text-xs lg:text-sm">À vista no PIX com até 10 % de desconto</p>
      </div>

      <button 
        class="bg-violet-500 text-white py-3 flex items-center justify-center gap-5 px-6 lg:px-16 outline-none hover:bg-violet-600 text-sm group focus-within:ring-2 focus-within:ring-violet-400 focus-within:rounded-md rounded-md p-0.5 focus-within:ring-offset-2 buy-button"
        type="button" data-product="${productId}">
        <i class='bx bx-sm bx-cart'></i>
        Comprar
      </button>
    </div>

    <!-- Tamanhos do saco de ração-->
    <div class="flex flex-col gap-4 mt-3 lg:mt-0">
      <span class="font-bold">Tamanhos: </span>

      
      <div class="flex gap-3 items-center">
        <div class="rounded-full w-12 h-12 bg-violet-400 flex items-center justify-center text-sm">
          ${product.tamanhos}</div>
      </div>
    </div>

    <!-- Produtos similares -->
    <div class="flex flex-col gap-4 mt-5">
      <span class="font-bold">Produtos similares: </span>

      <div class="flex items-center gap-5">
        <a href="./product.html?${product.redirectProdutoSimilar2}" class="bg-violet-100/20 p-2 rounded-lg shadow-md cursor-pointer">
          <img src=${product.produtoSimilar1} alt="Imagem do produto"
            class="max-w-[90px] max-h-[110px] w-auto h-auto">
        </a>

        <a href="./product.html?${product.redirectProdutoSimilar3}" class="bg-violet-100/20 p-2 rounded-lg shadow-md cursor-pointer">
          <img src=${product.produtoSimilar2} alt="Imagem do produto"
            class="max-w-[90px] max-h-[110px] w-auto h-auto">
        </a>

        <a href="./product.html?${product.redirectProdutoSimilar4}" class="bg-violet-100/20 p-2 rounded-lg shadow-md cursor-pointer">
          <img src=${product.produtoSimilar3} alt="Imagem do produto"
            class="max-w-[90px] max-h-[110px] w-auto h-auto">
        </a>
      </div>
    </div>

  </div>

</section>

<section class="mt-14 text-3xl">
  <h3>Ficha técnica: </h3>

  <div class="flex flex-col">

    <div class="p-8 lg:p-20">
      <div class="flex items-center justify-between border-b">
        <span class="text-sm text-zinc-400">Tipo de Ração</span>
        <span class="text-sm text-zinc-400">${product.tipoRacao}</span>
      </div>

      <div class="flex items-center justify-between  border-b my-6">
        <span class="text-sm text-zinc-400">Peso da Ração</span>
        <span class="text-sm text-zinc-400">${product.tamanhos}</span>
      </div>

      <div class="flex items-center justify-between border-b my-6">
        <span class="text-sm text-zinc-400">Raças de Gato</span>
        <span class="text-sm text-zinc-400">${product.indicadoPara}</span>
      </div>

      <div class="flex items-center justify-between border-b my-6">
        <span class="text-sm text-zinc-400">Idade</span>
        <span class="text-sm text-zinc-400">${product.indicadoParaPorte}</span>
      </div>
    </div>
  </div>
    </section>`
  }

  // Juntando ao html o conteúdo anexado na validação
  productContainer.innerHTML = content
} else {

  // Caso o produto não exista no objeto de produtos mostrar uma msg de não encontrado
  productContainer.innerHTML = `
    <h2 class='w-full h-screen flex items-center justify-center font-bold'>Produto não encontrado</h2>
  `
}

console.log(productsData)