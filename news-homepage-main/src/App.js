import './App.css';
import Navbar from "./Navbar"
function FeaturedArticle() {
  return (
    <section className="featured-article">
      <picture>
        <source media="(max-width: 769px)" srcset="assets/images/image-web-3-mobile.jpg" />
        <img src="/assets/images/image-web-3-desktop.jpg" alt="Illustration"/>
      </picture>
      <div className="featured-article-details">
        <div class="featured-article-title">
          <h1>The Bright Future of Web 3.0?</h1>
        </div>
        <div className="featured-article-headline">
          <p>We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people. But is it really fulfilling its promise?</p>
          <button>READ MORE</button>
        </div>
      </div>
    </section>
  );

}

function TrendingArticles() {
  return (
    <section className="trending-articles">
      <div className="flex">
        <img src="/assets/images/image-retro-pcs.jpg" alt="Retro Computer"/>
        <div>
          <span>01</span>
          <h4>Reviving Retro PCs</h4>
          <p>What happens when old PCs are given modern upgrades?</p>
        </div>
      </div>
      <div className="flex">
        <img src="/assets/images/image-top-laptops.jpg" alt="Laptop Keyboard"/>
        <div>
          <span>02</span>
          <h4>Top 10 Laptops of 2022</h4>
          <p>Our best picks for various needs and budgets.</p>
        </div>
      </div>
      <div className="flex">
        <img src="/assets/images/image-gaming-growth.jpg" alt="Video Game Controller"/>
        <div>
          <span>03</span>
          <h4>The Growth of Gaming</h4>
          <p>How the pandemic has sparked fresh opportunities.</p>
        </div>
      </div>
    </section>
  )
}

function NewArticles() {
  return (
    <section className="new-articles">
      <h2>New</h2>
      <div>
        <h3>Hydrogen VS Electric Cars</h3>
        <p>Will hydrogen-fueled cars ever catch up to EVs?</p>
      </div>
      <hr/>
      <div>
        <h3>The Downsides of AI Artistry</h3>
        <p>What are the possible adverse effects of on-demand AI image generation?</p>
      </div>
      <hr/>
      <div>
        <h3>Is VC Funding Drying Up?</h3>
        <p>Private funding by VC firms is down 50% YOY. We take a look at what that means.</p>
      </div>
    </section>
  )

}
function App() {
  return (
    <>
      <Navbar/>
      <FeaturedArticle/>
      <NewArticles/>
      <TrendingArticles/>
    </>
  );
}

export default App;
