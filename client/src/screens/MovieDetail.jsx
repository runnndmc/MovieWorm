import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { getOneMovie } from '../services/movies'

const MovieDetail = (props) => {
const {reviews, handleDelete, updateSubmit} = props

const [movie, setMovie] = useState(null)

const {id} = useParams()

useEffect (() => {
    const fetchMovie = async () => {
        const singleMovie = await getOneMovie(id)
        setMovie(singleMovie)
    }
    fetchMovie()
}, [])

    return(
        <div>
            {
                movie &&
                <>
                    <h2>{movie.title}</h2>
                </>
            }
            <Link to={`/movies/${id}/edit`}><button>Edit</button></Link>
            <button onClick={() => handleDelete(movie.id)}>Delete</button>
        </div>
    )
}

export default MovieDetail