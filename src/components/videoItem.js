import React, {Component} from 'react';
import YouTube from '@u-wave/react-youtube';
import BoxSpinner from './boxSpinner';


const Video = ({video}) => {
    const Id = video.id.videoId;
    console.log(Id)
    return (
        <YouTube
            video={Id}
            width="100%"
            height="200px"
            allowFullscreen={true}
            volume="1"
            style={{borderRadius: "15px"}}
        />
    )
};

export default Video;

