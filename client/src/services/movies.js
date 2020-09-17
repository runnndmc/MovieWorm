import api from './apiConfig'

export const getAllMovies = async () => {
    const resp = await api.get('/movies')
    return resp.data
}

export const getOneMovie = async (id) => {
    const resp = await api.get(`/movies/${id}`)
    return resp.data
}

export const putMovie = async (id, formData) => {
    const resp = await api.put(`/movies/${id}`, {movie: formData})
    return resp.data
}

export const postMovie = async (formData) => {
    const resp = await api.post('/movies', {movies: formData})
    return resp.data
}

export const deleteMovie = async (id) => {
    const resp = await api.delete(`/movies/${id}`)
    return resp.data
}