import React, { useState } from "react";
import { Link } from "react-router-dom";

import MovieCard from "../components/MovieCard";
import Search from "../components/Search";
import Movie from "../components/Movie";
import "../shared/Layout.css";
import "./AllMovies.css";

const AllMovies = (props) => {
  const { currentUser, movies, handleDelete, reviews } = props;
  const [searchMovies, setSearchedMovies] = useState([]);

  const handleSearch = (e) => {
    const findMovie = movies.filter((movie) =>
      movie.title.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setSearchedMovies(findMovie);
  };

  const handleSubmit = (e) => e.preventDefault();

  const moviesFound = searchMovies.map((movie, index) => (
    <Movie
      id={movie.id}
      name={movie.title}
      imgUrl={movie.img_url}
      key={index}
      movies={movies}
    />
  ));

  return (
    <>
      <Search onSubmit={handleSubmit} onChange={handleSearch} />
      <div className="search-res">{moviesFound}</div>
      <div className="total-table">
        <h5 className="totals">Total Movies:</h5>
        <h2>{movies.length}</h2>
      </div>
      <MovieCard
        reviews={reviews}
        movies={movies}
        currentUser={currentUser}
        handleDelete={handleDelete}
      />
    </>
  );
};

export default AllMovies;
