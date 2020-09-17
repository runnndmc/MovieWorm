import api from './apiConfig'



export const getAllReviews = async () => {
    const resp = await api.get('/reviews')
    return resp.data
}

export const putReview = async (id, formData) => {
    const resp = await api.put(`/reviews/${id}`, {review: formData})
    return resp.data
}

export const postReview = async (formData) => {
    const resp = await api.post(`/reviews`, {review: formData})
    return resp.data
}

export const deleteReview = async(id) => {
    const resp = await api.delete(`/reviews/${id}`)
    return resp.data
}