import { useState } from 'react'
import apeImage from './image.png'
import apeImageNew from './image copy.png'
import './App.css'

const PARTICLES = 40

function App() {
  const [particles] = useState(() =>
    Array.from({ length: PARTICLES }, () => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 1,
      duration: Math.random() * 15 + 10,
      delay: Math.random() * -20,
    }))
  )

  return (
    <div className="stoned-ape">
      {/* Animated gradient background */}
      <div className="bg-gradient" />
      <div className="bg-noise" />

      {/* Floating particles */}
      <div className="particles">
        {particles.map((p, i) => (
          <div
            key={i}
            className="particle"
            style={{
              left: `${p.x}%`,
              top: `${p.y}%`,
              width: p.size,
              height: p.size,
              animationDuration: `${p.duration}s`,
              animationDelay: `${p.delay}s`,
            }}
          />
        ))}
      </div>

      {/* Hero */}
      <header className="hero">
        <div className="hero-content melt-box">
          <img src={apeImage} alt="Stoned Ape" className="ape-mascot" />
          <h1 className="title glitch" data-text="STONED APE">
            STONED APE
          </h1>
          <p className="ticker neon-text">$STONAPE</p>
          <p className="tagline">
            The ape that saw the future. Literally. He was tripping.
          </p>
          <a href="#take-the-hit" className="cta-button">
            <span className="cta-text">Take the Hit</span>
            <span className="cta-glow" />
          </a>
          <div className="hero-buttons">
            <a href="#" className="hero-btn" target="_blank" rel="noopener noreferrer">
              Twitter
            </a>
            <a href="#" className="hero-btn" target="_blank" rel="noopener noreferrer">
              Chart
            </a>
          </div>
        </div>
      </header>

      {/* Picture - Take the Hit destination */}
      <section id="take-the-hit" className="section joint-section">
        <h2 className="section-title">Take the Hit</h2>
        <p className="section-subtitle">Pass it to the left</p>
        <div className="joint-rotation melt-box">
          <img src={apeImageNew} alt="Stoned Ape" className="joint-ape-pic" />
        </div>
      </section>

      {/* Supplies - Tokenomics */}
      <section className="section supplies">
        <h2 className="section-title">Supplies</h2>
        <p className="section-subtitle">The numbers (trust us bro)</p>
        <div className="tokenomics melt-box">
          <div className="stat">
            <span className="stat-value">1,000,000,000</span>
            <span className="stat-label">Total Supply</span>
          </div>
          <div className="stat">
            <span className="stat-value">0%</span>
            <span className="stat-label">Dev Tax (we're not that guy)</span>
          </div>
          <div className="stat">
            <span className="stat-value">LP</span>
            <span className="stat-label">Burned (allegedly)</span>
          </div>
          <div className="stat">
            <span className="stat-value">∞</span>
            <span className="stat-label">Hopium</span>
          </div>
        </div>
      </section>

      {/* The Tribe - Community */}
      <section className="section tribe">
        <h2 className="section-title">The Tribe</h2>
        <p className="section-subtitle">Join the apes. No banana required.</p>
        <div className="community melt-box">
          <p className="tribe-desc">
            A collective of degens, memelords, and people who probably should
            touch grass more often. We're here for the vibes, the gains, and
            the inevitable screenshots.
          </p>
          <div className="social-links">
            <a href="#" className="social-link">Twitter</a>
            <a href="#" className="social-link">Telegram</a>
            <a href="#" className="social-link">DexScreener</a>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <footer className="footer">
        <div className="footer-cta melt-box">
          <h2>Ready to ascend?</h2>
          <a href="#take-the-hit" className="cta-button">
            <span className="cta-text">Take the Hit</span>
            <span className="cta-glow" />
          </a>
          <p className="disclaimer">
            NFA. DYOR. This is a meme. We are not financial advisors. We are
            apes. Apes eat bananas.
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App
