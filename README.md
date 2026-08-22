# 🧼 LuxeClean — Laundry, Elevated | Doorstep Garment Care

> **"Care Beyond Clean."** — A modern, high-performance, responsive multi-page web application for a luxury doorstep laundry & dry cleaning service.

---

## 🚀 Overview

**LuxeClean** is a full-featured, visually stunning web application designed for premium garment care, laundry, dry cleaning, and fabric maintenance services. Built with modern HTML5, Tailwind CSS, custom glassmorphism styles, and vanilla JavaScript, it delivers a seamless user experience across mobile, tablet, and desktop devices.

---

## ✨ Key Features

- 🌓 **Dynamic Dark Mode & RTL Support**: Seamlessly toggle between dark and light themes with state persistence.
- 📍 **Postal Code Coverage Checker**: Real-time interactive lookup in `main.js` to determine express/standard doorstep pickup availability.
- 🧮 **Interactive Pricing Calculator**: Real-time total estimator for laundry items, dry cleaning, pressing, and add-on services on `pricing.html`.
- 📊 **Customer Portal & Dashboard**: Tabbed dashboard (`dashboard.html`) for order tracking, scheduling pickups, and managing garment care preferences.
- 🎨 **Glassmorphism UI Design**: Ultra-modern frosted glass navbars, cards, and modal components.
- 📱 **Fully Responsive Layout**: Built mobile-first with drawer navigation for smartphones and tablets.
- 🚨 **Custom 404 Error Page**: Laundry-themed, interactive error handling page situated at root.

---

## 📁 Project Directory Structure

```text
laundry-and-dry-cleaning-service/
├── 📄 index.html                # Main Landing Page (Home One — Modern)
├── 📄 404.html                  # Custom 404 Error Page
├── 📄 README.md                 # Project Overview & Setup Guide
├── 📄 DOCUMENTATION.md          # Comprehensive Architecture & Technical Documentation
├── 📁 pages/                    # Sub-pages Directory
│   ├── 📄 about.html            # About Us & Sustainability Story
│   ├── 📄 coverage.html         # Coverage Area & Postal Code Checker
│   ├── 📄 dashboard.html        # Customer Dashboard & Order Management
│   ├── 📄 how-it-works.html     # Step-by-Step Guide & FAQ
│   ├── 📄 index2.html           # Home Two (Classic Full-Hero Layout)
│   ├── 📄 login.html            # Account Authentication & Order Tracker
│   ├── 📄 pricing.html          # Interactive Pricing & Cost Calculator
│   └── 📄 services.html         # Service Catalog & Fabric Care Guide
└── 📁 assets/                   # Static Assets Directory
    ├── 📁 css/                  # Styling & Theme Sheets
    │   ├── 📄 style.css         # Glassmorphism & Custom Core Styles
    │   ├── 📄 dark-mode.css     # Dark Theme Variables & Styles
    │   └── 📄 rtl.css           # Right-to-Left Layout Adjustments
    ├── 📁 js/                   # Client-side Logic
    │   ├── 📄 main.js           # Navigation, Dark Mode, Zip Checker, FAQ Toggles
    │   └── 📄 dashboard.js      # Dashboard Tabs & Order State Handlers
    └── 📁 images/               # Favicon & Vector Icons
        └── 📄 favicon.svg       # Brand SVG Favicon
```

---

## 🗺️ Page Sitemap & Navigation Matrix

| Page Name | File Path | Description |
|---|---|---|
| **Home (Modern)** | [index.html](file:///d:/second-set-with-dashboard/laundry-and-dry-cleaning-service/index.html) | Primary landing page with hero banner, service overview, and testimonials. |
| **Home (Classic)** | [pages/index2.html](file:///d:/second-set-with-dashboard/laundry-and-dry-cleaning-service/pages/index2.html) | Alternative classic full-hero layout with direct pickup scheduler. |
| **About Us** | [pages/about.html](file:///d:/second-set-with-dashboard/laundry-and-dry-cleaning-service/pages/about.html) | Brand story, eco-friendly solvents, and sustainability commitments. |
| **Services** | [pages/services.html](file:///d:/second-set-with-dashboard/laundry-and-dry-cleaning-service/pages/services.html) | Complete catalog: Wash & Fold, Dry Cleaning, Steam Press, Special Care. |
| **Pricing** | [pages/pricing.html](file:///d:/second-set-with-dashboard/laundry-and-dry-cleaning-service/pages/pricing.html) | Tiered pricing plans and live interactive garment cost calculator. |
| **How It Works** | [pages/how-it-works.html](file:///d:/second-set-with-dashboard/laundry-and-dry-cleaning-service/pages/how-it-works.html) | 4-step doorstep pickup process, video overview, and searchable FAQ. |
| **Coverage Area** | [pages/coverage.html](file:///d:/second-set-with-dashboard/laundry-and-dry-cleaning-service/pages/coverage.html) | Interactive postal code coverage map and express service zone lookup. |
| **Dashboard** | [pages/dashboard.html](file:///d:/second-set-with-dashboard/laundry-and-dry-cleaning-service/pages/dashboard.html) | Customer account panel, active order timeline, pickup scheduler. |
| **Login / Sign In** | [pages/login.html](file:///d:/second-set-with-dashboard/laundry-and-dry-cleaning-service/pages/login.html) | User authentication form and quick tracking reference. |
| **404 Not Found** | [404.html](file:///d:/second-set-with-dashboard/laundry-and-dry-cleaning-service/404.html) | Laundry-themed 404 page with quick navigation back home. |

---

## 🛠️ Technology Stack

- **Markup**: HTML5 Semantic Architecture
- **Styling**: Tailwind CSS via CDN + Custom Glassmorphism CSS (`assets/css/`)
- **Scripting**: Modular Vanilla JavaScript (`assets/js/main.js`, `assets/js/dashboard.js`)
- **Icons & Graphics**: Inline SVG & Custom Vector Favicon
- **Typography**: Inter / Outfit Web Fonts

---

## ⚙️ Running Locally

Because this application relies on standard web technologies, no build process or node server is strictly required.

1. Clone or download the workspace directory.
2. Open `index.html` directly in any web browser (Google Chrome, Mozilla Firefox, Safari, Microsoft Edge).
3. Alternatively, launch a local HTTP server for optimal relative path handling:
   ```bash
   # Using Python 3
   python -m http.server 8000
   ```
   Then navigate to `http://localhost:8000`.

---

## 📄 License & Attribution

© 2026 **LuxeClean Garment Care**. All rights reserved.
