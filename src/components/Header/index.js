import React from "react";
import "./style.css"
var style = {
    display:"flex",
    justifyContent: "space-around",
    alignText: "center",
    backgroundColor: " #292933",
    color:"beige",
    padding:"5%"

}
const Header =() =>(
    <div className="row" style={style}>
        <h1 className="title">Ricky Sullivan</h1>
        <div className="col-5" style={{justifyContent:"center", alignItems:"center", display:"flex"}}>
                <h2>Web Developer</h2>
        </div>
        <img src="https://i.imgur.com/WnaS5Vk.jpg" alt="Fortune"></img>
    </div>
)

export default Header;