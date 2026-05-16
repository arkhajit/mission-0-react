import Navbar from './components/Navbar'
import Hero from './components/Hero'
import NewsGrid from './components/NewsGrid'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <div className="app">
      <Navbar />
      <main style={{ flex: 1 }}>
        <Hero />
        <NewsGrid />
      </main>
      <Footer />
    </div>
  )
}

export default App
