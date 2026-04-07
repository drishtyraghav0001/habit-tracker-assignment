import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const NAME_REGEX = /^[a-zA-Z\s]+$/
const HAS_NUMBER = /\d/
const HAS_UPPER = /[A-Z]/

function validate(name, password) {
  const errors = {}

  const trimmedName = name.trim()
  if (!trimmedName) {
    errors.name = 'Name is required.'
  } else if (!NAME_REGEX.test(trimmedName)) {
    errors.name = 'Name can only contain letters and spaces.'
  } else if (trimmedName.length < 2) {
    errors.name = 'Name must be at least 2 characters.'
  } else if (trimmedName.length > 30) {
    errors.name = 'Name must be 30 characters or fewer.'
  }

  if (!password) {
    errors.password = 'Password is required.'
  } else if (password.length < 6) {
    errors.password = 'Password must be at least 6 characters.'
  } else if (password.length > 20) {
    errors.password = 'Password must be 20 characters or fewer.'
  } else if (!HAS_NUMBER.test(password)) {
    errors.password = 'Password must contain at least one number.'
  } else if (!HAS_UPPER.test(password)) {
    errors.password = 'Password must contain at least one uppercase letter.'
  }

  return errors
}

function LandingPage({ userName, setUserName }) {
  const [inputName, setInputName] = useState(userName)
  const [inputPassword, setInputPassword] = useState('')
  const [errors, setErrors] = useState({})
  const [touched, setTouched] = useState({})
  const [showPassword, setShowPassword] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    const isAuthenticated = document.cookie.split('; ').find(row => row.startsWith('isAuthenticated='))?.split('=')[1]
    const savedName = document.cookie.split('; ').find(row => row.startsWith('userName='))?.split('=')[1]

    if (isAuthenticated === 'true') {
      if (savedName) setUserName(decodeURIComponent(savedName))
      navigate('/welcome', { replace: true })
    }
  }, [navigate, setUserName])

  const handleBlur = (field) => {
    setTouched((prev) => ({ ...prev, [field]: true }))
    const fieldErrors = validate(inputName, inputPassword)
    setErrors(fieldErrors)
  }

  const handleEnter = (e) => {
    e.preventDefault()
    setTouched({ name: true, password: true })

    const fieldErrors = validate(inputName, inputPassword)
    setErrors(fieldErrors)

    if (Object.keys(fieldErrors).length > 0) return

    const trimmed = inputName.trim()
    const expiry = new Date()
    expiry.setDate(expiry.getDate() + 7)

    document.cookie = `isAuthenticated=true; expires=${expiry.toUTCString()}; path=/`
    document.cookie = `userName=${encodeURIComponent(trimmed)}; expires=${expiry.toUTCString()}; path=/`

    setUserName(trimmed)
    navigate('/welcome')
  }

  return (
    <div className="landing-root">
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

        {/* Right panel — login card */}
        <div className="landing-right">
          <div className="landing-card">
            <div className="landing-card-top">
              <span className="landing-wave">👋</span>
              <h2 className="landing-card-title">Welcome!</h2>
              <p className="landing-card-subtitle">
                Tell us your name so we can personalise your experience.
              </p>
            </div>

            <form className="landing-form" onSubmit={handleEnter} noValidate>
              {/* Name field */}
              <div className="landing-input-group">
                <label className="landing-label" htmlFor="userName">
                  Your name
                </label>
                <input
                  id="userName"
                  className={`landing-input${touched.name && errors.name ? ' landing-input--error' : ''}`}
                  type="text"
                  value={inputName}
                  onChange={(e) => {
                    setInputName(e.target.value)
                    if (touched.name) setErrors(validate(e.target.value, inputPassword))
                  }}
                  onBlur={() => handleBlur('name')}
                  placeholder="Enter your name"
                  autoFocus
                  autoComplete="off"
                  maxLength={30}
                />
                {touched.name && errors.name ? (
                  <span className="landing-field-error">{errors.name}</span>
                ) : (
                  <span className="landing-field-hint">Letters and spaces only · 2–30 characters</span>
                )}
              </div>

              {/* Password field */}
              <div className="landing-input-group">
                <label className="landing-label" htmlFor="userPassword">
                  Password
                </label>
                <div className="landing-password-wrapper">
                  <input
                    id="userPassword"
                    className={`landing-input landing-input--password${touched.password && errors.password ? ' landing-input--error' : ''}`}
                    type={showPassword ? 'text' : 'password'}
                    value={inputPassword}
                    onChange={(e) => {
                      setInputPassword(e.target.value)
                      if (touched.password) setErrors(validate(inputName, e.target.value))
                    }}
                    onBlur={() => handleBlur('password')}
                    placeholder="Enter password"
                    autoComplete="off"
                    maxLength={20}
                  />
                  <button
                    type="button"
                    className="landing-toggle-password"
                    onClick={() => setShowPassword((v) => !v)}
                    aria-label={showPassword ? 'Hide password' : 'Show password'}
                  >
                    {showPassword ? '🙈' : '👁️'}
                  </button>
                </div>
                {touched.password && errors.password ? (
                  <span className="landing-field-error">{errors.password}</span>
                ) : (
                  <span className="landing-field-hint">6–20 chars · one uppercase · one number</span>
                )}
              </div>

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

      <div className="landing-footer">
        <p>HabitFlow · Build better days, one habit at a time</p>
      </div>
    </div>
  )
}

export default LandingPage
