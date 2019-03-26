import React, { Component } from 'react'
import VideoCard from '../Components/VideoCard'


class History extends Component {
   

    render(){
        const arrVideoCard= this.props.userHistories.map(his => {
            return (
                <div className="video-card">
                    <div className="video-img">
                        <img alt='pic' src={his.img_url}/>
                    </div>
                    <div className="video-card-detail">
                         <p>{his.title}</p>
                    </div>
                    
                </div>
            )
        })
        return(
            <div>
                {arrVideoCard}
            </div>
        )
    }
}

export default History;