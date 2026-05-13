/* ══════════════════════════════════════════════════════════════
   EXPLORE PAGE - New Design JavaScript
   Thai Streetfood Softpower Theme
   ══════════════════════════════════════════════════════════════ */

// Initialize map
let map;
let markers = [];
let activeMarker = null;

// Bangkok center coordinates
const bangkokCenter = [13.7563, 100.5018];

// Location data with full details
// NOTE: This will be overridden by config if window.exploreConfigLocations exists
let locationsData = [
  {
    id: 1,
    title: 'ก๋วยจั๊บนายเอ็ก',
    titleZh: '乃艾卷粉',
    subtitle: '(Nai Ek Roll Noodle)',
    subtitleZh: '(Nai Ek 卷粉)',
    icon: '🍜',
    area: 'เยาวราช',
    areaZh: '耀华力',
    rating: 3.9,
    distance: '3.9 km',
    category: 'food',
    lat: 13.7563,
    lng: 100.5018,
    hours: 'เปิดอยู่จนถึง 23:59',
    hoursZh: '营业至 23:59',
    address: 'ถนนเยาวราช (ปากซอยเยาวราช 9)\nอยู่ด้านซ้ายมือของถนนเยาวราช\nเยื้องๆกับโรงแรม Royal Hotel Bangkok',
    addressZh: '耀华力路（耀华力巷9号入口）\n位于耀华力路左侧\n靠近曼谷皇家酒店',
    transport: [
      { icon: '🚇', text: '200 ม. จาก MRT วัดมังกร', textZh: '距离 MRT 龙莲寺站 200 米' },
      { icon: '🚇', text: '800 ม. จาก MRT หัวลำโพง', textZh: '距离 MRT 华南蓬站 800 米' }
    ],
    phone: '022264651',
    images: [
      'https://images.unsplash.com/photo-1555126634-323283e090fa?w=400&q=80',
      'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&q=80',
      'https://images.unsplash.com/photo-1562802378-063ec186a863?w=400&q=80',
      'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=400&q=80'
    ]
  },
  {
    id: 2,
    title: 'เปิดป่าพริกไทย',
    titleZh: '泰式胡椒餐厅',
    subtitle: '(Perd Pa Prik Thai)',
    subtitleZh: '(Perd Pa Prik Thai)',
    icon: '🍝',
    area: 'ท่าเตียน',
    areaZh: '塔田',
    rating: 4.2,
    distance: '4.2 km',
    category: 'food',
    lat: 13.7440,
    lng: 100.5255,
    hours: 'เปิดอยู่จนถึง 22:00',
    hoursZh: '营业至 22:00',
    address: 'ถนนมหาราช แขวงพระบรมมหาราชวัง\nใกล้วัดพระเชตุพนวิมลมังคลาราม\nเยื้องตลาดท่าเตียน',
    addressZh: '玛哈拉路 帕博隆玛哈拉旺区\n靠近卧佛寺\n塔田市场对面',
    transport: [
      { icon: '🚇', text: '500 ม. จาก MRT สนามไชย', textZh: '距离 MRT 沙南猜站 500 米' },
      { icon: '🚢', text: '300 ม. จากท่าเรือท่าเตียน', textZh: '距离塔田码头 300 米' }
    ],
    phone: '022234567',
    images: [
      'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=400&q=80',
      'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&q=80',
      'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&q=80',
      'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400&q=80'
    ]
  },
  {
    id: 3,
    title: 'ย่านสตรีทฟู้ด ตลาดน้อย',
    titleZh: '塔拉诺街头美食区',
    subtitle: '(Talad Noi Street Food)',
    subtitleZh: '(Talad Noi 街头美食)',
    icon: '🥘',
    area: 'สตรีทฟู้ด',
    areaZh: '街头美食',
    rating: 4.5,
    distance: '4.5 km',
    category: 'food',
    lat: 13.7308,
    lng: 100.5214,
    hours: 'เปิดอยู่จนถึง 21:00',
    hoursZh: '营业至 21:00',
    address: 'ซอยวานิช 2 แขวงตลาดน้อย\nเขตสัมพันธวงศ์\nใกล้วัดปทุมคงคา',
    addressZh: '瓦尼巷2号 塔拉诺区\n三攀他旺县\n靠近帕吞空卡寺',
    transport: [
      { icon: '🚇', text: '600 ม. จาก MRT หัวลำโพง', textZh: '距离 MRT 华南蓬站 600 米' },
      { icon: '🚌', text: 'ป้ายรถเมล์ตลาดน้อย', textZh: '塔拉诺公交站' }
    ],
    phone: '022345678',
    images: [
      'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400&q=80',
      'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&q=80',
      'https://images.unsplash.com/photo-1562802378-063ec186a863?w=400&q=80',
      'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=400&q=80'
    ]
  },
  {
    id: 4,
    title: 'ติ่มซำจีนแท้',
    titleZh: '正宗中式点心',
    subtitle: '(Authentic Dim Sum)',
    subtitleZh: '(正宗点心)',
    icon: '🥟',
    area: 'เยาวราช',
    areaZh: '耀华力',
    rating: 4.1,
    distance: '4.1 km',
    category: 'food',
    lat: 13.7650,
    lng: 100.5380,
    hours: 'เปิดอยู่จนถึง 20:00',
    hoursZh: '营业至 20:00',
    address: 'ถนนเยาวราช ซอย 11\nแขวงสัมพันธวงศ์\nใกล้ตลาดสำเพ็ง',
    addressZh: '耀华力路 巷11号\n三攀他旺区\n靠近三攀市场',
    transport: [
      { icon: '🚇', text: '400 ม. จาก MRT วัดมังกร', textZh: '距离 MRT 龙莲寺站 400 米' },
      { icon: '🚇', text: '700 ม. จาก MRT สามยอด', textZh: '距离 MRT 三约站 700 米' }
    ],
    phone: '022267890',
    images: [
      'https://images.unsplash.com/photo-1496116218417-1a781b1c416c?w=400&q=80',
      'https://images.unsplash.com/photo-1563245372-f21724e3856d?w=400&q=80',
      'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&q=80',
      'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400&q=80'
    ]
  },
  // === NEW LOCATIONS FROM STREET FOOD PAGE (36 RESTAURANTS) ===
  {
    id: 5,
    title: 'โกโก้ข้าวมันไก่ประตูน้ำ',
    titleZh: '海南鸡饭',
    subtitle: '(Khao Man Gai)',
    subtitleZh: '(海南鸡饭)',
    icon: '🍗',
    area: 'ประตูน้ำ',
    areaZh: '水门',
    rating: 4.7,
    distance: '5.2 km',
    category: 'food',
    lat: 13.7501,
    lng: 100.5413,
    hours: 'เปิดอยู่จนถึง 14:00',
    hoursZh: '营业至 14:00',
    address: 'ประตูน้ำ กรุงเทพฯ\nข้าวมันไก่สูตรดั้งเดิม',
    addressZh: '水门 曼谷\n传统海南鸡饭',
    transport: [
      { icon: '🚇', text: '300 ม. จาก BTS ราชเทวี', textZh: '距离 BTS 拉差贴威站 300 米' },
      { icon: '🚌', text: 'ป้ายรถเมล์ประตูน้ำ', textZh: '水门公交站' }
    ],
    phone: '02-252-6325',
    images: [
      'https://images.unsplash.com/photo-1562159278-1253a58da141?w=400&q=80',
      'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&q=80',
      'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400&q=80',
      'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=400&q=80'
    ]
  },
  {
    id: 6,
    title: 'เจริญแสงสีลม',
    titleZh: '昌盛石龙军',
    subtitle: '(Charoen Saeng Silom)',
    subtitleZh: '(昌盛石龙军)',
    icon: '🍛',
    area: 'สีลม',
    areaZh: '石龙军',
    rating: 4.5,
    distance: '3.8 km',
    category: 'food',
    lat: 13.7237,
    lng: 100.5173,
    hours: 'เปิดอยู่จนถึง 22:00',
    hoursZh: '营业至 22:00',
    address: 'สีลม กรุงเทพฯ\nอาหารไทยรสชาติต้นตำรับ',
    addressZh: '石龙军 曼谷\n正宗泰国菜',
    transport: [
      { icon: '🚇', text: '200 ม. จาก BTS ศาลาแดง', textZh: '距离 BTS 沙拉当站 200 米' },
      { icon: '🚇', text: '400 ม. จาก MRT สีลม', textZh: '距离 MRT 石龙军站 400 米' }
    ],
    phone: '02-234-5678',
    images: [
      'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=400&q=80',
      'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&q=80',
      'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&q=80',
      'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400&q=80'
    ]
  },
  {
    id: 7,
    title: 'สีมรกต',
    titleZh: '翡翠餐厅',
    subtitle: '(Seemorakat Restaurant)',
    subtitleZh: '(翡翠餐厅)',
    icon: '🥘',
    area: 'สีมรกต',
    areaZh: '翡翠区',
    rating: 4.6,
    distance: '4.3 km',
    category: 'food',
    lat: 13.7363,
    lng: 100.5152,
    hours: 'เปิดอยู่จนถึง 21:00',
    hoursZh: '营业至 21:00',
    address: 'สีมรกต กรุงเทพฯ\nอาหารไทยสไตล์โฮมเมด',
    addressZh: '翡翠区 曼谷\n家常泰国菜',
    transport: [
      { icon: '🚇', text: '500 ม. จาก MRT สนามไชย', textZh: '距离 MRT 沙南猜站 500 米' },
      { icon: '🚌', text: 'ป้ายรถเมล์สีมรกต', textZh: '翡翠公交站' }
    ],
    phone: '02-245-7890',
    images: [
      'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&q=80',
      'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&q=80',
      'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400&q=80',
      'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=400&q=80'
    ]
  },
  {
    id: 8,
    title: 'เผ็ดมาก',
    titleZh: '很辣餐厅',
    subtitle: '(Ped Mak - Very Spicy)',
    subtitleZh: '(很辣餐厅)',
    icon: '🌶️',
    area: 'เผ็ดมาก',
    areaZh: '很辣区',
    rating: 4.8,
    distance: '6.5 km',
    category: 'food',
    lat: 13.7199,
    lng: 100.5849,
    hours: 'เปิดอยู่จนถึง 20:00',
    hoursZh: '营业至 20:00',
    address: 'เผ็ดมาก กรุงเทพฯ\nอาหารรสจัดจ้าน เผ็ดร้อนสะใจ',
    addressZh: '很辣区 曼谷\n超辣美食',
    transport: [
      { icon: '🚇', text: '600 ม. จาก BTS อ่อนนุช', textZh: '距离 BTS 翁努站 600 米' },
      { icon: '🚌', text: 'ป้ายรถเมล์เผ็ดมาก', textZh: '很辣公交站' }
    ],
    phone: '02-256-1234',
    images: [
      'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400&q=80',
      'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&q=80',
      'https://images.unsplash.com/photo-1562802378-063ec186a863?w=400&q=80',
      'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=400&q=80'
    ]
  },
  {
    id: 9,
    title: 'ประจักษ์เป็ดย่าง',
    titleZh: '烤鸭店',
    subtitle: '(Prajak Roasted Duck)',
    subtitleZh: '(烤鸭店)',
    icon: '🦆',
    area: 'ประจักษ์เป็ดย่าง',
    areaZh: '烤鸭区',
    rating: 4.9,
    distance: '3.7 km',
    category: 'food',
    lat: 13.7202,
    lng: 100.5161,
    hours: 'เปิดอยู่จนถึง 18:00',
    hoursZh: '营业至 18:00',
    address: 'ประจักษ์เป็ดย่าง กรุงเทพฯ\nเป็ดย่างหนังกรอบ เปิดมากว่า 100 ปี',
    addressZh: '烤鸭区 曼谷\n烤鸭皮脆，开业超过100年',
    transport: [
      { icon: '🚇', text: '400 ม. จาก MRT สนามไชย', textZh: '距离 MRT 沙南猜站 400 米' },
      { icon: '🚌', text: 'ป้ายรถเมล์ประจักษ์', textZh: '烤鸭公交站' }
    ],
    phone: '02-234-9876',
    images: [
      'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&q=80',
      'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400&q=80',
      'https://images.unsplash.com/photo-1562802378-063ec186a863?w=400&q=80',
      'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=400&q=80'
    ]
  },
  {
    id: 10,
    title: 'ไอซา รสดี',
    titleZh: '美味餐厅',
    subtitle: '(Aisa Rosdee)',
    subtitleZh: '(美味餐厅)',
    icon: '🍲',
    area: 'ไอซา รสดี',
    areaZh: '美味区',
    rating: 4.4,
    distance: '4.9 km',
    category: 'food',
    lat: 13.7593,
    lng: 100.4984,
    hours: 'เปิดอยู่จนถึง 21:00',
    hoursZh: '营业至 21:00',
    address: 'ไอซา รสดี กรุงเทพฯ\nอาหารไทยรสชาติดี ราคาประหยัด',
    addressZh: '美味区 曼谷\n泰国菜味道好，价格实惠',
    transport: [
      { icon: '🚇', text: '300 ม. จาก MRT สนามไชย', textZh: '距离 MRT 沙南猜站 300 米' },
      { icon: '🚌', text: 'ป้ายรถเมล์ไอซา', textZh: '美味公交站' }
    ],
    phone: '02-267-5432',
    images: [
      'https://images.unsplash.com/photo-1562802378-063ec186a863?w=400&q=80',
      'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&q=80',
      'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400&q=80',
      'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=400&q=80'
    ]
  },
  {
    id: 11,
    title: 'ข้าวแกงเจ๊กปุ๋ย',
    titleZh: '咖喱饭',
    subtitle: '(Khao Gaeng - Curry Rice)',
    subtitleZh: '(咖喱饭)',
    icon: '🍛',
    area: 'ข้าวแกงเจ๊กปุ๋ย',
    areaZh: '咖喱饭区',
    rating: 4.6,
    distance: '4.4 km',
    category: 'food',
    lat: 13.7466,
    lng: 100.5097,
    hours: 'เปิดอยู่จนถึง 15:00',
    hoursZh: '营业至 15:00',
    address: 'ข้าวแกงเจ๊กปุ๋ย กรุงเทพฯ\nข้าวราดแกงหลากหลายเมนู สดใหม่ทุกวัน',
    addressZh: '咖喱饭区 曼谷\n多种咖喱饭，每天新鲜',
    transport: [
      { icon: '🚇', text: '350 ม. จาก MRT สนามไชย', textZh: '距离 MRT 沙南猜站 350 米' },
      { icon: '🚌', text: 'ป้ายรถเมล์ข้าวแกง', textZh: '咖喱饭公交站' }
    ],
    phone: '02-278-3456',
    images: [
      'https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?w=400&q=80',
      'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&q=80',
      'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400&q=80',
      'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=400&q=80'
    ]
  },
  {
    id: 12,
    title: 'โจ๊กสามย่าน',
    titleZh: '三燕粥',
    subtitle: '(Joke Samyan - Rice Porridge)',
    subtitleZh: '(三燕粥)',
    icon: '🥣',
    area: 'โจ๊กสามย่าน',
    areaZh: '三燕',
    rating: 4.7,
    distance: '4.1 km',
    category: 'food',
    lat: 13.7344,
    lng: 100.5284,
    hours: 'เปิดอยู่จนถึง 14:00',
    hoursZh: '营业至 14:00',
    address: 'โจ๊กสามย่าน กรุงเทพฯ\nโจ๊กหมูสูตรโบราณ เนื้อนุ่ม น้ำซุปเข้มข้น',
    addressZh: '三燕 曼谷\n传统猪肉粥，肉嫩汤浓',
    transport: [
      { icon: '🚇', text: '200 ม. จาก MRT สามย่าน', textZh: '距离 MRT 三燕站 200 米' },
      { icon: '🚌', text: 'ป้ายรถเมล์สามย่าน', textZh: '三燕公交站' }
    ],
    phone: '02-289-6789',
    images: [
      'https://images.unsplash.com/photo-1559847844-5315695dadae?w=400&q=80',
      'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&q=80',
      'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400&q=80',
      'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=400&q=80'
    ]
  }
];

