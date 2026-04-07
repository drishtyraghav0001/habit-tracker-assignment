import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

function LandingPage({ userName, setUserName }) {
  const [inputName, setInputName] = useState(userName)
  const [inputPassword, setInputPassword] = useState('')
  const [errorMsg, setErrorMsg] = useState('')
  const navigate = useNavigate()

  useEffect(() => {
    const isAuthenticated = document.cookie.split('; ').find(row => row.startsWith('isAuthenticated='))?.split('=')[1]
    const savedName = document.cookie.split('; ').find(row => row.startsWith('userName='))?.split('=')[1]
    
    if (isAuthenticated === 'true') {
      if (savedName) setUserName(decodeURIComponent(savedName))
      navigate('/welcome', { replace: true })
    }
  }, [navigate, setUserName])

  const handleEnter = (e) => {
    e.preventDefault()
    setErrorMsg('')
    
    const trimmed = inputName.trim()
    
    // Basic validation
    if (!trimmed) {
      setErrorMsg('Please enter your name.')
      return
    }

    // Password validation rule: min 6 chars, at least 1 number
    if (inputPassword.length < 6) {
      setErrorMsg('Password must be at least 6 characters.')
      return
    }
    if (!/\d/.test(inputPassword)) {
      setErrorMsg('Password must contain at least one number.')
      return
    }

    // Set simple cookie authentication
    const expiry = new Date()
    expiry.setDate(expiry.getDate() + 7) // cookie valid for 7 days
    
    document.cookie = `isAuthenticated=true; expires=${expiry.toUTCString()}; path=/`
    document.cookie = `userName=${encodeURIComponent(trimmed)}; expires=${expiry.toUTCString()}; path=/`

    setUserName(trimmed)
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
                  placeholder="Enter password"
                  autoComplete="off"
                />
              </div>

              {errorMsg && (
                <div style={{ color: '#ff4d4f', fontSize: '0.875rem', marginBottom: '1rem', marginTop: '-0.5rem' }}>
                  {errorMsg}
                </div>
              )}

              <button className="landing-btn" type="submit">
                Login
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
