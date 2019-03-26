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
        this.props.history.push('/')
        this.props.handleSearch(this.state.input)
    }

        render(){
            return (
                <div id="search-bar">
                    <input placeholder="Search" type="text" name="input" value={this.state.searchTerm} onChange={this.handleSearch} />
                    <button onClick={this.handleClick} ><i className="fas fa-search"></i></button>
                </div>
        )}

}

export default withRouter(SearchBar);
