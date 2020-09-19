import React, {useState} from 'react'

const ReviewCreate = (props) => {
const [reviewForm, setReviewForm] = useState({
    summary: "", 
    star_rating: ""
})
const {
    summary, 
    star_rating
} = reviewForm

const {createSubmit} = props

const handleChange = (e) => {
    const {value, name} = e.target
    setReviewForm(prevState => ({
        ...prevState, 
        [name]:value
    }))
}
    return(
        <form onSubmit={(e) => {
            e.preventDefault()
            createSubmit(reviewForm)
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
            <label>Star Rating</label>
            <input 
                name='star_rating'
                value={star_rating}
                type='text'
                onChange={handleChange}
            />
            <button>Submit</button>
        </form>
    )
}

export default ReviewCreate