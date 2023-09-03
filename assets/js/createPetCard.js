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
    <div class="hidden md:block w-full">
        <div
              class="group bg-[#9F75FF]/10 py-2 px-4 lg:py-8 lg:px-16 flex items-center rounded-lg border-2 border-violet-200 justify-between w-full animal-card cursor-pointer transition-colors duration-500 ease-out">
              <div class="flex items-center gap-10">
                <div class="flex flex-col items-center gap-6 text-zinc-500">
                  <img src="${pet.petImage}" alt="Imagem do pet"
                    class="w-32 h-32 rounded-full object-cover">

                  <strong
                    class="bg-violet-600 max-w-[200px] text-center text-white px-12 py-2 rounded-lg text-sm uppercase">${pet.nome}</strong>
                </div>

                <div class="hidden lg:block">
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
            </div>
      </div>
            
            <div id="accordionExample" class="block md:hidden w-full">
          <div class="rounded-t-lg border border-neutral-200 w-full bg-white">
            <h2 class="mb-0" id="${pet.nome}">
              <button
                class="bg-violet-600/10 group relative flex w-full justify-between items-center rounded-t-[15px] border-0  px-5 py-4 text-left text-base text-neutral-800 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none dark:text-white [&:not([data-te-collapse-collapsed])]:bg-white [&:not([data-te-collapse-collapsed])]:text-primary [&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(229,231,235)]"
                type="button" data-te-collapse-init data-te-target="#collapseOne" aria-expanded="true"
                aria-controls="collapseOne">
                <div class="flex items-center justify-between gap-10 w-full">
                  <div class="flex items-center gap-8 text-zinc-500">
                    <img src="${pet.petImage}" alt="Imagem do pet" class="w-20 h-20 object-cover rounded-full">

                    <strong
                      class="bg-violet-600 min-w-[180px] text-center text-white px-12 py-2 rounded-lg text-xs uppercase">${pet.nome}</strong>
                  </div>
                  <span
                    class="ml-auto h-5 w-5 shrink-0 rotate-[-180deg] fill-[#336dec] transition-transform duration-200 ease-in-out group-[[data-te-collapse-collapsed]]:rotate-0 group-[[data-te-collapse-collapsed]]:fill-[#212529] motion-reduce:transition-none dark:fill-blue-300 dark:group-[[data-te-collapse-collapsed]]:fill-white">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                      stroke="currentColor" class="h-6 w-6">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                    </svg>
                  </span>
              </button>
            </h2>
            <div id="collapseOne" class="!visible" data-te-collapse-item data-te-collapse-show
              aria-labelledby="${pet.nome}" data-te-parent="#accordionExample">

              <div class="px-5 py-4">
                <div class="flex flex-col items-start gap-2">
                  <p class="text-zinc-400">Raça: <span class="text-zinc-500/70 font-bold">${pet.raça}</span></p>
                  <p class="text-zinc-400">Data de nascimento: <span
                      class="text-zinc-500/70 font-bold">${pet.dataDeNascimento}</span>
                  </p>
                  <p class="text-zinc-400">Apelidos: <span class="text-zinc-500/70 font-bold">${pet.apelidos}</span></p>
                  <p class="text-zinc-400">Porte: <span class="text-zinc-500/70 font-bold">${pet.porte}</span></p>
                  <p class="text-zinc-400">Última consulta: <span
                      class="text-zinc-500/70 font-bold">${pet.ultimaConsulta}</span>
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
            </div>


          </div>
        </div>
            
            `
  })

  container.innerHTML = content
}

// Chamando a função ao iniciar a página
renderizarPetCard()