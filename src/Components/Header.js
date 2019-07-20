import React from 'react';
import {FaLinkedin, FaInstagram, FaGithub} from "react-icons/fa";

const Header = ({data}) => {
    const networks = data ? data.social.map((network) => {
        switch (network.name) {
            case 'linkedin':
                return <li key={network.name}><a href={network.url} target="_blank" rel="noopener noreferrer"><FaLinkedin/></a></li>
            case 'instagram':
                return <li key={network.name}><a href={network.url} target="_blank" rel="noopener noreferrer"><FaInstagram/></a></li>
            case 'github':
                return <li key={network.name}><a href={network.url} target="_blank" rel="noopener noreferrer"><FaGithub/></a></li>
            default:
                return null;
        }
    }) : null;
    return (
        <header id="home">

            <nav id="nav-wrap">

                <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
                <a className="mobile-btn" href="#home" title="Hide navigation">Hide navigation</a>

                <ul id="nav" className="nav">
                    <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
                    <li><a className="smoothscroll" href="#about">About</a></li>
                    <li><a className="smoothscroll" href="#resume">Resume</a></li>
                    <li><a className="smoothscroll" href="#portfolio">Works</a></li>
                    <li><a className="smoothscroll" href="#testimonials">Testimonials</a></li>
                    <li><a className="smoothscroll" href="#contact">Contact</a></li>
                </ul>

            </nav>

            <div className="row banner">
                <div className="banner-text">
                    <h2>Hi there,</h2>
                    <h1 className="responsive-headline">I'm {data.name}.</h1>
                    <h3>I'm a <span>{data.occupation}</span> {data.description} based in {data.address.city}.</h3>
                    <hr />
                    <ul className="social">
                        {networks}
                    </ul>
                </div>
            </div>

            <p className="scrolldown">
                <a className="smoothscroll" href="#about"><i className="icon-down-circle"></i></a>
            </p>

        </header>
    )
}

export default Header;