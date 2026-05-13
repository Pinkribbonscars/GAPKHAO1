/**
 * GAPKHAO — trending-navigation.js
 * Navigation from Trending Destinations to Explore page with specific locations
 */

// Define location mappings for the trending destinations
const trendingLocations = {
  'chinatown': {
    id: 2,
    name: 'Yaowarat Night Walk',
    lat: 13.7398,
    lng: 100.5066,
    zoom: 15
  },
  'food-staller': {
    id: 1,
    name: 'Nai Ek Roll Noodle',
    lat: 13.7563,
    lng: 100.5018,
    zoom: 15
  },
  'street-lamp': {
    id: 5,
    name: 'Bang Rak Street Food',
    lat: 13.7240,
    lng: 100.5260,
    zoom: 15
  }
};

// Add click handlers to location pins
function initTrendingNavigation() {
  // Get all location pins
  const pins = document.querySelectorAll('.location-pin');
  
  pins.forEach(pin => {
    // Make pins clickable
    pin.style.cursor = 'pointer';
    
    // Add click event
    pin.addEventListener('click', function(e) {
      e.preventDefault();
      
      // Determine which location was clicked
      let locationKey = '';
      if (this.classList.contains('pin-chinatown')) {
        locationKey = 'chinatown';
      } else if (this.classList.contains('pin-center')) {
        locationKey = 'food-staller';
      } else if (this.classList.contains('pin-right')) {
        locationKey = 'street-lamp';
      }
      
      if (locationKey && trendingLocations[locationKey]) {
        // Store location data in sessionStorage
        const location = trendingLocations[locationKey];
        sessionStorage.setItem('selectedLocation', JSON.stringify(location));
        
        // Add visual feedback
        this.style.transform = this.style.transform.includes('scale') 
          ? 'rotate(-45deg) scale(1.5)' 
          : 'rotate(-45deg) scale(1.5)';
        
        // Navigate to explore page after brief delay
        setTimeout(() => {
          window.location.href = 'explore.html';
        }, 300);
      }
    });
    
    // Add hover effect
    pin.addEventListener('mouseenter', function() {
      const label = this.querySelector('.pin-label');
      if (label) {
        label.style.transform = 'scale(1.1)';
        label.style.transition = 'transform 0.3s ease';
      }
    });
    
    pin.addEventListener('mouseleave', function() {
      const label = this.querySelector('.pin-label');
      if (label) {
        label.style.transform = 'scale(1)';
      }
    });
  });
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initTrendingNavigation);
} else {
  initTrendingNavigation();
}

