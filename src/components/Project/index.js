import React from 'react';
import "./style.css"
function ProjectCard(props) {
    return (
      <div>
      <div className="card h-100"style={{width:"18rem", backgroundColor:"#292933"}}>
          <img className="card-img-top" style={{size:"100%", borderRadius: "15%" }}alt={props.name} src={props.image} />
        <div className="card-title">
          <ul className="list-group list-group-flush">
            <li className="list-group-item"style={{backgroundColor:"#292933"}}>
              <strong>Name:</strong> {props.name}
            </li>
            <li className="list-group-item"style={{backgroundColor:"#292933"}}>
              <strong>description:</strong> {props.description}
            </li>
            <li className="list-group-item"style={{backgroundColor:"#292933"}}>
              <strong>tech:</strong> {props.tech}
            </li>
            <div className="card-body" style={{borderRadius: "20%"}}>
                <a href={props.deployed} target="_blank" className="card-link"><strong>Deployed</strong></a>
                <a href = {props.github} target="_blank"
                className="card-link"><strong>github</strong></a>
            </div>
          </ul>
        </div>
      </div>
      </div>
    );
  }
  
  export default ProjectCard;
  