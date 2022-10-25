import React from 'react'
import featured from '../utils/featured'
import SectionTitle from '../assets/SectionTitle'
import FeaturedProject from './FeaturedProject'

function Projects() {
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
    </div>
  )
}

export default Projects