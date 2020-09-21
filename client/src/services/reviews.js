import api from './apiConfig'

const baseUrl = 'http://localhost3000/movies'

export const getAllReviews = async () => {
    const resp = await api.get(`/reviews`)
    return resp.data
}

export const getOneReview = async (movieId) => {
    const resp = await api.get(`/movies/${movieId}/reviews`)
    return resp.data
}


export const postReview = async (reviewData) => {
    const resp = await api.post(`/reviews`, {review: reviewData})
    return resp.data
}


export const deleteReview = async(id) => {
    const resp = await api.delete(`/reviews/${id}`)
    return resp.data
}                                                                                
 