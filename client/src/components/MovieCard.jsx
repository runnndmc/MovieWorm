import React from "react";
import { Link } from "react-router-dom";

import Layout from '../shared/Layout'

const MovieCard = (props) => {
    const {movies, currentUser} = props

  const cards = movies.map((movie) => {
    if (currentUser && currentUser.id === movie.user_id){
    return(
    <div key={movie.id}>
        <Link to={`/movies/${movie.id}`}>
            <img src={movie.img_url} alt={movie.title} />
            <h4>Title:</h4>
            <h2>{movie.title}</h2>
            <h4>Directed By:</h4>
            <h2>{movie.director}</h2>
            <h4>Produced By:</h4>
            <h2>{movie.producer}</h2>
            <h4>Written By:</h4>
            <h2>{movie.writer}</h2>
            <h4>Screenplay By:</h4>
            <h2>{movie.screenplay_by}</h2>
            <h4>Year Released</h4>
            <h2>{movie.year_released}</h2>
            <h4>Genre</h4>
            <h2>{movie.genre}</h2>
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
