import React from 'react';
import style from'./nav.module.css'

function Nav() {
    return(
        <div className={style.nav}>
            <a href="">Main</a>
            <a href="">Skills</a>
            <a href="">My works</a>
            <a href="">Contacts</a>

        </div>
    )
}

export default Nav;