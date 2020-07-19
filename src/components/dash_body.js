import React from 'react';
import './bulma.min.css';
import Card from './dash_card';
import './dash.css';
import Video from './videoItem';
import YoutubeApi, { baseParams } from '../api/YtSearch';
import VideoList from './videoList';
import BoxSpinner from './boxSpinner';


class DashBody extends React.Component {
    constructor() {
        super();
        this.state = {
            videos: [],
            loading: true
        }
    }

    componentDidMount() {
        this.getVideos("Introduction to machine learning")
    }

     getVideos = async(search_term) => {
        const result = await YoutubeApi.get(
             '/search',{
                 params: {
                     ...baseParams,
                     q: search_term,
                 }
             }
         )

         this.setState({
             videos: result.data.items,
             loading: false
         });
     }

    render() {
        if (this.state.loading && this.state.videos.length === 0) {
            return (
                <div className="wrap" style={{marginBottom: '2rem'}}>
                    <div className="user_intro" style={{padding: '1rem', fontSize: '25px', display: 'flex', flexDirection:'column',marginTop: '1rem'}}>
                    <h1 className="wel" style={{fontFamily: "'Karla', sans-serif"}}>Oluwatobi <i className="fas fa-smile-wink" style={{color: '#FF9800'}}></i>,  
                        <p style={{color: 'inherit', fontSize: '25px', fontFamily: "'Pacifico', cursive"}}>ensure you wash your hands <i className="far fa-handshake" style={{color: '#795548', fontSize: '25px'}}></i>.</p></h1>
                        <div className="tutorials" style={{padding: '1rem'}}>
                            <h1 className="text-center sel" style={{padding: "2rem"}}>
                            <i class="fas fa-video"style={{color: '#009688', marginRight: '7px'}}></i>Tutorial Videos
                            </h1>
                            <div className="row">
                                <div className="col-md-6" >
                                    <BoxSpinner/>
                                </div>
                                <div className="col-md-6">
                                    <BoxSpinner/>
                                </div>
                            </div>
                        </div>
                        <h1 className="sel" style={{textAlign: 'center', padding: '1.5rem'}}><i class="fas fa-question" style={{marginRight: '7px', color: '#2196F3'}}></i>Practise Questions</h1>
                    </div>
                    <div className="columns" style={{padding: '0.5rem'}}>
                        <Card exam_type='WAEC' bgcolor='#f44336' color="white" img_url='https://adminpanel.myafrilearn.com/exam_images/FIL5cdd8e76cd9b719027320190516162318.png'></Card>
                        <Card exam_type='NECO' bgcolor='#e91e63' color="white" img_url="https://adminpanel.myafrilearn.com/exam_images/FIL5cdd8eaf143ae40466520190516162415.png"></Card>
                        <Card exam_type='JAMB' bgcolor='#343a40' color="white" img_url="https://adminpanel.myafrilearn.com/exam_images/FIL5cdd82202903629090720190516153040.png"></Card>
                        <Card exam_type='GCE' bgcolor='#2196f3' color="white" img_url="https://adminpanel.myafrilearn.com/exam_images/FIL5cdd8e76cd9b719027320190516162318.png"></Card>
                    </div>
                </div>
            )
        }
        const videos = this.state.videos.map((vid, key)=>{
            return (
                <div className="col-md-6" id={key}>
                    <Video video={vid}/>
                </div>
            )
        })
        console.log(this.state.videos)
        return (
            <div className="wrap" style={{marginBottom: '2rem'}}>
                <div className="user_intro" style={{padding: '1rem', fontSize: '25px', display: 'flex', flexDirection:'column',marginTop: '1rem'}}>
                <h1 className="wel" style={{fontFamily: "'Karla', sans-serif"}}>Oluwatobi <i className="fas fa-smile-wink" style={{color: '#FF9800'}}></i>,  
                        <p style={{color: 'inherit', fontSize: '25px', fontFamily: "'Pacifico', cursive"}}>ensure you wash your hands <i className="far fa-handshake" style={{color: '#795548', fontSize: '25px'}}></i>.</p></h1>
                    <div className="tutorials" style={{marginTop: '2rem'}}>
                        <h1 className="text-center sel" style={{padding: "2rem"}}>
                        <i class="fas fa-video"style={{color: '#00BCD4', marginRight: '7px'}}></i>Tutorial Videos
                        </h1>
                        <div className="row">
                            {videos}
                        </div>
                    </div>
                    <h1 className="sel" style={{textAlign: 'center', padding: '1.5rem',marginTop: '0.5rem', marginBottom: '0.5rem'}}><i class="fas fa-question" style={{marginRight: '7px', color: '#2196F3'}}></i>Practise Questions</h1>
                </div>

                <div className="columns" style={{padding: '0.5rem'}}>
                    <Card exam_type='WAEC' bgcolor='#f44336' color="white" img_url='https://adminpanel.myafrilearn.com/exam_images/FIL5cdd8e76cd9b719027320190516162318.png'></Card>
                    <Card exam_type='NECO' bgcolor='#e91e63' color="white" img_url="https://adminpanel.myafrilearn.com/exam_images/FIL5cdd8eaf143ae40466520190516162415.png"></Card>
                    <Card exam_type='JAMB' bgcolor='#343a40' color="white" img_url="https://adminpanel.myafrilearn.com/exam_images/FIL5cdd82202903629090720190516153040.png"></Card>
                    <Card exam_type='GCE' bgcolor='#2196f3' color="white" img_url="https://adminpanel.myafrilearn.com/exam_images/FIL5cdd8e76cd9b719027320190516162318.png"></Card>
                </div>
            </div>
        )      
    }
};

export default DashBody;