# Trading Signal Tracker Application

This is a full-stack web application built to track trading signals with live Binance price integration and automated status logic.

## Technical Stack
- **Frontend:** React, Vite, CSS
- **Backend:** Node.js, Express
- **Database:** (Mention your DB here, e.g., PostgreSQL/SQLite)

## Features
- **Signal Creation:** Add trading pairs with Direction (BUY/SELL), Entry Price, Stop Loss, and Target Price.
- **Validation:** Automated logic to ensure SL/TP prices are valid based on the chosen direction.
- **Live Integration:** Fetches real-time price updates via Binance API.
- **Responsive Dashboard:** View all active signals with auto-refresh functionality.

## How to Run
1. **Clone the repository:** `git clone <https://github.com/vanshagrawalscse/Trading-Signal-Tracker>`
2. **Setup Backend:** - Navigate to `Backened/` folder.
   - Run `npm install` and then `npm start`.
3. **Setup Frontend:** - Navigate to `Frontend/frontend/` folder.
   - Run `npm install` and then `npm run dev`.

## Architecture Explanation
This application follows a **separation of concerns** principle. The **Backend** acts as a service layer handling Binance API calls and signal validation logic, while the **Frontend** provides a reactive interface using React components to display status updates and live price monitoring.