import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
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
        </div>
    )
}

export default MovieDetail