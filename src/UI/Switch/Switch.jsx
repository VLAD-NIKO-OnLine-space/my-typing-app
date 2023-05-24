import React, { useState } from 'react';
import styles from './Switch.module.css'
import { getCodeText, getRandomParagraph } from '../../utils/paragraphs';

const Switch = ({ toggle, setToggle,setText }) => {



    const trigerToggle = () =>{
        if (toggle === 'Text'){
            setToggle('Code')
            const [items, par] = getRandomParagraph()
            setText(items)
            
        } 
        else {
            setToggle('Text')
            const [items, par] = getCodeText()
            setText(items)
        }
    }

    return (
        <div>
            <label className={styles.switch} onChange={trigerToggle}>
                <input type="checkbox" />
                <span className={styles.slider}></span>
            </label> 
        </div>
    );
};



export default Switch;