// Initialize Leaflet map
function initMap() {
  map = L.map('map').setView(bangkokCenter, 13);

  // Add OpenStreetMap tiles
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors',
    maxZoom: 19
  }).addTo(map);

  // Add markers for each location
  addMarkers();
  
  // Create location cards
  createLocationCards();
}

// Create location cards in sidebar
function createLocationCards() {
  const locationCards = document.getElementById('locationCards');
  if (!locationCards) return;
  
  // Clear existing content
  locationCards.innerHTML = '';
  
  // Get current language
  const currentLang = window.currentLanguage ? window.currentLanguage() : 'th';
  
  // Create cards from locationsData
  locationsData.forEach((location, index) => {
    const card = document.createElement('div');
    card.className = 'location-card';
    card.setAttribute('data-filter', 'food');
    card.setAttribute('data-lat', location.lat);
    card.setAttribute('data-lng', location.lng);
    
    card.innerHTML = `
      <div class="location-card-icon">${location.icon}</div>
      <div class="location-card-content">
        <h3 class="location-card-title">${currentLang === 'zh' ? location.titleZh : location.title}</h3>
        <p class="location-card-area">${currentLang === 'zh' ? location.areaZh : location.area} 📍 ${location.rating}</p>
        <p class="location-card-distance">กรุงเทพฯ · ${location.distance}</p>
      </div>
      <div class="location-card-rating">⭐ ${location.rating}</div>
    `;
    
    locationCards.appendChild(card);
  });
  
  console.log(`✅ Created ${locationsData.length} location cards`);
}

