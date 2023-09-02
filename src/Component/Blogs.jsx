import React from 'react'
import './App.css';
import { Link } from 'react-router-dom';
function Blogs() {
  return (
    <div>
      <nav className="navigation container">

        <div className="nav-brand">Portfolio</div>
        <ul className="list-non-bullet nav-pills ">
          <li className="list-item-inline"><Link className="link" to="/">Home</Link></li>
          <li className="list-item-inline"><Link className="link" to="/projects">Projects</Link></li>
          <li className="list-item-inline"><Link className="link  link-active" to="/blogs">Blogs</Link></li>
        </ul>
      </nav>
      <header className="hero">
        <h1 className="hero-heading">
          Hello ! I'm Ankit Tiwari <span className="heading-inverted">Here you read my blogs</span>
        </h1>
      </header>
      <section className="section">
        <div className="container container-center section">
          <h1>The Transformative Power of Meditation: Nurturing Inner Peace and Well-Being</h1>
          <p>In today's fast-paced and often chaotic world, finding moments of tranquility and self-discovery has become more crucial than ever. Meditation, an ancient practice with roots in various cultures, has emerged as a beacon of hope for those seeking solace, self-awareness, and improved well-being. </p>
          <br />
          <Link className="link secondary-link" to="/sub-blogs1">Read Blogs</Link>
        </div>
      </section><section className="section Ow">
        <div className="container container-center section">
          <h1>Unveiling the Journey of a Web Developer: Crafting the Digital World</h1>
          <p>In today's digital age, the web is the canvas upon which countless experiences unfold. Behind every stunning website, interactive app, and captivating user interface stands a web developer—a master of code, design, and creativity.  </p>
          <br />
          <Link className="link secondary-link" to="/sub-blogs2">Read Blogs</Link>
        </div>
      </section>
      <footer className="footer">
                        <div className="footer-header">Contact me with Social-Media platforms</div>
                        <ul className="social-links list-non-bullet">
                            <li className="list-item-inline"><Link className="link" to="https://www.instagram.com/ankittiwari328/" target='_blank'>Instagram</Link></li>
                            <li className="list-item-inline"><Link className="link" to="https://twitter.com/home" target='_blank'>Twitter</Link></li>
                            <li className="list-item-inline"><Link className="link" to="https://www.linkedin.com/in/ankit-tiwari-7534a41b3/" target='_blank'>Linkedin</Link></li>
                        </ul>
                    </footer>

    </div>
  )
}

export default Blogs