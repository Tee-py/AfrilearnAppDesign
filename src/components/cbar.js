import React from 'react';
import './cbar.css';

const q_style = {
    fontFamily: "'Righteous', cursive",
    fontSize: '20px',
    color: 'black !important'
};


const CircularProgressBar = () => {
    return (
        <div className='c-wrap'>
            <div className="cont">
                <div className="cardy">
                    <div className="box">
                        <div className="percent">
                            <svg>
                                <circle cy="70" cx="70" r="70"></circle>
                            </svg>
                            <div className="number">
                                <h2>20/<span>40</span></h2>
                            </div>
                            <div className="">
                                    <h1 style={q_style}>What is the name of the president of Nigeria?</h1>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        

    )
}

export default CircularProgressBar;