// Add markers to map
function addMarkers() {
  locationsData.forEach((location, index) => {
    // Create custom icon
    const customIcon = L.divIcon({
      className: 'custom-marker',
      html: `<span class="custom-marker-icon">${location.icon}</span>`,
      iconSize: [40, 40],
      iconAnchor: [20, 40],
      popupAnchor: [0, -40]
    });
    
    // Create marker
    const marker = L.marker([location.lat, location.lng], { icon: customIcon }).addTo(map);
    
    // Add popup
    marker.bindPopup(`<strong>${location.title}</strong>`);
    
    // Click event
    marker.on('click', () => {
      selectLocation(index);
    });
    
    markers.push(marker);
  });
}

// Select location and show detail panel
function selectLocation(index) {
  const locationCards = document.querySelectorAll('.location-card');
  const location = locationsData[index];
  
  // Remove active class from all cards
  locationCards.forEach(card => card.classList.remove('active'));
  
  // Add active class to selected card
  if (locationCards[index]) {
    locationCards[index].classList.add('active');
    locationCards[index].scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }
  
  // Pan map to marker
  map.setView([location.lat, location.lng], 15, { animate: true });
  
  // Open popup
  markers[index].openPopup();
  
  // Show detail panel
  showDetailPanel(location);
}

// Show detail panel with location info
function showDetailPanel(location) {
  const panel = document.getElementById('locationDetailPanel');
  
  // Store current location for navigation
  window.setCurrentLocation(location);
  
  // Get current language
  const currentLang = window.currentLanguage ? window.currentLanguage() : 'th';
  
  // Update content based on language
  document.getElementById('detailIcon').textContent = location.icon;
  document.getElementById('detailTitle').textContent = currentLang === 'zh' ? location.titleZh : location.title;
  document.getElementById('detailSubtitle').textContent = currentLang === 'zh' ? location.subtitleZh : location.subtitle;
  document.getElementById('detailArea').textContent = currentLang === 'zh' ? location.areaZh : location.area;
  document.getElementById('detailRating').textContent = `⭐ ${location.rating}`;
  document.getElementById('detailHours').textContent = currentLang === 'zh' ? location.hoursZh : location.hours;
  document.getElementById('detailAddress').innerHTML = (currentLang === 'zh' ? location.addressZh : location.address).replace(/\n/g, '<br>');
  document.getElementById('detailPhone').textContent = location.phone;
  
  // Update transport
  const transportHTML = location.transport.map(t => 
    `<div class="transport-item">
      <span class="transport-icon">${t.icon}</span>
      <span>${currentLang === 'zh' ? t.textZh : t.text}</span>
    </div>`
  ).join('');
  document.querySelector('.detail-transport').innerHTML = transportHTML;
  
  // Update images
  const imagesHTML = location.images.map(img => 
    `<img src="${img}" alt="${currentLang === 'zh' ? location.titleZh : location.title}" />`
  ).join('');
  document.getElementById('detailImages').innerHTML = imagesHTML;
  
  // Show panel
  panel.classList.add('active');
}

