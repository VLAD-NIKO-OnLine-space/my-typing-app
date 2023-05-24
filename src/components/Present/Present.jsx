import React from 'react';
import PresentItem from './PresentItem/PresentItem';
import styles from './Present.module.css'

const Present = () => {
    const title = '<Your Speed Code/>'
    const arrTitle = title.split('')
    return (

        <div className={styles.by}>

            <div className={styles.main}>
                {arrTitle.map((e, index) => <PresentItem key={index} item={e}/>)}
            </div>

            <p className={styles.par}>by</p>
            <p className={styles.par}>VLAD-NIKO</p>
       
        </div>
    );
};



export default Present;