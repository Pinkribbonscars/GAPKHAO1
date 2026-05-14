/**
 * GAPKHAO — main.js
 * All interactivity: navbar scroll, mobile menu, scroll reveal,
 * filter tabs, distance slider, planer, bookmark, toast, day selector.
 */

/* ─── Utility ─────────────────────────────────────────────────── */
const $ = (sel, ctx = document) => ctx.querySelector(sel);
const $$ = (sel, ctx = document) => [...ctx.querySelectorAll(sel)];

function showToast(msg, duration = 2800) {
  const toast = $('#toast');
  toast.textContent = msg;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), duration);
}

/* ─── Navbar: scroll + mobile menu ─────────────────────────────── */
const navbar    = $('#navbar');
const hamburger = $('#hamburger');
const navLinks  = $('#navLinks');

// Check if we're on the home page
const isHomePage = window.location.pathname.includes('index.html') || window.location.pathname.endsWith('/');

window.addEventListener('scroll', () => {
  // On home page: toggle scrolled class based on scroll position
  // On other pages: always keep scrolled class (black navbar)
  if (isHomePage) {
    navbar.classList.toggle('scrolled', window.scrollY > 60);
  } else {
    navbar.classList.add('scrolled');
  }
}, { passive: true });

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('open');
  navLinks.classList.toggle('open');
  document.body.style.overflow = navLinks.classList.contains('open') ? 'hidden' : '';
});

// Close menu on link click
$$('.nav-link').forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('open');
    navLinks.classList.remove('open');
    document.body.style.overflow = '';
  });
});

/* ─── Scroll Reveal (Intersection Observer) ─────────────────────── */
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target); // animate once
    }
  });
}, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

// Trigger hero reveals immediately on load
$$('.hero .reveal').forEach(el => {
  setTimeout(() => el.classList.add('visible'), 300);
});

// All other reveals via observer
$$('.reveal:not(.hero .reveal)').forEach(el => revealObserver.observe(el));

/* ─── Active nav highlight based on current page ────────────────── */
// Get current page filename
const currentPage = window.location.pathname.split('/').pop() || 'index.html';

// Update active nav link based on current page
$$('.nav-link').forEach(link => {
  const linkHref = link.getAttribute('href');
  if (linkHref === currentPage || 
      (currentPage === '' && linkHref === 'index.html') ||
      (currentPage === 'index.html' && linkHref === 'index.html')) {
    link.classList.add('nav-link--active');
  } else {
    link.classList.remove('nav-link--active');
  }
});

/* ─── Explore: Filter Tabs ──────────────────────────────────────── */
const filterBtns  = $$('.filter-btn');
const placeCards  = $$('.place-card');

filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    const filter = btn.dataset.filter;
    placeCards.forEach(card => {
      const match = filter === 'all' || card.dataset.filter === filter;
      card.style.display = match ? '' : 'none';
    });
  });
});

// Place card selection
placeCards.forEach(card => {
  card.addEventListener('click', () => {
    placeCards.forEach(c => c.classList.remove('active'));
    card.classList.add('active');
  });
});

/* ─── Distance Slider ───────────────────────────────────────────── */
const distRange = $('#distRange');
const distVal   = $('#distVal');

if (distRange) {
  distRange.addEventListener('input', () => {
    distVal.textContent = distRange.value;
  });
}

/* ─── Planer: Day Selector ──────────────────────────────────────── */
const dayBtns = $$('.day-btn');

dayBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    dayBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
  });
});

/* ─── Planer: Generate Plan ─────────────────────────────────────── */
const makePlanBtn = $('#makePlanBtn');
const planList    = $('#planList');

