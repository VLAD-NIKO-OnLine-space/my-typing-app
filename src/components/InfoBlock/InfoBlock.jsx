import React, { useState } from 'react';
import styles from './InfoBlock.module.css';
import StartButton from '../../UI/StartButton/StartButton';
import Timer from './Timer/Timer';
import { observer } from 'mobx-react-lite';
import Accuracy from './Accuracy/Accuracy';
import Modal from '../../UI/Modal/Modal';
import ModalContent from '../../UI/Modal/ModalContent/ModalContent';
import SpeedText from './SpeedText/SpeedText';


const InfoBlock = observer(({setStartButton, setTime, time, text, setText, toggle}) => {
    const Timeref = React.useRef(null);
    const [visible, setVisible] = useState(false)

 
    const timer = () => {
        if (time!==0){
        setTime(time = time - 1)}
        else if(time===0){
            clearInterval(Timeref.current)
            setStartButton(false)
            setVisible(true)
        }
    }

    const start=()=> {
        setStartButton(true)
        Timeref.current = setInterval(()=>timer(),1000)
    }

    return (
        <div className={styles.main}>
            <Modal visible={visible} setVisible={setVisible}>
                <ModalContent setVisible={setVisible} setTime={setTime} text={text} setText={setText} toggle={toggle}/>
            </Modal>
            <Timer count={time}/>
            <Accuracy text={text}/>
            <SpeedText/>    
            <StartButton onClick={start}>start</StartButton>
        </div>
    );
});



export default InfoBlock;