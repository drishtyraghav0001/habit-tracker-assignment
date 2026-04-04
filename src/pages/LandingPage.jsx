import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function LandingPage({ userName, setUserName }) {
  const [inputName, setInputName] = useState(userName)
  const [inputPassword, setInputPassword] = useState('')
  const navigate = useNavigate()

  const handleEnter = (e) => {
    e.preventDefault()
    const trimmed = inputName.trim()
    if (trimmed) setUserName(trimmed)
    navigate('/welcome')
  }

  return (
    <div className="landing-root">
      {/* Background decoration */}
      <div className="landing-bg-orb landing-bg-orb-1" />
      <div className="landing-bg-orb landing-bg-orb-2" />
      <div className="landing-bg-orb landing-bg-orb-3" />

      <div className="landing-layout">
        {/* Left panel — brand & invite */}
        <div className="landing-left">
          <div className="landing-brand">
            <span className="landing-brand-icon">🌿</span>
            <span className="landing-brand-name">HabitFlow</span>
          </div>

          <div className="landing-copy">
            <span className="landing-eyebrow">Your journey begins here</span>
            <h1 className="landing-headline">
              Let's plan
              <br />
              <span className="landing-headline-accent">better habits</span>
              <br />
              together.
            </h1>
            <p className="landing-tagline">
              Small, consistent actions create remarkable results.
              We're here to help you build the life you want — one habit at a time.
            </p>
          </div>

          <div className="landing-features">
            <div className="landing-feature-pill">✅ Daily tracking</div>
            <div className="landing-feature-pill">🔥 Streak builder</div>
            <div className="landing-feature-pill">📊 Weekly insights</div>
          </div>
        </div>

        {/* Right panel — name card */}
        <div className="landing-right">
          <div className="landing-card">
            <div className="landing-card-top">
              <span className="landing-wave">👋</span>
              <h2 className="landing-card-title">Welcome!</h2>
              <p className="landing-card-subtitle">
                Tell us your name so we can personalise your experience.
              </p>
            </div>

            <form className="landing-form" onSubmit={handleEnter}>
              <div className="landing-input-group">
                <label className="landing-label" htmlFor="userName">
                  Your name
                </label>
                <input
                  id="userName"
                  className="landing-input"
                  type="text"
                  value={inputName}
                  onChange={(e) => setInputName(e.target.value)}
                  placeholder="Enter your name"
                  autoFocus
                  autoComplete="off"
                />
              </div>

              <div className="landing-input-group">
                <label className="landing-label" htmlFor="userPassword">
                  Password
                </label>
                <input
                  id="userPassword"
                  className="landing-input"
                  type="password"
                  value={inputPassword}
                  onChange={(e) => setInputPassword(e.target.value)}
                  placeholder="Enter password (demo)"
                  autoComplete="off"
                />
              </div>

              <button className="landing-btn" type="submit">
                Login (Demo) →
              </button>
            </form>

            <p className="landing-card-note">
              Your data stays private — everything is saved locally on your device.
            </p>
          </div>
        </div>
      </div>

      {/* Bottom strip */}
      <div className="landing-footer">
        <p>HabitFlow · Build better days, one habit at a time</p>
      </div>
    </div>
  )
}

export default LandingPage
