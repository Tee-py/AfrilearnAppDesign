import './Home.css';
import React from 'react';
import Image1 from './img3.jpg'

const h_style = {
    fontSize: '40px',
    fontFamily: "'Rowdies', cursive"
}

const h2_style = {
    fontFamily: "'Raleway', sans-serif",
    fontSize: '20px',
    marginTop: '1rem'
}


const Intro = () => {
    return (
            <div className="container" style={{marginBottom: '2rem'}}>
                <div className="row">
                    <div className="col-md-6" style={{marginTop: '4rem'}}>
                        <div className="b-txt">
                            <h1 style={h_style}>Welcome to AfriLearn <i className="fas fa-graduation-cap" style={{color: '#009688'}}></i>.</h1>
                        </div>
                        <div>
                            <h5 style={h2_style}>At Afrilearn, we help students accross various levels of education achieve their goals.</h5>
                        </div>
                        <div className="buttons" style={{marginTop: '1rem', marginBottom: '3rem'}}>
                            <button className="btn btn-primary shadow h_btn" style={{marginRight: '10px', width: '150px', padding: '0.75rem', borderRadius: '30px'}}><h5><a style={{color: 'white', textDecoration: 'none',}} href="/dashboard">Login</a></h5></button>
                            <button className="btn btn-primary shadow h_btn" style={{marginRight: '10px', width: '150px', padding: '0.75rem', borderRadius: '30px'}}><h5><a style={{color: 'white', textDecoration: 'none',}} href="/dashboard">Sign-Up</a></h5></button>
                        </div>
                    </div>
                    <div className="col-md-6 text-center">
                        <img src={Image1}></img>
                    </div>
                </div>
            </div>

    )
};

export default Intro;