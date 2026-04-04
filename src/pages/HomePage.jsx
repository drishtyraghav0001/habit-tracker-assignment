import { Link } from 'react-router-dom'
import { calcCurrentStreak } from '../utils/habitUtils'

function HomePage({ userName, habits, todayKey, completedTodayCount, completionPercent, onToggleToday }) {
  const completedHabits = habits.filter((h) => h.completedOn.includes(todayKey))
  const bestStreak = Math.max(0, ...habits.map((h) => calcCurrentStreak(h.completedOn)))

  const messages = [
    'Every small step counts. Keep going!',
    "You're building momentum, day by day.",
    'Consistency is the secret sauce to success.',
    'Small daily actions = Big long-term results.',
    "Progress over perfection. You've got this!",
  ]
  const todayMessage = messages[new Date().getDate() % messages.length]

  const firstName = userName ? userName.split(' ')[0] : 'there'

  return (
    <div className="inner-page-wrapper">

      {/* Hero */}
      <section className="page-hero">
        <div className="page-hero-inner page-hero-layout">
          <div className="page-hero-copy">
            <span className="page-eyebrow">📊 Dashboard</span>
            <h1 className="page-title">Good day, {firstName}!</h1>
            <p className="page-subtitle">
              Track, complete, and celebrate your habits. Small daily actions create remarkable results over time.
            </p>
            <div className="page-quote">💡 {todayMessage}</div>
          </div>
          <div className="page-hero-visual">
            <img
              className="page-hero-image"
              src="/hero-home.png"
              alt="Dashboard habit progress preview"
            />
          </div>
        </div>
      </section>

      {/* Metrics bar */}
      <section className="page-section page-section-white">
        <div className="page-section-inner metrics-row">
          <div className="dash-metric">
            <span className="dash-metric-icon">✅</span>
            <div>
              <p className="dash-metric-num">{completedTodayCount}/{habits.length}</p>
              <p className="dash-metric-lbl">Completed Today</p>
            </div>
          </div>
          <div className="dash-metric-divider" />
          <div className="dash-metric">
            <span className="dash-metric-icon">📈</span>
            <div>
              <p className="dash-metric-num">{completionPercent}%</p>
              <p className="dash-metric-lbl">Today's Progress</p>
            </div>
          </div>
          <div className="dash-metric-divider" />
          <div className="dash-metric">
            <span className="dash-metric-icon">🔥</span>
            <div>
              <p className="dash-metric-num">{bestStreak}</p>
              <p className="dash-metric-lbl">Best Streak (days)</p>
            </div>
          </div>
          <div className="dash-metric-divider" />
          <div className="dash-metric">
            <span className="dash-metric-icon">🎯</span>
            <div>
              <p className="dash-metric-num">{habits.length}</p>
              <p className="dash-metric-lbl">Active Habits</p>
            </div>
          </div>
        </div>

        {completionPercent === 100 && habits.length > 0 && (
          <div className="page-section-inner" style={{ paddingTop: 0 }}>
            <div className="celebration-banner">
              🎉 Perfect day! You've completed all your habits, {firstName}!
            </div>
          </div>
        )}
      </section>

      {/* Checklist */}
      <section className="page-section page-section-warm">
        <div className="page-section-inner">
          <div className="section-row-header">
            <div>
              <h2 className="page-section-title">Today's Checklist</h2>
              <p className="page-section-sub">Mark each habit as you complete it</p>
            </div>
            <Link className="page-link" to="/habits">→ Manage Habits</Link>
          </div>

          {habits.length === 0 ? (
            <div className="inner-empty-state">
              <span className="inner-empty-icon">🚀</span>
              <p className="inner-empty-text">No habits yet — let's add your first one!</p>
              <Link className="inner-empty-btn" to="/habits">Add Your First Habit</Link>
            </div>
          ) : (
            <ul className="inner-habit-list">
              {habits.map((habit) => {
                const isDoneToday = habit.completedOn.includes(todayKey)
                const streak = calcCurrentStreak(habit.completedOn)
                return (
                  <li className={`inner-habit-item ${isDoneToday ? 'done' : ''}`} key={habit.id}>
                    <button
                      className={`inner-toggle ${isDoneToday ? 'checked' : ''}`}
                      onClick={() => onToggleToday(habit.id)}
                      type="button"
                    >
                      {isDoneToday ? '✓' : '○'}
                    </button>
                    <div className="inner-habit-info">
                      <p className={`inner-habit-name ${isDoneToday ? 'strikethrough' : ''}`}>
                        {habit.name}
                      </p>
                      {streak > 0 && <p className="inner-habit-streak">🔥 {streak}-day streak</p>}
                    </div>
                  </li>
                )
              })}
            </ul>
          )}
        </div>
      </section>

      {/* Completed today */}
      {completedHabits.length > 0 && (
        <section className="page-section page-section-green">
          <div className="page-section-inner">
            <h2 className="page-section-title">✨ Completed Today</h2>
            <div className="completed-pills">
              {completedHabits.map((h) => (
                <span className="completed-pill" key={h.id}>{h.name}</span>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Tips */}
      <section className="page-section page-section-white">
        <div className="page-section-inner">
          <h2 className="page-section-title">💡 Daily Habit Tips</h2>
          <div className="tips-cards-grid">
            <div className="tip-card">Start with tiny habits — under 2 minutes to begin</div>
            <div className="tip-card">Track streaks to build momentum and stay motivated</div>
            <div className="tip-card">Check Insights weekly to spot patterns and improve</div>
            <div className="tip-card">Missing one day is okay — missing two is a habit too</div>
          </div>
        </div>
      </section>

      {/* Quick actions */}
      <section className="page-section page-section-orange">
        <div className="page-section-inner quick-actions-inner">
          <div>
            <h2 className="page-cta-title">Ready to add more habits?</h2>
            <p className="page-cta-sub">Every great journey starts with a single step.</p>
          </div>
          <div className="quick-action-btns">
            <Link to="/habits" className="qa-btn qa-btn-white">➕ Add Habit</Link>
            <Link to="/insights" className="qa-btn qa-btn-outline">📊 View Insights</Link>
          </div>
        </div>
      </section>

    </div>
  )
}

export default HomePage
