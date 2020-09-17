import React, {useEffect, useState} from 'react'
import { Route, Switch } from 'react-router-dom';
import MovieCreate from '../screens/MovieCreate';
import { getAllMovies, postMovie } from '../services/movies';

 

const MainContainer = (props) => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const fetchMovies = await () => {
            const movieArray = await getAllMovies()
            setMovies(moviesArray)
        }
        fetchMovies()
    }, [])

    const createSubmit = async (formData) => {
        const addMovie = await postMovie(formData)
        setMovies(prevState => [...prevState, addMovie])
        history.pushState('/movies')
    }





    return(
         <Switch>
            <Route path = '/movies/add'>
                <MovieCreate createSubmit={createSubmit} />
            </Route>
            <Route path='/movies'>
                
            </Route>
        </Switch> 
    )
}

export default MainContainer