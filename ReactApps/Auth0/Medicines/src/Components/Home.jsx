import React from 'react'

const Home = () => {
  return (
    <>
      
      <section id="home" className="hero">
    <div className="hero-content">
      <h1>Welcome to MedStore</h1>
      <p>Your reliable pharmacy for health and wellness products</p>
    </div>
  </section>

  <section id="products" className="products-section">
    <h2>Featured Products</h2>
    <div className="products-container">
      <div className="product-card">
        <h3>Product 1</h3>
        <p>Description of product 1.</p>
      </div>
      <div className="product-card">
        <h3>Product 2</h3>
        <p>Description of product 2.</p>
      </div>
      <div className="product-card">
        <h3>Product 3</h3>
        <p>Description of product 3.</p>
      </div>
    </div>
  </section>
  <footer>
    <p>&copy; 2024 MedStore. All Rights Reserved.</p>
  </footer>  
    </>
  )
}

export default Home