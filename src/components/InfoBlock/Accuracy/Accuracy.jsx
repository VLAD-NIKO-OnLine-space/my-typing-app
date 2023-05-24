import React from 'react';
import { observer } from 'mobx-react-lite';
import WordInfo from '../../../Store/WordInfo';
import styles from './Accuracy.module.css';

const Accuracy = observer(({ text }) => {
    const par = text.length
    const mistakes = ((WordInfo.mistakesKey.length * 100) / par).toFixed(0)

    return (
        <div className={styles.container}>
            <h1 className={styles.h1}>{100 - mistakes}%</h1>
            <p className={styles.Accuracy}>Accuracy</p>
        </div>
    );
}); 
//                          разобраться с вычислением точности!!!
export default Accuracy;