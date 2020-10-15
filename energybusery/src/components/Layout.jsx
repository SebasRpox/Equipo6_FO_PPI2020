import React from 'react';
import Navbar from './Pages/Menu'
import Footer from './Pages/Footer'

function Layout(props) {
  return(
    <React.Fragment>
      <Navbar/>
      {props.children}
      <Footer/>
    </React.Fragment>
  )
}

export default Layout;