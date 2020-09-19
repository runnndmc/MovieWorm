import React, { useEffect, useState } from "react";
import { Route, Switch, useHistory } from "react-router-dom";
import MovieCreate from "../screens/MovieCreate";
import MovieDetail from "../screens/MovieDetail";
import AllMovies from "../screens/AllMovies";
import MovieEdit from "../screens/MovieEdit";
import { deleteMovie, getAllMovies, postMovie, putMovie } from "../services/movies";
import { putReview, getAllReviews } from "../services/reviews";



const MainContainer = (props) => {
  const {currentUser} = props;

  const [movies, setMovies] = useState([]);
  const [reviews, setReviews] = useState([]);

  const history = useHistory();
  

  useEffect(() => {
    const fetchMovies = async () => {
      const moviesArray = await getAllMovies();
      setMovies(moviesArray);
    };
    const fetchReviews = async () => {
      const reviewsArray = await getAllReviews();
      setReviews(reviewsArray);
    };
    if (currentUser) {
      fetchMovies();
      fetchReviews();
    }
  }, [currentUser]);

  const createSubmit = async (formData) => {
    const addMovie = await postMovie(formData);
    setMovies((prevState) => [...prevState, addMovie]);
    history.push("/movies");
  };

/*=======================================================================================*/

  const updateSubmit = async (id, formData) => {
    const updatedMovie = await putMovie(id, formData);
    setMovies((prevState) =>
      prevState.map((movie) =>
        movie.id === Number(id) ? updatedMovie : movie
      )
    );
    history.push("/movies");
  };



  const handleDelete = async (id) => {
    await deleteMovie(id);
    setMovies((prevState) => prevState.filter((movie) => movie.id !== Number(id)));
    history.push("/movies")
  };
  /*======================================================================================*/

  return (
    <Switch>

      <Route path="/movies/add">
        <MovieCreate createSubmit={createSubmit} />
      </Route>

      <Route path="/movies/:id/edit">
        <MovieEdit 
            movies={movies}
            handleDelete={handleDelete} 
            updateSubmit={updateSubmit} 
        />
      </Route>

      <Route path="/movies/:id">
        <MovieDetail 
          reviews={reviews}
          movies={movies}
          handleDelete={handleDelete} 
          updateSubmit={updateSubmit}  
        />
      </Route>

      <Route path="/movies">
        <AllMovies
          movies={movies}
          currentUser={currentUser}
          handleDelete={handleDelete} 
        />
      </Route>

    </Switch>
  );
};

export default MainContainer;
