import React from 'react';
import { observer } from 'mobx-react-lite';
import WordInfo from '../../../Store/WordInfo';
import StartButton from '../../StartButton/StartButton';
import { getCodeText, getRandomParagraph } from '../../../utils/paragraphs';
import styles from './ModalContent.module.css'


const ModalContent = observer(({ setVisible, setTime, text, setText, toggle }) => {

    const par2 = text.length
    const mistakes = ((WordInfo.mistakesKey.length * 100) / par2).toFixed(0)


    const handleClick = () => {
        setVisible(false)
        setTime(60)
        if (toggle==='Code'){
            const [items, par] = getRandomParagraph()
            setText(items)
        } else {
            const [items, par] = getCodeText()
            setText(items)

        }
        WordInfo.removeAll()
    }
    return (
        <div className={styles.main}>
            <h1 className={styles.title}>Time's up!</h1>
            <h3 className={styles.info}>Accuracy: <span>{100 - mistakes}</span>%</h3>
            <h3 className={styles.info}>Speed: <span>{WordInfo.currentsKey.length}</span> w/min</h3>
            <StartButton onClick={handleClick}>close</StartButton>
        </div>
    );
});



export default ModalContent;