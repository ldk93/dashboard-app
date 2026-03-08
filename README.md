# Personal Dashboard PWA

A lightweight **Progressive Web App (PWA)** that provides a customizable personal dashboard.
The app currently includes a **Breathing Exercise tool** and a framework for adding additional widgets such as financial indicators, health metrics, and daily summaries.

The project is designed to be simple, fast, and installable on an iPhone as a home-screen app without going through the App Store.

---

## Features

### Breathing Exercise

* Guided inhale / exhale animation
* Selectable breathing presets
* Runs entirely in the browser
* Works offline after first load

### Dashboard Layout

* Card-based interface
* Tap a card to open a module
* Expandable architecture for adding new tools

### Progressive Web App

* Installable from Safari (“Add to Home Screen”)
* Full screen app experience
* Offline caching using a service worker
* Instant updates without App Store submissions

---

## Planned Modules

The dashboard is designed to support additional widgets such as:

* Treasury yields
* VIX volatility index
* Oil price
* US Dollar strength
* Credit spreads
* Health metrics
* Daily summary notifications

---

## Project Structure

```
dashboard-app
│
├── index.html          # Dashboard home screen
├── breathing.html      # Breathing exercise module
├── style.css           # Global styles
├── app.js              # Navigation and PWA registration
├── manifest.json       # PWA configuration
└── service-worker.js   # Offline caching
```

---

## How It Works

The app uses a **card-based dashboard**.

```
Dashboard
   ↓
Select module
   ↓
Open tool
```

Current module:

```
Breathing Exercise
```

Future modules can be added as additional pages and linked from the dashboard.

---

## Running the App Locally

Open the project folder and launch the dashboard:

```
index.html
```

Recommended method is using a local development server such as **Live Server** in Visual Studio Code.

Steps:

1. Open project in Visual Studio Code
2. Install the Live Server extension
3. Right-click `index.html`
4. Select **Open with Live Server**

The app will launch in your browser.

---

## Hosting the App

This project can be hosted using static hosting services such as:

* GitHub Pages
* Netlify
* Vercel

Once deployed, the app will be accessible from any device.

Example URL format:

```
https://yourusername.github.io/dashboard-app
```

---

## Installing on iPhone

1. Open the hosted URL in **Safari**
2. Tap the **Share** button
3. Tap **Add to Home Screen**

The dashboard will install like a native app.

Features when installed:

* Full screen mode
* No browser UI
* Fast launch from home screen
* Offline support for cached pages

---

## Offline Support

The service worker caches key files:

* index.html
* breathing.html
* style.css
* app.js

This allows the app interface and breathing tool to continue working without internet access after the first visit.

Live data widgets will require an internet connection.

---

## Technology

This project uses basic web technologies:

* HTML
* CSS
* JavaScript
* Progressive Web App APIs

No backend server is required.

---

## Future Improvements

Potential upgrades:

* Continuous breathing cycles
* Breathing session history
* Dashboard widget system
* Live financial market data
* Scheduled notifications
* Health integrations

---

## License

This project is intended for personal use and experimentation.
