/* ══════════════════════════════════════════════════════════════
   CONFIG LOADER - Loads configuration files and updates pages
   ══════════════════════════════════════════════════════════════ */

// Load explore configuration and limit cards to 12
async function loadExploreConfig() {
  try {
    const response = await fetch('config/explore-config.json');
    const config = await response.json();
    
    // Make config available globally for explore-new.js
    window.exploreConfigLocations = config.locations;
    
    return config.locations;
  } catch (error) {
    console.error('Error loading explore config:', error);
    return null;
  }
}

// Load street food configuration
async function loadStreetFoodConfig() {
  try {
    const response = await fetch('config/street-food-config.json');
    const config = await response.json();
    return config;
  } catch (error) {
    console.error('Error loading street food config:', error);
    return null;
  }
}

// Load street life configuration
async function loadStreetLifeConfig() {
  try {
    const response = await fetch('config/street-life-config.json');
    const config = await response.json();
    return config.cards;
  } catch (error) {
    console.error('Error loading street life config:', error);
    return null;
  }
}

// Apply explore configuration to limit cards
async function applyExploreConfig() {
  const config = await loadExploreConfig();
  if (!config) return;

  // Don't create cards here - let explore-new.js handle it
  // Just make the config available globally
  console.log(`✅ Loaded ${config.length} explore locations from config`);
}

// Apply street food configuration to limit items per category
async function applyStreetFoodConfig() {
  const config = await loadStreetFoodConfig();
  if (!config) return;

  // Store config globally for street-food.js to use
  window.streetFoodConfig = config;
  console.log(`✅ Loaded street food config: ${config.itemsPerCategory} items per category`);
  
  // Add click handlers to link to explore page if enabled
  if (config.linkToExplore) {
    // Wait for food cards to be rendered
    setTimeout(() => {
      const foodCards = document.querySelectorAll('.food-card');
      foodCards.forEach(card => {
        const foodId = card.getAttribute('data-food-id');
        if (foodId) {
          // Add visual indicator that card is clickable
          card.style.cursor = 'pointer';
          
          // Add click handler to navigate to explore page
          card.addEventListener('click', (e) => {
            // Don't trigger if clicking the CTA button
            if (e.target.classList.contains('food-card-cta')) return;
            
            // Store the food ID to highlight on explore page
            sessionStorage.setItem('highlightFoodId', foodId);
            window.location.href = 'explore.html';
          });
        }
      });
      console.log(`✅ Added explore page links to ${foodCards.length} food cards`);
    }, 1000);
  }
}

// Apply street life configuration
async function applyStreetLifeConfig() {
  const cards = await loadStreetLifeConfig();
  if (!cards) return;

  const streetGrid = document.querySelector('.street-grid');
  if (!streetGrid) return;

  // Clear existing cards
  streetGrid.innerHTML = '';

  // Get current language
  const currentLang = (window.currentLanguage && typeof window.currentLanguage === 'function') ? window.currentLanguage() : 'th';

  // Create cards from config
  cards.forEach(cardData => {
    const card = document.createElement('article');
    card.className = `street-card ${cardData.cardClass} reveal`;
    card.style.setProperty('--delay', cardData.delay);
    card.setAttribute('data-story-id', cardData.id);

    const tag = currentLang === 'zh' && cardData.tagZh ? cardData.tagZh : cardData.tag;
    const title = currentLang === 'zh' && cardData.titleZh ? cardData.titleZh : cardData.title;
    const description = currentLang === 'zh' && cardData.descriptionZh ? cardData.descriptionZh : cardData.description;

    card.innerHTML = `
      <img src="${cardData.image}" 
           onerror="this.src='${cardData.fallbackImage}'" 
           alt="${tag}" 
           loading="lazy" />
      <div class="street-card-overlay">
        <span class="street-card-tag" data-translate="streetLife.card${cards.indexOf(cardData) + 1}.tag">${tag}</span>
        <h3 data-translate="streetLife.card${cards.indexOf(cardData) + 1}.title">${title}</h3>
        ${description ? `<p data-translate="streetLife.card${cards.indexOf(cardData) + 1}.desc">${description}</p>` : ''}
      </div>
    `;

    streetGrid.appendChild(card);
  });

  console.log(`✅ Loaded ${cards.length} street life cards from config`);
}

// Initialize based on current page
(async function() {
  const currentPage = window.location.pathname.split('/').pop();

  if (currentPage === 'explore.html' || currentPage === '') {
    await applyExploreConfig();
  } else if (currentPage === 'street-food.html') {
    // Load config immediately before page renders
    await applyStreetFoodConfig();
  } else if (currentPage === 'street-life.html') {
    await applyStreetLifeConfig();
  }
})();
