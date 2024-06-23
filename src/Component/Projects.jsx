import React, { useState } from 'react'
import './App.css';
import { Link } from 'react-router-dom';
import { FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa"
import { GiHamburgerMenu } from 'react-icons/gi';
function Projects() {
    const [isNavOpen, setIsNavOpen] = useState(false);

    const toggleNav = () => {
        setIsNavOpen(!isNavOpen);
    };
    return (
        <div>
            <nav className='navigation'>

                <div className="nav-brand">Portfolio</div>
                <div className='hamburger-menu' onClick={toggleNav} >
                    <GiHamburgerMenu />
                </div>
                <div className={
                    isNavOpen ? "navigation-menu expanded" : "navigation-menu"
                }>
                    <ul>
                        <li><Link className="link2" to="/">Home</Link></li>
                        <li><Link className="link2 link-active" to="/projects">Projects</Link></li>
                        <li><Link className="link2" to="/blogs">Blogs</Link></li>
                    </ul>
                </div>
            </nav>
            <header className="hero">

                <h1 className="hero-heading">
                    Hello ! welcome to my project page. <span className="heading-inverted">Here you see my projects</span></h1>
            </header>
            <ul className="list-non-bullet">
                <li>
                    <div className="container container-center section">
                        <h1>Quote Generator</h1>
                        <small>November,2022</small>
                        <p>A quote generator app with <strong>JavaScript</strong>. You get new quotes and also share on your twitter handler. </p>
                        <ul className="list-non-bullet">
                            <li className="list-item"> <Link className="link primary-link" to="https://golden-dieffenbachia-3ed8ff.netlify.app/" target='_blank'>See Projects Demo</Link></li>
                            <li> <Link className="link secondary-link" to="https://github.com/itsankittiwari/quote-generator" target='_blank'>Check Source Code</Link></li>
                        </ul>
                    </div>
                </li>
            </ul>
            <br />
            <ul className="list-non-bullet Ow">
                <li>
                    <div className="container container-center section">
                        <h1>Cash Register</h1>
                        <small>November,2022</small>
                        <p>A Cash Register app with <strong>JavaScript</strong>Here you check after paying the bill how much amount you left in the number of notes. </p>
                        <ul className="list-non-bullet">
                            <li className="list-item"> <Link className="link primary-link" to="https://main--tubular-cendol-7b63db.netlify.app/" target='_blank'>See Projects Demo</Link></li>
                            <li> <Link className="link secondary-link" to="https://github.com/itsankittiwari/Cash-Register" target='_blank'>Check Source Code</Link></li>
                        </ul>
                    </div>
                </li>
            </ul>
            <br />
            <ul className="list-non-bullet">
                <li>
                    <div className="container container-center section">
                        <h1>Weather App</h1>
                        <small>June,2023</small>
                        <p>Our Weather App, built using JavaScript, leverages REST APIs to provide real-time weather updates.
                         The app fetches data from a reliable weather service API, displaying current conditions, forecasts, and other weather-related information.
                          Users can search for weather details by city. 
                          The intuitive interface ensures a seamless user experience, making it easy to stay informed about the weather anytime, anywhere. </p>
                        <ul className="list-non-bullet">
                            <li className="list-item"> <Link className="link primary-link" to="https://weather-m1d7tk1i0-itsankittiwaris-projects.vercel.app/" target='_blank'>See Projects Demo</Link></li>
                            <li> <Link className="link secondary-link" to="https://github.com/itsankittiwari/WeatherApp" target='_blank'>Check Source Code</Link></li>
                        </ul>
                    </div>
                </li>
            </ul>
            <br />
            <ul className="list-non-bullet Ow">
                <li>
                    <div className="container container-center  section">
                        <h1>Password Generator</h1>
                        <small>September,2023</small>
                        <p>A Password generator app with <strong>JavaScript</strong>. Here user generate the new Password and copy it if they want to manage the lenght of password than they easily to do in app. </p>
                        <ul className="list-non-bullet">
                            <li className="list-item"> <Link className="link primary-link" to="https://main--heartfelt-starlight-c26e07.netlify.app/" target='_blank'>See Projects Demo</Link></li>
                            <li> <Link className="link secondary-link" to="https://github.com/itsankittiwari/Password_generator" target='_blank'>Check Source Code</Link></li>
                        </ul>
                    </div>
                </li>
            </ul>
            <br />
            <ul className="list-non-bullet">
                <li>
                    <div className="container container-center section">
                        <h1>Tic-Tac-Toe</h1>
                        <small>March,2024</small>
                        <p>Our Tic Tac Toe game, developed using JavaScript, offers a simple yet engaging experience for players. The game features a 3x3 grid where two players take turns marking their respective symbols (X and O) in an attempt to align three symbols in a row, column, or diagonal. The game is designed to detect winning combinations and declare a winner, or notify the players if the game ends in a draw. The intuitive interface ensures easy playability, while the underlying JavaScript logic handles game state and player interactions seamlessly. </p>
                        <ul className="list-non-bullet">
                            <li className="list-item"> <Link className="link primary-link" to="https://tic-tac-toe-pi-vert.vercel.app/" target='_blank'>See Projects Demo</Link></li>
                            <li> <Link className="link secondary-link" to="https://github.com/itsankittiwari/tic-tac-toe" target='_blank'>Check Source Code</Link></li>
                        </ul>

                    </div>
                </li>
            </ul>
            <br />
            <footer className="footer">
                <div className="footer-header">Contact me with Social-Media platforms</div>
                <ul className="social-links list-non-bullet">
                    <li className="list-item-inline"><Link className="link" to="https://www.instagram.com/ankittiwari328/" target='_blank'><FaInstagram className='Instagram' /></Link></li>
                    <li className="list-item-inline"><Link className="link" to="https://twitter.com/home" target='_blank'><FaTwitter className='twitter' /></Link></li>
                    <li className="list-item-inline"><Link className="link" to="https://www.linkedin.com/in/ankit-tiwari-7534a41b3/" target='_blank'><FaLinkedin className='linkedin' /></Link></li>
                </ul>
            </footer>
        </div>
    )
}

export default Projects