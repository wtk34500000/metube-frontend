import React, { Component } from 'react'
import { withRouter } from "react-router-dom";
import VideoCard from '../Components/VideoCard'


class History extends Component {
  render(){
    console.log(this.props.userHistories)
      const arrOfVideosId = this.props.userHistories.map((his,idx) => <div key={idx} className="video-card">
                       <div className="video-img">
                           <img alt='pic' src={his.img_url} onClick={()=>this.props.handleHisImgClick(his)}/>
                       </div>
                       <div className="video-card-detail">
                         <a>{his.title}</a>
                         <p>{his.description}</p>
                     </div>

                 </div>)
      const arrayOfDivs = []
      let count = 1;
      let currentArr = []
      for(let x = 0; x < arrOfVideosId.length; x++){
        if(count > 5){
          count = 1;
          arrayOfDivs.push(currentArr)
          currentArr = []
        }
        currentArr.push(arrOfVideosId[x])
        if(x === arrOfVideosId.length-1){
          arrayOfDivs.push(currentArr)
        }
        count++;
      }
      return (
          <div id="default-list-container">
          <h1>Your History</h1>
              {arrayOfDivs.map(videos => <div className="default-list">{videos}</div>)}
          </div>
      )
  }

    // render(){
    //     // console.log('Inisde history',this.props.userHistories)
    //     const arrVideoCard= this.props.userHistories.map((his,idx) => {
    //         return (
    //             <div key={idx} className="video-card">
    //                 <div className="video-img">
    //                     <img alt='pic' src={his.img_url} onClick={()=>this.props.handleHisImgClick(his)}/>
    //                 </div>
    //                 <div className="video-card-detail">
    //                      <p>{his.title}</p>
    //                 </div>
    //
    //             </div>
    //         )
    //     })
    //     return(
    //         <div>
    //             {arrVideoCard}
    //         </div>
    //     )
    // }
}

export default withRouter(History);
