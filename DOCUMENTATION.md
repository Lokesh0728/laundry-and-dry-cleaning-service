# 📖 LuxeClean Technical Documentation

Detailed technical documentation covering the architectural design, CSS styling engine, JavaScript module structure, routing system, and component guidelines for the **LuxeClean Laundry & Dry Cleaning Web Application**.

---

## 1. System Architecture & Routing Philosophy

The application utilizes a clean, decoupled multi-page structure:

```
[ Root Directory ]
 ├── index.html         <-- Landing page entry point
 ├── 404.html           <-- Root error handler
 ├── README.md          <-- Overview & usage guide
 ├── DOCUMENTATION.md   <-- Technical documentation
 ├── pages/             <-- All application sub-pages
 └── assets/            <-- Centralized static resources (CSS, JS, Images)
```

### Relative Path Specifications

- **Root Level Documents (`index.html`, `404.html`)**:
  - Target sub-pages: `pages/<page-name>.html`
  - Target assets: `assets/<css|js|images>/<filename>`
- **Sub-pages (`pages/*.html`)**:
  - Target root index: `../index.html`
  - Target assets: `../assets/<css|js|images>/<filename>`
  - Target sibling pages: `<sibling-page-name>.html` (e.g., `services.html` from `about.html`)

---

## 2. Design System & CSS Architecture

### 2.1 Tailwind CSS Integration
Tailwind CSS is loaded via CDN with custom brand color extensions defined in the `<head>` configuration block:

```javascript
tailwind.config = {
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#eff6ff',
          100: '#dbeafe',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#0f172a',
        },
        tealAccent: '#0d9488',
      }
    }
  }
}
```

### 2.2 Glassmorphism Utility Classes (`assets/css/style.css`)

Custom glassmorphic container utilities defined in `assets/css/style.css`:

```css
/* Glassmorphic Navigation Bar */
.glass-nav {
  background: rgba(255, 255, 255, 0.75);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border-bottom: 1px solid rgba(226, 232, 240, 0.8);
}

.dark .glass-nav {
  background: rgba(11, 19, 43, 0.85);
  border-bottom: 1px solid rgba(30, 41, 59, 0.8);
}

/* Glassmorphic Content Card */
.glass-card {
  background: rgba(255, 255, 255, 0.65);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
}

.dark .glass-card {
  background: rgba(15, 23, 42, 0.65);
}
```

### 2.3 Dark Theme Engine (`assets/css/dark-mode.css` & `main.js`)

Theme management is executed by toggling the `dark` class on the root `<html>` element:
- Theme preferences persist in `localStorage` under key `luxeclean-theme` (`'dark'` or `'light'`).
- System color preferences (`prefers-color-scheme: dark`) are respected on initial load if no explicit preference is set.

---

## 3. JavaScript Modules & Functionality

### 3.1 `assets/js/main.js`

`main.js` serves as the primary controller for layout interactions across all pages:

1. **`initThemeToggle()`**:
   - Queries all `.theme-toggle-btn` elements across header/footer.
   - Swaps `dark` class on `document.documentElement`.
   - Saves state to `localStorage.setItem('luxeclean-theme', theme)`.

2. **`initMobileMenu()`**:
   - Binds click events to `#mobile-menu-btn` to toggle the visibility of `#mobile-drawer`.
   - Automatically closes drawer when navigating or resizing above breakpoint (`xl`).

3. **`initPostalChecker()`**:
   - Handles doorstep coverage verification forms (`#postal-checker-form`).
   - Validates zip codes against express and standard coverage lists.
   - Dynamically evaluates window location to build correct relative links to `login.html` or `pages/login.html`.

4. **`initFaqAccordion()`**:
   - Manages collapsible question panels on `how-it-works.html`.

### 3.2 `assets/js/dashboard.js`

`dashboard.js` handles state and interactivity within `pages/dashboard.html`:

1. **Tab Navigation Controller**:
   - Switches active views between `#my-orders`, `#book-pickup`, `#addresses`, and `#account-settings`.
   - Updates active styling on sidebar menu items.

2. **URL Hash Routing**:
   - Reads URL hash fragment on initialization (e.g. `dashboard.html#book-pickup`) to automatically focus the requested section.

---

## 4. Component Standards & Accessibility

### HTML Semantic Guidelines
- Single `<h1>` per page denoting primary section purpose.
- Accessible ARIA labels (`aria-label`, `aria-expanded`, `role`) on theme toggles and mobile drawers.
- High contrast color choices compliant with WCAG AA guidelines in both Light and Dark modes.
- Descriptive `title` and `alt` attributes on interactive icons and brand assets.

---

## 5. Deployment & Maintenance Checklist

When adding new pages or deploying updates to production:

1. **New Pages**: Place new HTML files inside `pages/` (unless it is a root index or fallback like `404.html`).
2. **Asset Paths**: Use relative paths (`assets/...` for root pages, `../assets/...` for sub-pages).
3. **Meta Tags**: Ensure page title, meta description, and favicon link are present in `<head>`.
4. **Header Navigation**: Copy header component template from existing page and update the `nav-link active` class for current page indicator.
5. **Static Hosting**: Compatible with Netlify, Vercel, AWS S3 + CloudFront, GitHub Pages, or any standard web server (Nginx/Apache).
