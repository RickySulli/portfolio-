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
  overflow: "hidden",

}
const About = () => (
  <div style={style}>
    <h1>About Page</h1>
    <h4 style = {{marginLeft:"2%"}}>
    Full Stack Web Developer with a passion for creating engaging and intuitive UI experiences. Proven complex problem solver that thrives in high pressure environments. Life-long learner known by colleagues as dependable and steadfast - never stopping until a task is completed.
</h4>
    
  </div>
);

export default About;
