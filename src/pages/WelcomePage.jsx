import { Link } from 'react-router-dom'

function WelcomePage({ habits, completedTodayCount, completionPercent }) {
  return (
    <div className="welcome-page-wrapper">
      {/* Hero Section */}
      <section className="welcome-hero">
        <div className="welcome-hero-inner">
          <div className="welcome-hero-content">
            <span className="hero-badge">🚀 Welcome to HabitFlow</span>
            <h1 className="welcome-title">
              Build Better Days
              <br />
              Through Tiny Habits
            </h1>
            <p className="welcome-subtext">
              Your personal habit tracker designed for consistency, not
              complexity. Start small, stay consistent, and watch yourself
              transform.
            </p>
            <div className="hero-actions">
              <Link className="hero-btn-primary" to="/home">
                Start Tracking →
              </Link>
              <Link className="hero-btn-secondary" to="/habits">
                Manage Habits
              </Link>
            </div>
          </div>
          <div className="welcome-hero-visual">
            <img
              className="welcome-hero-image"
              src="istockphoto-1408934219-612x612.jpg"
              alt="Habit tracking welcome preview"
            />
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="welcome-stats-bar">
        <div className="welcome-stats-inner">
          <div className="welcome-stat-item">
            <span className="stat-icon-lg">🎯</span>
            <div>
              <p className="stat-num">{habits.length}</p>
              <p className="stat-lbl">Active Habits</p>
            </div>
          </div>
          <div className="welcome-stat-divider" />
          <div className="welcome-stat-item">
            <span className="stat-icon-lg">✅</span>
            <div>
              <p className="stat-num">{completedTodayCount}</p>
              <p className="stat-lbl">Done Today</p>
            </div>
          </div>
          <div className="welcome-stat-divider" />
          <div className="welcome-stat-item">
            <span className="stat-icon-lg">📈</span>
            <div>
              <p className="stat-num">{completionPercent}%</p>
              <p className="stat-lbl">Today's Progress</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="welcome-section features-section">
        <div className="welcome-section-inner">
          <div className="section-header">
            <span className="section-eyebrow">Why HabitFlow?</span>
            <h2 className="section-heading">
              Everything You Need to Stay Consistent
            </h2>
          </div>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon-wrap">📊</div>
              <h3>Track Progress</h3>
              <p>
                Monitor daily consistency and watch your best streaks grow over
                time
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon-wrap">🎯</div>
              <h3>Stay Focused</h3>
              <p>
                Simple, distraction-free interface to keep you on track every
                day
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon-wrap">💪</div>
              <h3>Build Momentum</h3>
              <p>
                Small daily actions compound into remarkable long-term results
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon-wrap">💾</div>
              <h3>Always Saved</h3>
              <p>
                Your data is stored locally — no account needed, always private
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="welcome-section how-it-works-section">
        <div className="welcome-section-inner">
          <div className="section-header">
            <span className="section-eyebrow">Simple Process</span>
            <h2 className="section-heading">How It Works</h2>
          </div>
          <div className="steps-grid">
            <div className="step-card">
              <div className="step-number">1</div>
              <h3>Add Habits</h3>
              <p>
                Create small, achievable habits you want to build into your life
              </p>
            </div>
            <div className="step-arrow">→</div>
            <div className="step-card">
              <div className="step-number">2</div>
              <h3>Mark Daily</h3>
              <p>Check off each habit as you complete it throughout the day</p>
            </div>
            <div className="step-arrow">→</div>
            <div className="step-card">
              <div className="step-number">3</div>
              <h3>Build Streaks</h3>
              <p>Watch your streaks grow longer as you stay consistent</p>
            </div>
            <div className="step-arrow">→</div>
            <div className="step-card">
              <div className="step-number">4</div>
              <h3>Celebrate</h3>
              <p>Review your progress on Insights and celebrate every win</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="welcome-cta-section">
        <div className="welcome-cta-inner">
          <h2>Ready to Transform Your Life?</h2>
          <p>
            Start with one small habit today. Consistency is the secret to
            success.
          </p>
          <Link className="cta-btn" to="/home">
            Get Started Now →
          </Link>
        </div>
      </section>
    </div>
  );
}

export default WelcomePage
