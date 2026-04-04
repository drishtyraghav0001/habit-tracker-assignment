import { useEffect, useMemo, useState } from 'react'
import { NavLink, Navigate, Route, Routes, useLocation } from 'react-router-dom'
import './App.css'
import HabitsPage from './pages/HabitsPage'
import HomePage from './pages/HomePage'
import InsightsPage from './pages/InsightsPage'
import LandingPage from './pages/LandingPage'
import WelcomePage from './pages/WelcomePage'
import { calcCurrentStreak, calcWeeklyCompletion, todayKey } from './utils/habitUtils'

const starterHabits = [
  { id: 1, name: 'Drink 8 glasses of water', completedOn: [todayKey] },
  { id: 2, name: 'Read for 20 minutes', completedOn: [] },
]

const loadSavedHabits = () => {
  try {
    const saved = localStorage.getItem('habit-tracker-habits')
    if (!saved) return starterHabits
    const parsed = JSON.parse(saved)
    return Array.isArray(parsed) ? parsed : starterHabits
  } catch {
    return starterHabits
  }
}

function AppLayout() {
  const location = useLocation()
  const isLanding = location.pathname === '/' || location.pathname === '/landing'

  const [habits, setHabits] = useState(loadSavedHabits)
  const [habitInput, setHabitInput] = useState('')
  const [userName, setUserName] = useState('Drishty Raghav')

  useEffect(() => {
    localStorage.setItem('habit-tracker-habits', JSON.stringify(habits))
  }, [habits])

  const completedTodayCount = useMemo(
    () => habits.filter((habit) => habit.completedOn.includes(todayKey)).length,
    [habits],
  )

  const completionPercent = habits.length
    ? Math.round((completedTodayCount / habits.length) * 100)
    : 0

  const addHabit = (event) => {
    event.preventDefault()
    const cleanedName = habitInput.trim()
    if (!cleanedName) return
    setHabits((current) => [...current, { id: Date.now(), name: cleanedName, completedOn: [] }])
    setHabitInput('')
  }

  const toggleHabit = (habitId) => {
    setHabits((current) =>
      current.map((habit) => {
        if (habit.id !== habitId) return habit
        const isDoneToday = habit.completedOn.includes(todayKey)
        return isDoneToday
          ? { ...habit, completedOn: habit.completedOn.filter((d) => d !== todayKey) }
          : { ...habit, completedOn: [...habit.completedOn, todayKey] }
      }),
    )
  }

  const deleteHabit = (habitId) => {
    setHabits((current) => current.filter((habit) => habit.id !== habitId))
  }

  const bestStreak = useMemo(
    () => habits.reduce((best, habit) => Math.max(best, calcCurrentStreak(habit.completedOn)), 0),
    [habits],
  )

  const weeklyCompletion = useMemo(() => calcWeeklyCompletion(habits), [habits])

  return (
    <main className="page">
      {!isLanding && (
        <header className="site-header">
          <div className="site-header-inner">
            <p className="brand">🌿 HabitFlow</p>
            <nav className="top-nav" aria-label="Main navigation">
              <NavLink to="/welcome" className={({ isActive }) => `nav-pill ${isActive ? 'active' : ''}`}>
                Home
              </NavLink>
              <NavLink to="/home" className={({ isActive }) => `nav-pill ${isActive ? 'active' : ''}`}>
                Dashboard
              </NavLink>
              <NavLink to="/habits" className={({ isActive }) => `nav-pill ${isActive ? 'active' : ''}`}>
                Habits
              </NavLink>
              <NavLink to="/insights" className={({ isActive }) => `nav-pill ${isActive ? 'active' : ''}`}>
                Insights
              </NavLink>
            </nav>
          </div>
        </header>
      )}

      <Routes>
        <Route path="/" element={<Navigate to="/landing" replace />} />
        <Route
          path="/landing"
          element={<LandingPage userName={userName} setUserName={setUserName} />}
        />
        <Route
          path="/welcome"
          element={
            <WelcomePage
              userName={userName}
              habits={habits}
              completedTodayCount={completedTodayCount}
              completionPercent={completionPercent}
            />
          }
        />
        <Route
          path="/home"
          element={
            <HomePage
              userName={userName}
              habits={habits}
              todayKey={todayKey}
              completedTodayCount={completedTodayCount}
              completionPercent={completionPercent}
              onToggleToday={toggleHabit}
            />
          }
        />
        <Route
          path="/habits"
          element={
            <HabitsPage
              habits={habits}
              todayKey={todayKey}
              habitInput={habitInput}
              setHabitInput={setHabitInput}
              onAddHabit={addHabit}
              onToggleToday={toggleHabit}
              onDeleteHabit={deleteHabit}
            />
          }
        />
        <Route
          path="/insights"
          element={<InsightsPage weeklyCompletion={weeklyCompletion} bestStreak={bestStreak} />}
        />
        <Route path="*" element={<Navigate to="/landing" replace />} />
      </Routes>

      {!isLanding && (
        <footer className="site-footer">
          <p>Small daily actions create long-term results. Stay consistent, {userName}.</p>
        </footer>
      )}
    </main>
  )
}

export default AppLayout
