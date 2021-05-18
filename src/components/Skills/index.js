import React from 'react';

var style = {
    
    borderRadius: "80%",
    float: "left",
    backgroundColor: "#292933",
    objectFit: "cover"
};
function SkillCard(props) {
    return(
        <div class="card" style={{width: "18rem", backgroundColor: "#292933", borderStyle:"none"}}>
        <img class="card-img-top" style={style} src={props.image} alt="Card img cap"/>
        <div class="card-body">
            <p class="card-text">{props.skill}</p>
        </div>
    </div>
    )
}
export default SkillCard;