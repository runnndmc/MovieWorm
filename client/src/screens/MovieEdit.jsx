import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

const MovieEdit = (props) => {
/*     const [formData, setFormData] = useState({
        title: '',
        director: "",
        producer: "",
        writer: "",
        screenplay_by: "",
        year_released: "",
        genre: "",
        img_url: "",
    })
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

      const {id} = useParams()
      const {movies, updateSubmit} = props

      useEffect(()=> {
        const prefillForm = () => {
            const findOne = movies.find(movie => movie.id === Number(id))
            setFormData(findOne)
        }
        if (movies.length){
            prefillForm()
        }
      }, [movies])
 */
    return (
        <h2>edit</h2>
    )
}

export default MovieEdit