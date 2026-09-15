/**
 * LuxeClean - Doorstep Laundry & Dry Cleaning Service
 * Main JavaScript File
 */

document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initDirection();
  initMobileMenu();
  initStickyHeader();
  initPriceCalculator();
  initPostalChecker();
  initOrderTracker();
  initFaqAccordion();
  initFaqViewMore();
});

/* ==========================================
   1. Dark Mode Theme Switcher
   ========================================== */
function initTheme() {
  const themeToggleBtns = document.querySelectorAll('.theme-toggle-btn');
  const storedTheme = localStorage.getItem('theme');
  const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

  let currentTheme = storedTheme || (systemPrefersDark ? 'dark' : 'light');

  applyTheme(currentTheme);

  themeToggleBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      currentTheme = document.documentElement.classList.contains('dark') ? 'light' : 'dark';
      localStorage.setItem('theme', currentTheme);
      applyTheme(currentTheme);
    });
  });
}

function applyTheme(theme) {
  const iconsSun = document.querySelectorAll('.icon-sun');
  const iconsMoon = document.querySelectorAll('.icon-moon');
  const themeLabels = document.querySelectorAll('.theme-label');

  if (theme === 'dark') {
    document.documentElement.classList.add('dark');
    iconsSun.forEach(el => el.classList.remove('hidden'));
    iconsMoon.forEach(el => el.classList.add('hidden'));
    themeLabels.forEach(el => el.textContent = 'Light');
  } else {
    document.documentElement.classList.remove('dark');
    iconsSun.forEach(el => el.classList.add('hidden'));
    iconsMoon.forEach(el => el.classList.remove('hidden'));
    themeLabels.forEach(el => el.textContent = 'Dark');
  }
}

/* ==========================================
   2. RTL (Right-to-Left) Switcher
   ========================================== */
function initDirection() {
  const rtlToggleBtns = document.querySelectorAll('.rtl-toggle-btn');
  const storedDir = localStorage.getItem('dir') || 'ltr';

  applyDirection(storedDir);

  rtlToggleBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const newDir = document.documentElement.getAttribute('dir') === 'rtl' ? 'ltr' : 'rtl';
      localStorage.setItem('dir', newDir);
      applyDirection(newDir);
    });
  });
}

function applyDirection(dir) {
  document.documentElement.setAttribute('dir', dir);
  const rtlLabels = document.querySelectorAll('.rtl-label');

  rtlLabels.forEach(label => {
    label.textContent = dir === 'rtl' ? 'LTR' : 'RTL';
  });
}

/* ==========================================
   3. Sticky Glass Header & Mobile Menu
   ========================================== */
function initStickyHeader() {
  const header = document.querySelector('.header-nav');
  if (!header) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      header.classList.add('shadow-lg', 'py-2');
      header.classList.remove('py-4');
    } else {
      header.classList.remove('shadow-lg');
      header.classList.add('py-4');
      header.classList.remove('py-2');
    }
  });
}

function initMobileMenu() {
  const menuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  const closeBtn = document.getElementById('mobile-menu-close');

  if (menuBtn && mobileMenu) {
    menuBtn.addEventListener('click', () => {
      mobileMenu.classList.remove('hidden');
    });
  }

  if (closeBtn && mobileMenu) {
    closeBtn.addEventListener('click', () => {
      mobileMenu.classList.add('hidden');
    });
  }
}

/* ==========================================
   4. Interactive Price Calculator
   ========================================== */
