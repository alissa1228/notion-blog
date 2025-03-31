"use client"
// pages/index.tsx
import Head from 'next/head'

export default function TestPage() {
  return (
    <>
      <Head>
        <title>HALAL LAB — Spring/Summer 22</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </Head>

      <div className="announcement-bar">🚛 NOW: FREE SHIPPING ON PURCHASES OVER €80</div>

      <nav className="nav">
        <h1>HALAL LAB</h1>
        <ul>
          <li>NEW ARRIVALS</li>
          <li>SHOP</li>
          <li>COLLECTIONS</li>
          <li>PROMOS</li>
        </ul>
      </nav>

      <header className="hero">
        <div className="hero-text">
          <h2>SPRING;<br />SUMMER’ 22</h2>
          <p>A new friendly face for your sustainable shopping</p>
          <button>SHOP NOW</button>
        </div>
        <div className="hero-image">
          <img src="https://images.unsplash.com/photo-1600185365926-3b6c1d2611a5?fit=crop&w=600&q=80" alt="Sneakers" />
        </div>
      </header>

      <section className="fact">
        <p>
          Here’s a beautiful fact. Your feet have about <strong>250,000 sweat glands</strong><br />
          which produce up to half a pint of perspiration each day.
        </p>
      </section>

      <section className="trending">
        <div className="tabs">
          <span>TRENDING</span>
          <span>JORDAN BRAND</span>
          <span className="active">CONVERSE</span>
          <span>DUNK</span>
          <span>ADIDAS</span>
        </div>
        <div className="cards">
          <div className="card" style={{ backgroundColor: '#d2f1e4' }}>
            <img src="https://images.unsplash.com/photo-1585750011210-3696a15456b9?fit=crop&w=500&q=80" alt="Converse 1" />
          </div>
          <div className="card" style={{ backgroundColor: '#d6d6ff' }}>
            <img src="https://images.unsplash.com/photo-1551854838-93d7b90d46e6?fit=crop&w=500&q=80" alt="Converse 2" />
          </div>
          <div className="card" style={{ backgroundColor: '#ffd2cb' }}>
            <img src="https://images.unsplash.com/photo-1528701800489-20f22e81d6d5?fit=crop&w=500&q=80" alt="Converse 3" />
          </div>
        </div>
      </section>

      <style jsx>{`
        * {
          box-sizing: border-box;
        }
        body {
          margin: 0;
          font-family: 'Space Grotesk', sans-serif;
          background: #f2f2f2;
        }
        .announcement-bar {
          background: yellow;
          padding: 8px;
          font-size: 0.9rem;
          text-align: center;
          border-bottom: 2px solid black;
        }
        .nav {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1rem 2rem;
          border-bottom: 3px solid black;
          background: #fff;
        }
        .nav h1 {
          font-size: 1.5rem;
          font-weight: bold;
        }
        .nav ul {
          display: flex;
          gap: 1.5rem;
          list-style: none;
        }
        .hero {
          display: flex;
          justify-content: space-between;
          padding: 2rem;
          border-bottom: 3px solid black;
          background: #dbf3ee;
        }
        .hero-text {
          max-width: 50%;
        }
        .hero-text h2 {
          font-size: 3rem;
          font-weight: 700;
          margin: 0 0 1rem;
        }
        .hero-text p {
          font-size: 1rem;
          margin-bottom: 1.5rem;
        }
        .hero-text button {
          background: yellow;
          border: 2px solid black;
          padding: 0.8rem 1.2rem;
          font-weight: bold;
          cursor: pointer;
        }
        .hero-image img {
          width: 300px;
          border: 2px solid black;
        }
        .fact {
          padding: 2rem;
          background: #fff;
          font-size: 1.4rem;
          line-height: 1.5;
          border-bottom: 3px solid black;
        }
        .trending {
          padding: 2rem;
          background: #fefefe;
        }
        .tabs {
          display: flex;
          gap: 1.5rem;
          font-weight: bold;
          border-bottom: 2px solid black;
          padding-bottom: 0.5rem;
          margin-bottom: 2rem;
        }
        .tabs .active {
          color: yellow;
          background: black;
          padding: 0.2rem 0.6rem;
        }
        .cards {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.5rem;
        }
        .card {
          border: 2px solid black;
          padding: 1rem;
        }
        .card img {
          width: 100%;
          display: block;
        }
      `}</style>
    </>
  );
}