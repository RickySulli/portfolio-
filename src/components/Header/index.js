import React from "react";
import "./style.css"
var style = {
    display:"flex",
    justifyContent: "space-around",
    alignText: "center",
    backgroundColor: " #292933",
    color:"beige",
    padding: "1%"

}
const Header =() =>(
    <div className="row header" style={style}>
        <h1 className="title">Ricky Sullivan</h1>
            <div className="col-5" style={{justifyContent:"space-evenly", alignItems:"center", display:"flex"}}>
                    <h2>Web Developer</h2>
                    <p>Austin, TX</p>
            </div>
        <img src="https://i.imgur.com/WnaS5Vk.jpg" alt="Ricky Sullivan"></img>
    </div>
)

export default Header;