import React from 'react'

const AboutMe = () => {
  return (
    <section id="about-me">
        <div className="about-me-container">
            <div className="about-me-text-container">
                <h1>Rufus Biggs</h1>
                <h1>About Me</h1> {/* For smaller screens width < 500px */}
                <p>
                I am a driven individual with a track record of delivering innovative and successful
                software products. Building upon my experience working at a fintech startup as a
                Business Analyst, I am forging a new career path as a Software Engineer. The
                transition compliments my technical problem solving skills, hunger for learning and
                attention to detail which I have honed throughout my education, career and personal
                development journey. I am now eager to develop these skills in a team environment
                working on meaningful projects.
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