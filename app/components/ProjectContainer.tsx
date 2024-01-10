import React from 'react'

interface Project {
    id : number,
    title : string,
    description : string,
    image : string,
    alt : string,
    techStack : string,
    link : string,
}

const ProjectContainer = (project : Project) => {
  return (
    <>
      <h3>{project.title}</h3>
      <div className="individual-projects">
          <div>
              <p>{project.description}</p>
              <p>Core Technologies: {project.techStack}</p>
              <h6>{project.link}</h6>
          </div>
          <img src={project.image} alt={project.alt} />
      </div>
    </>
  )
}

export default ProjectContainer