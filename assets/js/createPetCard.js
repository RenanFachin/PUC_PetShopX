const pets = [
  {
    nome: 'Apolo',
    raça: 'SRC',
    petImage: '../../assets/images/Pet1.jpeg',
    dataDeNascimento: 'xx/xx/xxx',
    apelidos: 'Apoquico, Abolinha, Apolinho',
    porte: 'Pequeno',
    ultimaConsulta: 'xx/xx/xxx',
  },
  {
    nome: 'Tom',
    raça: 'SRC',
    dataDeNascimento: 'xx/xx/xxx',
    petImage: '../../assets/images/pet3.PNG',
    apelidos: 'Totones, Tonico, Tomzera, Tom zé',
    porte: 'Pequeno',
    ultimaConsulta: 'xx/xx/xxx',
  },
  {
    nome: 'Momoa',
    raça: 'SRC',
    dataDeNascimento: 'xx/xx/xxx',
    petImage: '../../assets/images/Pet2.jpeg',
    apelidos: 'Momoinha',
    porte: 'Pequeno',
    ultimaConsulta: 'xx/xx/xxx',
  },
]

// Capturando o container de onde vão estar os elementos HTML dos pets
const container = document.getElementById('petContainer')

function renderizarPetCard() {
  // Iniciando com uma varíavel vazia para que seja pos´sivel armazenar os dados percorridos pelo array
  let content = ''

  pets.map((pet) => {
    content += `
  <div
              class="group bg-[#9F75FF]/10 py-8 px-16 flex items-center rounded-lg border-2 border-violet-200 justify-between w-full animal-card cursor-pointer transition-colors duration-500 ease-out">
              <div class="flex items-center gap-10">
                <div class="flex flex-col items-center gap-6 text-zinc-500">
                  <img src="${pet.petImage}" alt="Imagem do pet"
                    class="w-32 h-32 rounded-full object-cover">

                  <strong
                    class="bg-violet-600 max-w-[200px] text-center text-white px-12 py-2 rounded-lg text-sm">${pet.nome}</strong>
                </div>

                <div class="flex flex-col items-start gap-2">
                  <p class="text-zinc-400">Raça: <span class="text-zinc-500/70 font-bold">${pet.raça}</span></p>
                  <p class="text-zinc-400">Data de nascimento: <span
                      class="text-zinc-500/70 font-bold">${pet.dataDeNascimento}</span>
                  </p>
                  <p class="text-zinc-400">Apelidos: <span class="text-zinc-500/70 font-bold">${pet.apelidos}</span></p>
                  <p class="text-zinc-400">Porte: <span class="text-zinc-500/70 font-bold">${pet.porte}</span></p>
                  <p class="text-zinc-400">Última consulta: <span class="text-zinc-500/70 font-bold">${pet.ultimaConsulta}</span>
                  </p>
                </div>
              </div>

              <div class="flex flex-col gap-2">
                <button
                  class="bg-violet-500 text-white py-3 flex items-center justify-center gap-5 px-8 outline-none hover:bg-violet-600 text-sm group focus-within:ring-2 focus-within:ring-violet-400 focus-within:rounded-md rounded-md p-0.5 focus-within:ring-offset-2"
                  type="button">
                  Marcar Banho
                </button>

                <button
                  class="bg-violet-500 text-white py-3 flex items-center justify-center gap-5 px-8 outline-none hover:bg-violet-600 text-sm group focus-within:ring-2 focus-within:ring-violet-400 focus-within:rounded-md rounded-md p-0.5 focus-within:ring-offset-2"
                  type="button">
                  Marcar Tosa
                </button>

                <button
                  class="bg-violet-500 text-white py-3 flex items-center justify-center gap-5 px-8 outline-none hover:bg-violet-600 text-sm group focus-within:ring-2 focus-within:ring-violet-400 focus-within:rounded-md rounded-md p-0.5 focus-within:ring-offset-2"
                  type="button">
                  Marcar Consulta
                </button>

                <button
                  class="bg-violet-500 text-white py-3 flex items-center justify-center gap-5 px-8 outline-none hover:bg-violet-600 text-sm group focus-within:ring-2 focus-within:ring-violet-400 focus-within:rounded-md rounded-md p-0.5 focus-within:ring-offset-2"
                  type="button">
                  Modificar dados
                </button>
              </div>
            </div>`
  })

  container.innerHTML = content
}

renderizarPetCard()