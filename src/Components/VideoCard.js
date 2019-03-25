import React from 'react'

const VideoCard = (props) => {
    //append the props.videoId to below url to get the full video url
    // https://www.youtube.com/watch?v=

     const handleClick = () => {
        props.handleSelectVideo(props.videoId, props.currentUser)
        fetch("http://localhost:4000/videos", {
            method : 'POST',
            headers: {
                'content-type': 'application/json',
                 accepts: "application/json"
            },
            body: JSON.stringify({video:{
                "title": props.videoId.snippet.title,
                "url": `https://www.youtube.com/embed/${props.videoId.id.videoId}`,
                "description": props.videoId.snippet.description
            }})
        }).then(res => res.json()).then(video => {
            console.log("video Created",video)
            console.log("currentUser", props.currentUser)
            fetch('http://localhost:4000/histories', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json',
                     accepts: "application/json"
                },
                body: JSON.stringify({history: {
                    "user_id": props.currentUser.id,
                    "video_id": video.id
                }})
            }).then(res => res.json()).then(console.log)
        })
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
