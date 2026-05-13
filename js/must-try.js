/* ══════════════════════════════════════════════════════════════
   MUST-TRY DISHES SECTION - JAVASCRIPT
   Handles animations and interactions for Must-Try section
   ══════════════════════════════════════════════════════════════ */

(function() {
  'use strict';

  // Wait for DOM to be fully loaded
  document.addEventListener('DOMContentLoaded', function() {
    initMustTrySection();
  });

  function initMustTrySection() {
    // Add decorative elements
    addDecorativeElements();
    
    // Setup scroll animations
    setupScrollAnimations();
    
    // Setup button interactions
    setupButtonInteractions();
  }

  // ── Add Decorative Elements ────────────────────────────────
  function addDecorativeElements() {
    const mustTrySection = document.querySelector('.must-try-section');
    if (!mustTrySection) return;

    // Create decorative elements
    const decorations = [
      { class: 'lotus-1', type: 'lotus' },
      { class: 'elephant', type: 'elephant' },
      { class: 'stain stain-1', type: 'stain' },
      { class: 'stain stain-2', type: 'stain' }
    ];

    decorations.forEach(deco => {
      const element = document.createElement('div');
      element.className = `must-try-decoration ${deco.class}`;
      mustTrySection.appendChild(element);
    });
  }

  // ── Setup Scroll Animations ────────────────────────────────
  function setupScrollAnimations() {
    const dishCards = document.querySelectorAll('.must-try-section .dish-card');
    
    if (!dishCards.length) return;

    // Intersection Observer for scroll animations
    const observerOptions = {
      threshold: 0.15,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          // Optionally unobserve after animation
          // observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    dishCards.forEach(card => {
      observer.observe(card);
    });
  }

  // ── Setup Button Interactions ────────────────────────────────
  function setupButtonInteractions() {
    const findNearButtons = document.querySelectorAll('.must-try-section .find-near-btn');
    
    findNearButtons.forEach(button => {
      button.addEventListener('click', function(e) {
        e.preventDefault();
        
        // Get dish name from card
        const dishCard = this.closest('.dish-card');
        const dishNameThai = dishCard.querySelector('h3').textContent;
        const dishNameEng = dishCard.querySelector('h4').textContent;
        
        // Show toast notification
        showToast(`🔍 กำลังค้นหา ${dishNameThai} ใกล้คุณ...`);
        
        // Add ripple effect
        createRipple(e, this);
        
        // Simulate finding nearby (you can replace with actual geolocation logic)
        setTimeout(() => {
          showToast(`✨ พบร้าน ${dishNameThai} 3 แห่งใกล้คุณ!`);
        }, 1500);
      });
    });
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

  // ── Add CSS Animation for Ripple ────────────────────────────
  const style = document.createElement('style');
  style.textContent = `
    @keyframes ripple-animation {
      to {
        transform: scale(4);
        opacity: 0;
      }
    }
  `;
  document.head.appendChild(style);

})();
