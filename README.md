# ACRO ZENITH

## Project Overview
Professional acrobatic and calisthenics training platform with comprehensive exercise libraries and structured training programs.

## Live URLs
- **Production**: https://c615c89d.acro-zenith.pages.dev
- **GitHub**: https://github.com/bitcoincatchers/zenit

## Features
### ✅ Completed
- **Exercise Library** (60 exercises)
  - 14 new exercises added (including HANDSTAND PROGRESSION, HANDSTAND FEEDBACK, BACKROLL ELBOWS)
  - Category filters: Acrobatics, Handstands, Flow, Macaco, Core, Legs, L-sit, Flexibility, Cartwheels
  - "Most Recent" filter for new additions
  - Difficulty levels: Beginner, Intermediate, Advanced
  
- **Conditioning Library** (92 exercises)
  - 30 ABS exercises
  - 29 Push Ups exercises
  - 25 Squats exercises
  - 8 new exercises added (including HANDSTAND PROGRESSION, HANDSTAND FEEDBACK, BACKROLL ELBOWS)
  - Category filters

- **5-Day Training Program**
  - Foundation Week with 5 complete training days
  - 37 unique exercises across all days
  - Sets and reps for each exercise
  - Day completion tracking (localStorage)

- **Private Library** 🆕
  - Add videos from both libraries
  - Individual video removal
  - "Clear All" functionality
  - Persistent storage (localStorage)
  - Video counter

- **Video Player**
  - Autoplay in modal
  - Playback speed control (0.5x to 2x)
  - YouTube embedded player
  - Support for both horizontal and vertical videos

- **UI/UX**
  - Professional black & white design with orange accents
  - Responsive grid layouts
  - Toast notifications
  - "NEW" badges for recent additions
  - Hover effects and animations

## Data Architecture
- **Storage**: 100% Hardcoded (no database)
- **Data Persistence**: LocalStorage for Private Library and day completion
- **Data Sources**: 
  - `HARDCODED_EXERCISES`: 60 exercises from Exercise Library
  - `HARDCODED_CONDITIONING`: 89 exercises from Conditioning Library
  - `HARDCODED_PROGRAM`: 5-day training program structure

## Latest Updates (Today)
- ✅ Added 3 new exercises to both libraries:
  - HANDSTAND PROGRESSION
  - HANDSTAND FEEDBACK
  - BACKROLL ELBOWS
- ✅ Project restored to GitHub repository
- ✅ Complete hardcoded data implementation
- ✅ Private Library functionality

## Tech Stack
- **Frontend**: Vanilla JavaScript + Tailwind CSS
- **Backend**: Hono Framework (Cloudflare Workers)
- **Deployment**: Cloudflare Pages
- **Version Control**: GitHub

## Deployment
- **Platform**: Cloudflare Pages
- **Status**: ✅ Active
- **Last Updated**: 2025-11-28

## Development Commands
```bash
# Install dependencies
npm install

# Build project
npm run build

# Start development server (sandbox)
pm2 start ecosystem.config.cjs

# Deploy to production
npm run deploy

# Test local server
npm run test
```

## Project Structure
```
webapp/
├── src/
│   └── index.tsx           # Hono backend
├── public/
│   └── static/
│       └── app.js          # Frontend with all hardcoded data
├── dist/                   # Build output
├── ecosystem.config.cjs    # PM2 configuration
├── wrangler.jsonc          # Cloudflare configuration
└── package.json            # Dependencies and scripts
```

## Next Steps
- Add more exercises to libraries
- Implement workout history tracking
- Add video filtering by difficulty
- Create custom workout builder
- Add progress photos feature

---

**Created with 🔥 by Alex Trickoso**
