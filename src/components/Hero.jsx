import './Hero.css'

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-text">
        <h1>Your Hub for <span>Marketing</span> News in New Zealand</h1>
        <p>Stay ahead with the latest insights, trends, and resources from the New Zealand marketing community.</p>
        <div className="search-bar">
          <input type="text" placeholder="Search articles, events, resources…" />
          <button>Search</button>
        </div>
      </div>
      <div className="hero-image">
        <img
          src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=700&q=80"
          alt="Marketing team collaborating"
        />
      </div>
    </section>
  )
}
