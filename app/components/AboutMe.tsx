import React from 'react'

const AboutMe = () => {
  return (
    <section id="about-me">
        <div className="about-me-container">
            <div className="about-me-text-container">
                <h1>Rufus Biggs</h1>
                <h1>About Me</h1> {/* For smaller screens width < 500px */}
                <p>
                Driven and detail-oriented, I have a track record of delivering innovative software products. 
                  With a background as a Business Analyst in a fintech startup, I’ve expanded my technical expertise
                  through hands-on development and problem-solving projects. I am now eager to apply my analytical 
                  skills and technical knowledge to something new. Ideally in a collaborative team and working on 
                  meaningful projects. Checkout some of my own personal projects below!
                </p>
                  
                <p>
                  For more information, check out my <a href="https://www.linkedin.com/in/rufus-biggs-519001151/" target="_blank">LinkedIn</a>
                </p>
            </div>
        </div>
    </section>
  )
}

export default AboutMe
