import React from 'react';
import './Home.css';
import Nav from './Nav';
import Intro from './intro_head';
import Footer from './footer';
/*import Quiz from './quiz';
import Dash from './dash';*/


class Home extends React.Component {
    render() {
        return (
            <div className="home">
                <Nav></Nav>
                <Intro></Intro>
                <Footer></Footer>
            </div>
        )
    }
}

export default Home;