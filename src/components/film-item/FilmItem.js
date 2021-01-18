import React from 'react'
import styles from './FilmItem.module.css'
export const FilmItem = (props)=>{
    const {original_title,overview,release_data,vote_average,vote_count,poster_path,movieGenresList} = props

    return(
        <div className={styles.filmItem}>
            <div>
                <img src={`https://image.tmdb.org/t/p/w200${poster_path}`} alt={`${original_title} image`}/>
            </div>
            <div>
                <h2>{original_title}</h2>
                <h3>{movieGenresList.map(({name,id},i)=> (
                    <span key={id}>{name} {i <movieGenresList.length-1 && '-'}  </span>
                ))}</h3>
                <span>Rating: {vote_average}(total votes:{vote_count})</span>
                <p>{overview}</p>
                <span>Release data:{release_data}</span>
            </div>
        </div>
    )
}