import React from 'react'

const VideDetail = (props) => {
        let videoUrl=''
        if(props.selected!==''){
              videoUrl = `https://www.youtube.com/embed/${props.selected.id.videoId}?autoplay=1`
        }
        return (
            <div className='video-detail'>
                <div className="center">
                    {videoUrl!==''
                    ? <iframe title={ props.selected.snippet.title } src={videoUrl} allow="autoplay; fullscreen" style={{width:"65vw", height:" 50vh"}}/> 
                    : <h1>Loading...</h1>}
                </div>
                <div className="center" style={{width: "65vw"}}>
                    {videoUrl!==''
                    ?  <h2>{ props.selected.snippet.title }</h2>
                    : null}
                    
                    {videoUrl!==''
                    ?  <p>{ props.selected.snippet.description }</p>
                    : null}   
                </div>
            </div>
        )
}

export default VideDetail