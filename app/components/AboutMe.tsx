import React from 'react'

const AboutMe = () => {
  return (
    <section id="about-me">
        <div className="about-me-container">
            <div className="about-me-text-container">
                <h1>Rufus Biggs</h1>
                <h1>About Me</h1> {/* For smaller screens width < 500px */}
                <p>Hi, I&apos;m Rufus! In 2023 I embarked on a career transition learning a range of web development
                   technologies alongside completing several courses. I have used React, Next and 
                   Firebase to build and launch a full-stack web app and - most importantly - 
                   discovered a real passiong for coding in the process.</p>

                <p>I have a background in problem solving, at university I completed a masters in Mathematical 
                  Engineering, which lead me into product management at my first job. Here I helped develop 
                  software from zero to one. Check out my <a href="https://www.linkedin.com/in/rufus-biggs-519001151/" target="_blank">LinkedIn</a> for more info!</p>
            </div>
        </div>
    </section>
  )
}

export default AboutMe