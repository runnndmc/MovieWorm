import React from 'react';
import { Link } from 'react-router-dom';
import MovieCard from '../components/MovieCard';


const AllMovies = (props) => {
    const {currentUser, movies, handleDelete} = props
    return (
        <>
            <h2> all the users movies </h2>
            <MovieCard 
                movies={movies}
                currentUser={currentUser}
                handleDelete={handleDelete}
            />
            
            <Link to='/movies/add'>Add New Movie</Link>
            
        </>
    )
}

export default AllMovies