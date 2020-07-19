import React from 'react';
import './bulma.min.css';
import './dash.css'

const style = {
    fontSize: '30px',
    fontFamily: "'Shojumaru', cursive"
}

const Card = (props) => {
    return (
        <div className="column is-one-quarter">
            <div className="card b-15 c-col has-text-centered" style={{backgroundColor: props.bgcolor, borderRadius: '15px', color: props.color}}>
              <a href="/quiz" style={{textDecoration: 'none'}}>
              <div className="card-content">
                  <img src={props.img_url} style={{height: '150px', width: '150px', borderRadius: '75px'}}></img>
                <div className="content">
                  <p style={style}>{props.exam_type} Questions.</p>
                </div>
              </div>      
              </a>
            </div>
        </div>
    )
}

export default Card;