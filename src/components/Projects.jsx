import React from 'react'
import featured from '../utils/featured'
import projects from '../utils/projects'
import SectionTitle from '../assets/SectionTitle'
import FeaturedProject from './FeaturedProject'
import ProjectItem from './ProjectItem'

function Projects() {

    const ProjList = {
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "center",
        flexFlow: "row wrap",
        maxWidth: "100%",
    }

  return (
    <div>
        <SectionTitle title="Projects" />
        {
        featured.map((proj)=>{
            return(
                <FeaturedProject 
                    title={proj.title}
                    tools={proj.tools}
                    image={proj.image}
                    summary={proj.summary}
                    github={proj.github}
                />
            )
        })
        }
        <h1>Other Projects</h1>
        <div style={ProjList}>
        {
        projects.map((proj)=>{
            return(
                <ProjectItem 
                    title={proj.title}
                    image={proj.image}
                    summary={proj.summary}
                    github={proj.github}
                />
            )
        })
        }
        </div>
    </div>
  )
}

export default Projects