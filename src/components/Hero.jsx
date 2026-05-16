import { useState } from 'react'
import './Hero.css'

const stats = [
  { value: '12,000+', label: 'Members' },
  { value: '200+',    label: 'Events/Year' },
  { value: '30+',     label: 'Years Active' },
  { value: '500+',    label: 'Resources' },
]

export default function Hero() {
  const [query, setQuery] = useState('')

  return (
    <section className="hero">
      <div className="hero-inner">
        <div className="hero-text">
          <span className="hero-badge">🇳🇿 New Zealand's #1 Marketing Community</span>
          <h1>
            Your Hub for <span className="highlight">Marketing</span>{' '}
            News &amp; Insights
          </h1>
          <p>
            Stay ahead with the latest trends, resources, and events from
            New Zealand's leading marketing community — trusted by over 12,000 professionals.
          </p>

          <form className="search-bar" onSubmit={e => e.preventDefault()}>
            <div className="search-input-wrap">
              <svg className="search-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
              </svg>
              <input
                type="text"
                value={query}
                onChange={e => setQuery(e.target.value)}
                placeholder="Search articles, events, resources…"
                aria-label="Search"
              />
            </div>
            <button type="submit">Search</button>
          </form>

          <div className="hero-tags">
            {['AI Marketing', 'Social Media', 'Analytics', 'Content'].map(tag => (
              <a key={tag} href="#" className="tag-pill">{tag}</a>
            ))}
          </div>
        </div>

        <div className="hero-image">
          <img
            src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&q=80"
            alt="Marketing team collaborating"
          />
          <div className="hero-img-badge">
            <span className="badge-dot" />
            Live events this week
          </div>
        </div>
      </div>

      <div className="hero-stats">
        {stats.map(s => (
          <div key={s.label} className="stat-item">
            <span className="stat-value">{s.value}</span>
            <span className="stat-label">{s.label}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