// Function to update location cards based on language
function updateLocationCards() {
  const currentLang = window.currentLanguage ? window.currentLanguage() : 'th';
  const locationCards = document.querySelectorAll('.location-card');
  
  locationCards.forEach((card, index) => {
    if (locationsData[index]) {
      const location = locationsData[index];
      const titleEl = card.querySelector('.location-card-title');
      const areaEl = card.querySelector('.location-card-area');
      
      if (titleEl) {
        titleEl.textContent = currentLang === 'zh' ? location.titleZh : location.title;
      }
      if (areaEl) {
        areaEl.textContent = `${currentLang === 'zh' ? location.areaZh : location.area} 📍 ${location.rating}`;
      }
    }
  });
  
  // Update detail panel if it's open
  const panel = document.getElementById('locationDetailPanel');
  if (panel && panel.classList.contains('active')) {
    const activeCardIndex = Array.from(locationCards).findIndex(card => card.classList.contains('active'));
    if (activeCardIndex !== -1 && locationsData[activeCardIndex]) {
      showDetailPanel(locationsData[activeCardIndex]);
    }
  }
}

// Listen for language changes
document.addEventListener('DOMContentLoaded', () => {
  // Override the switchLanguage function to update location cards
  if (window.switchLanguage) {
    const originalSwitchLanguage = window.switchLanguage;
    window.switchLanguage = function(lang) {
      originalSwitchLanguage(lang);
      updateLocationCards();
    };
  }
});

