import React from 'react';
import styles from './BaseLayout.module.css'
import { Link } from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";

export const BaseLayout = ({children}) =>{
    const some = useSelector(({some})=>some)
    const dispatch = useDispatch()

    const handleForm = (e)=>{
        e.preventDefault()
        dispatch({type:'INC', payload:e.target.value})
        console.log(some)
    }


    return(
        <div className={styles.mainWrapper}>
            <header>
                <Link to='/'>Hearder data</Link>
                <form action="">
                    <input type="text" onChange={handleForm}/>
                </form>
            </header>
            <main>
                {children}
            </main>
            <footer>Footer</footer>
        </div>
    )
}