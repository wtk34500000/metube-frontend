import React from 'react'

const VideDetail = (props) => {
        let videoUrl=''
        if(props.selected!==''){
              videoUrl = `https://www.youtube.com/embed/${props.selected.id.videoId}?autoplay=1`
        }
        return (
            
          <div>
<<<<<<< HEAD
          {props.selected ? <div id="main-video">
            <div id='video-detail'>
                    <iframe title={ props.selected.snippet.title } src={videoUrl} allow="autoplay; fullscreen" />
                    <h2>{ props.selected.snippet.title }</h2>
                    {console.log(props.selected)}
                </div>
                <div id="video-info" style={{width: "65vw"}}>
                <h3>{props.selected.snippet.channelTitle}</h3>
                  <p>{ props.selected.snippet.description }</p>
                </div>
                </div>
                :
                null
              }
=======
            {props.selected 
                ? <div id="main-video">
                    <div className='video-detail'>
                        <iframe title={ props.selected.snippet.title } src={videoUrl} allow="autoplay; fullscreen" />
                        <h2>{ props.selected.snippet.title }</h2>
                    </div>
                    <div id="video-info" style={{width: "65vw"}}>
                        <p>{ props.selected.snippet.description }</p>
                    </div>
                    </div>
                :null
                }
>>>>>>> wei
            </div>
        )
}

export default VideDetail;
