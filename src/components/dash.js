import React from 'react';
import DashHead from './dash_head';
import DashBody from './dash_body';
import Footer from './footer';



class Dash extends React.Component {

    render() {
        return (
            <div className="dash_wrap">
                <DashHead/>
                <DashBody/>
                <Footer/>
            </div>
        )
    }

}

export default Dash;