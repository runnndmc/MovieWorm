import React from 'react'
import {Link} from 'react-router-dom'

const Movie = (props) => {
    const {imgUrl, name, id} = props

    return(
        <>
            <Link to={ `/movies/${id}`}>
                <h3>{name}</h3>
                <img src={imgUrl} />
            </Link>
        </>
    )
}

export default Movie