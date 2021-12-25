import React from "react";
import style from './footer.module.css'

function Footer(){
    return(
        <div className={style.footerBlock}>
            <div className={style.footerContainer}>
                <h3 className={style.title}>Vintsent Anisenko</h3>
                <div className={style.squares}>
                    <div className={style.square}></div>
                    <div className={style.square}></div>
                    <div className={style.square}></div>
                    <div className={style.square}></div>
                </div>
                <h3 className={style.footer}>2021 Все права защищены</h3>
            </div>
        </div>
    )
}

export default Footer;