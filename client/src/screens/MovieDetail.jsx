import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { getOneMovie } from '../services/movies'
import { addReview } from '../services/reviews'
import ReviewCreate from './ReviewCreate'

const MovieDetail = (props) => {
const {reviews, handleDelete, updateSubmit} = props

console.log(reviews)

const [movie, setMovie] = useState(null)
const [reviewId, setReviewId] = useState('')

const {id} = useParams()

useEffect (() => {
    const fetchMovie = async () => {
        const singleMovie = await getOneMovie(id)
        setMovie(singleMovie)
    }
    fetchMovie()
}, [])

const handleChange = (e) => {
    const {value} = e.target
    setReviewId(value)
}

const handleClick = async () => {
    const fullMovieDetail = await addReview(id, reviewId)
    setMovie(fullMovieDetail)
}

    return(
        <div>
            {
                movie &&
                <>
                    <img src={movie.img_url} height='500px' alt={movie.name}/>
                    <h2>{movie.title}</h2>
                    
                    {reviews.map(review => (
                        <p>{review.summary}</p>
                    ))}
                </>
            }
            <Link to={`/movies/${id}/edit`}><button>Edit</button></Link>
            <button onClick={() => handleDelete(id)}>Delete</button>
            <Link to={`/movies/${id}/reviews/add`}><button>Add Review</button></Link>
        </div>
    )
}

export default MovieDetail