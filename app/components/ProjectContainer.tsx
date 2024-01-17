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
    <div className="individualProjects">
      <div className="projectTitle">
        <h3>{project.title}</h3>
        <a href={project.link} target="_blank" className="projectLink" ><p className="projectLinkText" >View project here</p></a>
      </div>
      <div className="individual-projects-bottom">
          <div className="projectDescTechLink" >
              <p className="projectDescription" >{project.description}</p>
              <p className="techStack" >Tech: {project.techStack}</p>
          </div>
          <img src={project.image} alt={project.alt} />
      </div>
    </div>
  )
}

export default ProjectContainer