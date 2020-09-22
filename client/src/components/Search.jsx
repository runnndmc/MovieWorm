import React from 'react'
import './Search.css'

const Search = (props) => {


    return(
        <form className='search-bar' onSubmit={(e) => props.onSubmit(e)}>
            <input
                className='search-input'
                value={props.value}
                onChange={(e) => props.onChange(e)}
                name='Search'
                placeholder='Did I Watch That?'
                type='text'
                autoFocus
            />
        </form>
    )
}

export default Search