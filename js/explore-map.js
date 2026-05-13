/**
 * GAPKHAO — explore-map.js
 * Interactive map functionality for Explore page
 */

// Bangkok street food locations
const locations = [
  {
    id: 1,
    name: 'ก๋วยจั๊บนายเอ็ก (Nai Ek Roll Noodle)',
    nameEn: 'Nai Ek Roll Noodle',
    lat: 13.7563,
    lng: 100.5018,
    category: 'food',
    rating: 3.9,
    distance: '1.8 km',
    hours: '23:59',
    address: 'ถนน เยาวราช กรุงเทพมหานคร ใกล้กับ Royal Hotel Bangkok',
    nearbyTransit: ['200 ม. จาก MRT รัชดาภิเษก', '800 ม. จาก MRT ห้วยขวาง'],
    phone: '0222264651',
    images: [
      'https://images.unsplash.com/photo-1555126634-323283e090fa?w=300&q=80',
      'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=300&q=80',
      'https://images.unsplash.com/photo-1562802378-063ec186a863?w=300&q=80',
      'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=300&q=80'
    ]
  },
  {
    id: 2,
    name: 'Yaowarat Night Walk',
    nameEn: 'Yaowarat Night Walk',
    lat: 13.7398,
    lng: 100.5066,
    category: 'culture',
    rating: 4.9,
    distance: '2.1 km',
    hours: '18:00 - 02:00',
    address: 'เยาวราช กรุงเทพมหานคร',
    nearbyTransit: ['MRT Wat Mangkon'],
    phone: '-',
    images: [
      'https://images.unsplash.com/photo-1563245372-f21724e3856d?w=300&q=80'
    ]
  },
  {
    id: 3,
    name: 'Rattanakosin Heritage',
    nameEn: 'Rattanakosin Heritage',
    lat: 13.7500,
    lng: 100.4930,
    category: 'culture',
    rating: 4.5,
    distance: '3.4 km',
    hours: '08:00 - 18:00',
    address: 'รัตนโกสินทร์ กรุงเทพมหานคร',
    nearbyTransit: ['MRT Sanam Chai'],
    phone: '-',
    images: [
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&q=80'
    ]
  },
  {
    id: 4,
    name: 'Chatuchak Art Walk',
    nameEn: 'Chatuchak Art Walk',
    lat: 13.7990,
    lng: 100.5490,
    category: 'art',
    rating: 4.7,
    distance: '1.8 km',
    hours: '09:00 - 18:00',
    address: 'จตุจักร กรุงเทพมหานคร',
    nearbyTransit: ['BTS Mo Chit', 'MRT Chatuchak Park'],
    phone: '-',
    images: [
      'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=300&q=80'
    ]
  },
  {
    id: 5,
    name: 'Bang Rak Street Food',
    nameEn: 'Bang Rak Street Food',
    lat: 13.7240,
    lng: 100.5260,
    category: 'food',
    rating: 4.8,
    distance: '2.6 km',
    hours: '17:00 - 23:00',
    address: 'บางรัก กรุงเทพมหานคร',
    nearbyTransit: ['BTS Chong Nonsi'],
    phone: '-',
    images: [
      'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=300&q=80'
    ]
  },
  {
    id: 6,
    name: 'Talat Noi Morning Market',
    nameEn: 'Talat Noi Morning Market',
    lat: 13.7350,
    lng: 100.5150,
    category: 'food',
    rating: 4.6,
    distance: '3.0 km',
    hours: '06:00 - 14:00',
    address: 'ตลาดน้อย กรุงเทพมหานคร',
    nearbyTransit: ['MRT Hua Lamphong'],
    phone: '-',
    images: [
      'https://images.unsplash.com/photo-1562802378-063ec186a863?w=300&q=80'
    ]
  }
];

// Initialize map
let map;
let markers = [];
let currentFilter = 'all';

function initMap() {
  // Create map centered on Bangkok
  map = L.map('map').setView([13.7563, 100.5018], 13);

  // Add OpenStreetMap tiles
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors',
    maxZoom: 19
  }).addTo(map);

  // Add markers for all locations
  addMarkers(locations);
}

function addMarkers(locationsToShow) {
  // Clear existing markers
  markers.forEach(marker => map.removeLayer(marker));
  markers = [];

  // Add new markers
  locationsToShow.forEach(location => {
    // Custom icon based on category
    const iconColor = getCategoryColor(location.category);
    const icon = L.divIcon({
      className: 'custom-marker',
      html: `<div style="background-color: ${iconColor}; width: 30px; height: 30px; border-radius: 50%; border: 3px solid white; box-shadow: 0 2px 8px rgba(0,0,0,0.3); display: flex; align-items: center; justify-content: center; font-size: 16px;">📍</div>`,
      iconSize: [30, 30],
      iconAnchor: [15, 15]
    });

    const marker = L.marker([location.lat, location.lng], { icon })
      .addTo(map)
      .on('click', () => showPlaceDetail(location));

    markers.push(marker);
  });
}

