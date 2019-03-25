import React from 'react'

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
        console.log(this.props)
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

export default SearchBar;
