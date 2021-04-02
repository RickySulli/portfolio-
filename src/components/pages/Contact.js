import React from "react";


var style = {
    width: "100%",
    height: "100%",
    display:"flex",
    justifyContent:"space-around",
    textAlign:"center",
    backgroundColor: " #292933",
    color:"beige",
    padding:"5%",
    overflow: "hidden"

}

const Contact = () => (
  <div className="row no-gutters" style={style}>
            {/* {Column1} */}
            <div className = "col"style={{display:"flex",justifyContent:"space-evenly",flexFlow:"column",alignItems:"center" }}>
                
                <h3 className="row" ></h3>
                <h1><a href="tel:+1-817-690-1019"><i class="fas fa-phone"></i></a></h1>
            </div>
            {/* {Column2} */}
            <div className= "col"style={{display:"flex",justifyContent:"space-evenly",flexFlow:"column",alignItems:"center" }}>
                <h4></h4>
                <h1><a href="mailto:dostuffforme@gmail.com?subject =Feedback@body =Message"><i class="far fa-envelope"></i></a></h1>
            </div>
            {/* {Column3} */}
            <div className= "col"style={{display:"flex",justifyContent:"space-evenly",flexFlow:"column",alignItems:"center" }}>
              <h3></h3>
                <h1>
                <a href="https://github.com/rickysulli"><i class="fab fa-github"></i></a>
                </h1>
            </div>
            <div className= "col"style={{display:"flex",justifyContent:"space-evenly",flexFlow:"column",alignItems:"center" }}>
              <h3></h3>
                <h1>
                <a href="https://youtube.com/channel/UCaGkSXwQFxNjYYDPriCr-sw"><i class="fab fa-youtube"></i></a>
                </h1>
            </div>
        </div>
);

export default Contact;
