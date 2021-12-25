import React from "react";
import style from "./projects.module.css"
import Project from "./Project/project";
import styleContainer from '../common/styles/container.module.css';

function Projects() {
    return (
        <div className={style.projectsBlock}>
            <div className={`${styleContainer.container} ${style.projectsContainer}`}>
                <h2 className={style.title}>My Projects</h2>
                <div className={style.projects}>
                    <Project/>
                    <Project/>
                </div>
            </div>
        </div>
            )
            }

            export default Projects;