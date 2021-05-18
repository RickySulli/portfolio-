import React, {useState} from "react";
import SkillCard from '../Skills';
import Skills from '../../Skills.json';
import Wrapper from '../Wrapper';

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
  };

const SkillList= () => {
    const [skillSet] = useState(Skills)
    return (
    <div>
        <div style={style}>
            <h1 className="title"> Skills </h1>
        <Wrapper>
            {skillSet.map(skill => {
                return <SkillCard
                id={skill.id}
                image={skill.image}
                skill={skill.skill}
                />
            })}
        </Wrapper>
        </div>
    </div>
    )
};
export default SkillList;