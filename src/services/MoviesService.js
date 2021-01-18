import {AXIOS} from "./axiosConfig";

class MoviesService{
    async getMovie(){
        const { data } = await AXIOS.get('/discover/movie')
        return data
    }
    async getMovieById(id){
        const { data } = await AXIOS.get(`/movie/${id}`)
        return data
    }
}
export const moviesService = new MoviesService()