// Close detail panel
function closeDetailPanel() {
  const panel = document.getElementById('locationDetailPanel');
  panel.classList.remove('active');
}

// Filter functionality - REMOVED (no longer needed)
// Search functionality remains active

// Search functionality
function setupSearch() {
  const searchInput = document.getElementById('searchInput');
  const locationCards = document.querySelectorAll('.location-card');
  
  searchInput.addEventListener('input', (e) => {
    const searchTerm = e.target.value.toLowerCase();
    
    locationsData.forEach((location, index) => {
      const card = locationCards[index];
      const matchesSearch = 
        location.title.toLowerCase().includes(searchTerm) ||
        location.titleZh.toLowerCase().includes(searchTerm) ||
        location.area.toLowerCase().includes(searchTerm) ||
        location.areaZh.toLowerCase().includes(searchTerm) ||
        location.subtitle.toLowerCase().includes(searchTerm);
      
      if (matchesSearch || searchTerm === '') {
        if (card) card.style.display = 'flex';
        if (markers[index]) markers[index].addTo(map);
      } else {
        if (card) card.style.display = 'none';
        if (markers[index]) markers[index].remove();
      }
    });
  });
}

// Location card click events
function setupCardClicks() {
  const locationCards = document.querySelectorAll('.location-card');
  
  locationCards.forEach((card, index) => {
    card.addEventListener('click', () => {
      selectLocation(index);
    });
  });
}

