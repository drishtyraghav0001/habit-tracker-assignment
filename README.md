# HabitFlow - Professional Habit Tracker

A modern, feature-rich habit tracking application built with React + Vite. Track your daily habits, build streaks, and achieve consistency with a beautiful, intuitive interface.

## ✨ Features

### Core Features
- **4 Professional Pages**: Welcome, Dashboard, Habits Management, and Insights
- **Beautiful UI**: Modern design with warm color scheme and smooth animations
- **Daily Dashboard**: Quick overview with progress metrics and today's checklist
- **Habit Management**: Add, complete, and delete habits with ease
- **Streak Tracking**: Monitor your best streaks and stay motivated
- **Analytics & Insights**: View 7-day completion patterns and performance metrics
- **Local Storage**: All data persists in your browser automatically

### Dashboard Features
- **Real-time Progress**: See completed habits vs. total habits
- **Motivational Messages**: Daily inspiration to keep you on track
- **Completion Badges**: Visual feedback for completed habits
- **Quick Actions**: Fast access to add habits or view insights
- **Performance Metrics**: Track streaks, daily progress, and weekly averages
- **Celebration Mode**: Get celebrated when you complete all habits!

### Analytics Features
- **Best Streak Counter**: Track your longest habit streak
- **Weekly Breakdown**: Detailed daily completion percentages
- **Performance Insights**: Smart insights based on your performance
- **Visual Progress**: Progress bars and percentage indicators
- **Perfect Day Tracking**: Count days with 100% completion

### UX/Design Features
- **Responsive Design**: Beautiful on desktop, tablet, and mobile
- **Smooth Animations**: Delightful micro-interactions
- **Professional Styling**: Warm, welcoming color palette
- **Clear Typography**: Readable, modern font hierarchy
- **Intuitive Navigation**: Easy access to all features

## 🚀 Pages Overview

### 1. Welcome Page
- Hero section with animated visuals
- Quick stats overview
- Feature highlights
- Step-by-step "How It Works" guide

### 2. Dashboard (Home)
- Hero section with motivational quote
- Key metrics (Completed, Progress, Streak, Active Habits)
- Today's checklist with individual habit streaks
- Completed habits summary
- Habit building tips
- Quick action buttons

### 3. Habits Management
- Add new habits with helpful placeholder
- Current summary statistics
- Complete list of all habits
- Mark habits complete/incomplete
- Delete habits easily
- Habit building tips and guidance

### 4. Insights & Analytics
- Performance overview with 4 key metrics
- 7-day daily breakdown with visual bars
- Smart insights and congratulations messages
- Perfect day indicators
- Detailed performance analysis

## 🛠️ Tech Stack

- **Frontend**: React 18
- **Build Tool**: Vite
- **Routing**: React Router
- **Styling**: CSS3 (Gradients, Animations, Grid, Flexbox)
- **Storage**: Browser localStorage
- **Code Quality**: ESLint

## 💻 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

```bash
cd /Users/tusharverma/Desktop/untitled folder/habit-tracker
npm install
```

### Development

```bash
npm run dev
```

The app will be available at `http://localhost:5173`

### Production Build

```bash
npm run build
```

### Linting

```bash
npm run lint
```

## 📊 Project Structure

```
src/
├── pages/
│   ├── WelcomePage.jsx      # Landing page with features
│   ├── HomePage.jsx         # Daily dashboard
│   ├── HabitsPage.jsx       # Habit management
│   └── InsightsPage.jsx     # Analytics & insights
├── utils/
│   └── habitUtils.js        # Utility functions
├── App.jsx                  # Main app component
├── App.css                  # Comprehensive styling
├── main.jsx                 # Entry point
└── index.css                # Global styles
```

## 🎨 Design Highlights

- **Color Palette**: Warm oranges and browns (#f58f29, #7a4a12)
- **Typography**: Clear hierarchy with responsive sizing
- **Animations**: Smooth transitions and floating effects
- **Spacing**: Generous padding and gap values for readability
- **Accessibility**: Semantic HTML and ARIA labels

## 🔄 Data Flow

1. All habits stored in App component state
2. Automatically persisted to localStorage
3. Synced across all pages in real-time
4. Daily completion tracked by date keys (YYYY-MM-DD)

## 💾 Browser Compatibility

Works on all modern browsers with localStorage support:
- Chrome/Edge (v90+)
- Firefox (v88+)
- Safari (v14+)

## 🎯 Future Enhancement Ideas

- Export habit data as CSV
- Mobile app with notifications
- Social sharing of streaks
- Custom habit categories
- Habit templates
- Goal setting and milestones

## 📝 License

MIT - Feel free to use this project for personal or commercial purposes.

---

**Built with ❤️ to help you build better habits, one day at a time.**