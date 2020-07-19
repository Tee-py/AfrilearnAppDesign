import './Home.css';
import React from 'react';

const img_src = "https://myafrilearn.com/assets/img/afrilearn_logo.png"

function Nav(){
    return(
        <div className="nav-wrapper">
            <nav className="navbar">
                <div className="nav_brand">
                    <img className="img-logo" src={img_src} alt="Logo"></img>
                </div>
                <div className="nav-right">
                    <a href="#intro-head" className="btn-a">
                        <button className="nav-btn">Get Started</button>
                    </a>
                </div>       
            </nav>
            <hr style={{margin: 0}}></hr>
        </div>
    );
};

export default Nav;