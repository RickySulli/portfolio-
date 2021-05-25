import React, {useState} from "react";
import ProjectCard from "../Project";
import Wrapper from '../Wrapper';
import Projects from '../../Projects.json';
import "./style.css"
var style = {
  width: "100%",
  height: "100%",
  display:"flex",
  justifyContent:"space-around",
  textAlign:"center",
  backgroundColor: " #292933",
  color:"beige",
  padding:"5%",
  overflow: "hidden",
}

const Portfolio = () => {
  const [projectList] = useState(Projects);
return(
<div className="page">
  <div style={style}>
    <h1 className="title">Projects</h1>
<Wrapper>
{projectList.map(project => {
        return <ProjectCard
        id = {project.id}
        name= {project.name}
        image= {project.image}
        description= {project.description}
        tech= {project.tech}
        deployed = {project.deployed}
        github = {project.github}
        />
      })}
</Wrapper>
  </div>
</div>
)};

export default Portfolio;
