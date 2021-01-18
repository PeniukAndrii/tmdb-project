import axios from "axios";

export const AXIOS = axios.create({
    baseURL:'https://api.themoviedb.org/3',
    headers:{
        Authorization:'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkNTU2YWY4YzQzNmRhMGY2Y2MwZWUyZmYyYzUyZDA3NiIsInN1YiI6IjYwMDA1MmY3Njc4MjU5MDAzZTljYmUxOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.mNsJ9M_BfWXAY3lCAoB3Vx_G6ZktAWKvsQXliVcNYMU'
    }
})