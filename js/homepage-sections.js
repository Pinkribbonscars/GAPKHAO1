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
// RECOMMEND PLACES - Navigate to Explore Page with Location
// ══════════════════════════════════════════════════════════════

document.addEventListener('DOMContentLoaded', () => {
  const placeItems = document.querySelectorAll('.place-item');
  
  // Map place IDs to location data from explore page
  const placeLocations = {
    '1': { lat: 13.7563, lng: 100.5018 }, // ก๋วยจั๊บนายเอ็ก
    '2': { lat: 13.7440, lng: 100.5255 }, // เปิดป่าพริกไทย
    '3': { lat: 13.7308, lng: 100.5214 }, // ย่านสตรีทฟู้ด ตลาดน้อย
    '4': { lat: 13.7650, lng: 100.5380 }, // ติ่มซำจีนแท้
    '5': { lat: 13.7501, lng: 100.5413 }, // โกโก้ข้าวมันไก่ประตูน้ำ
    '6': { lat: 13.7289, lng: 100.4877 }  // ก๋วยเตี๋ยวเรือวัดระเบียบ
  };
  
  placeItems.forEach(item => {
    item.addEventListener('click', (e) => {
      e.preventDefault();
      const placeId = item.getAttribute('data-place-id');
      const location = placeLocations[placeId];
      
      if (location) {
        // Store GPS coordinates in sessionStorage
        sessionStorage.setItem('exploreLocationLat', location.lat);
        sessionStorage.setItem('exploreLocationLng', location.lng);
        
        // Navigate to explore page
        window.location.href = 'explore.html';
      }
    });
  });
});
