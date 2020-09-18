import React, {useEffect, useState} from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';
import MovieCreate from '../screens/MovieCreate';
import MovieDetail from '../screens/MovieDetail';
import AllMovies from '../screens/AllMovies';
import ReviewEdit from '../screens/ReviewEdit';
import { deleteMovie, getAllMovies, postMovie } from '../services/movies';
import { putReview, getAllReviews} from '../services/reviews';
 

const MainContainer = (props) => {
    const [movies, setMovies] = useState([])
    const [reviews, setReviews] = useState([])
    
    const history = useHistory()
    const { currentUser } = props

    useEffect(() => {
        const fetchMovies = async () => {
            const moviesArray = await getAllMovies()
            setMovies(moviesArray)
        }
        const fetchReviews = async () => {
            const reviewsArray = await getAllReviews()
            setReviews(reviewsArray)
        }
        if (currentUser){
        fetchMovies()
        fetchReviews()
        }
    }, [currentUser])

    const updateSubmit = async (id, formData) => {
        const updatedReview = await putReview(id, formData)
        setReviews(prevState => prevState.map(review => review.id === Number(id) ? updatedReview : review))
        history.push('/')
    }

    const createSubmit = async (formData) => {
        const addMovie = await postMovie(formData)
        setMovies(prevState => [...prevState, addMovie])
        history.push('/movies')
    }

    const handleDelete = async (id) => {
        await deleteMovie(id)
        setMovies(prevState => prevState.filter(movie => movie.id !== id))
    }



    return(
         <Switch>
            <Route path = '/movies/add'>
                <MovieCreate createSubmit={createSubmit} />
            </Route>
            <Route path='/reviews/:id/edit'>
                <ReviewEdit
                    reviews = {reviews}
                    updateSubmit = {updateSubmit}
                />
            </Route>
            <Route path='/movies/:id'>
                <MovieDetail
                    reviews = {reviews}
                />
            </Route>
            <Route path='/movies'>
                <AllMovies 
                    movies = {movies}
                    handleDelete = {handleDelete}
                    currentUser = {currentUser}
                />
            </Route>
        </Switch> 
    )
}

export default MainContainer