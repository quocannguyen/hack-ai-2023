import React from "react";
import cd from './img/cd.png';
import sInput from './styles/input.module.css';

const Input = () =>{
    return(
        <>
            <div className={sInput.container}>
                <div className={sInput.diskContainer}>
                <img className={sInput.disk} src={cd} alt="A Disk" />
                </div>
                <div className={sInput.diskContainerSecond}>
                </div>
            </div>
            <div className={sInput.bodyContainer}>
                <h1>A HEADING</h1>
                <div className={sInput.buttonContainer}>
                    <button className={sInput.btn}>Record Your Sample</button>
                    <a>Or Upload </a>
                </div>
            </div>
        </>
    )
}
export default Input;