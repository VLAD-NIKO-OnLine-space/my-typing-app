import React from 'react';
import styles from './TextItem.module.css'


const TextItem = ({item}) => {


    return (
        <>
            {item === ' ' 
            ? <h2 className={styles.item}>&ensp;</h2>
            : <h2 className={styles.item}>{item}</h2>
            }
        </>
    );
};



export default TextItem;