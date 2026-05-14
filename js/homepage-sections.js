/* ══════════════════════════════════════════════════════════════
   HOMEPAGE SECTIONS - JAVASCRIPT
   Interactive functionality for new homepage sections
   ══════════════════════════════════════════════════════════════ */

(function() {
  'use strict';

  document.addEventListener('DOMContentLoaded', function() {
    initHomepageSections();
  });

  function initHomepageSections() {
    // Initialize map interactions
    initMapPins();
    
    // Initialize polaroid hover effects
    initPolaroidCards();
    
    // Initialize button interactions
    initFindNearButtons();
    
    // Add scroll animations
    initScrollAnimations();
    
    // Initialize recommend places button
    initRecommendPlacesButton();
  }

  // ── Map Pin Interactions ────────────────────────────────────
  function initMapPins() {
    const pins = document.querySelectorAll('.location-pin');
    
    pins.forEach(pin => {
      pin.addEventListener('click', function() {
        const label = this.querySelector('.pin-label');
        if (label) {
          const locationName = label.textContent;
          showToast(`📍 Exploring ${locationName}...`);
          
          // Add pulse animation
          this.style.animation = 'pulse 0.5s ease';
          setTimeout(() => {
            this.style.animation = '';
          }, 500);
        }
      });
    });
  }

  // ── Polaroid Card Interactions ────────────────────────────────
  function initPolaroidCards() {
    const polaroids = document.querySelectorAll('.polaroid-card');
    
    polaroids.forEach(card => {
      card.addEventListener('click', function() {
        const username = this.querySelector('.polaroid-username').textContent;
        showToast(`💬 Viewing ${username}'s memory...`);
      });
    });
  }

  // ── Find Near Me Button Interactions ────────────────────────
  function initFindNearButtons() {
    const buttons = document.querySelectorAll('.find-near-btn');
    
    buttons.forEach(button => {
      button.addEventListener('click', function(e) {
        e.preventDefault();
        
        const card = this.closest('.dish-card');
        const dishName = card.querySelector('h3').textContent;
        
        // Add ripple effect
        createRipple(e, this);
        
        // Show notification
        showToast(`🔍 Finding ${dishName} near you...`);
        
        // Simulate search
        setTimeout(() => {
          showToast(`✨ Found 3 places serving ${dishName}!`);
        }, 1500);
      });
    });
  }

  // ── Scroll Animations ────────────────────────────────────────
  function initScrollAnimations() {
    const animatedElements = document.querySelectorAll(
      '.dish-card, .polaroid-card, .place-item, .location-pin'
    );
    
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
        }
      });
    }, observerOptions);
    
    animatedElements.forEach(el => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(20px)';
      el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
      observer.observe(el);
    });
  }

  // ── Recommend Places Button ────────────────────────────────
  function initRecommendPlacesButton() {
    const recommendBtn = document.getElementById('recommendPlacesBtn');
    
    if (recommendBtn) {
      recommendBtn.addEventListener('click', function(e) {
        e.preventDefault();
        
        const recommendSection = document.getElementById('recommendPlaces');
        
        if (recommendSection) {
          // Smooth scroll to recommend places section
          recommendSection.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
          
          // Add highlight animation
          setTimeout(() => {
            recommendSection.style.animation = 'highlight-section 1.5s ease';
            setTimeout(() => {
              recommendSection.style.animation = '';
            }, 1500);
          }, 800);
        }
      });
    }
  }

  // ── Create Ripple Effect ────────────────────────────────────
  function createRipple(event, button) {
    const ripple = document.createElement('span');
    const rect = button.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = event.clientX - rect.left - size / 2;
    const y = event.clientY - rect.top - size / 2;

    ripple.style.width = ripple.style.height = size + 'px';
    ripple.style.left = x + 'px';
    ripple.style.top = y + 'px';
    ripple.style.position = 'absolute';
    ripple.style.borderRadius = '50%';
    ripple.style.background = 'rgba(255, 255, 255, 0.6)';
    ripple.style.transform = 'scale(0)';
    ripple.style.animation = 'ripple-animation 0.6s ease-out';
    ripple.style.pointerEvents = 'none';

    button.style.position = 'relative';
    button.style.overflow = 'hidden';
    button.appendChild(ripple);

    setTimeout(() => {
      ripple.remove();
    }, 600);
  }

  // ── Show Toast Notification ────────────────────────────────
  function showToast(message) {
    let toast = document.getElementById('toast');
    
    if (!toast) {
      toast = document.createElement('div');
      toast.id = 'toast';
      toast.className = 'toast';
      document.body.appendChild(toast);
    }

    toast.textContent = message;
    toast.classList.add('show');

    setTimeout(() => {
      toast.classList.remove('show');
    }, 3000);
  }

  // ── Add CSS Animations ────────────────────────────────────
  const style = document.createElement('style');
  style.textContent = `
    @keyframes ripple-animation {
      to {
        transform: scale(4);
        opacity: 0;
      }
    }
    
    @keyframes pulse {
      0%, 100% {
        transform: scale(1);
      }
      50% {
        transform: scale(1.1);
      }
    }
    
    @keyframes highlight-section {
      0%, 100% {
        box-shadow: none;
      }
      50% {
        box-shadow: inset 0 0 0 4px rgba(255, 228, 160, 0.5);
      }
    }
  `;
  document.head.appendChild(style);

})();


