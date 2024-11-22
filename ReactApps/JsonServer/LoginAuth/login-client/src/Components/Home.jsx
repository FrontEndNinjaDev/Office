import React from "react";

const Home = () => {
  return (
    <div>
      <div className="box">
        <main>
          <section id="featured">
            <h2>Featured News</h2>
            <article>
              <h3>Breaking News: Major Event Happens</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                euismod, nisi eget consectetur...
              </p>
              <a href="#">Read more</a>
            </article>
          </section>

          <section id="latest-news">
            <h2>Latest News</h2>
            <article>
              <h3>Latest Update: Something Interesting</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
                lacinia odio vitae...
              </p>
              <a href="#">Read more</a>
            </article>
            <article>
              <h3>Technology Advances in 2024</h3>
              <p>
                Aliquam erat volutpat. Suspendisse potenti. Aenean nec justo ac
                turpis efficitur...
              </p>
              <a href="#">Read more</a>
            </article>
            <article>
              <h3>Sports Highlights: Last Night's Game</h3>
              <p>
                Curabitur tincidunt nisl non enim fermentum, at tristique quam
                dapibus. Proin...
              </p>
              <a href="#">Read more</a>
            </article>
          </section>
        </main>
        <footer>
          <p>&copy; 2024 Teal Blog. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
};

export default Home;
