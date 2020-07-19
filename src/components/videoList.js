import React, { Component } from 'react';
import Video from './videoItem';
/*import BoxSpinner from './boxSpinner';*/


export default function VideoList(props){
    console.log(props.videos)
    if (!props.videos) {
        var vid = null;
        return (
            <Video video={vid}/>
        )
    }
    const vidList = props.videos.map((video, id)=>{
        return (
            <Video id={id} video={video}/>
        )
    })
    return vidList
}