import React from "react";
import { Link } from "react-router-dom";

import './MovieCard.css'

const MovieCard = (props) => {
    const {movies, currentUser, handleDelete} = props

  const cards = movies.map((movie) => {
    if (currentUser && currentUser.id === movie.user_id){
    return(
    <div className='movie-card'key={movie.id}>
        <Link classname='card' to={`/movies/${movie.id}`}>
            <img className='movie-card-image' src={movie.img_url} alt={movie.title} />
            <h4>Title:</h4>
            <h3 className='break'>{movie.title}</h3>
            <h4>Directed By:</h4>
            <h3>{movie.director}</h3>
            <h4>Produced By:</h4>
            <h3>{movie.producer}</h3>
            <h4>Written By:</h4>
            <h3>{movie.writer}</h3>
            <h4>Screenplay By:</h4>
            <h3>{movie.screenplay_by}</h3>
            <h4>Year Released</h4>
            <h3>{movie.year_released}</h3>
            <h4>Genre</h4>
            <h3>{movie.genre}</h3>
        </Link>
    </div>
    )}
  });

  return (
    <>
      <h2>I'm a movie card</h2>
      {cards}
    </>
  );
};

export default MovieCard;
