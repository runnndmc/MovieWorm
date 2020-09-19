import api from './apiConfig'

const baseUrl = 'http://localhost3000/movies'

export const getAllReviews = async () => {
    const resp = await api.get('/reviews')
    return resp.data
}
export const addReview = async (movieId, reviewId) => {
    const resp = await api.get(`/movies/${movieId}/reviews/${reviewId}`)
    return resp.data
}


export const postReview = async (movieId, formData) => {
    const resp = await api.post(`/movies/${movieId}/reviews/add`, {review: formData})
    return resp.data
}

export const deleteReview = async(id) => {
    const resp = await api.delete(`/reviews/${id}`)
    return resp.data
}                                                                                