function buildPlan() {
  const checked = $$('.planer-place-item input[type=checkbox]:checked');
  const planName = $('#planName').value.trim() || 'แผนการเดินทาง';
  const colors   = ['#e53e3e', '#ed8936', '#48bb78', '#4299e1', '#9f7aea'];

  if (checked.length === 0) {
    showToast('⚠️ กรุณาเลือกสถานที่อย่างน้อย 1 แห่ง');
    return;
  }

  planList.innerHTML = '';
  checked.forEach((chk, i) => {
    const label  = chk.closest('label');
    const name   = label.querySelector('strong').textContent;
    const detail = label.querySelector('small').textContent;
    const li     = document.createElement('li');
    li.className = 'plan-item';
    li.innerHTML = `
      <span class="plan-num" style="background:${colors[i % colors.length]}">${i + 1}</span>
      <div><strong>${name}</strong><small>${detail}</small></div>
    `;
    planList.appendChild(li);
  });

  // Animate new items in
  $$('.plan-item').forEach((item, i) => {
    item.style.opacity = '0';
    item.style.transform = 'translateX(-16px)';
    setTimeout(() => {
      item.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
      item.style.opacity = '1';
      item.style.transform = '';
    }, i * 80);
  });

  showToast(`✅ สร้างแผน "${planName}" เรียบร้อย!`);
}

if (makePlanBtn) makePlanBtn.addEventListener('click', buildPlan);

/* ─── Planer: Download Plan ─────────────────────────────────────── */
const downloadBtn = $('#downloadPlan');

if (downloadBtn) {
  downloadBtn.addEventListener('click', () => {
    const items  = $$('#planList .plan-item strong');
    const name   = $('#planName').value.trim() || 'GAPKHAO Plan';
    const days   = $('.day-btn.active')?.dataset.days || '1';

    if (items.length === 0) {
      showToast('⚠️ กรุณาสร้างแผนก่อน');
      return;
    }

    let text = `🗺️ ${name}\n`;
    text += `📅 ${days} วัน | GAPKHAO Travel Plan\n`;
    text += '─'.repeat(32) + '\n';
    items.forEach((el, i) => { text += `${i + 1}. ${el.textContent}\n`; });
    text += '\nสร้างโดย GAPKHAO · gapkhao.com\nทุกซอยคือเรื่องราวที่รอให้คุณค้นพบ ✨';

    const blob = new Blob([text], { type: 'text/plain;charset=utf-8' });
    const url  = URL.createObjectURL(blob);
    const a    = document.createElement('a');
    a.href = url;
    a.download = `${name.replace(/\s+/g, '_')}.txt`;
    a.click();
    URL.revokeObjectURL(url);
    showToast('📥 ดาวน์โหลดแผนแล้ว!');
  });
}

/* ─── Planer: Share Link ────────────────────────────────────────── */
const shareBtn = $('#shareLink');

if (shareBtn) {
  shareBtn.addEventListener('click', async () => {
    const url = window.location.href.split('#')[0] + '#planer';
    try {
      await navigator.clipboard.writeText(url);
      showToast('🔗 คัดลอกลิงก์แล้ว!');
    } catch {
      showToast('🔗 ' + url);
    }
  });
}

/* ─── Bookmark Button ───────────────────────────────────────────── */
const bookmarkBtn = $('#bookmarkBtn');

if (bookmarkBtn) {
  bookmarkBtn.addEventListener('click', () => {
    bookmarkBtn.classList.toggle('active');
    const saved = bookmarkBtn.classList.contains('active');
    showToast(saved ? '🔖 บันทึกแผนแล้ว!' : '🗑️ ยกเลิกบุ๊กมาร์กแล้ว');
  });
}

/* ─── Play Button (Video) ────────────────────────────────────────── */
$$('.play-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    showToast('▶️ กำลังโหลดวิดีโอ...');
  });
});

/* ─── Smooth scroll for anchor links (same page only) ───────────── */
$$('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', e => {
    const href = anchor.getAttribute('href');
    // Only handle if it's a hash-only link (not a page link with hash)
    if (href.startsWith('#') && !href.includes('.html')) {
      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
      }
    }
  });
});

/* ─── Street Life card hover label ──────────────────────────────── */
// Already handled by CSS — JS isn't needed here.

/* ─── Navbar: logo click goes to home ────────────────────────────── */
// Logo links are now handled by regular href navigation to index.html

/* ─── Init: trigger reveals for elements already in view ─────────── */
window.addEventListener('load', () => {
  $$('.reveal:not(.hero .reveal)').forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight) el.classList.add('visible');
  });
});


/* ─── Find Near Me Buttons (Must-Try Dishes) ────────────────── */
$$('.find-near-btn').forEach(btn => {
  btn.addEventListener('click', (e) => {
    e.preventDefault();
    window.location.href = 'street-food.html';
    showToast('🗺️ กำลังค้นหาร้านใกล้คุณ...');
  });
});
