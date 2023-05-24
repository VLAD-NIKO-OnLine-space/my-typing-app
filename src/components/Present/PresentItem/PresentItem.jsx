import React from 'react';
import styles from './PresentItem.module.css'

const PresentItem = ({ item }) => {
    return (
        <>
            {item===' ' 
            ? <h1 className={styles.item}>&ensp;</h1>    
            : <h1 className={styles.item}>{item}</h1>
            }
        </>
    );
};



export default PresentItem;