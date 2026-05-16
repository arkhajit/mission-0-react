import './NewsGrid.css'

const articles = [
  { tag: 'Digital',      img: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=500&q=80', title: 'How AI is Reshaping Digital Marketing Strategies in 2026',        desc: 'Marketers across NZ are embracing artificial intelligence to personalise campaigns and boost ROI like never before.', date: '14 May 2026' },
  { tag: 'Social Media', img: 'https://images.unsplash.com/photo-1556761175-4b46a572b786?w=500&q=80', title: 'Top Social Media Trends NZ Brands Should Watch This Year',         desc: 'From short-form video to influencer partnerships, discover what\'s driving engagement for Kiwi brands in 2026.',      date: '12 May 2026' },
  { tag: 'Analytics',    img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&q=80', title: 'Data-Driven Decisions: Why Analytics is Now Non-Negotiable',   desc: 'NZ marketing leaders share how data literacy has become the single most important skill for modern marketers.',       date: '10 May 2026' },
  { tag: 'Content',      img: 'https://images.unsplash.com/photo-1515378960530-7c0da6231fb1?w=500&q=80', title: 'Content Marketing: Telling Stories That Convert in the NZ Market', desc: 'Authentic storytelling is winning over Kiwi consumers — here\'s how leading brands are doing it right.',            date: '8 May 2026'  },
  { tag: 'Events',       img: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=500&q=80', title: 'Marketing Summit Auckland 2026: Key Takeaways You Need to Know', desc: 'Industry leaders gathered to discuss the future of marketing in a post-AI world. Here are the highlights.',           date: '6 May 2026'  },
  { tag: 'Email',        img: 'https://images.unsplash.com/photo-1596526131083-e8c633c948d2?w=500&q=80', title: 'Email Marketing is Far From Dead — Here\'s Proof from NZ Brands', desc: 'Despite new channels emerging daily, email continues to deliver the highest ROI for NZ marketers in 2026.',          date: '4 May 2026'  },
]

export default function NewsGrid() {
  return (
    <main className="container">
      <h2 className="section-title">Latest News</h2>
      <div className="card-grid">
        {articles.map((a, i) => (
          <div className="card" key={i}>
            <div className="card-img">
              <img src={a.img} alt={a.tag} />
            </div>
            <div className="card-body">
              <span className="card-tag">{a.tag}</span>
              <h3>{a.title}</h3>
              <p>{a.desc}</p>
            </div>
            <div className="card-footer">
              <span className="card-date">{a.date}</span>
              <a href="#" className="read-more">Read more →</a>
            </div>
          </div>
        ))}
      </div>
    </main>
  )
}
