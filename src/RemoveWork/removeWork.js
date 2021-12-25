import React from "react"
import style from "./removeWork.module.css"

function RemoveWork(){
    return (
        <div className={style.removeWorkBlock}>
            <div className={style.removeWorkContainer}>
                <h2 className={style.title}> Рассмотриваю варианты удаленной работы</h2>
                <button className={style.button}> (Нанять меня)</button>
            </div>
        </div>
    )
}

export default RemoveWork;