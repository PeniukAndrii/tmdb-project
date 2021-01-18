import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom'
import {moviesService} from "../../services";

export const MovieDetails = () =>{
    const [filmDetails, setFilmDetails] = useState(null)
    const [isLoading, setIsLoading] = useState(null)
    const {id} = useParams()

    const getMovieDetails = async () =>{
        try{
            setIsLoading(true)
            const data = await moviesService.getMovieById(id)
            setFilmDetails(data)
        }
        catch (e){
            console.error(e)
        }
        finally {
            setIsLoading(false)
        }
    }

    useEffect(()=>{
        getMovieDetails();
    },[])

    if((isLoading && !filmDetails) || isLoading===null){
        return <div>Loading...</div>
    }

    return(
        <div>
            <h1>{filmDetails.original_title}</h1>
            <h2>{filmDetails.genres.map(el=><span key={el.id}>{el.name}</span>)}</h2>
            <h3>{filmDetails.original_title}</h3>
            <p>{filmDetails.overview}</p>
        </div>
    )
}