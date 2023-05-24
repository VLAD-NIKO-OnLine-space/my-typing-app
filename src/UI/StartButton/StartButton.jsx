import React from 'react';
import styles from './StartButton.module.css'
import { Link } from 'react-router-dom';

const StartButton = ({children, to, ...props}) => {
    return (
        <Link to={to}{...props} className={styles.startBtn}>
            {children}
        </Link>
    );
};



export default StartButton;