import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import MovieCard from '../components/MovieCard';
import Search from '../components/Search';
import Movie from '../components/Movie';
import '../shared/Layout.css'

const AllMovies = (props) => {
    const {currentUser, movies, handleDelete} = props
    const [searchMovies, setSearchedMovies] = useState([])
    
    const favGenre = movies.filter(movie => {
        if (movie.genre === 'Comedy'){
            console.log (movie.genre.length)
        } 
    })

    const handleSearch = (e) => {
        const findMovie = movies.filter(movie => movie.title.toLowerCase().includes(e.target.value.toLowerCase()))
        setSearchedMovies(findMovie)
    }

    const handleSubmit = (e) => e.preventDefault()

    const moviesFound = searchMovies.map((movie, index) => 
        <Movie _id={movie._id} name={movie.title} imgUrl={movie.img_url} key={index} movies={movies}/>)



    return (
        <>
            <Link to='/movies/add'>Add New Movie</Link>
            <Search onSubmit={handleSubmit} onChange={handleSearch} />
            <h2> all the users movies </h2>
            <h3>You Have Watched and Reviewed {movies.length} movies</h3>
            {moviesFound}
            <MovieCard 
                movies={movies}
                currentUser={currentUser}
                handleDelete={handleDelete}
            />
        </>
    )
}

export default AllMovies