function initPriceCalculator() {
  const calcForm = document.getElementById('price-calc-form');
  if (!calcForm) return;

  const kgSlider = document.getElementById('calc-kg');
  const kgVal = document.getElementById('calc-kg-val');

  const countShirts = document.getElementById('calc-shirts');
  const countSuits = document.getElementById('calc-suits');
  const countDresses = document.getElementById('calc-dresses');
  const countJackets = document.getElementById('calc-jackets');

  const expressCheckbox = document.getElementById('calc-express');
  const totalDisplay = document.getElementById('calc-total');

  function calculate() {
    let total = 0;

    // Wash & Fold by KG
    if (kgSlider && kgVal) {
      const kg = parseInt(kgSlider.value) || 0;
      kgVal.textContent = `${kg} kg`;
      total += kg * 3.50; // $3.50 per kg
    }

    // Per item pricing
    if (countShirts) total += (parseInt(countShirts.value) || 0) * 3.75;
    if (countSuits) total += (parseInt(countSuits.value) || 0) * 14.50;
    if (countDresses) total += (parseInt(countDresses.value) || 0) * 16.00;
    if (countJackets) total += (parseInt(countJackets.value) || 0) * 12.00;

    // Express multiplier (+30%)
    if (expressCheckbox && expressCheckbox.checked) {
      total *= 1.30;
    }

    if (totalDisplay) {
      totalDisplay.textContent = `$${total.toFixed(2)}`;
    }
  }

  // Event Listeners
  [kgSlider, countShirts, countSuits, countDresses, countJackets, expressCheckbox].forEach(elem => {
    if (elem) {
      elem.addEventListener('input', calculate);
      elem.addEventListener('change', calculate);
    }
  });

  // Quantity stepper buttons
  document.querySelectorAll('.qty-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = btn.getAttribute('data-target');
      const action = btn.getAttribute('data-action');
      const input = document.getElementById(targetId);

      if (input) {
        let val = parseInt(input.value) || 0;
        if (action === 'increase') val++;
        if (action === 'decrease' && val > 0) val--;
        input.value = val;
        calculate();
      }
    });
  });

  calculate();
}


document.addEventListener('DOMContentLoaded', () => {
  // 1. Set your base pricing here
  const PRICES = {
    washAndFoldPerKg: 60,   // ₹60 per KG
    shirtDryClean: 100,     // ₹100 per shirt
    suitDryClean: 392,      // ₹392 per suit
    expressDelivery: 99     // ₹99 for 24h delivery
  };

  // 2. Get the HTML elements by their IDs
  const weightInput = document.getElementById('calc-weight');
  const weightValDisplay = document.getElementById('calc-weight-val');
  const shirtsInput = document.getElementById('calc-shirts');
  const suitsInput = document.getElementById('calc-suits');
  const expressCheckbox = document.getElementById('calc-express');
  const totalDisplay = document.getElementById('calc-total');

  // 3. Define the calculation function
  function calculateTotal() {
    // Parse the current values from the inputs
    const weight = parseFloat(weightInput.value) || 0;
    const shirts = parseInt(shirtsInput.value) || 0;
    const suits = parseInt(suitsInput.value) || 0;
    const isExpress = expressCheckbox.checked;

    // Update the KG text display above the slider
    weightValDisplay.textContent = `${weight} KG`;

    // Calculate the total cost
    let total = 0;
    total += weight * PRICES.washAndFoldPerKg;
    total += shirts * PRICES.shirtDryClean;
    total += suits * PRICES.suitDryClean;

    // Add express delivery fee if checked
    if (isExpress) {
      total += PRICES.expressDelivery;
    }

    // Update the total price display on the screen
    totalDisplay.textContent = `₹${total}`;
  }

  // 4. Attach event listeners so the total updates immediately when a user interacts
  weightInput.addEventListener('input', calculateTotal);
  shirtsInput.addEventListener('input', calculateTotal); // Fires when number changes
  suitsInput.addEventListener('input', calculateTotal);
  expressCheckbox.addEventListener('change', calculateTotal); // Fires when checked/unchecked

  // 5. Run the calculation once on load to ensure UI matches the default input values
  calculateTotal();
});

/* ==========================================
   5. Postal Code Serviceability Checker
   ========================================== */
