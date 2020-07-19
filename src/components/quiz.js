import React from 'react';
import './quiz.css';
import DashHead from './dash_head';
import Footer from './footer';
import Image from './img1.jpg';

const q_style = {
    fontFamily: "'Righteous', cursive",
    fontSize: '20px',
    padding: '1rem',
};



class Quiz extends React.Component {
    render() {
        return (
            <div className="quiz_container">
                <DashHead/>
                <div className="quiz_wrapper" style={{marginTop: '1rem', marginLeft: '20px', marginRight: '20px'}}>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 bg-white q_col text-center">
                                <div className="question_no shadow">
                                    <h1>Question 1/40</h1>
                                </div>
                                <img src={Image} height="200px" width="200px" style={{borderTopLeftRadius: '100px'}}></img>
                                <div className="">
                                    <h1 style={q_style}>What is the name of the president of Nigeria?</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="answers" style={{marginTop: '3rem'}}>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6 ans" style={{borderRadius: '15px',marginBottom: '15px'}}>
                                <div className="question">
                                    <h5>A. Buhari</h5>
                                </div>
                            </div>
                            <div className="col-md-6" style={{borderRadius: '15px', marginBottom: '15px', borderRadius: '15px'}}>
                                <div className="question"  style={{padding: '1rem', borderRadius: '15px'}}>
                                    <h5>B. Yar Adua</h5>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="question"  style={{padding: '1rem',marginRight: '5px', borderRadius: '15px', marginBottom: '15px'}}>
                                    <h4>C. Jonathan</h4>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="question"  style={{padding: '1rem', borderRadius: '15px'}}>
                                    <h4>D. Tobiloba</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
                    <div className="btn-sec text-center">
                        <div className="btn-col">
                            <button className="btn btn-primary my-btn">
                                <h1 style={{fontSize: '30px', marginRight: '2px'}}>Next</h1>
                            </button>
                            <button className="btn btn-primary my-btn">
                                <h1 style={{fontSize: '30px', marginRight: '2px'}}>Prev</h1>
                            </button>
                        </div>
                    </div>
                </div>
                <Footer/>
        </div>
        )
    }
};

export default Quiz;