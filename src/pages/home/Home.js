import React,{useEffect, useState} from 'react'
import {useHistory} from 'react-router-dom'
import {FilmList} from '../../components'
import {moviesService, genresService} from '../../services'
import styles from './Home.module.css'
import {PaginationWrapper} from '../../components'



const mergeMoviesWithGenres  = (movies,genres) => {
    return movies.map((movie) => {
        const {genre_ids} = movie
        const movieGenresList = genre_ids.map(genreId => genres.find(el => el.id === genreId))
        return {
            ...movie,
            movieGenresList
        }
    })
}

export const Home = () =>{
    const history = useHistory()
    const [genresList, setGenresList] = useState([])
    const [isLoading, setIsLoading] = useState(null)
    const [moviesData, setMoviesData] =useState(null)

    const fetchMovies = (params) =>{
        try{
            return moviesService.getMovie(params)
        }
        catch (e){
            console.error(e)
        }
    }

    const fetchGenres = async () =>{
        try{
            const {genres} = await genresService.getGenres()
            return genres
        }
        catch (e){
            console.error(e)
        }
    }

    const fetchMoviesData = async (movieParams) => {
        const requests = [fetchMovies(), fetchGenres()];
        try {
            setIsLoading(true)
            const [{results, ...rest}, genres] = await Promise.all(requests)
            setMoviesData({movies:mergeMoviesWithGenres(results, genres), ...rest})
            setGenresList(genres)
        } catch (e){
            console.error(e)
        }
        finally {
            setIsLoading(false)
        }
    }
    useEffect(()=>{
        fetchMoviesData()
    },[])

    const renderLoadingIndicator = () => <div className={styles.loading}>Loading...</div>

    const onFilmClick = (film) => history.push(`/movie/${film.id}`)

    const handlePageChange = async (page) => {
        const {results, ...rest} = await fetchMovies({page})
        setMoviesData({
            movies: mergeMoviesWithGenres(results, genresList),
            ...rest
        })
    }

    return(
        <div>

            {
                isLoading || isLoading === null ? renderLoadingIndicator() : (
                    <PaginationWrapper
                        currentPage={moviesData.page}
                        totalPages={moviesData.total_pages}
                        onPrevClick={handlePageChange}
                        onNextClick={handlePageChange}
                        handleLastPage={handlePageChange}
                        handleFirstPage={handlePageChange}
                    >
                        <FilmList
                            onFilmClick={onFilmClick}
                            items={moviesData.movies}/>
                    </PaginationWrapper>
                )}
        </div>
    )
}



















/*
import React,{useEffect, useState} from 'react'
import {useHistory} from 'react-router-dom'
import {FilmList} from '../../components'
import {moviesService, genresService} from '../../services'
import styles from './Home.module.css'
import {PaginationWrapper} from '../../components'


export const Home = () =>{
    const history = useHistory()
    const [moviesList, setMoviesList] = useState([])
    const [genresList, setGenresList] = useState([])
    const [isLoading, setIsLoading] = useState(null)
    const [movieData, setMovieData] =useState(null)

    const fetchMovies = async (params) =>{
        const {results, page, total_pages, total_results} = await moviesService.getMovie(params)
        setMovieData({page, total_pages, total_results})
        return results
    }

    const fetchGenres = async () =>{
        const {genres} = await genresService.getGenres()
        return genres
    }

    const fetchMoviesData = async (movieParams) => {
        const requests = genresList.length ? [fetchMovies(movieParams)]:[fetchMovies(movieParams), fetchGenres()];
        try{
            setIsLoading(true)
            const [movies,genres = genresList] = await Promise.all(requests)
            const mergedWithGenresMovies = movies.map((movie)=> {
                const {genre_ids} = movie
                const movieGenresList = genre_ids.map(genreId =>genres.find(el => el.id === genreId))
                return {
                    ...movie,
                    movieGenresList
                }
            })
            setMoviesList(mergedWithGenresMovies)
            setGenresList(genres)
        }
        catch (e){
            console.error(e)
        }
        finally {
            setIsLoading(false)
        }
    }
    useEffect(()=>{
        fetchMoviesData()
    },[])

    const renderLoadingIndicator = () => <div className={styles.loading}>Loading...</div>

    const onFilmClick = (film) => history.push(`/movie/${film.id}`)

    const handlePageChange = (page) =>fetchMoviesData({page})

    return(
        <div>
            {
                isLoading || isLoading === null ? renderLoadingIndicator() : (
                    <PaginationWrapper
                        currentPage={movieData.page}
                        totalPages={movieData.total_pages}
                        onPrevClick={handlePageChange}
                        onNextClick={handlePageChange}
                        handleLastPage={handlePageChange}
                        handleFirstPage={handlePageChange}
                    >
                        <FilmList
                        onFilmClick={onFilmClick}
                        items={moviesList}/>
                    </PaginationWrapper>
                )}
        </div>
    )
}*/
