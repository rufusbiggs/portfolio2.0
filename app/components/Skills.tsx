import React from 'react'

const Skills = () => {
  return (
    <section id="skills">
        <div className="skills-container">
            <h1>Skills</h1>
            <div>
              <h3>Development Technologies</h3>
              <ul className="skills-list">
                  <li>TypeScript / JavaScript</li>
                  <li>React</li>
                  <li>Git / Github</li>
                  <li>Node</li>
                  <li>Next</li>
                  <li>Redux</li>
                  <li>Jest / Mocha</li>
                  <li>Firebase</li>
                  <li>Express</li>
              </ul>
            </div>
            <div>
              <h3>Product and Design</h3>
              <ul>
                <li>Jira</li>
                <li>MS Excel Modelling</li>
                <li>UI/UX Figma</li>
                <li>QA/QC Selenium and Postman</li>
              </ul>
            </div>
            <div>
            <h3>Methodologies</h3>
              <ul>
                <li>Agile Development</li>
                <li>Test Driven Development</li>
                <li>Financial Modelling</li>
              </ul>
            </div>
        </div>
    </section>
  )
}

export default Skills