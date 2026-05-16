import { useState } from 'react'
import './Navbar.css'

const links = ['News', 'Events', 'Resources', 'About']

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <nav className="navbar">
        <div className="logo">
          <div className="logo-circle">MA</div>
          <span className="logo-text">Marketing Association NZ</span>
        </div>
        <ul className="nav-links">
          {links.map(l => <li key={l}><a href="#">{l}</a></li>)}
        </ul>
        <button className="btn-login desktop-only">Login</button>
        <button className="hamburger" onClick={() => setOpen(!open)} aria-label="Menu">
          <span /><span /><span />
        </button>
      </nav>
      {open && (
        <div className="mobile-menu">
          {links.map(l => <a key={l} href="#">{l}</a>)}
          <button className="btn-login">Login</button>
        </div>
      )}
    </>
  )
}
