/* import React, { useEffect, useState } from 'react'
import { useParams, Switch, Route } from 'react-router-dom';
import { deleteReview, getAllReviews, postReview, putReview } from '../services/reviews';
import ReviewCreate from '../screens/ReviewCreate'

const ReviewContainer = (props) => {
const {currentUser} = props
const [reviews, setReviews] = useState([]);

const {id} = useParams()

useEffect(() => {
    const fetchReviews = async () => {
        const reviewsArray = await getAllReviews()
        setReviews(reviewsArray)
    }
    if(currentUser){
        fetchReviews()
    }
}, [currentUser])

/* =================================================================*/

/* 
=================================================================*

const updateSubmit = async (id, formData) => {
    const updatedReview = await putReview(id, formData)
    setReviews((prevState) => 
        prevState.map((review) => 
        review.id === Number(id) ? updatedReview : review
    ))
}

const handleDelete = async (id) => {
    await deleteReview(id)
    setReviews((prevState) => prevState.filter((review) => review.id !== Number(id)))
    history.push(`/movies/${id}`)
}
    return(
        <Switch>
            <Route path={`/movies/${id}/reviews/add`}>
                <ReviewCreate createReviewSubmit={createReviewSubmit}/> 
            </Route>

        </Switch>
    )
}

export default ReviewContainer */