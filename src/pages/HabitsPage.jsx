function HabitsPage({ habits, todayKey, habitInput, setHabitInput, onAddHabit, onToggleToday, onDeleteHabit }) {
  const completedTodayCount = habits.filter((h) => h.completedOn.includes(todayKey)).length
  const completionRate = habits.length
    ? Math.round((completedTodayCount / habits.length) * 100)
    : 0

  return (
    <div className="inner-page-wrapper">

      {/* Hero */}
      <section className="page-hero">
        <div className="page-hero-inner page-hero-layout">
          <div className="page-hero-copy">
            <span className="page-eyebrow">🎯 Your Habits</span>
            <h1 className="page-title">Manage Your Habits</h1>
            <p className="page-subtitle">
              Add new habits, mark them complete each day, and remove ones you no longer need.
              Small, consistent actions build remarkable results.
            </p>
          </div>
          <div className="page-hero-visual">
            <img
              className="page-hero-image"
              src="/hero-habits.png"
              alt="Habits management screen preview"
            />
          </div>
        </div>
      </section>

      {/* Stats bar */}
      {habits.length > 0 && (
        <section className="page-section page-section-white">
          <div className="page-section-inner metrics-row">
            <div className="dash-metric">
              <span className="dash-metric-icon">🎯</span>
              <div>
                <p className="dash-metric-num">{habits.length}</p>
                <p className="dash-metric-lbl">Total Habits</p>
              </div>
            </div>
            <div className="dash-metric-divider" />
            <div className="dash-metric">
              <span className="dash-metric-icon">✅</span>
              <div>
                <p className="dash-metric-num">{completedTodayCount}</p>
                <p className="dash-metric-lbl">Done Today</p>
              </div>
            </div>
            <div className="dash-metric-divider" />
            <div className="dash-metric">
              <span className="dash-metric-icon">📈</span>
              <div>
                <p className="dash-metric-num">{completionRate}%</p>
                <p className="dash-metric-lbl">Completion Rate</p>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Add habit form */}
      <section className="page-section page-section-warm">
        <div className="page-section-inner">
          <h2 className="page-section-title">✨ Add a New Habit</h2>
          <p className="page-section-sub">What habit do you want to build into your daily life?</p>
          <form className="add-habit-form" onSubmit={onAddHabit}>
            <div className="add-habit-row">
              <input
                id="habitName"
                className="add-habit-input"
                type="text"
                value={habitInput}
                onChange={(e) => setHabitInput(e.target.value)}
                placeholder="e.g., Exercise 30 min, Read 20 pages, Meditate 10 min"
                autoFocus
                autoComplete="off"
              />
              <button className="add-habit-btn" type="submit">➕ Add Habit</button>
            </div>
            <p className="add-habit-hint">
              💡 Start with small, achievable habits. Consistency matters more than intensity.
            </p>
          </form>
        </div>
      </section>

      {/* Habits list */}
      <section className="page-section page-section-white">
        <div className="page-section-inner">
          <h2 className="page-section-title">
            {habits.length > 0
              ? `Your ${habits.length} Habit${habits.length !== 1 ? 's' : ''}`
              : 'No Habits Yet'}
          </h2>

          {habits.length === 0 ? (
            <div className="inner-empty-state">
              <span className="inner-empty-icon">🌱</span>
              <p className="inner-empty-text">You have no habits yet</p>
              <p className="inner-empty-hint">Use the form above to add your first habit and start your journey!</p>
            </div>
          ) : (
            <ul className="inner-habit-list">
              {habits.map((habit) => {
                const isDoneToday = habit.completedOn.includes(todayKey)
                return (
                  <li className={`inner-habit-item ${isDoneToday ? 'done' : ''}`} key={habit.id}>
                    <button
                      className={`inner-toggle ${isDoneToday ? 'checked' : ''}`}
                      onClick={() => onToggleToday(habit.id)}
                      type="button"
                      title={isDoneToday ? 'Mark as incomplete' : 'Mark as done'}
                    >
                      {isDoneToday ? '✓' : '○'}
                    </button>
                    <p className={`inner-habit-name ${isDoneToday ? 'strikethrough' : ''}`}>
                      {habit.name}
                    </p>
                    <button
                      className="inner-delete-btn"
                      onClick={() => onDeleteHabit(habit.id)}
                      type="button"
                      title="Remove habit"
                    >
                      🗑️
                    </button>
                  </li>
                )
              })}
            </ul>
          )}
        </div>
      </section>

      {/* Tips */}
      <section className="page-section page-section-orange">
        <div className="page-section-inner">
          <h2 className="page-cta-title">💡 Habit Building Tips</h2>
          <div className="tips-cards-grid tips-on-orange">
            <div className="tip-card tip-card-light">
              <strong>Start small</strong> — habits should take under 5 minutes to begin
            </div>
            <div className="tip-card tip-card-light">
              <strong>Be specific</strong> — "Walk 30 min" beats "Exercise" every time
            </div>
            <div className="tip-card tip-card-light">
              <strong>Stack habits</strong> — link new habits to existing routines
            </div>
            <div className="tip-card tip-card-light">
              <strong>Track daily</strong> — check in consistently to build your streak
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}

export default HabitsPage
