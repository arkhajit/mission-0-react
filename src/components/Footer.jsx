import './Footer.css'

const quickLinks = ['News', 'Events', 'Resources', 'About Us', 'Contact']
const categories = ['Digital Marketing', 'Social Media', 'Analytics', 'Content', 'Email', 'Events']

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">

        {/* Brand column */}
        <div className="footer-brand">
          <div className="footer-logo">
            <div className="footer-logo-circle">MA</div>
            <div>
              <span className="footer-logo-main">Marketing Association</span>
              <span className="footer-logo-sub">New Zealand</span>
            </div>
          </div>
          <p className="footer-desc">
            Empowering New Zealand marketers with knowledge, community, and opportunities since 1993.
          </p>
          <div className="social-links">
            <a href="#" className="social-btn" aria-label="LinkedIn">
              <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
            </a>
            <a href="#" className="social-btn" aria-label="Facebook">
              <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
            </a>
            <a href="#" className="social-btn" aria-label="Instagram">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="18" height="18"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
            </a>
            <a href="#" className="social-btn" aria-label="Twitter/X">
              <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
            </a>
          </div>
        </div>

        {/* Quick links */}
        <div className="footer-col">
          <h4 className="footer-heading">Quick Links</h4>
          <ul className="footer-links">
            {quickLinks.map(l => <li key={l}><a href="#">{l}</a></li>)}
          </ul>
        </div>

        {/* Categories */}
        <div className="footer-col">
          <h4 className="footer-heading">Topics</h4>
          <ul className="footer-links">
            {categories.map(c => <li key={c}><a href="#">{c}</a></li>)}
          </ul>
        </div>

        {/* Newsletter */}
        <div className="footer-col footer-newsletter">
          <h4 className="footer-heading">Stay in the Loop</h4>
          <p className="newsletter-desc">Get weekly marketing insights delivered to your inbox.</p>
          <form className="newsletter-form" onSubmit={e => e.preventDefault()}>
            <input type="email" placeholder="Your email address" aria-label="Email" />
            <button type="submit">Subscribe</button>
          </form>
          <p className="newsletter-note">No spam, unsubscribe anytime.</p>
        </div>

      </div>

      <div className="footer-bottom">
        <p>&copy; 2026 <span>Marketing Association New Zealand</span>. All rights reserved.</p>
        <div className="footer-bottom-links">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Use</a>
          <a href="#">Cookie Policy</a>
        </div>
      </div>
    </footer>
  )
}
