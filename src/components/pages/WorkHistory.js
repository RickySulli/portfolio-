import React, {useState} from "react";
import HistoryCard from "../WorkHistory";
import Wrapper from '../Wrapper';
import WorkHistory from '../../WorkHistory.json';


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
const Work = () => {
    const [historyList] = useState(WorkHistory);
    return (
        <div>
            <div style={style}>
                <h1 className="title">Work History</h1>
                <Wrapper>
                    {historyList.map(history => {
                        return <HistoryCard
                        id={history.id}
                        company={history.company}
                        title={history.title}
                        image={history.image}
                        time={history.time}
                        city={history.city}
                        description={history.description}
                        />
                    })}
                </Wrapper>
            </div>
        </div>
    )
};

export default Work; 