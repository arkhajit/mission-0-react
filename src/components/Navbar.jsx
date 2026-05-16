import { useState, useEffect } from 'react'
import './Navbar.css'

const links = ['News', 'Events', 'Resources', 'About']

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <nav className={`navbar${scrolled ? ' scrolled' : ''}`}>
        <a href="#" className="logo">
          <div className="logo-circle">MA</div>
          <div className="logo-text">
            <span className="logo-main">Marketing Association</span>
            <span className="logo-sub">New Zealand</span>
          </div>
        </a>

        <ul className="nav-links">
          {links.map(l => (
            <li key={l}>
              <a href="#" className="nav-link">{l}</a>
            </li>
          ))}
        </ul>

        <div className="nav-actions desktop-only">
          <a href="#" className="btn-join">Join Now</a>
          <a href="#" className="btn-login">Login</a>
        </div>

        <button
          className={`hamburger${open ? ' is-open' : ''}`}
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <span /><span /><span />
        </button>
      </nav>

      <div className={`mobile-menu${open ? ' is-open' : ''}`}>
        <div className="mobile-menu-inner">
          {links.map(l => (
            <a key={l} href="#" className="mobile-link" onClick={() => setOpen(false)}>{l}</a>
          ))}
          <div className="mobile-actions">
            <a href="#" className="btn-join">Join Now</a>
            <a href="#" className="btn-login">Login</a>
          </div>
        </div>
      </div>
    </>
  )
}
