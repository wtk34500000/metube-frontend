import React from 'react'

const VideoCard = (props) => {
    //append the props.videoId to below url to get the full video url
    // https://www.youtube.com/watch?v=

     const handleClick = () => {
        props.handleSelectVideo(props.videoId, props.currentUser)
    }


    return (
        <div className="video-item">
            <div className="float-left">
                <img alt='pic' src={props.videoId.snippet.thumbnails.medium.url} onClick={handleClick}/>
            </div>
            <div className="float-left">
                 <p>{props.videoId.snippet.title}</p>
            </div>
            
        </div>
    )
}

export default VideoCard
