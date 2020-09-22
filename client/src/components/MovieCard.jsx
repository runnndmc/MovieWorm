import React from "react";
import { Link } from "react-router-dom";
import Header from "./Header";

import './MovieCard.css'

const MovieCard = (props) => {
  const {movies, currentUser} = props
    
  const cards = movies.map((movie) => {
    if (currentUser && currentUser.id === movie.user_id){
    return(
    <div className='movie-card'key={movie.id}>
        <Link className='card' to={`/movies/${movie.id}`}>
            
              <h3 className='break'>{movie.title}</h3>
         
            <div className='detail-section'>
              <h4>Directed By:</h4>
              <h3 className='movie-value'>{movie.director}</h3>
            </div>
            
            <img className='movie-card-image' src={movie.img_url} alt={movie.title} />
            <div className='detail-section'>
              <h4>Produced By:</h4>
              <h3 className='movie-value'>{movie.producer}</h3>
            </div>
            <div className='detail-section'>
              <h4>Written By:</h4>
              <h3 className='movie-value'>{movie.writer}</h3>
            </div>
            <div className='detail-section'>
              <h4>Screenplay By:</h4>
              <h3 className='movie-value'>{movie.screenplay_by}</h3>
            </div>
            <div className='detail-section'>
              <h4>Year Released:</h4>
              <h3 className='movie-value'>{movie.year_released}</h3>
            </div>
            <div className='genre-section'>
              <h4>Genre:</h4>
              <h3 className='movie-value-genre'>{movie.genre}</h3>
            </div>
        </Link>
    </div>
    )}
  });


  return (
    <div className='card-container'>
      {cards}
    </div>
  );
};

export default MovieCard;
