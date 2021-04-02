import React from "react";

var style = {
  width: "100%",
  height: "100%",
  display:"flex",
  justifyContent:"space-around",
  flexDirection:"column",
  textAlign:"center",
  backgroundColor: " #292933",
  color:"beige",
  padding:"5%",
  overflow: "hidden"
}
const Resume = () => (

  <div style={style}>

    <h1 className="title">Work Experience</h1>
    <div className="row title"style={{padding: "3rem", flexDirection:"column", display:"flex", justifyContent:"center"}}>
    <h3>Continental Club/C-Boy’s Heart and Soul</h3>
    <h5>Austin, TX  2012 – Present
Position: Bartender/ Manager – Working to continuously broaden my knowledge of cocktails both classic and current.  Responsible for creating a pleasant and welcoming atmosphere to our regulars as well as international tourists at an iconic Austin institution.
Critical skills employed: Sales, time and stress management, customer service, creativity.
</h5>
</div>
    <div className="row title" style={{padding: "3rem", flexDirection:"column", display:"flex", justifyContent:"center"}}>
    <h3>Trophy's Bar and Grill  </h3>
    <h5>Austin, TX  2010 – 2013
Position: Manager – Responsible for bookkeeping, hiring, scheduling, inventory management, general building maintenance, employee supervision and bar sales.
Critical skills employed: Sales, organization, attention to detail, leadership, relationship management, expense control.
</h5>
</div>
    <div className="row title" style={{padding: "3rem", flexDirection:"column", display:"flex", justifyContent:"center"}}>
    <h3>Free Speech Systems </h3>
    <h5>Austin, TX 2015-2016
Position: Ad Sales/design/copy   relationship management, cold calling.
</h5>
</div>
    <div className="row title" style={{padding: "3rem", flexDirection:"column", display:"flex", justifyContent:"center"}}>
    <h3>The Onion</h3>
    <h5>Austin, TX  2011- 2013
Position: Route Delivery Driver.   relationship management
</h5>
</div>
    <div className="row title" style={{padding: "3rem", flexDirection:"column", display:"flex", justifyContent:"center"}}>
    <h3>Capitol Courier/Freightliner</h3>
    <h5>Austin, TX 2005-2007
Position: Delivery Driver/Account Manager

</h5>
</div>
<div className="row title" style={{padding: "3rem", flexDirection:"column", display:"flex", justifyContent:"center"}}>
    <h3>Apple Computer</h3>
    <h5>Austin, TX 2004-2005
Position: Customer Service Agent used: SAP 
</h5>
</div>
    <div className="row title" style={{padding: "3rem", flexDirection:"column", display:"flex", justifyContent:"center"}}>
    <h3>Physicians' Center PA</h3>
    <h5>Georgetown, TX 2003-2004
Position: Front Office/Custodian of Medical Records

</h5>
</div>
  </div>
);

export default Resume;
