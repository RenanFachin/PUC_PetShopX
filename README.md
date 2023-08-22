# Petshop X

Construção de uma aplicação web de um petshop contendo serviços de venda de produtos e de serviços para animais de pequeno e grande porte.
Esta aplicação deve ser possível realizar a busca e visualização dos produtos e serviços disponíveis cadastro de pet, cadastro de usuário e login no sistema. O sistema web deve atender os requisitos mínimos de qualidade de um sistema, atributos como usabilidade, funcionalidades, confiabilidade, eficiência e uma fácil manutenção devem estar presentes.
O projeto foi desenvolvido utilizando `HTML`, `Javascript` e `TailwindCSS`.

Existem funções criadas no projeto apenas para demonstrar todas as páginas criadas, por exemplo a função `redirectToRandomPage()` que faz um sorteio randomico para redirecionar o usuário para a página de carrinho com produto ou sem produto.
As funções presentes no arquivo `cart.js` elas fazem o incremento fícticio dos itens ao carrinho para demonstrar como seria. Para está funcionalidade ter utilidade deve ser necessário armazenar o array de produtos adicionados nos cookies ou localStorage do usuário.
A função presente no arquivo `user.js` serve para fazer a troca da imagem de perfil do usuário, utilizado apenas para demonstrar um funcionamento.


<p align="center">
  <img src="./public/previewHomePage.PNG" alt="Exemplo da Aplicação em DarkMode">
</p>


## Tabela de Conteúdos

- [Estrutura de Pasta](#estrutura-de-pastas)
- [To-Do](#to-do)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Como Usar](#como-usar)
- [Autor](#autor)

## Estrutura de Pasta
1. **./assets**: Esta pasta contém recursos necessários para o desenvolvimento da aplicação.

   - **./assets/images**: Aqui estão todas as imagens usadas no site, como fotos de produtos, ícones, logotipos etc.
   - **./assets/js**: Esta pasta armazena arquivos JavaScript.

2. **./pages**: Aqui estão as páginas HTML.

   - **./pages/cart.html**: Página do carrinho de compras, onde os produtos selecionados pelos usuários podem ser exibidos.
   - **./pages/emptyCart.html**: Página do carrinho de compras, porém quando não tiver nenhum item adicionado.
   - **./pages/product1.html**: Página do produto 1.
   - **./pages/product2.html**: Página do produto 2.
   - **./pages/product3.html**: Página do produto 3.
   - **./pages/product4.html**: Página do produto 4.
   - **./pages/myFavorites.html**: Página de produtos favoritados pelo usuário.
   - **./pages/user/profile.html**: Página contento o perfil do usuário, contento o histórico de compras dele.
   - **./pages/user/editProfile.html**: Página em que o usuário pode modificar algumas informações.
   - **./pages/user/myPets.html**: Página contento informações dos pets adicionados pelo usuário.



3. **./index.html**: Este é o arquivo principal (página inicial) do site. É a primeira página que os visitantes verão quando acessarem o site.

4. **README.md**: Este é um arquivo de markdown criado para fornecer informações sobre o projeto.

## To-do
- [x] Página Home
- [x] Página Produtos
- [x] Página Carrinho
- [x] Página Carrinho Vazio
- [x] Página Produtos favoritos
- [] Página de login

## Tecnologias Utilizadas

- **HTML**: Linguagem de marcação de hyper text
- **Tailwind CSS**: Um framework CSS utilitário que acelera o processo de estilização e torna as interfaces responsivas.
- **Box icons**: Pacote de ícones utilizado no projeto


## Como Usar

1. Clone o repositório para o seu ambiente local:

```bash
git clone https://github.com/RenanFachin/PUC_PetShopX.git
```

2. Acesse a aplicação em seu navegador a partir do arquivo index.html

## Autor
- [Renan Fachin](https://github.com/RenanFachin/)