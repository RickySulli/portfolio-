import React, {useState} from "react";
import ProjectCard from "../Project";
import Wrapper from '../Wrapper';
import Projects from '../../Projects.json';
var style = {
  width: "100%",
  height: "100%",
  display:"flex",
  justifyContent:"space-around",
  textAlign:"center",
  backgroundColor: " #292933",
  color:"beige",
  padding:"5%",
  overflow: "hidden"
}

const Portfolio = () => {
  const projectList = useState(Projects);
return(

  <div style={style}>
    <h1>Portfolio</h1>
<p>Here are some projects where I was involved</p>
<Wrapper>
{projectList.map(project => {
        return <ProjectCard
        id = {project.id}
        name= {project.name}
        image= {project.image}
        description= {project.description}
        tech= {project.tech}
        link= {project.link}
        
        />
      })}
</Wrapper>
  </div>
)};

export default Portfolio;
