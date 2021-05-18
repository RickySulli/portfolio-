import React from 'react';

function HistoryCard(props) {
    return (
      <div>
      <div className="card h-100"style={{width:"18rem", backgroundColor:"#292933"}}>
          <img className="card-img-top" style={{size:"100%", borderRadius: "69%" }}alt={props.name} src={props.image} />
        <div className="card-title">
          <ul className="list-group list-group-flush">
            <li className="list-group-item"style={{backgroundColor:"#292933"}}>
              <strong>Title: </strong> {props.title}
            </li>
            <li className="list-group-item"style={{backgroundColor:"#292933"}}>
              <strong>Company: </strong> {props.company}
            </li>
            <li className="list-group-item"style={{backgroundColor:"#292933"}}>
              <strong>City: </strong> {props.city}
            </li>
            <li className="list-group-item"style={{backgroundColor:"#292933"}}>
              <strong>from: </strong> {props.time}
            </li>
            <li className="list-group-item"style={{backgroundColor:"#292933"}}>
              <strong>description:</strong> {props.description}
            </li>
          </ul>
        </div>
      </div>
      </div>
    );
  }
  
  export default HistoryCard;
  