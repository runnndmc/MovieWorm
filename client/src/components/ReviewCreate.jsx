/* import React, {useState} from 'react' */
/* import { FaStar } from 'react-icons/fa' */


/* const ReviewCreate = (props) => { */
/* const [reviewForm, setReviewForm] = useState({
    summary: "", 
    star_rating: ""
})
const {
    summary, 
    star_rating
} = reviewForm

 */
/* const {createReviewSubmit} = props */
/* const [rating, setRating] = useState(null) */
/* const [hover, setHover] = useState(null) */


/* const handleChange = (e) => {
    const {value, name} = e.target
    setReviewForm(prevState => ({
        ...prevState, 
        [name]:value
    }))
} */

/* const starRate=[...Array(5)].map((star, i) => {
                    const ratingValue = i + 1
                    return ( 
                    <label>
                        <input 
                            type='radio' 
                            name='star_rating'
                            value={star_rating}
                            onChange={handleChange}
                        />
                        <FaStar 
                            className='star' 
                            color={ratingValue <= (hover || star_rating) ? 'green' : 'gray'} 
                            size={50}
                            onMouseEnter={()=>setHover(ratingValue)}
                            onMouseLeave={()=>setHover(null)}
                        />
                    </label>
                    )
                })
 */


/*     return(
        <form onSubmit={(e) => {
            e.preventDefault()
            createReviewSubmit(reviewForm)
        }}>
            <h2>Create You're Review</h2>
            <label>Review</label>
            <textarea
                name='summary'
                value={summary}
                cols='10'
                rows='3'
                onChange={handleChange}
            ></textarea>
            {starRate}
            <button>Submit</button>
        </form>
    )
}

export default ReviewCreate */