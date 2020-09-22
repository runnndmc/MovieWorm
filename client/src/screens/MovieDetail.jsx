import React, { useEffect, useState } from 'react'
import { FaStar } from 'react-icons/fa'
import { useParams, Link } from 'react-router-dom'
import { getOneMovie } from '../services/movies'
import { postReview, getOneReview } from '../services/reviews'

const MovieDetail = (props) => {
const {reviews, handleDelete, updateSubmit} = props
const [movie, setMovie] = useState(null)

const {id} = useParams()

useEffect (() => {
    const fetchMovie = async () => {
        const singleMovie=await getOneMovie(id)
        setMovie(singleMovie)
    }
    fetchMovie()
}, [])

const matchAndShowReview = reviews.map(review => {
    if (review.movie_id === Number(id)){
        return (
            <>
            <p>{review.summary}</p>
            <p>You gave this {review.star_rating}<FaStar size={15}/></p>
            </>
        )
    } 
})

/* const stars=[...Array(5)].map((star, i) => {
    const ratingValue = i +1
    return(
        
    ) */
/* 
const handleChange = (e) => {
    const {value} = e.target
    setReviewId(value)
}

const handleClick = async () => {
    const fullMovieDetail = await postReview(id, reviewId)
    setMovie(fullMovieDetail)
} */

    return(
        <div>
            {
                movie &&
                <>
                    <h3>{movie.genre}</h3>
                    <h3>{movie.year_released}</h3>
                    <img className='detail-poster' src={movie.img_url} height='500px' alt={movie.name}/>
                    <h2>{movie.title}</h2>
                    <br></br>
                    <h5>Director:</h5>
                    <h3>{movie.director}</h3>
                    <h5>Producer:</h5>
                    <h3>{movie.producer}</h3>
                    <h5>Writer:</h5>
                    <h3>{movie.writer}</h3>
                    <h5>Screenplay By:</h5>
                    <h3>{movie.screenplay_by}</h3>
                </>
            }
            {matchAndShowReview}
            <Link to={`/movies/${id}/edit`}><button>Edit</button></Link>
            <button onClick={() => handleDelete(id)}>Delete</button>
            <Link to={`/movies/${id}/reviews/add`}><button>Add Review</button></Link>
        </div>
    )
}

export default MovieDetail