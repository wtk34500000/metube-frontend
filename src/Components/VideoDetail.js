import React from 'react'

const VideDetail = (props) => {
    let selectedVideoUrl;
        if(props.videoUrl){
        selectedVideoUrl=`https://www.youtube.com/watch?v=${props.videoUrl.id.videoId}`;
        }
    console.log('selectedID', selectedVideoUrl)
        return (
            <div className='video-detail'>
                <h1>Inside video Deatail</h1>
            </div>
        )
}

export default VideDetail