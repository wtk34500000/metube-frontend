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
                <div className="search-bar">
                    Search: <input type="text" name="input" value={this.state.searchTerm} onChange={this.handleSearch} />
                    <button onClick={this.handleClick}>Search</button>
                </div>
        )}
    
}

export default SearchBar;