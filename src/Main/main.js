import React from 'react';
import style from'./main.module.css'
import styleContainer from '../common/styles/container.module.css'


function Main() {
    return(
        <div className={style.main}>
            <div className={styleContainer.container}>
            <div className={style.text}>
                <span> Hi there</span>
                <h1>I am Vincent Anisenko</h1>
                <p> Front-end developer</p>
            </div>
            <div className={style.photo}></div>
            </div>
        </div>
    )
}

export default Main;