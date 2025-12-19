# Claussal.ai - Landing Page

The official landing page for **Claussal.ai**, the autonomous legal agent for modern legal teams. This project showcases the platform's ability to review, redline, and negotiate contracts autonomously with state-of-the-art precision.

## 🎨 Design System: "Matte Luxury"

The UI follows a strict **"Matte Luxury"** aesthetic:

- **Colors**: Deep "Matte Emerald" (`#1F4E3D`) and "Burnt Orange" (`#C1440E`) against a stark white/alabaster background.
- **Typography**: Playfair Display (Serif) for headings, Inter (Sans) for UI text, and Courier New for code/legal clauses.
- **Visuals**: Zero-radius corners, subtle borders, and no drop shadows (flat, high-end print feel).

## 🛠 Tech Stack

- **Framework**: [Next.js 14](https://nextjs.org/) (App Router)
- **Styling**: CSS Modules (Scoped styles per component)
- **Animation**: [Framer Motion](https://www.framer.com/motion/) (Aurora effects, staggering, interactions)
- **Icons**: `react-icons` (Material Design)
- **Analytics**: PostHog (Client-side instrumentation)

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm

### Installation

```bash
npm install
```

### Run Locally

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the landing page.

## 📂 Project Structure

```
src/
├── app/                 # Next.js App Router
│   ├── layout.js        # Global layout & fonts
│   └── page.js          # Main landing page composition
├── components/          # React Components
│   ├── Hero.js                 # Hero section with animated mockup
│   ├── Workflow.js             # 3-Step timeline
│   ├── CoreIntelligence.js     # Bento grid of features
│   ├── ComplianceShield.js     # "Never miss a renewal" section
│   ├── ComparisonTable.js      # Feature comparison
│   └── ui/                     # Shared UI atoms (Buttons, SectionWrappers)
└── css/                 # Global styles
    └── globals.css      # Design tokens & resets
```

## ✨ Key Features

- **Aurora Hero**: Custom CSS-based aurora background animation.
- **Interactive Mockups**: "Living" UI demonstrations built with Framer Motion (not static images).
- **Responsive Layout**: Fully optimized for Desktop, Tablet, and Mobile.
- **Accessibility**: ARIA labels and semantic HTML structure.

## 📝 License

Proprietary software. All rights reserved by Claussal.ai.
