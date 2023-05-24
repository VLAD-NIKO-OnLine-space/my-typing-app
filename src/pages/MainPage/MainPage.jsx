import React, { useEffect, useState } from 'react';
import styles from './MainPage.module.css';
import KeyBoard from '../../components/KeyBoard/KeyBoard';
import { getRandomParagraph } from '../../utils/paragraphs';
import TextList from '../../components/TextList/TextList';
import InfoBlock from '../../components/InfoBlock/InfoBlock';
import { observer } from 'mobx-react-lite';
import WordInfo from '../../Store/WordInfo';
import Present from '../../components/Present/Present';

const MainPage = observer(() => {

    const [tabs, setTabs] = useState('')
    const [count, setCount] = useState(0)
    const [startButton, setStartButton] = useState(false)
    const [time, setTime] = useState(60)
    const [toggle, setToggle] = useState('Code')
    const [items, par] = getRandomParagraph()
    const [text, setText] = useState(items)


    const remove = (k) => {
        if (text[0] === k) {
            const newText = text.slice(1)
            setText(newText)
            WordInfo.addCurrentKey(k)
        } else if (text[0] !== k) {
            WordInfo.addMistakeKey(k)
        }
    }

    useEffect(() => {
        const onKeypress = e => {  
            if (startButton){ 
            setTabs(e.code)
            setCount(count+1)
            remove(e.key)
        }}
        document.addEventListener('keydown', onKeypress);
        return () => {
            document.removeEventListener('keydown', onKeypress); 
        };
    }, [count, startButton]);


    return (
        <div className={styles.main}>
            <video playsInline autoPlay loop muted className={styles.bgVideo}>
                <source src="/startfon.mp4" type="video/mp4" className={styles.video}></source>
            </video>
            <Present/>
            <TextList text={text} toggle={toggle} setToggle={setToggle} setText={setText}/>
            <InfoBlock setStartButton={setStartButton} time={time} setTime={setTime} text={text} setText={setText} toggle={toggle}/>
            <KeyBoard tabs={tabs}/>
        </div>
    );
});


export default MainPage;