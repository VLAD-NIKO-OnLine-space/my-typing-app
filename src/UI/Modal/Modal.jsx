import React from 'react';
import styles from './Modal.module.css'


const Modal = ({ children, visible, setVisible }) => {

    const rootStyles = [styles.main]
    if (visible) {
        rootStyles.push(styles.active)
    }

    return (
        <div className={rootStyles.join(' ')}>
            <div className={styles.content}>
                {children}
            </div>
        </div>
    );
};



export default Modal;