// Start walking button
function setupStartWalking() {
  const startBtn = document.getElementById('startWalkingBtn');
  let currentLocation = null;
  
  // Store current location when panel is shown
  window.setCurrentLocation = function(location) {
    currentLocation = location;
  };
  
  startBtn.addEventListener('click', () => {
    if (currentLocation) {
      // Open Google Maps with directions
      const destination = `${currentLocation.lat},${currentLocation.lng}`;
      const locationName = encodeURIComponent(currentLocation.title);
      
      // Try to get user's current location
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            // User location available - show directions from current location
            const origin = `${position.coords.latitude},${position.coords.longitude}`;
            const mapsUrl = `https://www.google.com/maps/dir/?api=1&origin=${origin}&destination=${destination}&travelmode=walking`;
            window.open(mapsUrl, '_blank');
          },
          (error) => {
            // User location not available - just show destination
            const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${destination}&query_place_id=${locationName}`;
            window.open(mapsUrl, '_blank');
          }
        );
      } else {
        // Geolocation not supported - just show destination
        const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${destination}&query_place_id=${locationName}`;
        window.open(mapsUrl, '_blank');
      }
    }
  });
}

// Initialize everything when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  // Use config data if available (loaded by config-loader.js)
  if (window.exploreConfigLocations && window.exploreConfigLocations.length > 0) {
    // Expand config data with default values for missing fields
    locationsData = window.exploreConfigLocations.map(loc => ({
      id: loc.id,
      title: loc.title,
      titleZh: loc.titleZh || loc.title,
      subtitle: loc.subtitle || '',
      subtitleZh: loc.subtitleZh || loc.subtitle || '',
      icon: loc.icon,
      area: loc.area,
      areaZh: loc.areaZh || loc.area,
      rating: loc.rating,
      distance: loc.distance,
      category: loc.category || 'food',
      lat: loc.lat,
      lng: loc.lng,
      hours: loc.hours || 'เปิดอยู่จนถึง 22:00',
      hoursZh: loc.hoursZh || '营业至 22:00',
      address: loc.address || `${loc.area} กรุงเทพฯ`,
      addressZh: loc.addressZh || `${loc.areaZh || loc.area} 曼谷`,
      transport: loc.transport || [
        { icon: '🚇', text: 'ใกล้ MRT', textZh: '靠近 MRT' }
      ],
      phone: loc.phone || '02-XXX-XXXX',
      images: loc.images || [
        'https://images.unsplash.com/photo-1555126634-323283e090fa?w=400&q=80',
        'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&q=80',
        'https://images.unsplash.com/photo-1562802378-063ec186a863?w=400&q=80',
        'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=400&q=80'
      ]
    }));
    console.log(`✅ Using ${locationsData.length} locations from config`);
  } else {
    console.log(`⚠️ Using ${locationsData.length} hardcoded locations (config not loaded)`);
  }
  
  initMap();
  setupSearch();
  setupCardClicks();
  setupStartWalking();
  
  // Close panel button
  document.getElementById('closeDetailPanel').addEventListener('click', closeDetailPanel);
  
  // Check if coming from Street Food page
  const lat = sessionStorage.getItem('exploreLocationLat');
  const lng = sessionStorage.getItem('exploreLocationLng');
  
  if (lat && lng) {
    // Find matching location by coordinates
    const matchingIndex = locationsData.findIndex(loc => 
      Math.abs(loc.lat - parseFloat(lat)) < 0.0001 && 
      Math.abs(loc.lng - parseFloat(lng)) < 0.0001
    );
    
    if (matchingIndex !== -1) {
      setTimeout(() => {
        selectLocation(matchingIndex);
      }, 500);
    } else {
      // If no exact match, select first location
      setTimeout(() => {
        selectLocation(0);
      }, 500);
    }
    
    // Clear sessionStorage
    sessionStorage.removeItem('exploreLocationLat');
    sessionStorage.removeItem('exploreLocationLng');
  } else {
    // Select first location by default
    setTimeout(() => {
      selectLocation(0);
    }, 500);
  }
});