function getCategoryColor(category) {
  const colors = {
    food: '#e8956d',
    culture: '#d4a017',
    art: '#b85c2a'
  };
  return colors[category] || '#e8956d';
}

function showPlaceDetail(location) {
  const panel = document.getElementById('placeDetail');
  const detailName = document.getElementById('detailName');
  const detailAddress = document.getElementById('detailAddress');
  
  // Update content
  detailName.textContent = location.name;
  detailAddress.innerHTML = `
    ${location.address}<br/>
    ${location.nearbyTransit.join('<br/>')}
  `;

  // Update meta info
  document.querySelector('.detail-distance').textContent = `🚶 ${location.distance}`;
  document.querySelector('.detail-rating').textContent = `⭐ ${location.rating}`;
  document.querySelector('.detail-category').innerHTML = `${getCategoryIcon(location.category)} ${capitalizeFirst(location.category)}`;
  document.querySelector('.detail-hours').textContent = `⏰ เปิดบริการ: ${location.hours}`;
  document.querySelector('.detail-phone').textContent = `📞 โทรศัพท์: ${location.phone}`;

  // Update images
  const imagesContainer = document.querySelector('.detail-images');
  imagesContainer.innerHTML = location.images.map(img => 
    `<img src="${img}" alt="${location.name}" />`
  ).join('');

  // Show panel
  panel.classList.add('active');

  // Center map on location
  map.setView([location.lat, location.lng], 15);
}

function getCategoryIcon(category) {
  const icons = {
    food: '🍜',
    culture: '🏛️',
    art: '🎨'
  };
  return icons[category] || '📍';
}

function capitalizeFirst(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

// Close detail panel
document.getElementById('closeDetail')?.addEventListener('click', () => {
  document.getElementById('placeDetail').classList.remove('active');
  map.setView([13.7563, 100.5018], 13);
});

// Start Walking button
document.getElementById('startWalkingBtn')?.addEventListener('click', () => {
  showToast('🚶 เริ่มนำทาง...');
  // Here you can integrate with Google Maps or other navigation apps
});

// Filter functionality
document.querySelectorAll('.filter-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    currentFilter = btn.dataset.filter;
    
    // Update active state
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    // Filter locations
    const filtered = currentFilter === 'all' 
      ? locations 
      : locations.filter(loc => loc.category === currentFilter);

    addMarkers(filtered);
    
    // Update results count
    document.querySelector('.results-count').textContent = 
      `RESULTS: ${filtered.length} / ${locations.length} routes`;
  });
});

// Place card click handlers
document.querySelectorAll('.place-card').forEach((card, index) => {
  card.addEventListener('click', () => {
    // Remove active from all cards
    document.querySelectorAll('.place-card').forEach(c => c.classList.remove('active'));
    // Add active to clicked card
    card.classList.add('active');
    
    // Show corresponding location
    if (locations[index]) {
      showPlaceDetail(locations[index]);
    }
  });
});

// Initialize map when page loads
if (document.getElementById('map')) {
  initMap();
  
  // Check if we have a selected location from trending page
  const selectedLocationData = sessionStorage.getItem('selectedLocation');
  if (selectedLocationData) {
    try {
      const locationData = JSON.parse(selectedLocationData);
      
      // Find the location in our locations array
      const location = locations.find(loc => loc.id === locationData.id);
      
      if (location) {
        // Center map on the location with specified zoom
        setTimeout(() => {
          map.setView([locationData.lat, locationData.lng], locationData.zoom || 15);
          
          // Show the place detail
          showPlaceDetail(location);
          
          // Highlight the corresponding place card
          const placeCards = document.querySelectorAll('.place-card');
          placeCards.forEach(card => card.classList.remove('active'));
          
          const cardIndex = locations.findIndex(loc => loc.id === locationData.id);
          if (cardIndex !== -1 && placeCards[cardIndex]) {
            placeCards[cardIndex].classList.add('active');
            placeCards[cardIndex].scrollIntoView({ behavior: 'smooth', block: 'center' });
          }
        }, 500);
      }
      
      // Clear the session storage
      sessionStorage.removeItem('selectedLocation');
    } catch (e) {
      console.error('Error parsing location data:', e);
    }
  }
}

