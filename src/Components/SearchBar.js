import React from 'react'
import {withRouter } from 'react-router-dom';

class SearchBar extends React.Component{
    state={
        input:""
    }

    handleSearch = (e) => {
            this.setState({
                input:e.target.value
            })
    }

    handleClick = () =>{
      if(this.state.input.length > 0){
        this.props.history.push('/')
        let input = this.state.input;
        this.setState({input: ""})
        this.props.handleSearch(input)
      }
    }


        render(){
            return (
                <div id="search-bar">
                {this.props.history.location.pathname==="/" ?
                  this.props.handleReset() :
                  null
              }
                    <input placeholder="Search" type="text" name="input" value={this.state.input} onChange={this.handleSearch} />
                    <button onClick={this.handleClick} ><i className="fas fa-search"></i></button>
                </div>
        )}

}

export default withRouter(SearchBar);
