import React, { useState } from 'react';
import NavTabs from '../NavTabs';
import Contact from '../pages/Contact';
import About from '../pages/About';
import Portfolio from '../pages/Portfolio';
import Resume from '../pages/Resume';
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
      case 'Portfolio':
        return <Portfolio/>
      case 'Resume':
        return <Resume/>
      default:
        return <Contact/>
       
    }
  };

  return (
    <div>
      <Header/>
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
      <div>
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
