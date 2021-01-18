import React from 'react';
import styles from './BaseLayout.module.css'


export const BaseLayout = ({children}) =>{
    return(
        <div className={styles.mainWrapper}>
            <header>Hearder</header>
            <main>
                {children}
            </main>
            <footer>Footer</footer>
        </div>
    )
}