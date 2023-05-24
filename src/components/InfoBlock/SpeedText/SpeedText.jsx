import React from 'react';
import styles from './SpeedText.module.css'
import { observer } from 'mobx-react-lite';
import WordInfo from '../../../Store/WordInfo';


const SpeedText = observer(() => {

    const currentLenght = WordInfo.currentsKey.length
  
    return (
        <div className={styles.container}>
            <h1 className={styles.h1}>{currentLenght}</h1>
            <p className={styles.Accuracy}>n/n</p>
        </div>
    );
});



export default SpeedText;