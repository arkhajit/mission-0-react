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
            <a href="#" className="social-btn" aria-label="LinkedIn">in</a>
            <a href="#" className="social-btn" aria-label="Facebook">f</a>
            <a href="#" className="social-btn" aria-label="Instagram">ig</a>
            <a href="#" className="social-btn" aria-label="Twitter/X">𝕏</a>
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
