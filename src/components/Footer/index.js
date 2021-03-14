import React from "react";
// import './Footer.css';
var style = {
    width: "100%",
    display:"flex",
    justifyContent:"space-evenly",
    backgroundColor: " #292933",
    color:"beige",
    
}
const Footer = () => (
<div className= "main-footer fixed-bottom" style={style}>

    <div className='row'>
        <p className="col-sm">
            &copy;{new Date().getFullYear()}
        </p>
    </div>
    
</div>
);

export default Footer;
