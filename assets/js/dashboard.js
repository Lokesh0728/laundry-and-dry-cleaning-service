/* LuxeClean - Customer Dashboard JavaScript Module */

// Tab switching logic for Dashboard
function switchDashboardTab(tabId) {
  const allTabs = document.querySelectorAll('.dashboard-tab-content');
  allTabs.forEach(tab => tab.classList.add('hidden'));

  const targetTab = document.getElementById('tab-content-' + tabId);
  if (targetTab) {
    targetTab.classList.remove('hidden');
  }

  const navItems = document.querySelectorAll('.tab-nav-item');
  navItems.forEach(item => {
    item.classList.remove('bg-blue-600', 'text-white', 'shadow-md', 'active');
    item.classList.add('hover:bg-slate-900', 'hover:text-white');
  });

  const activeNavItem = document.getElementById('tab-nav-' + tabId);
  if (activeNavItem) {
    activeNavItem.classList.add('bg-blue-600', 'text-white', 'shadow-md', 'active');
  }

  // Close mobile drawer on item click
  const sidebar = document.getElementById('dashboard-sidebar');
  if (sidebar && window.innerWidth < 1024) {
    sidebar.classList.add('-translate-x-full');
  }
}

// Mobile Sidebar Drawer & URL Hash Initialization
document.addEventListener('DOMContentLoaded', () => {
  const openBtn = document.getElementById('dashboard-sidebar-open');
  const closeBtn = document.getElementById('dashboard-sidebar-close');
  const sidebar = document.getElementById('dashboard-sidebar');

  if (openBtn && sidebar) {
    openBtn.addEventListener('click', () => sidebar.classList.remove('-translate-x-full'));
  }
  if (closeBtn && sidebar) {
    closeBtn.addEventListener('click', () => sidebar.classList.add('-translate-x-full'));
  }

  // Read Hash if provided in URL (e.g. dashboard.html#my-orders)
  const hash = window.location.hash.replace('#', '');
  if (hash && document.getElementById('tab-content-' + hash)) {
    switchDashboardTab(hash);
  }
});

// Logout Modal Helpers
function triggerLogoutModal() {
  const modal = document.getElementById('logout-modal');
  if (modal) modal.classList.remove('hidden');
}

function closeLogoutModal() {
  const modal = document.getElementById('logout-modal');
  if (modal) modal.classList.add('hidden');
}
