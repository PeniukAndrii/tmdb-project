import {AXIOS} from "./axiosConfig";

class MoviesService{
    async getMovie(params){
        const { data } = await AXIOS.get('/discover/movie',{
            params
        })
        return data
    }
    async getMovieById(id){
        const { data } = await AXIOS.get(`/movie/${id}`)
        return data
    }
    async getMovieByName(name){
        const { data } = await AXIOS.get(`/search/company/${name}`)
        console.log(data)
        return data
    }
}
export const moviesService = new MoviesService()