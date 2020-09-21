import React from 'react'

const Search = (props) => {


    return(
        <form onSubmit={(e) => props.onSubmit(e)}>
            <label>Search Movies</label>
            <input
                className='search-input'
                value={props.value}
                onChange={(e) => props.onChange(e)}
                name='Search'
                placeholder='Search'
                type='text'
                autoFocus
            />
        </form>
    )
}

export default Search