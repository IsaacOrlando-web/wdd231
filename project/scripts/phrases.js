import { phrases } from '../data/wordsPhrases.mjs';

// Container
const phrasesContainer = document.querySelector('#sentences-Container'); // Fixed selector (added #)
//Array to hace the saved phrases
let savedPhrases = [];
const savedFromStorage = localStorage.getItem('savedPhrases');
if (savedFromStorage) {
  try {
    savedPhrases = JSON.parse(savedFromStorage);
  } catch (e) {
    savedPhrases = [];
  }
}

// Get all filter buttons
const all = document.querySelector('#all');
const social = document.querySelector('#social');
const negative = document.querySelector('#negative');
const young = document.querySelector('#young');
const money = document.querySelector('#money');
const food = document.querySelector('#food');
const work = document.querySelector('#work');
const family = document.querySelector('#family');
const drinking = document.querySelector('#drinking');
const positive = document.querySelector('#positive');
const transport = document.querySelector('#transport');
const slang = document.querySelector('#slang');

// Display all phrases initially
function displayPhrases(filteredPhrases = phrases) {
  phrasesContainer.innerHTML = ''; // Clear container
  
  filteredPhrases.forEach(phrase => {
    const phraseCard = document.createElement('div');
    phraseCard.className = 'phrase-card';
    phraseCard.dataset.categories = phrase.usage.join(' ');
    const isSaved = savedPhrases.some(saved => saved.phrase === phrase.phrase);
    const buttonHTML = isSaved
      ? '<button id="removeButton" class="saveButton"><span>X</span></button>'
      : '<button id="savedButton" class="saveButton"><img src="images/save.svg"></button>';
    
    phraseCard.innerHTML = `
      <div class="phrase-header">
        <h3>${phrase.phrase}</h3>
        <span class="frequency-badge">${phrase.frequency}</span>
      </div>
      <p class="translation">${phrase.literalTranslation}</p>
      <p class="meaning">${phrase.meaning}</p>
      <div class="example">Example: ${phrase.example}</div>
      <div class="categories">
        ${phrase.usage.map(cat => `<span class="category-tag">${cat}</span>`).join('')}
      </div>
      ${buttonHTML}
    `;
    
    phrasesContainer.appendChild(phraseCard);
  });
}

console.log(phrases);
phrasesContainer.addEventListener('click', function(event) {
  const saveBtn = event.target.closest('#savedButton');
  const removeBtn = event.target.closest('#removeButton');
  const card = event.target.closest('.phrase-card');

  if (saveBtn && !removeBtn && card) {
    // Guardar frase
    const phraseText = card.querySelector('h3')?.textContent;
    // Busca el objeto completo en phrases
    const phraseObj = phrases.find(p => p.phrase === phraseText);
    if (phraseObj && !savedPhrases.some(saved => saved.phrase === phraseObj.phrase)) {
      savedPhrases.push({ ...phraseObj }); // Guarda toda la info de la frase
      displayPhrases(); // Vuelve a renderizar

      //save into a localStorage
      try{
        localStorage.setItem('savedPhrases', JSON.stringify(savedPhrases));
        const localContent = localStorage.getItem('savedPhrases');
        console.log('Frases guardadas actualizadas:', localContent);
      } catch (error) {
        console.error('Error al guardar en localStorage:', error);
      }
      
    }
  }
  if (removeBtn && card) {
    // Eliminar frase completa
    const phraseText = card.querySelector('h3')?.textContent;
    savedPhrases = savedPhrases.filter(saved => saved.phrase !== phraseText);
    displayPhrases(); // Vuelve a renderizar

    // upload localStorage
    localStorage.setItem('savedPhrases', JSON.stringify(savedPhrases));
  }
  console.log(savedPhrases);
});


// Filter phrases by category
function filterPhrases(category) {
  if (category === 'all') {
    displayPhrases();
    return;
  }
  
  const filtered = phrases.filter(phrase => 
    phrase.usage.includes(category)
  );
  displayPhrases(filtered);
}

// Set active button
function setActiveButton(activeBtn) {
  // Remove active class from all buttons
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.classList.remove('active');
  });
  
  // Add active class to clicked button
  activeBtn.classList.add('active');
}

// Button event handlers
function setupButtonHandlers() {
  all.addEventListener('click', () => {
    filterPhrases('all');
    setActiveButton(all);
  });

  social.addEventListener('click', () => {
    filterPhrases('social');
    setActiveButton(social);
  });

  negative.addEventListener('click', () => {
    filterPhrases('negative');
    setActiveButton(negative);
  });

  young.addEventListener('click', () => {
    filterPhrases('young');
    setActiveButton(young);
  });

  money.addEventListener('click', () => {
    filterPhrases('money');
    setActiveButton(money);
  });

  food.addEventListener('click', () => {
    filterPhrases('food');
    setActiveButton(food);
  });

  work.addEventListener('click', () => {
    filterPhrases('work');
    setActiveButton(work);
  });

  family.addEventListener('click', () => {
    filterPhrases('family');
    setActiveButton(family);
  });

  drinking.addEventListener('click', () => {
    filterPhrases('drinking');
    setActiveButton(drinking);
  });

  positive.addEventListener('click', () => {
    filterPhrases('positive');
    setActiveButton(positive);
  });

  transport.addEventListener('click', () => {
    filterPhrases('transport');
    setActiveButton(transport);
  });

  slang.addEventListener('click', () => {
    filterPhrases('slang');
    setActiveButton(slang);
  });
}

// Initialize the page
function init() {
  displayPhrases();
  setupButtonHandlers();
}

console.log('Phrases saved from phrases.js:', savedPhrases);

// Start the application when DOM is loaded
document.addEventListener('DOMContentLoaded', init);