// ══════════════════════════════════════════════════════════════
// RECOMMEND PLACES - Populate with Random Street Food Items
// ══════════════════════════════════════════════════════════════

document.addEventListener('DOMContentLoaded', () => {
  // Street food data matching street-food.js
  const allFoodItems = [
    // Main dishes
    { id: 5, name: 'โกอ่างข้าวมันไก่ประตูน้ำ', nameZh: '水门海南鸡饭', location: 'ประตูน้ำ', locationZh: '水门', rating: 4.5, icon: '🍗', lat: 13.749643, lng: 100.542096 },
    { id: 6, name: 'ลาบเป็ดนายหนอม', nameZh: '乃诺鸭肉沙拉', location: 'ดินแดง', locationZh: '丁当', rating: 4.0, icon: '🦆', lat: 13.778884, lng: 100.56332 },
    { id: 4, name: 'เสียวหลัง', nameZh: '背痛', location: 'ปากคลองตลาด', locationZh: '帕克隆塔拉特', rating: 3.8, icon: '🍚', lat: 13.752770, lng: 100.494746 },
    // Desserts
    { id: 7, name: 'ข้าวเหนียวมะม่วงป้าณี', nameZh: '阿妮芒果糯米饭', location: 'จอมทอง', locationZh: '宗通', rating: 4.4, icon: '🥭', lat: 13.702087, lng: 100.465379 },
    { id: 8, name: 'เจ้วรรณสวนหลวงจุฬา', nameZh: '朱拉隆功皇家公园甜品', location: 'ปทุมวัน', locationZh: '巴吞旺', rating: 3.7, icon: '🍨', lat: 13.739625, lng: 100.522226 },
    { id: 9, name: 'ปาท่องโก๋เสวย', nameZh: '油条咖啡馆', location: 'บางลำพู', locationZh: '邦兰普', rating: 3.7, icon: '🥖', lat: 13.761204, lng: 100.499545 },
    // Snacks
    { id: 10, name: 'หมูสะเต๊ะแปลงนาม', nameZh: '帕朗南猪肉沙爹', location: 'เยาวราช', locationZh: '耀华力', rating: 4.2, icon: '🍖', lat: 13.740678, lng: 100.509616 },
    { id: 11, name: 'นายย้ง เจ้าเก่าสำเหร่', nameZh: '乃勇老店三赖', location: 'สำเหร่', locationZh: '三赖', rating: 4.2, icon: '🍨', lat: 13.713342, lng: 100.488770 },
    { id: 12, name: 'ยุ้ยเผือกทอด เสาชิงช้า', nameZh: '油炸芋头摇摆柱', location: 'เสาชิงช้า', locationZh: '摇摆柱', rating: 4.0, icon: '🍠', lat: 13.753431, lng: 100.500519 },
    // Noodles
    { id: 1, name: 'ก๋วยจั๊บนายเอ็ก', nameZh: '乃艾卷粉', location: 'เยาวราช', locationZh: '耀华力', rating: 3.8, icon: '🍜', lat: 13.7563, lng: 100.5018 },
    { id: 2, name: 'ก๋วยเตี๋ยวเรืออยุธยา', nameZh: '正宗大城船面', location: 'ดอนเมือง', locationZh: '廊曼', rating: 4.1, icon: '🍝', lat: 13.897445, lng: 100.587634 },
    { id: 3, name: 'ทิพย์สมัย ผัดไทยประตูผี', nameZh: 'Thipsamai Pad Thai', location: 'พระนคร', locationZh: '帕那空', rating: 3.7, icon: '🥘', lat: 13.7308, lng: 100.5214 }
  ];
  
  // Select first 6 items (not random)
  const selectedSix = allFoodItems.slice(0, 6);
  
  // Get current language
  const currentLang = window.currentLanguage ? window.currentLanguage() : 'th';
  
  // Update place items
  const placeItems = document.querySelectorAll('.place-item');
  placeItems.forEach((item, index) => {
    if (selectedSix[index]) {
      const food = selectedSix[index];
      
      // Update icon
      const iconEl = item.querySelector('.place-icon');
      if (iconEl) iconEl.textContent = food.icon;
      
      // Update name
      const nameEl = item.querySelector('.place-name');
      if (nameEl) {
        nameEl.textContent = currentLang === 'zh' ? food.nameZh : food.name;
        nameEl.removeAttribute('data-translate'); // Remove translation attribute
      }
      
      // Update meta (location and rating)
      const metaEl = item.querySelector('.place-meta');
      if (metaEl) {
        const location = currentLang === 'zh' ? food.locationZh : food.location;
        metaEl.textContent = `${location} · ⭐ ${food.rating}`;
        metaEl.removeAttribute('data-translate'); // Remove translation attribute
      }
      
      // Store location data
      item.setAttribute('data-location-id', food.id);
      item.setAttribute('data-lat', food.lat);
      item.setAttribute('data-lng', food.lng);
    }
  });
  
  // Add click handlers to navigate to explore page
  placeItems.forEach(item => {
    item.addEventListener('click', (e) => {
      e.preventDefault();
      const locationId = item.getAttribute('data-location-id');
      const lat = item.getAttribute('data-lat');
      const lng = item.getAttribute('data-lng');
      
      if (locationId && lat && lng) {
        // Store location ID and coordinates in sessionStorage
        sessionStorage.setItem('exploreLocationId', locationId);
        sessionStorage.setItem('exploreLocationLat', lat);
        sessionStorage.setItem('exploreLocationLng', lng);
        
        // Navigate to explore page
        window.location.href = 'explore.html';
      }
    });
  });
  
  // Update on language change
  window.addEventListener('languageChanged', () => {
    const currentLang = window.currentLanguage ? window.currentLanguage() : 'th';
    placeItems.forEach((item, index) => {
      if (selectedSix[index]) {
        const food = selectedSix[index];
        const nameEl = item.querySelector('.place-name');
        if (nameEl) {
          nameEl.textContent = currentLang === 'zh' ? food.nameZh : food.name;
          nameEl.removeAttribute('data-translate');
        }
        
        const metaEl = item.querySelector('.place-meta');
        if (metaEl) {
          const location = currentLang === 'zh' ? food.locationZh : food.location;
          metaEl.textContent = `${location} · ⭐ ${food.rating}`;
          metaEl.removeAttribute('data-translate');
        }
      }
    });
  });
});
