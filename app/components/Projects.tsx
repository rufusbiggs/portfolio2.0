import React from 'react'
import ProjectContainer from './ProjectContainer';
import { myProjects } from '../myProjects';

interface Project {
    id : number,
    title : string,
    description : string,
    image : string,
    alt : string,
    techStack : string,
    link : string,
}


const Projects = () => {
  return (
    <section id="projects">
        <div className="projects-container">
            <h1>Projects</h1>
            <div>
                {myProjects.map((project : Project) => {
                    return (
                        <ProjectContainer key={project.id} {...project} />
                    )
                })}
            </div>
        </div>
    </section>
  )
}

export default Projects