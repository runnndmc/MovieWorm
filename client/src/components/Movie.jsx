import React from 'react'
import {Link} from 'react-router-dom'

const Movie = (props) => {
const {imgUrl, movies} = props
    return(
        <>
            <Link to={ `/movies/${movies.id}`}>
                <img src={imgUrl} />
            </Link>
        </>
    )
}

export default Movie