function initPostalChecker() {
  const checkerForm = document.getElementById('postal-checker-form');
  const resultDiv = document.getElementById('postal-result');
  const zipInput = document.getElementById('postal-input');

  if (!checkerForm || !resultDiv || !zipInput) return;

  const expressZips = ['90210', '10001', '30301', '75001', '60601', '94102', '33139', '77002'];
  const standardZips = ['90211', '10002', '30302', '75002', '60602', '94103', '33140', '77003'];

  checkerForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const code = zipInput.value.trim();

    if (!code) {
      resultDiv.innerHTML = `<div class="p-4 rounded-xl bg-amber-50 dark:bg-amber-900/30 text-amber-800 dark:text-amber-300 text-sm font-medium border border-amber-200 dark:border-amber-800">Please enter a valid postal/zip code.</div>`;
      return;
    }

    const targetLogin = window.location.pathname.includes('/pages/') ? 'login.html' : 'pages/login.html';

    if (expressZips.includes(code)) {
      resultDiv.innerHTML = `
        <div class="p-4 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 text-emerald-800 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800/50 space-y-2">
          <div class="flex items-center space-x-2 font-bold text-base">
            <svg class="w-5 h-5 text-emerald-600 dark:text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
            <span>Express 12h & 24h Doorstep Pickup Available!</span>
          </div>
          <p class="text-xs text-emerald-700 dark:text-emerald-400">Postal code <strong>${code}</strong> is inside our Prime VIP Coverage Zone. Free doorstep collection & delivery is enabled.</p>
          <a href="${targetLogin}" class="inline-block mt-2 px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg text-xs font-semibold transition">Schedule Pickup Now</a>
        </div>
      `;
    } else if (standardZips.includes(code) || code.length >= 4) {
      resultDiv.innerHTML = `
        <div class="p-4 rounded-xl bg-blue-50 dark:bg-blue-950/40 text-blue-800 dark:text-blue-300 border border-blue-200 dark:border-blue-800/50 space-y-2">
          <div class="flex items-center space-x-2 font-bold text-base">
            <svg class="w-5 h-5 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
            <span>Standard Doorstep Pickup Available (24h Turnaround)</span>
          </div>
          <p class="text-xs text-blue-700 dark:text-blue-400">Postal code <strong>${code}</strong> is covered by our daily pickup valets between 8 AM and 8 PM.</p>
          <a href="${targetLogin}" class="inline-block mt-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-xs font-semibold transition">Schedule Pickup Now</a>
        </div>
      `;
    } else {
      resultDiv.innerHTML = `
        <div class="p-4 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-700 space-y-2">
          <div class="font-bold text-sm">Zone Expansion Requested</div>
          <p class="text-xs text-slate-600 dark:text-slate-400">Postal code <strong>${code}</strong> is currently outside our direct valet route, but we are expanding rapidly! Leave your email below to get notified when we launch in your block.</p>
        </div>
      `;
    }
  });
}

/* ==========================================
   6. Order Status Tracker Demo
   ========================================== */
function initOrderTracker() {
  const trackForm = document.getElementById('order-tracker-form');
  const trackResult = document.getElementById('order-tracker-result');

  if (!trackForm || !trackResult) return;

  trackForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const orderIdInput = document.getElementById('order-id-input');
    const orderId = orderIdInput ? orderIdInput.value.trim().toUpperCase() : 'LX-8942';

    trackResult.innerHTML = `
      <div class="glass-card rounded-2xl p-6 border border-blue-100 dark:border-blue-900 space-y-6 animate-fadeIn">
        <div class="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-slate-200 dark:border-slate-800">
          <div>
            <span class="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">Order Reference</span>
            <h4 class="text-xl font-bold text-slate-900 dark:text-white">#${orderId || 'LX-8942'}</h4>
          </div>
          <div class="text-right">
            <span class="px-3 py-1 rounded-full text-xs font-bold bg-amber-100 dark:bg-amber-900/40 text-amber-700 dark:text-amber-300 border border-amber-300 dark:border-amber-700">In Eco-Cleaning Stage</span>
            <p class="text-xs text-slate-500 dark:text-slate-400 mt-1">Est. Delivery: Tomorrow, 5:00 PM</p>
          </div>
        </div>

        <!-- Progress Timeline -->
        <div class="relative pl-6 space-y-6 border-l-2 border-slate-200 dark:border-slate-700 ml-2">
          <!-- Step 1 -->
          <div class="relative">
            <div class="absolute -left-[31px] top-0 w-6 h-6 rounded-full bg-emerald-500 text-white flex items-center justify-center text-xs font-bold shadow-md">✓</div>
            <div class="font-bold text-slate-900 dark:text-white text-sm">Doorstep Pickup Completed</div>
            <div class="text-xs text-slate-500 dark:text-slate-400">Collected by Valet Alex (Today, 9:15 AM)</div>
          </div>
          <!-- Step 2 -->
          <div class="relative">
            <div class="absolute -left-[31px] top-0 w-6 h-6 rounded-full bg-emerald-500 text-white flex items-center justify-center text-xs font-bold shadow-md">✓</div>
            <div class="font-bold text-slate-900 dark:text-white text-sm">Fabric Tagging & Stain Inspection</div>
            <div class="text-xs text-slate-500 dark:text-slate-400">Barcoded & Inspected at Hub (Today, 11:30 AM)</div>
          </div>
          <!-- Step 3 -->
          <div class="relative">
            <div class="absolute -left-[31px] top-0 w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center text-xs font-bold shadow-md animate-pulse">3</div>
            <div class="font-bold text-blue-600 dark:text-blue-400 text-sm">Organic Eco-Cleaning & Solvent Bath</div>
            <div class="text-xs text-slate-500 dark:text-slate-400">Currently processing in Master Studio</div>
          </div>
          <!-- Step 4 -->
          <div class="relative opacity-50">
            <div class="absolute -left-[31px] top-0 w-6 h-6 rounded-full bg-slate-300 dark:bg-slate-700 text-slate-600 dark:text-slate-400 flex items-center justify-center text-xs font-bold">4</div>
            <div class="font-bold text-slate-900 dark:text-white text-sm">Steam Pressing & Quality Check</div>
            <div class="text-xs text-slate-500 dark:text-slate-400">Scheduled (Tomorrow, 10:00 AM)</div>
          </div>
          <!-- Step 5 -->
          <div class="relative opacity-50">
            <div class="absolute -left-[31px] top-0 w-6 h-6 rounded-full bg-slate-300 dark:bg-slate-700 text-slate-600 dark:text-slate-400 flex items-center justify-center text-xs font-bold">5</div>
            <div class="font-bold text-slate-900 dark:text-white text-sm">Out For Doorstep Delivery</div>
            <div class="text-xs text-slate-500 dark:text-slate-400">Scheduled (Tomorrow, 5:00 PM)</div>
          </div>
        </div>
      </div>
    `;
  });
}

