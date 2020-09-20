import React from 'react';
import { Link } from 'react-router-dom';
import MovieCard from '../components/MovieCard';
import '../shared/Layout.css'

const AllMovies = (props) => {
    const {currentUser, movies, handleDelete} = props
    return (
        <>
            <Link to='/movies/add'>Add New Movie</Link>
            
            <h2> all the users movies </h2>
            <MovieCard 
                movies={movies}
                currentUser={currentUser}
                handleDelete={handleDelete}
            />
        </>
    )
}

export default AllMovies