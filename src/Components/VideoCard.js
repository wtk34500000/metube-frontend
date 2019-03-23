import React from 'react'

const VideoCard = (props) => {
    //append the props.videoId to below url to get the full video url
    // https://www.youtube.com/watch?v=
    return (
        <div className="video-item">
            <a href={`https://www.youtube.com/watch?v=${props.videoId}`}>{props.videoId}</a>
        </div>
    )
}

export default VideoCard
