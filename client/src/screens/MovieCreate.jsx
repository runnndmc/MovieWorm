import React, { useState } from "react";

const MovieCreate = (props) => {
  const [formData, setFormData] = useState({
    title: "",
    director: "",
    producer: "",
    writer: "",
    screenplay_by: "",
    year_released: "",
    genre: "",
    img_url: "",
  });
  const {
    title,
    director,
    producer,
    writer,
    screenplay_by,
    year_released,
    genre,
    img_url,
  } = formData;

  const { createSubmit } = props;

  const handleChange = (e) => {
      const {value, name} = e.target
      setFormData(prevState => ({
          ...prevState,
          [name]:value
      }))
  }

  return (
    <form onSubmit={(e) => {
        e.preventDefault()
        createSubmit(formData)
    }}>
        <h2>Create You're Movie</h2>
        <label>Title:</label>
        <input
            name='title'
            type='text'
            value={title}
            onChange={handleChange}
        />
        <label>Director:</label>
        <input
            name='director'
            type='text'
            value={director}
            onChange={handleChange}
        />
        <label>Producer:</label>
        <input
            name='producer'
            type='text'
            value={producer}
            onChange={handleChange}
        />
        <label>Writer:</label>
        <input 
            name='writer'
            type='text'
            value={writer}
            onChange={handleChange}
        />
        <label>Screenplay By:</label>
        <input 
            name='screenplay_by'
            type='text'
            value={screenplay_by}
            onChange={handleChange}
        />
        <label>Year Released:</label>
        <input
            name='year_released'
            type='number'
            value={year_released}
            onChange={handleChange}
        />
        <label>Genre:</label>
        <input
            name='genre'
            type='text'
            value={genre}
            onChange={handleChange}
        />
        <label>Movie Image URL</label>
        <input
            name='img_url'
            type='text'
            value={img_url}
            onChange={handleChange}
        />
        <button>Submit</button>
        
    </form>
  );
};

export default MovieCreate;
