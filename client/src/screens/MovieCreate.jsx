import React, { useState } from "react";
import { FaStar } from 'react-icons/fa'

/* import ReviewCreate from "./ReviewCreate"; */

const MovieCreate = (props) => {
    const {createSubmit, createReviewSubmit} = props; /*from MainContainer with createReviewSubmit>postReview() and fetchReviews>getAllReviews()*/
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

    const [hover, setHover] = useState(null)
    const [reviewForm, setReviewForm] = useState({
        summary: "", 
        star_rating: "",
    })
    const {
        summary, 
        star_rating,
    } = reviewForm

    const handleChange = (e) => {
        const {value, name} = e.target
        setFormData(prevState => ({
            ...prevState,
            [name]:value
        }))
    }


  const handleReviewChange=(e)=>{
      const {value, name} = e.target
      setReviewForm(prevState=> ({
          ...prevState,
          [name]:value
      }))
  }

  const starRate=[...Array(5)].map((star, i) => {
    const ratingValue = i + 1
    return ( 
    <label>
        <input 
            type='radio' 
            name='star_rating'
            value={ratingValue}
            onClick={()=>setReviewForm(ratingValue)}
            onChange={handleReviewChange}
        />
        <FaStar 
            className='star' 
            color={ratingValue <= (hover ||star_rating) ? 'green' : 'gray'} 
            size={50}
            onMouseEnter={()=>setHover(ratingValue)}
            onMouseLeave={()=>setHover(null)}
        />
    </label>
    )
})


  return (
    <form onSubmit={(e) => {
        e.preventDefault()
         createSubmit(formData, reviewForm)
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
        <h2>Create You're Review</h2>
            <label>Review</label>
            <textarea
                name='summary'
                value={summary}
                cols='10'
                rows='3'
                onChange={handleReviewChange}
            ></textarea>
        <button>Submit</button>
        
    </form>
  );
};

export default MovieCreate;
