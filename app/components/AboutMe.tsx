import React from 'react'

const AboutMe = () => {
  return (
    <section id="about-me">
        <div className="about-me-container">
            <div className="about-me-text-container">
                <h1>Rufus Biggs</h1>
                <h1>About Me</h1> {/* For smaller screens width < 500px */}
                <p>Hi, I'm Rufus! I have a strong passion for problem-solving, which began during my university years when I developed complex real-world engineering solutions. This passion evolved into my first job as a business analyst and product manager. I have successfully contributed to the entire lifecycle of software products, from ideation to completion and want to continue this trend!</p>
                <p>My passion for problem solving and software development led me to learn to code. The creative side of me wanted to start with front-end engineering but once I started learning I couldn't stop adding skills to my repertoir!</p>
            </div>
        </div>
    </section>
  )
}

export default AboutMe