import React from 'react';
import style from'./header.module.css'
import Nav from "../Nav/nav";

function Header() {
    return(
        <div className={style.header}>
            <Nav/>

        </div>
    )
}

export default Header;