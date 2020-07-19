import React from 'react';
import './bulma.min.css';

const IMG_URL = "https://myafrilearn.com/assets/img/afrilearn_logo.png";

const DashHead = () => {
    return (
        <div className="head_wrap">
            <nav class="navbar is-transparent">
                <div class="navbar-brand">
                    <a class="navbar-item" href="https://bulma.io">
                    <img src={IMG_URL} width="112" height="28" alt="Site-Logo"></img>
                    </a>
                </div>    
            </nav>
        </div>
    )
}

export default DashHead;