import React, { useState } from 'react'
import './App.css';
import { Link } from 'react-router-dom'
import img from '../assets/images/hero_banner.svg'
import { FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa"
import { GiHamburgerMenu } from 'react-icons/gi';
function Home() {

    const [isNavOpen, setIsNavOpen] = useState(false);

    const toggleNav = () => {
        setIsNavOpen(!isNavOpen);
    };
    return (
        <>
            <nav className='navigation'>

                <div className="nav-brand">Portfolio</div>
                <div className='hamburger-menu' onClick={toggleNav} >
                    <GiHamburgerMenu />
                </div>
                <div className={
                    isNavOpen ? "navigation-menu expanded" : "navigation-menu"
                }>
                    <ul>
                        <li><Link className="link2 link-active" to="/">Home</Link></li>
                        <li><Link className="link2" to="/projects">Projects</Link></li>
                        <li><Link className="link2" to="/blogs">Blogs</Link></li>
                    </ul>
                </div>
            </nav>

            <header className="hero">
                <img className="hero-img" src={img} />
                <h1 className="hero-heading">
                    Hello ! I'm Ankit Tiwari <span className="heading-inverted">The Web-Developer</span>
                </h1>
            </header>
            <section className="section Ow">
                <div className="container">
                    <h1>Skills</h1>
                    <p>I'm famillar with HTML5, CSS3, Git, JavaScript, NodeJs, ReactJs, Mysql and Web Hosting</p>
                </div>
            </section>
            <section className="section">
                <div className="container container-center">
                    <h1>Experience</h1>
                    <p>I have been working as a data analyst since last 6 months in Droisys india pvt ltd but due to my interest in web development, I want to work in web development field.</p>
                    <p>I have given my linkedin profile on the button below, you can also know about me from here</p>
                    <br />
                    <Link className="link primary-link" to="https://www.linkedin.com/in/ankit-tiwari-7534a41b3/" target='_blank'>Linkedin Profile</Link>
                </div>

            </section>
            <section className="section Ow">
                <div className="container container-center">
                    <h1>Projects</h1>
                    <p>Here, you can browse my projects I have done and hosted online, to see my work.</p>
                    <br />
                    <Link className="link primary-link" to="/projects" >See Projects</Link>
                </div>

            </section>
            <section className="section">
                <div className="container container-center">
                    <h1>Blogs</h1>
                    <p>I am also working on some technical and non-technical blogs. I like to document my journey of learning.</p>
                    <br />
                    <Link className="link secondary-link" to="/blogs">Read Blogs</Link>
                </div>
            </section>
            <footer className="footer">
                <div className="footer-header">Contact me with Social-Media platforms</div>
                <ul className="social-links list-non-bullet">
                    {/* <li><i class="fab fa-instagram fa-spin"></i></li> */}
                    {/* <li> <i class="fa-brands fa-instagram fa-bounce"></i></li> */}
                    <li className="list-item-inline"><Link className="link" to="https://www.instagram.com/ankittiwari328/" target='_blank'><FaInstagram className='Instagram' /></Link></li>
                    <li className="list-item-inline"><Link className="link" to="https://twitter.com/home" target='_blank'><FaTwitter className='twitter' /></Link></li>
                    <li className="list-item-inline"><Link className="link" to="https://www.linkedin.com/in/ankit-tiwari-7534a41b3/" target='_blank'><FaLinkedin className='linkedin' /></Link></li>
                </ul>
            </footer>
        </>
    )
}

export default Home