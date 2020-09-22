import React, { useEffect, useState } from 'react'
import { FaStar } from 'react-icons/fa'
import { useParams, Link } from 'react-router-dom'
import { getOneMovie } from '../services/movies'
import './MovieDetail.css'

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
            <div className='review-details'>
            <p>{review.summary}</p>
            <p>You gave this {review.star_rating}<FaStar size={15}/></p>
            </div>
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
                    <div className='movie-top-info'>
                        <h3 className='genre'>{movie.genre}</h3>
                        <h3 className='year'>{movie.year_released}</h3>
                    </div>
                    <img className='detail-poster' src={movie.img_url} height='500px' alt={movie.name}/>    
                    <h2 className='detail-title'>{movie.title}</h2>
                    <div className='movie-details'>
                        <h5>Director:</h5>
                        <h3>{movie.director}</h3>
                        <h5>Producer:</h5>
                        <h3>{movie.producer}</h3>
                    </div>
                    <div className='movie-details'>
                        <h5>Writer:</h5>
                        <h3>{movie.writer}</h3>
                        <h5>Screenplay By:</h5>
                        <h3>{movie.screenplay_by}</h3>
                    </div>
                </>
            }
            {matchAndShowReview}
            <div className='edit-delete-buttons'>
                <Link to={`/movies/${id}/edit`}><button className='edit-link'>Edit</button></Link>
                <button className='delete-button'onClick={() => handleDelete(id)}>Delete</button>
            </div>
        </div>
    )
}

export default MovieDetail