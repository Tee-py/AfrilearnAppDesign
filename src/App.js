import React, { Component } from 'react';
import SearchBar from './components/SearchBar';
import VideoList from './components/VideoList';
import VideoDetail from './components/VideoDetail';
import YTSearch from 'youtube-api-search';
import './App.css';
import  SmileOutlined  from '@ant-design/icons';

import Icon from '@ant-design/icons';
import { notification } from 'antd';

const API_KEY = 'AIzaSyDxGxecQCMsYB1Uo_7MXjMQwRVbJWEzjSs'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: [],
      search: true,
      selectedVideo: {}
    };

    this.welcome();
  }

  welcome = () => {

    notification.open({
      message: 'Hey nice to see you here',
      description: 'Let us start by searching for some videos',
      icon: <SmileOutlined style={{ color: '#108ee9' }} />
    })
  };

  videoSearch( term ) {
    if( this.state.search ) {
      YTSearch({ key: API_KEY, term }, (data) => {
        try {
          if( data && data.data && data.data.error.message ) {
            throw('error')
          }
          this.setState({ videos: data, selectedVideo: data[0] });
        } catch( err ) {
          notification['error'] ({
            message: 'Daily Limit Exceeded',
            description: "Youtube data API daily limit have exceeded."
          })

        }

      });

    }
  }

  handleChange = (value) => {
    setTimeout( () => {
      if(value === ''){
        this.setState({ videos: [], selectedVideo: null });
        return;
      }

      if( this.state.search ) {
        this.videoSearch( value );
      }

      setTimeout( () => {
        this.setState({ search: true });
      }, 5000);
    }, 2000)
  };

  render() {
    return (
      <div style={{ "display": "flex", "flexDirection": "column"  }}>
        <div style={{ "display": "flex", "justifyContent": "space-between", "background": "#C70039", "padding": '0.25rem'}}>
            <h5 style={{ "color": "#fff", "alignSelf": "center", "flexBasis": "4", "marginLeft": '0.5rem' }}>React-Tube</h5>
            <SearchBar videos={ this.state.videos } video={ this.state.selectedVideo } onChange={ this.handleChange } handleSearch={ (video) => { this.setState({ selectedVideo: this.state.videos[video], search: false })}}/>
        </div>
        <div style={{ "display" : "flex" }}>
          <VideoDetail video={ this.state.selectedVideo }/> 
        </div>
        <div>
        <VideoList
              videos={ this.state.videos }
              onVideoSelect={ ( userSelected ) => { this.setState({ selectedVideo: this.state.videos[ userSelected ] }) }}
          />
        </div>
      </div>
    )
  }
}

export default App;
