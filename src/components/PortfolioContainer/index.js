import React, { useState } from 'react';
import NavTabs from '../NavTabs';
import Contact from '../pages/Contact';
import About from '../pages/About';
import Projects from '../pages/Projects';
import Skills from '../pages/Skills';
import WorkHistory from '../pages/WorkHistory';
import Footer from '../Footer'
import Header from '../Header'

// import { render } from 'react-dom';


function Tabs() {
  const [currentPage, handlePageChange] = useState('Contact');

  const renderPage = () => {
    // Add a switch statement that will return the appropriate component of the 'currentPage'
    switch (currentPage) {
      case 'About':
        return <About/>
      case 'Projects':
        return <Projects/>
      case 'Resume':
        return <WorkHistory/>
      case 'Skills':
        return <Skills/>
      default:
        return <Contact/>
       
    }
  };

  return (
    <div>
      <Header/>
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
      <div style={{backgroundColor: "#292933", width: "100%", height:"100%"}}>
        {
          // Render the component returned by 'renderPage()'
         renderPage(currentPage)
        }
      </div>
      <Footer/>
    </div>
  );
}

export default Tabs;
