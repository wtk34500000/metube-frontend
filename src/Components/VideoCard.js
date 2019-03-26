import React from 'react'
import '../style/video.css'

const VideoCard = (props) => {
    //append the props.videoId to below url to get the full video url
    // https://www.youtube.com/watch?v=

     const handleClick = () => {
        props.handleSelectVideo(props.videoId, props.currentUser)
    }


    return (
        <div className="video-card">
            <div className="video-img">
                <img alt='pic' src={props.videoId.snippet.thumbnails.medium.url} onClick={handleClick}/>
            </div>
            <div className="video-card-detail">
                 <a onClick={handleClick}>{props.videoId.snippet.title}
                 <p>by: {props.videoId.snippet.channelTitle} :: {props.videoId.snippet.publishedAt}</p></a>
                 {console.log(props.videoId.snippet)}
            </div>

        </div>
    )
}

export default VideoCard
