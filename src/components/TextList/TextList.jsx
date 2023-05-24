import React from 'react';
import TextItem from '../TextItem/TextItem';
import styles from './TextList.module.css';
import Switch from '../../UI/Switch/Switch';

const TextList = ({ text, toggle, setToggle, setText }) => {

    return (
        <div className={styles.container}>
            <div className={styles.switch}>
                <p className={styles.mode}>{toggle==='Text' ? 'Code' : 'Text'}</p>
                <Switch toggle={toggle} setToggle={setToggle} setText={setText}/>
            </div>
            <div className={styles.content}>
                {text.map((e, index) => <TextItem item = {e} key={index}/>)}
            </div>
        </div>
    );
};



export default TextList;