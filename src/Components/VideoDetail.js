import React from 'react'

const VideDetail = (props) => {
        let videoUrl=''
        if(props.selected!==''){
              videoUrl = `https://www.youtube.com/embed/${props.selected.id.videoId}?autoplay=1`
        }
        return (

          <div>
          {props.selected ? <div id="main-video">
            <div id='video-detail'>
                    <iframe title={ props.selected.snippet.title } src={videoUrl} allow="autoplay; fullscreen" />
                    <h2>{ props.selected.snippet.title }</h2>
                </div>
                <div id="video-info" style={{width: "65vw"}}>
                <h3>{props.selected.snippet.channelTitle}</h3>
                  <p>{ props.selected.snippet.description }</p>
                </div>
                </div>
                :
                null
              }
            </div>
        )
}

export default VideDetail;
