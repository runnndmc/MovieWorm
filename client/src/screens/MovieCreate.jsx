import React, { useState } from "react";
import StarRating from "../components/StarRating";
import { FaStar } from 'react-icons/fa'

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
  const [rating, setRating] = useState(null)
  const [hover, setHover] = useState(null)


const starRate=[...Array(5)].map((star, i) => {
              const ratingValue = i + 1
              return ( 
              <label>
                  <input 
                      type='radio' 
                      name='rating'
                      value={ratingValue}
                      onClick={() => setRating(ratingValue)}
                      
                  />
                  <FaStar 
                      className='star' 
                      color={ratingValue <= (hover || rating) ? 'green' : 'gray'} 
                      size={50}
                      onMouseEnter={()=>setHover(ratingValue)}
                      onMouseLeave={()=>setHover(null)}
                  />
              </label>
              )
          })


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
        {starRate}
        <button>Submit</button>
        
    </form>
  );
};

export default MovieCreate;
