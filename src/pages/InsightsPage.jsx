function InsightsPage({ weeklyCompletion, bestStreak }) {
  const avgCompletion = weeklyCompletion.length
    ? Math.round(
        weeklyCompletion.reduce((sum, day) => sum + day.percent, 0) /
          weeklyCompletion.length,
      )
    : 0

  const daysWithPerfectCompletion = weeklyCompletion.filter((d) => d.percent === 100).length
  const totalWeeklyCompleted = weeklyCompletion.reduce((sum, day) => sum + day.percent, 0)
  const weeklyAverage = Math.round(totalWeeklyCompleted / 7)

  return (
    <div className="inner-page-wrapper insights-wrapper">
      <section className="page-hero">
        <div className="page-hero-inner page-hero-layout">
          <div className="page-hero-copy">
            <span className="page-eyebrow">📊 Your Performance</span>
            <h1 className="page-title">Insights & Analytics</h1>
            <p className="page-subtitle">
              Track your progress, celebrate your consistency, and identify patterns in your habit building.
            </p>
          </div>
          <div className="page-hero-visual">
            <img
              className="page-hero-image"
              src="/hero-insights.png"
              alt="Insights and analytics preview"
            />
          </div>
        </div>
      </section>

      {/* Key Metrics */}
      <section className="page-section page-section-white metrics-section">
        <div className="page-section-inner">
          <h2 className="page-section-title">Performance Overview</h2>
          <p className="page-section-sub">Your key stats from the last 7 days</p>
          <div className="metrics-grid">
            <div className="metric-card metric-primary">
              <div className="metric-icon">🔥</div>
              <div className="metric-content">
                <p className="metric-label">Best Streak</p>
                <p className="metric-value">{bestStreak}</p>
                <p className="metric-sublabel">days</p>
              </div>
            </div>

            <div className="metric-card">
              <div className="metric-icon">📈</div>
              <div className="metric-content">
                <p className="metric-label">Weekly Avg</p>
                <p className="metric-value">{avgCompletion}%</p>
                <p className="metric-sublabel">completion</p>
              </div>
            </div>

            <div className="metric-card">
              <div className="metric-icon">⭐</div>
              <div className="metric-content">
                <p className="metric-label">Perfect Days</p>
                <p className="metric-value">{daysWithPerfectCompletion}</p>
                <p className="metric-sublabel">out of 7</p>
              </div>
            </div>

            <div className="metric-card">
              <div className="metric-icon">✨</div>
              <div className="metric-content">
                <p className="metric-label">Weekly Total</p>
                <p className="metric-value">{weeklyAverage}%</p>
                <p className="metric-sublabel">average</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Weekly Breakdown */}
      <section className="page-section page-section-warm weekly-section">
        <div className="page-section-inner">
          <h2 className="page-section-title">Last 7 Days</h2>
          <p className="page-section-sub">Daily completion percentage for each day</p>

          {weeklyCompletion.length === 0 ? (
            <div className="empty-state-card">
              <p className="empty-state-icon">📊</p>
              <p className="empty-state-text">No data yet. Complete your first habits to see your insights!</p>
            </div>
          ) : (
            <ul className="weekly-list">
              {weeklyCompletion.map((entry) => {
                const dayName = new Date(entry.day + 'T00:00:00').toLocaleDateString('en-US', {
                  weekday: 'short',
                })
                const dayDate = entry.day.slice(5)
                const isPercentComplete = entry.percent === 100

                return (
                  <li className={`weekly-item ${isPercentComplete ? 'complete' : ''}`} key={entry.day}>
                    <div className="day-info">
                      <p className="weekly-label">{dayName}</p>
                      <p className="weekly-date">{dayDate}</p>
                    </div>
                    <div className="bar-container">
                      <div className="bar-track" aria-hidden="true">
                        <div
                          className="bar-fill"
                          style={{ width: `${entry.percent}%` }}
                        />
                      </div>
                    </div>
                    <div className="weekly-value-container">
                      <p className="weekly-value">{entry.percent}%</p>
                      {isPercentComplete && <span className="completion-badge">✓</span>}
                    </div>
                  </li>
                )
              })}
            </ul>
          )}
        </div>
      </section>

      {/* Insights & Tips */}
      <section className="page-section page-section-white insights-tips">
        <div className="page-section-inner">
          <h2 className="page-section-title">💡 Insights</h2>
          <ul className="insights-list">
            {avgCompletion >= 80 && (
              <li className="insight-item positive">
                ✨ Excellent consistency! You're maintaining strong habits.
              </li>
            )}
            {avgCompletion >= 50 && avgCompletion < 80 && (
              <li className="insight-item warning">
                📈 Good progress! You're building momentum. Try to increase consistency.
              </li>
            )}
            {avgCompletion < 50 && weeklyCompletion.length > 0 && (
              <li className="insight-item alert">
                ⚠️ Keep pushing! Building habits takes time. Focus on consistency.
              </li>
            )}
            {bestStreak >= 30 && (
              <li className="insight-item positive">
                🔥 Amazing! You've built a {bestStreak}-day streak. That's outstanding!
              </li>
            )}
            {bestStreak >= 7 && bestStreak < 30 && (
              <li className="insight-item positive">
                👏 Great streak going! You've hit {bestStreak} days. Push for 30!
              </li>
            )}
            {daysWithPerfectCompletion >= 5 && (
              <li className="insight-item positive">
                ⭐ You had {daysWithPerfectCompletion} perfect days this week! Keep it up!
              </li>
            )}
          </ul>
        </div>
      </section>
    </div>
  )
}

export default InsightsPage
