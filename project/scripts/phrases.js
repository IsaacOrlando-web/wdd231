import { phrases } from '../data/wordsPhrases.mjs';

// Container
const phrasesContainer = document.querySelector('#sentences-Container'); // Fixed selector (added #)

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
      <button id="savedButton" class="saveButton"><img src="images/save.svg"></button>
    `;
    
    phrasesContainer.appendChild(phraseCard);
  });
}

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

// Start the application when DOM is loaded
document.addEventListener('DOMContentLoaded', init);