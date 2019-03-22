import React from 'react'

const SearchBar = (props) => {
 
        return (
            <div className="search-bar">
                Search: <input type="text" name="input" value={props.searchTerm} onChange={props.handleSearch} />
            </div>
        )
    
}

export default SearchBar;