import React from 'react';
// var style = {
//   width: "100%",
//   height: "100%",
//   display:"flex",
//   justifyContent:"space-around",
//   textAlign:"center",
//   backgroundColor: " #292933",
// }
function ProjectCard(props) {
    return (
      <div className="row">
      <div className="card"style={{width:"18rem"}}>
          <img className="card-img-top"alt={props.name} src={props.image} />
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
            <div className="card-body">
                <a href={props.link} className="card-link"><strong>Link</strong></a>
            </div>
          </ul>
        </div>
      </div>
      </div>
    );
  }
  
  export default ProjectCard;
  