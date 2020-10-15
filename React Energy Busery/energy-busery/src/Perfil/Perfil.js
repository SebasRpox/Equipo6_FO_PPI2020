import React from 'react';
// import logo from './logo.svg';
import Header from './header'
import Banner from './Banner'
import About from './About'
import Navbar from './Navbar'

function Perfil() {
    return (
        <div className="All">
            <Navbar />
            <hr />
            <Header />
            <hr />
            <Banner />
            <br />
            <About />
            <br />
        </div>
    );
}

export default Perfil;