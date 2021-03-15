import React from "react";
import "./style.css"
var style = {
    display:"flex",
    justifyContent: "space-between",
    alignText: "center",
    backgroundColor: " #292933",
    color:"beige",
    padding:"5%"

}
const Header =() =>(
    <div className="row" style={style}>
        <h1 className="title">Ricky Sullivan</h1>
        <img src="https://i.imgur.com/oauIwUO.jpg" alt="Fortune"></img>
    </div>
)

export default Header;