/* ==========================================
   7. FAQ Accordion Toggle
   ========================================== */
function initFaqAccordion() {
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach(item => {
    item.addEventListener('click', (e) => {
      const answer = item.querySelector('.faq-answer') || item.querySelector('.faq-content');
      const icon = item.querySelector('.faq-icon');

      if (!answer) return;

      const isCurrentlyHidden = answer.classList.contains('hidden');

      // Close all other faqs in the same container
      const parentContainer = item.parentElement;
      if (parentContainer) {
        parentContainer.querySelectorAll('.faq-item').forEach(sibling => {
          const siblingAnswer = sibling.querySelector('.faq-answer') || sibling.querySelector('.faq-content');
          const siblingIcon = sibling.querySelector('.faq-icon');
          if (siblingAnswer && sibling !== item) {
            siblingAnswer.classList.add('hidden');
          }
          if (siblingIcon && sibling !== item) {
            siblingIcon.textContent = '+';
            siblingIcon.classList.remove('rotate-180');
          }
        });
      }

      // Toggle current FAQ
      if (isCurrentlyHidden) {
        answer.classList.remove('hidden');
        if (icon) {
          icon.textContent = '−';
          icon.classList.add('rotate-180');
        }
      } else {
        answer.classList.add('hidden');
        if (icon) {
          icon.textContent = '+';
          icon.classList.remove('rotate-180');
        }
      }
    });
  });
}

/* ==========================================
   8. FAQ View More / View Less Toggle
   ========================================== */
function initFaqViewMore() {
  const viewMoreBtn = document.getElementById('faq-view-more-btn');
  const moreContainer = document.getElementById('faq-more-container');

  if (viewMoreBtn && moreContainer) {
    viewMoreBtn.addEventListener('click', (e) => {
      e.preventDefault();
      const isHidden = moreContainer.classList.contains('hidden');
      if (isHidden) {
        moreContainer.classList.remove('hidden');
        viewMoreBtn.innerHTML = `
          <span>View Fewer Questions</span>
          <svg class="w-4 h-4 rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
        `;
      } else {
        moreContainer.classList.add('hidden');
        viewMoreBtn.innerHTML = `
          <span>View More Questions</span>
          <svg class="w-4 h-4 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
        `;
      }
    });
  }
}

