import { useState } from 'react'
import './NewsGrid.css'

const categories = ['All', 'Digital', 'Social Media', 'Analytics', 'Content', 'Events', 'Email']

const articles = [
  {
    tag: 'Digital', tagColor: 'teal',
    img: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=800&q=80',
    title: 'How AI is Reshaping Digital Marketing Strategies in 2026',
    desc: 'Marketers across NZ are embracing artificial intelligence to personalise campaigns and boost ROI like never before.',
    date: '14 May 2026', readTime: '5 min read',
  },
  {
    tag: 'Social Media', tagColor: 'purple',
    img: 'https://images.unsplash.com/photo-1556761175-4b46a572b786?w=800&q=80',
    title: 'Top Social Media Trends NZ Brands Should Watch This Year',
    desc: "From short-form video to influencer partnerships, discover what's driving engagement for Kiwi brands in 2026.",
    date: '12 May 2026', readTime: '4 min read',
  },
  {
    tag: 'Analytics', tagColor: 'blue',
    img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
    title: 'Data-Driven Decisions: Why Analytics is Now Non-Negotiable',
    desc: 'NZ marketing leaders share how data literacy has become the single most important skill for modern marketers.',
    date: '10 May 2026', readTime: '6 min read',
  },
  {
    tag: 'Content', tagColor: 'orange',
    img: 'https://images.unsplash.com/photo-1515378960530-7c0da6231fb1?w=800&q=80',
    title: 'Content Marketing: Telling Stories That Convert in the NZ Market',
    desc: "Authentic storytelling is winning over Kiwi consumers — here's how leading brands are doing it right.",
    date: '8 May 2026', readTime: '5 min read',
  },
  {
    tag: 'Events', tagColor: 'green',
    img: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&q=80',
    title: 'Marketing Summit Auckland 2026: Key Takeaways You Need to Know',
    desc: 'Industry leaders gathered to discuss the future of marketing in a post-AI world. Here are the highlights.',
    date: '6 May 2026', readTime: '7 min read',
  },
  {
    tag: 'Email', tagColor: 'red',
    img: 'https://images.unsplash.com/photo-1596526131083-e8c633c948d2?w=800&q=80',
    title: "Email Marketing is Far From Dead — Here's Proof from NZ Brands",
    desc: 'Despite new channels emerging daily, email continues to deliver the highest ROI for NZ marketers in 2026.',
    date: '4 May 2026', readTime: '4 min read',
  },
]

export default function NewsGrid() {
  const [active, setActive] = useState('All')

  const filtered = active === 'All'
    ? articles
    : articles.filter(a => a.tag === active)

  return (
    <section className="news-section">

      {/* Categories bar */}
      <div className="categories-bar">
        {categories.map(c => (
          <button
            key={c}
            className={`cat-btn${active === c ? ' active' : ''}`}
            onClick={() => setActive(c)}
          >
            {c}
          </button>
        ))}
      </div>

      <div className="news-body">
        <div className="section-header">
          <div>
            <h2 className="section-title">Latest News</h2>
            <p className="section-subtitle">Stay up to date with what's happening in NZ marketing</p>
          </div>
          <a href="#" className="view-all">View all articles →</a>
        </div>

        <div className="card-grid">
          {filtered.map((a, i) => (
            <article className="card" key={i}>
              <div className="card-img">
                <img src={a.img} alt={a.title} loading="lazy" />
                <span className={`card-tag tag-${a.tagColor}`}>{a.tag}</span>
              </div>
              <div className="card-body">
                <h3>{a.title}</h3>
                <p>{a.desc}</p>
              </div>
              <div className="card-footer">
                <div className="card-meta">
                  <span className="card-date">{a.date}</span>
                  <span className="dot">·</span>
                  <span className="card-read">{a.readTime}</span>
                </div>
                <a href="#" className="read-more">Read more →</a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
