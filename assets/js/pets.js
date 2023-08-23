const animalCards = document.querySelectorAll('.animal-card')

  animalCards.forEach(card => {
    card.addEventListener('click', () => {

      animalCards.forEach(card => {
        card.classList.remove('active')
      })


      card.classList.add('active')
    });
  });