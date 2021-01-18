import React from 'react'
import {FilmItem} from "../film-item";
import styles from './FilmList.module.css'
export const FilmList = ({items,onFilmClick})=>{
   return(
       <div className={styles.listWrapper}>
           {
               items.map(item=> (
                   <div key={item.id}
                       onClick={()=>onFilmClick(item)}
                       className={styles.itemWrapper}>
                       <FilmItem key={item.id} {...item}/>
                   </div>
               ))
           }
       </div>
   )
}