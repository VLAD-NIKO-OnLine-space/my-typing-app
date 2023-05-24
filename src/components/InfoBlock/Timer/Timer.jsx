import React from 'react';
import styles from './Timer.module.css'

const Timer = ({ count }) => {





    return (
        <div className={styles.TimerCount}>
            <h1>{count}</h1>
            <p className={styles.time}>time</p>
        </div>
    );
};


export default Timer;