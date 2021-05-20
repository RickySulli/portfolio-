import React from "react";
// import './Footer.css';
var style = {
   
    display:"flex",
    justifyContent:"space-evenly",
    backgroundColor: " #292933",
    color:"beige",
    
}
const Footer = () => (
<div className= "main-footer fixed-bottom" style={style}>

    
        <p>
            &copy;{new Date().getFullYear()} Ricky Sullivan
        </p>
        <a href = "mailto: dostuffforme@gmail.com">dostuffforme@gmail.com</a>
    
    
</div>
);

export default Footer;
