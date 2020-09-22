import React from 'react'
import {Link} from 'react-router-dom'

import './Movie.css'

const Movie = (props) => {
    const {imgUrl, name, id} = props

    return(
        <div className='search-res-container'>
            <Link className='movie' to={ `/movies/${id}`}>
                <img 
                    className='search-image'
                    alt={name}
                    src={imgUrl} 
                />
            </Link>
        </div>
    )
}

export default Movie