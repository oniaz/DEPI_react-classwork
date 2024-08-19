import './Home.css';

function Home() {
    return (
        <div className="homepage">
            {/* <header className="header">
                <div className="logo">BlogLogo</div>
            </header> */}

            <section className="hero">
                <h1 className="hero-title">Welcome to Our Blog</h1>
                <p className="hero-subtitle">Explore the latest articles, news, and stories.</p>
            </section>

            {/* <section className="content">
                <article className="post">
                    <h2 className="post-title">First Blog Post</h2>
                    <p className="post-snippet">This is a short snippet of the first blog post...</p>
                    <a href="/post/1" className="read-more">Read More</a>
                </article>

                <article className="post">
                    <h2 className="post-title">Second Blog Post</h2>
                    <p className="post-snippet">This is a short snippet of the second blog post...</p>
                    <a href="/post/2" className="read-more">Read More</a>
                </article>

                <article className="post">
                    <h2 className="post-title">Third Blog Post</h2>
                    <p className="post-snippet">This is a short snippet of the third blog post...</p>
                    <a href="/post/3" className="read-more">Read More</a>
                </article>
            </section> */}

            <footer className="footer">
                <p>&copy; 2024 Your Blog Name. All rights reserved.</p>
            </footer>
        </div>
    );
}

export default Home;
