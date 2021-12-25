import React from "react";
import style from "./skills.module.css";
import styleContainer from '../common/styles/container.module.css';
import Skill from "./Skill/skill";

function Skills() {
    return(
        <div className={style.skillsBlock}>
            <div className={`${styleContainer.container} ${style.skillsContainer}`}>
                <h2 className={style.title}>My Skills</h2>
                <div className={style.skills}>
                    <Skill title={'JS'} description={'JavaScript — мультипарадигменный язык программирования. Поддерживает объектно-ориентированный, императивный и функциональный стили.'}/>
                    <Skill title={'CSS'} description={'формальный язык описания внешнего вида документа, написанного с использованием языка разметки.'}/>
                    <Skill title={'HTML'} description={'HTML — стандартизированный язык разметки документов для просмотра веб-страниц в браузере.'}/>
                </div>
            </div>
        </div>
    )
}

export default Skills;