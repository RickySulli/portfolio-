import React from 'react';
import "./style.css";

var style = {
  color: "beige",
  backgroundColor: "#292933"
}
function NavTabs(props) {
  const tabs = ['Contact', 'About', 'Projects', 'Resume', 'Skills'];
  return (
    <ul className="nav nav-tabs" style = {style}>
      {tabs.map(tab => (
        <li className="nav-item" key={tab}>
          <a
            href={'#' + tab.toLowerCase()}
            onClick={() => props.handlePageChange(tab)}
            className={
              props.currentPage === tab ? 'nav-link active' : 'nav-link'
            }
          >
            {tab}
          </a>
        </li>
      ))}
    </ul>
  );
}

export default NavTabs;
