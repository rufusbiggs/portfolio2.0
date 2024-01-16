import React from 'react'

const Nav = () => {
  return (
    <nav>
        {/* Header section on RHS of screen */}
        <ul className="navigation-items">
            <li><a href="#logo">About Me</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#contact">Contact</a></li>
        </ul>
        <div className="social-links">
            <a href="https://www.linkedin.com/in/rufus-biggs-519001151/" target="_blank"><img src="/images/linkedinLogo.png" width="32" height="32"></img></a>
            <a href="https://github.com/rufusbiggs" target="_blank"><img src="/images/githubLogo.png" width="32" height="32"></img></a>
            <a href="/rufus_biggs_cv.pdf" download="rufus_biggs_cv.pdf" title="Download Rufus' CV"><img src="/images/CVLogo.png" width="32" height="32"></img></a>
        </div>

        {/* Header section on smaller screens width < 500px (otherwise hidden) */}
        <div className="nav-cover-header">
            <div className="name-small-screen">
                <div id="logo-me"><img src="images/ME.jpeg"></img></div>
                <h3>Rufus Biggs</h3>
            </div>
            <div className="hamburger-menu">
                <button id="hamburger-menu-button"><img src="images/hamburger-icon-white.png" width="36" height="36"></img></button>
            </div>
        </div>
    </nav>
  )
}

export default Nav