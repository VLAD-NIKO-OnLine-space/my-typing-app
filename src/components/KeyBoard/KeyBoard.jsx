import React from 'react';
import styles from './KeyBoard.module.css'

const KeyBoard = ({ tabs }) => {


    return (
        <div className={styles.keyboard}>
            <div className={styles.keyboardRow}>
                <div className={tabs==='Backquote' ? styles.active : styles.row1}>`</div>
                <div className={tabs==='Digit1' ? styles.active : styles.row1}>1</div>
                <div className={tabs==='Digit2' ? styles.active : styles.row1}>2</div>
                <div className={tabs==='Digit3' ? styles.active : styles.row1}>3</div>
                <div className={tabs==='Digit4' ? styles.active : styles.row1}>4</div>
                <div className={tabs==='Digit5' ? styles.active : styles.row1}>5</div>
                <div className={tabs==='Digit6' ? styles.active : styles.row1}>6</div>
                <div className={tabs==='Digit7' ? styles.active : styles.row1}>7</div>
                <div className={tabs==='Digit8' ? styles.active : styles.row1}>8</div>
                <div className={tabs==='Digit9' ? styles.active : styles.row1}>9</div>
                <div className={tabs==='Digit0' ? styles.active : styles.row1}>0</div>
                <div className={tabs==='Minus' ? styles.active : styles.row1}>-</div>
                <div className={tabs==='Equal' ? styles.active : styles.row1}>=</div>
                <div className={tabs==='Backspace' ? styles.active : styles.row1}>del</div>
            </div>

            <div className={styles.keyboardRow}>
                <div className={tabs==='Tab' ? styles.active : styles.row1}>Tab</div>
                <div className={tabs==='KeyQ' ? styles.active : styles.row1}>q</div>
                <div className={tabs==='KeyW' ? styles.active : styles.row1}>w</div>
                <div className={tabs==='KeyE' ? styles.active : styles.row1}>e</div>
                <div className={tabs==='KeyR' ? styles.active : styles.row1}>r</div>
                <div className={tabs==='KeyT' ? styles.active : styles.row1}>t</div>
                <div className={tabs==='KeyY' ? styles.active : styles.row1}>y</div>
                <div className={tabs==='KeyU' ? styles.active : styles.row1}>u</div>
                <div className={tabs==='KeyI' ? styles.active : styles.row1}>i</div>
                <div className={tabs==='KeyO' ? styles.active : styles.row1}>o</div>
                <div className={tabs==='KeyP' ? styles.active : styles.row1}>p</div>
                <div className={tabs==='BracketLeft' ? styles.active : styles.row1}>&#91;</div>
                <div className={tabs==='BracketRight' ? styles.active : styles.row1}>&#93;</div>
                <div className={tabs==='Backslash' ? styles.active : styles.row1}>\</div>
            </div>

            <div className={styles.keyboardRow}>
                <div className={tabs==='CapsLock' ? styles.active : styles.row1}>Caps</div>
                <div className={tabs==='KeyA' ? styles.active : styles.row1}>a</div>
                <div className={tabs==='KeyS' ? styles.active : styles.row1}>s</div>
                <div className={tabs==='KeyD' ? styles.active : styles.row1}>d</div>
                <div className={tabs==='KeyF' ? styles.active : styles.row1}>f</div>
                <div className={tabs==='KeyG' ? styles.active : styles.row1}>g</div>
                <div className={tabs==='KeyH' ? styles.active : styles.row1}>h</div>
                <div className={tabs==='KeyJ' ? styles.active : styles.row1}>j</div>
                <div className={tabs==='KeyK' ? styles.active : styles.row1}>k</div>
                <div className={tabs==='KeyL' ? styles.active : styles.row1}>l</div>
                <div className={tabs==='Semicolon' ? styles.active : styles.row1}>;</div>
                <div className={tabs==='Quote' ? styles.active : styles.row1}>'</div>
                <div className={tabs==='Enter' ? styles.active : styles.row1}>Enter</div>
            </div>

            <div className={styles.keyboardRow}>
                <div className={tabs==='ShiftLeft' ? styles.active : styles.row1}>Shift</div>
                <div className={tabs==='KeyZ' ? styles.active : styles.row1}>z</div>
                <div className={tabs==='KeyX' ? styles.active : styles.row1}>x</div>
                <div className={tabs==='KeyC' ? styles.active : styles.row1}>c</div>
                <div className={tabs==='KeyV' ? styles.active : styles.row1}>v</div>
                <div className={tabs==='KeyB' ? styles.active : styles.row1}>b</div>
                <div className={tabs==='KeyN' ? styles.active : styles.row1}>n</div>
                <div className={tabs==='KeyM' ? styles.active : styles.row1}>m</div>
                <div className={tabs==='Comma' ? styles.active : styles.row1}>,</div>
                <div className={tabs==='Period' ? styles.active : styles.row1}>.</div>
                <div className={tabs==='Slash' ? styles.active : styles.row1}>/</div>
                <div className={tabs==='ShiftRight' ? styles.active : styles.row1}>Shift</div>
            </div>

            <div className={styles.keyboardRow}>
                <div className={tabs==='ControlLeft' ? styles.active : styles.row1}>Ctrl</div>
                <div className={tabs==='Space' ? styles.SpaceActive : styles.row1Space}>SPACE</div>
                <div className={tabs==='ControlRight' ? styles.active : styles.row1}>Ctrl</div>

            </div>
            
        </div>
    );
};



export default KeyBoard;