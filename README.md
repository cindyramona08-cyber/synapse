# Synapse AI - Frontend Client

Clean starter boilerplate for an AI Todo, Habit & Streak Tracking, and Smart Calendar frontend application in **Next.js (App Router, JavaScript)**. Decoupled from backend logic and prepared for a separate **NestJS** backend.

---

## 📂 Project Structure

```text
synapse/
├── app/
│   ├── layout.jsx            # Root layout with <Navbar />
│   ├── page.jsx              # Landing Page (/)
│   ├── dashboard/
│   │   └── page.jsx          # Dashboard (/dashboard)
│   ├── tasks/
│   │   └── page.jsx          # Tasks (/tasks)
│   ├── habits/
│   │   └── page.jsx          # Habits & Streaks (/habits)
│   ├── calendar/
│   │   └── page.jsx          # Calendar (/calendar)
│   ├── settings/
│   │   └── page.jsx          # Settings (/settings)
│   └── globals.css           # Global Tailwind CSS
├── components/
│   └── Navbar.jsx            # Shared navigation bar
├── services/                 # API service placeholders for NestJS backend
│   ├── api.js
│   ├── tasks.service.js
│   ├── habits.service.js
│   ├── calendar.service.js
│   ├── ai.service.js
│   └── settings.service.js
├── lib/
│   └── utils.js              # Utility helpers
├── jsconfig.json             # Path aliases (@/*)
├── next.config.mjs           # Next.js configuration in JS
└── package.json
```

---

## 🚀 Running the Project

```bash
npm run dev
# or
npm.cmd run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.
