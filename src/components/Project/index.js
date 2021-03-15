import React from 'react';

function ProjectCard(props) {
    return (
      <div className="card">
        <div className="img-container">
          <img alt={props.name} src={props.image} />
        </div>
        <div className="content">
          <ul>
            <li>
              <strong>Name:</strong> {props.name}
            </li>
            <li>
              <strong>description:</strong> {props.description}
            </li>
            <li>
              <strong>tech:</strong> {props.tech}
            </li>
            <li>
                <strong>Link</strong>{props.link}
            </li>
          </ul>
        </div>
      </div>
    );
  }
  
  export default ProjectCard;
  