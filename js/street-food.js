/* ══════════════════════════════════════════════════════════════
   STREET FOOD PAGE - JavaScript
   Thai Streetfood Softpower Theme
   ══════════════════════════════════════════════════════════════ */

(function() {
  'use strict';

  // Food Data - Populated from explore-new.js locations
  const foodData = {
    main: [
      // ID 5 - โกอ่างข้าวมันไก่ประตูน้ำ
      {
        id: 'khao-man-gai',
        name: 'โกอ่างข้าวมันไก่ประตูน้ำ',
        nameEn: 'GoAng Kaomunkai Pratunam',
        nameZh: '水门海南鸡饭',
        category: 'main',
        location: 'ประตูน้ำ',
        locationZh: '水门',
        lat: 13.749643,
        lng: 100.542096,
        rating: 4.5,
        price: '50-80฿',
        image: 'https://img.wongnai.com/p/1920x0/2026/03/04/948e67503ec94a98a04db97467af739f.jpg',
        description: 'ข้าวมันไก่สูตรดั้งเดิม เนื้อไก่นุ่ม น้ำจิ้มรสเด็ด',
        descriptionZh: '传统海南鸡饭，鸡肉嫩滑，酱汁美味',
        phone: '02-252-6325',
        hours: '06:00-23:59',
        address: '960-962 ซอยเพชรบุรี 30 ถนนเพชรบุรีตัดใหม่\nปากซ.เพชรบุรี 30 ใกล้แยก',
        addressZh: '960-962 碧武里巷30号 碧武里新路\n碧武里巷30号入口附近'
      },
      // ID 6 - ลาบเป็ดนายหนอม
      {
        id: 'larb-ped',
        name: 'ลาบเป็ดนายหนอม',
        nameEn: 'Lap Pet Nai Nom',
        nameZh: '乃诺鸭肉沙拉',
        category: 'main',
        location: 'ดินแดง',
        locationZh: '丁当',
        lat: 13.778884,
        lng: 100.56332,
        rating: 4.0,
        price: '70-120฿',
        image: 'https://img.wongnai.com/p/1920x0/2023/07/12/a6d25cd076994b6bba63ac206d53d607.jpg',
        description: 'ลาบเป็ดรสจัดจ้าน แซ่บนัวน้ำตาไหล',
        descriptionZh: '鸭肉沙拉味道浓郁，超级辣',
        phone: '026928489',
        hours: '10:30-23:00',
        address: '270/48, ซอยประชาสงเคราะห์ 27, ดินแดง, กรุงเทพมหานคร, 10400\nใกล้ม.หอการค้า ประมาณ 300 เมตร',
        addressZh: '270/48, 巷 Pracha Songkhro 27, 丁当, 曼谷, 10400\n距离华侨崇圣大学约 300 米'
      },
      // ID 4 - เสียวหลัง
      {
        id: 'siew-lang',
        name: 'เสียวหลัง',
        nameEn: 'sĭieow lăng',
        nameZh: '背痛',
        category: 'main',
        location: 'ปากคลองตลาด',
        locationZh: '帕克隆塔拉特',
        lat: 13.752770,
        lng: 100.494746,
        rating: 3.8,
        price: '50-100฿',
        image: 'https://img.wongnai.com/p/1920x0/2021/02/20/83b3936bc46947cd8d0135416458f55b.jpg',
        description: 'อาหารจีนโบราณ รสชาติต้นตำรับ',
        descriptionZh: '传统中餐，正宗口味',
        phone: '022227212',
        hours: '10:00-20:00',
        address: '227 ถนนอัษฎางค์ แขวงวังบูรพาฯ กรุงเทพมหานคร (ใช้ถนนอัษฎางค์ จากปากคลองตลาด มุ่งหน้าโรงเรียนราชินี ให้เลี้ยวซ้ายเข้าซอยเซเว่นอีเลฟเว่นตรงหัวมุมที่อยู่ติดสะพานคลองคูเมืองเดิม ตรงเข้าไปประมาณ 200 เมตรจะเห็นร้านเสียวหลัง ตั้งอยู่ในซอยเล็กๆ ด้านซ้ายมือ)',
        addressZh: '地址：曼谷旺布拉帕区阿萨当路227号（从帕空塔拉特出发，沿阿萨当路朝拉吉尼学校方向行驶。在靠近旧孔库芒桥的拐角处，7-Eleven便利店旁边的小巷左转。直行约200米，您会在左侧的小巷里看到Siew Lang商店。）'
      }
    ],
    dessert: [
      // ID 7 - ข้าวเหนียวมะม่วงป้าณี (same as main ID 7, but categorized as dessert)
      {
        id: 'mango-sticky-rice-dessert',
        name: 'ข้าวเหนียวมะม่วงป้าณี (วัดราชโอรส)',
        nameEn: 'Sweet sticky rice aunt nee',
        nameZh: '阿妮芒果糯米饭（拉差欧罗寺）',
        category: 'dessert',
        location: 'จอมทอง',
        locationZh: '宗通',
        lat: 13.702087,
        lng: 100.465379,
        rating: 4.4,
        price: '60-120฿',
        image: 'https://img.wongnai.com/p/1920x0/2024/03/22/ecbfaa047411426c8c546a40486b73e0.jpg',
        description: 'ข้าวเหนียวมะม่วงสูตรต้นตำรับ มะม่วงหวานฉ่ำ',
        descriptionZh: '正宗芒果糯米饭，芒果香甜多汁',
        phone: '0909910651',
        hours: '09:00-18:00',
        address: '159 วุฒกาศ แขวงจอมทอง เขต จอมทอง กรุงเทพมหานคร 10150',
        addressZh: '159 Wutthakat, 宗通区, 曼谷 10150'
      },
      // ID 8 - เจ้วรรณสวนหลวงจุฬา
      {
        id: 'chao-wan',
        name: 'เจ้วรรณสวนหลวงจุฬา',
        nameEn: 'Chao Wan Suan Luang Chula',
        nameZh: '朱拉隆功皇家公园甜品',
        category: 'dessert',
        location: 'ปทุมวัน',
        locationZh: '巴吞旺',
        lat: 13.739625,
        lng: 100.522226,
        rating: 3.7,
        price: '30-70฿',
        image: 'https://img.wongnai.com/p/1920x0/2025/12/19/0d039c95be924e86a7c6df8cd62cb5af.jpg',
        description: 'ของหวานไทยโบราณ รสชาติต้นตำรับ',
        descriptionZh: '传统泰式甜品，正宗口味',
        phone: '081-421-3761',
        hours: '10:00-13:30',
        address: '1700, ถนนบรรทัดทอง รองเมือง ปทุมวัน กรุงเทพมหานคร\nตรงข้ามอุทยาน 100ปี จุฬา',
        addressZh: '1700, 班塔通路, 荣木昂, 巴吞旺, 曼谷\n朱拉隆功大学100周年公园对面'
      },
      // ID 9 - ปาท่องโก๋เสวย
      {
        id: 'patongko',
        name: 'ปาท่องโก๋เสวย',
        nameEn: 'Pa Tong Go Cafe',
        nameZh: '油条咖啡馆',
        category: 'dessert',
        location: 'บางลำพู',
        locationZh: '邦兰普',
        lat: 13.761204,
        lng: 100.499545,
        rating: 3.7,
        price: '15-40฿',
        image: 'https://img.wongnai.com/p/1920x0/2024/10/22/c27fa48383ec4f818522da1c7d89d251.jpg',
        description: 'ปาท่องโก๋กรอบนอกนุ่มใน จิ้มสังขยา',
        descriptionZh: '油条外酥内软，蘸椰奶蛋',
        phone: '022819754',
        hours: '06:00-08:00',
        address: '246, ถนน พระสุเมรุ ตลาดยอด พระนคร กรุงเทพมหานคร\nตรงข้ามวัดบวรนิเวศวิหาร',
        addressZh: '246, 帕素梅路, 塔拉约, 帕那空, 曼谷\n博沃尼威寺对面'
      }
    ],
    snack: [
      // ID 10 - หมูสะเต๊ะแปลงนาม
      {
        id: 'moo-satae',
        name: 'หมูสะเต๊ะแปลงนาม',
        nameEn: 'Moo Satae Plang Nam',
        nameZh: '帕朗南猪肉沙爹',
        category: 'snack',
        location: 'เยาวราช',
        locationZh: '耀华力',
        lat: 13.740678,
        lng: 100.509616,
        rating: 4.2,
        price: '30-60฿',
        image: 'https://img.wongnai.com/p/1920x0/2024/06/15/5d85584acc014e0b8351773287f008d7.jpg',
        description: 'หมูสะเต๊ะย่างไฟถ่าน น้ำจิ้มรสเด็ด',
        descriptionZh: '炭烤猪肉沙爹，酱汁美味',
        phone: '086-548-4628',
        hours: '16:00-17:00',
        address: 'ถนนแปลงนาม, สัมพันธวงศ์, กรุงเทพมหานคร, 10100\nเข้าซอยแปลงนาม ร้านอยู่ซ้ายมือ',
        addressZh: '帕朗南路, 三攀他旺, 曼谷, 10100\n进入帕朗南巷，店在左手边'
      },
      // ID 11 - นายย้ง เจ้าเก่าสำเหร่
      {
        id: 'naiyong',
        name: 'นายย้ง เจ้าเก่าสำเหร่',
        nameEn: 'Naiyong Samrae',
        nameZh: '乃勇老店三赖',
        category: 'snack',
        location: 'สำเหร่',
        locationZh: '三赖',
        lat: 13.713342,
        lng: 100.488770,
        rating: 4.2,
        price: '25-50฿',
        image: 'https://img.wongnai.com/p/1920x0/2023/03/22/4304aa857c5842639b34b23792a932e1.jpg',
        description: 'ของกินเล่นหลากหลาย รสชาติต้นตำรับ',
        descriptionZh: '各种小吃，正宗口味',
        phone: '094-894-2429',
        hours: '10:00-17:00',
        address: '359, ตากสิน สำเหร่ ธนบุรี กรุงเทพมหานคร\nเลยซ.ตากสิน17 หรือระหว่าง รพ.นิติเวช กับ ธ.กสิกร',
        addressZh: '359, 达信路, 三赖, 吞武里, 曼谷\n达信巷17号后，在法医医院和开泰银行之间'
      },
      // ID 12 - ยุ้ยเผือกทอด เสาชิงช้า
      {
        id: 'yui-phueak',
        name: 'ยุ้ยเผือกทอด เสาชิงช้า',
        nameEn: 'Yui Phueak Tod Sao Ching Cha',
        nameZh: '油炸芋头摇摆柱',
        category: 'snack',
        location: 'เสาชิงช้า',
        locationZh: '摇摆柱',
        lat: 13.753431,
        lng: 100.500519,
        rating: 4.0,
        price: '15-35฿',
        image: 'https://img.wongnai.com/p/1920x0/2025/08/22/32a25d27c7ef40099e65f4b5212d0669.jpg',
        description: 'เผือกทอดกรอบนอกนุ่มใน หอมหวาน',
        descriptionZh: '油炸芋头外酥内软，香甜可口',
        phone: '0841417032',
        hours: '07:00-08:30',
        address: '130, มหรรณพ เสาชิงช้า พระนคร กรุงเทพมหานคร\nติดโรงเรียนสอนภาษาอาจารย์สงวน ติดริมถนนมหรรณพ',
        addressZh: '130, 玛哈纳路, 摇摆柱, 帕那空, 曼谷\n靠近宋文语言学校，玛哈纳路旁'
      }
    ],
    noodle: [
      // ID 1 - ก๋วยจั๊บนายเอ็ก
      {
        id: 'guay-jub-nai-ek',
        name: 'ก๋วยจั๊บนายเอ็ก',
        nameEn: 'Nai Ek Roll Noodle',
        nameZh: '乃艾卷粉',
        category: 'noodle',
        location: 'เยาวราช',
        locationZh: '耀华力',
        lat: 13.7563,
        lng: 100.5018,
        rating: 3.8,
        price: '40-80฿',
        image: 'https://img.wongnai.com/p/1920x0/2020/10/20/3a5beab253934cd58300f75fdd06f95a.jpg',
        description: 'ก๋วยจั๊บน้ำซุปพริกไทยขาว หมูกรอบ',
        descriptionZh: '白胡椒汤卷粉，脆皮猪肉',
        phone: '022264651',
        hours: '10:00-23:59',
        address: 'ถนนเยาวราช (ปากซอยเยาวราช 9)\nอยู่ด้านซ้ายมือของถนนเยาวราช\nเยื้องๆกับโรงแรม Royal Hotel Bangkok',
        addressZh: '耀华力路（耀华力巷9号入口）\n位于耀华力路左侧\n靠近曼谷皇家酒店'
      },
      // ID 2 - ก๋วยเตี๋ยวเรืออยุธยา
      {
        id: 'guay-tiew-ayutthaya',
        name: 'ก๋วยเตี๋ยวเรืออยุธยารสดั้งเดิมสูตรโบราณ',
        nameEn: 'Kuaitiao Ruea Ayutthaya',
        nameZh: '正宗大城船面，传统配方。',
        category: 'noodle',
        location: 'โรคัลโรด ดอนเมือง',
        locationZh: '廊曼',
        lat: 13.897445,
        lng: 100.587634,
        rating: 4.1,
        price: '40-80฿',
        image: 'https://img.wongnai.com/p/1920x0/2019/10/07/491aa67ec9d04aaab06d91de269e23a0.jpg',
        description: 'ก๋วยเตี๋ยวเรือสูตรโบราณ น้ำซุปเข้มข้น',
        descriptionZh: '传统船面，汤汁浓郁',
        phone: '0835927997',
        hours: '10:00-18:00',
        address: 'กำแพงเพชร 6 ซอย 7 กรุงเทพมหานคร (เรียบถนนโรคัลโรด ซอยก่อนถึงเคหะดอนเมือง)',
        addressZh: 'Kamphaeng Phet 6 Soi 7, 曼谷（位于 Local Road 沿线，即 Keha Don Mueang 之前的巷子）'
      },
      // ID 3 - ทิพย์สมัย ผัดไทยประตูผี
      {
        id: 'thipsamai',
        name: 'ทิพย์สมัย ผัดไทยประตูผี (ทิพย์สมัย)',
        nameEn: 'Thipsamai Pad Thai Pratu Phi',
        nameZh: 'Thipsamai Pad Thai Pratu Phi (蒂普萨迈)',
        category: 'noodle',
        location: 'พระนคร ท่าพระจันทร์ - วังบูรพา',
        locationZh: '帕那空、塔帕陈 - Wang Burapha',
        lat: 13.7308,
        lng: 100.5214,
        rating: 3.7,
        price: '60-120฿',
        image: 'https://img.wongnai.com/p/1920x0/2018/01/08/a2a0fca003fb4b70b47748ae8341b65c.jpg',
        description: 'ผัดไทยห่อไข่ ตำนานความอร่อย',
        descriptionZh: '蛋包泰式炒河粉，传奇美味',
        phone: '022266666',
        hours: '10:00-23:30',
        address: '315 ถนนมหาไชย กรุงเทพมหานคร (ตรงข้ามวัดเทพธิดา)',
        addressZh: '曼谷玛哈猜路 315 号（Wat Thep Thida 对面）'
      }
    ]
  };

  // Current active category
  let currentCategory = 'all';

  // Initialize when DOM is ready and config is loaded
  document.addEventListener('DOMContentLoaded', function() {
    // Wait a bit for config to load, or check if it's already loaded
    const checkConfigAndInit = () => {
      if (window.streetFoodConfig) {
        console.log('✅ Config loaded, initializing with', window.streetFoodConfig.itemsPerCategory, 'items per category');
        initStreetFood();
      } else {
        console.log('⏳ Waiting for config...');
        setTimeout(checkConfigAndInit, 100);
      }
    };
    checkConfigAndInit();
  });

  function initStreetFood() {
    setupCategoryTabs();
    renderFoodGrid(currentCategory);
    setupModalHandlers();
  }

  // Setup category tab switching
  function setupCategoryTabs() {
    const tabs = document.querySelectorAll('.category-tab');
    
    tabs.forEach(tab => {
      tab.addEventListener('click', function() {
        const category = this.getAttribute('data-category');
        
        // Update active tab
        tabs.forEach(t => t.classList.remove('active'));
        this.classList.add('active');
        
        // Switch category
        switchCategory(category);
      });
    });
  }

  // Switch to different category
  function switchCategory(category) {
    const foodGrid = document.getElementById('foodGrid');
    
    // Fade out
    foodGrid.classList.add('changing');
    
    setTimeout(() => {
      currentCategory = category;
      renderFoodGrid(category);
      
      // Fade in
      setTimeout(() => {
        foodGrid.classList.remove('changing');
      }, 50);
    }, 300);
  }

  // Render food grid for category
  function renderFoodGrid(category) {
    const foodGrid = document.getElementById('foodGrid');
    let foods = [];
    
    console.log(`🍽️ Rendering category: ${category}`);
    
    // If "all" category, combine all foods from all categories
    if (category === 'all') {
      foods = [
        ...foodData.main,
        ...foodData.dessert,
        ...foodData.snack,
        ...foodData.noodle
      ];
      console.log(`✅ Showing all items: ${foods.length} total`);
    } else {
      foods = foodData[category];
      console.log(`🍽️ Total items available in ${category}: ${foods ? foods.length : 0}`);
      
      // Apply configuration to limit items per category
      if (window.streetFoodConfig && window.streetFoodConfig.categories[category]) {
        const allowedIds = window.streetFoodConfig.categories[category];
        console.log(`🔧 Filtering to allowed IDs:`, allowedIds);
        foods = foods.filter(food => allowedIds.includes(food.id));
        console.log(`✅ After filtering: ${foods.length} items`);
      } else {
        console.warn(`⚠️ No config found for category: ${category}`);
        console.log('window.streetFoodConfig:', window.streetFoodConfig);
      }
    }
    
    if (!foods || foods.length === 0) {
      foodGrid.innerHTML = `
        <div style="grid-column: 1/-1; text-align: center; padding: 4rem 2rem;">
          <h3 style="font-family: 'Noto Serif Thai', serif; font-size: 1.5rem; color: var(--color-header); margin-bottom: 1rem;">
            🚧 กำลังเตรียมข้อมูล
          </h3>
          <p style="font-family: 'Lato', sans-serif; color: var(--color-header); opacity: 0.6;">
            เมนูในหมวดนี้กำลังอยู่ระหว่างการเพิ่มข้อมูล
          </p>
        </div>
      `;
      return;
    }

    // Get current language
    const currentLang = window.currentLanguage ? window.currentLanguage() : 'th';
    
    foodGrid.innerHTML = foods.map(food => {
      const name = currentLang === 'zh' && food.nameZh ? food.nameZh : food.name;
      const location = currentLang === 'zh' && food.locationZh ? food.locationZh : food.location;
      const description = currentLang === 'zh' && food.descriptionZh ? food.descriptionZh : food.description;
      
      return `
        <article class="food-card" data-food-id="${food.id}">
          <div class="food-card-image">
            <img src="${food.image}" alt="${name}" loading="lazy" />
            <span class="food-card-badge">${food.price}</span>
          </div>
          <div class="food-card-content">
            <h3 class="food-card-title">${name}</h3>
            <p class="food-card-subtitle">${food.nameEn}</p>
            <div class="food-card-location">
              <span>📍</span>
              <span>${location}</span>
            </div>
            <div class="food-card-rating">
              <span>⭐</span>
              <span>${food.rating}</span>
            </div>
            <button class="food-card-cta">
              ${currentLang === 'zh' ? '查看位置 →' : 'ดูตำแหน่ง →'}
            </button>
          </div>
        </article>
      `;
    }).join('');

    // Attach click handlers
    attachFoodCardHandlers();
  }

  // Attach click handlers to food cards
  function attachFoodCardHandlers() {
    const foodCards = document.querySelectorAll('.food-card');
    
    foodCards.forEach(card => {
      card.addEventListener('click', function(e) {
        const foodId = this.getAttribute('data-food-id');
        const food = findFoodById(foodId);
        
        if (food) {
          // Check if user clicked the CTA button
          const isCtaButton = e.target.classList.contains('food-card-cta') || 
                             e.target.closest('.food-card-cta');
          
          if (isCtaButton) {
            // Show modal for CTA button click
            showLocationModal(food);
          } else {
            // Redirect to explore page for card/image click
            goToExploreWithLocation(food);
          }
        }
      });
    });
  }

  // Go to Explore page with location pre-selected
  function goToExploreWithLocation(food) {
    // Store the location ID in sessionStorage for more reliable matching
    // Map street food IDs to explore page IDs
    const idMapping = {
      // Main dishes
      'khao-man-gai': 5,      // โกอ่างข้าวมันไก่ประตูน้ำ
      'larb-ped': 6,          // ลาบเป็ดนายหนอม
      'siew-lang': 4,         // เสียวหลัง
      // Desserts
      'mango-sticky-rice-dessert': 7,  // ข้าวเหนียวมะม่วงป้าณี
      'chao-wan': 8,          // เจ้วรรณสวนหลวงจุฬา
      'patongko': 9,          // ปาท่องโก๋เสวย
      // Snacks
      'moo-satae': 10,        // หมูสะเต๊ะแปลงนาม
      'naiyong': 11,          // นายย้ง เจ้าเก่าสำเหร่
      'yui-phueak': 12,       // ยุ้ยเผือกทอด เสาชิงช้า
      // Noodles
      'guay-jub-nai-ek': 1,   // ก๋วยจั๊บนายเอ็ก
      'guay-tiew-ayutthaya': 2, // ก๋วยเตี๋ยวเรืออยุธยา
      'thipsamai': 3          // ทิพย์สมัย ผัดไทยประตูผี
    };
    
    const exploreId = idMapping[food.id];
    
    if (exploreId) {
      // Store the explore page location ID
      sessionStorage.setItem('exploreLocationId', exploreId);
    }
    
    // Also store coordinates as fallback
    sessionStorage.setItem('exploreLocationLat', food.lat);
    sessionStorage.setItem('exploreLocationLng', food.lng);
    
    // Redirect to explore page
    window.location.href = 'explore.html';
  }

  // Find food by ID
  function findFoodById(id) {
    for (let category in foodData) {
      const food = foodData[category].find(f => f.id === id);
      if (food) return food;
    }
    return null;
  }

  // Show location modal
  function showLocationModal(food) {
    const modal = document.getElementById('locationModal');
    const currentLang = window.currentLanguage ? window.currentLanguage() : 'th';
    
    const name = currentLang === 'zh' && food.nameZh ? food.nameZh : food.name;
    const location = currentLang === 'zh' && food.locationZh ? food.locationZh : food.location;
    const description = currentLang === 'zh' && food.descriptionZh ? food.descriptionZh : food.description;
    
    modal.innerHTML = `
      <div class="location-modal">
        <button class="location-modal-close" onclick="closeLocationModal()">✕</button>
        
        <div class="location-modal-header">
          <h2 class="location-modal-title">${name}</h2>
          <p class="location-modal-subtitle">${food.nameEn}</p>
        </div>
        
        <div class="location-modal-body">
          <div class="location-info-item">
            <div class="location-info-icon">📍</div>
            <div class="location-info-content">
              <div class="location-info-label">${currentLang === 'zh' ? '位置' : 'ที่ตั้ง'}</div>
              <div class="location-info-value">${location}</div>
            </div>
          </div>
          
          <div class="location-info-item">
            <div class="location-info-icon">📝</div>
            <div class="location-info-content">
              <div class="location-info-label">${currentLang === 'zh' ? '描述' : 'รายละเอียด'}</div>
              <div class="location-info-value">${description}</div>
            </div>
          </div>
          
          <div class="location-info-item">
            <div class="location-info-icon">⭐</div>
            <div class="location-info-content">
              <div class="location-info-label">${currentLang === 'zh' ? '评分' : 'คะแนน'}</div>
              <div class="location-info-value">${food.rating} / 5.0</div>
            </div>
          </div>
          
          <div class="location-info-item">
            <div class="location-info-icon">💰</div>
            <div class="location-info-content">
              <div class="location-info-label">${currentLang === 'zh' ? '价格' : 'ราคา'}</div>
              <div class="location-info-value">${food.price}</div>
            </div>
          </div>
          
          ${food.hours ? `
          <div class="location-info-item">
            <div class="location-info-icon">🕐</div>
            <div class="location-info-content">
              <div class="location-info-label">${currentLang === 'zh' ? '营业时间' : 'เวลาเปิด-ปิด'}</div>
              <div class="location-info-value">${food.hours}</div>
            </div>
          </div>
          ` : ''}
          
          ${food.phone ? `
          <div class="location-info-item">
            <div class="location-info-icon">📞</div>
            <div class="location-info-content">
              <div class="location-info-label">${currentLang === 'zh' ? '电话' : 'เบอร์โทร'}</div>
              <div class="location-info-value">${food.phone}</div>
            </div>
          </div>
          ` : ''}
          
          <div class="location-info-item">
            <div class="location-info-icon">🗺️</div>
            <div class="location-info-content">
              <div class="location-info-label">${currentLang === 'zh' ? '坐标' : 'พิกัด'}</div>
              <div class="location-info-value">${food.lat}, ${food.lng}</div>
            </div>
          </div>
        </div>
        
        <div class="location-modal-actions">
          <button class="location-modal-btn location-modal-btn-primary" onclick="goToExplore(${food.lat}, ${food.lng})">
            ${currentLang === 'zh' ? '在探索页面查看 →' : 'ดูในหน้า Explore →'}
          </button>
          <button class="location-modal-btn location-modal-btn-secondary" onclick="closeLocationModal()">
            ${currentLang === 'zh' ? '关闭' : 'ปิด'}
          </button>
        </div>
      </div>
    `;
    
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  // Close location modal
  window.closeLocationModal = function() {
    const modal = document.getElementById('locationModal');
    modal.classList.remove('active');
    document.body.style.overflow = '';
  };

  // Go to Explore page with location
  window.goToExplore = function(lat, lng) {
    // Find the matching location in explore page by coordinates
    // Store the coordinates in sessionStorage to pre-select on explore page
    sessionStorage.setItem('exploreLocationLat', lat);
    sessionStorage.setItem('exploreLocationLng', lng);
    
    // Redirect to explore page
    window.location.href = 'explore.html';
  };

  // Setup modal handlers
  function setupModalHandlers() {
    const modal = document.getElementById('locationModal');
    
    // Click outside to close
    modal.addEventListener('click', function(e) {
      if (e.target === modal) {
        closeLocationModal();
      }
    });
    
    // ESC key to close
    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape' && modal.classList.contains('active')) {
        closeLocationModal();
      }
    });
  }

  // Re-render when language changes
  window.addEventListener('languageChanged', (e) => {
    renderFoodGrid(currentCategory);
  });

})();
