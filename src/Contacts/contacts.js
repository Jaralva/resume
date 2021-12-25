import React from "react";
import style from './contacts.module.css'
import styleContainer from "../common/styles/container.module.css"

function Contacts() {
    return (
        <div className={style.contactsBlock}>
            <div className={style.contactsContainer}>
                <form className={style.contactsForm} action="">
                    <h2 className={style.title}> Contacts </h2>
                    <div className={style.blank}>
                        <input className={style.formInput} type="text"/>
                        <input className={style.formInput} type="text"/>
                        <textarea className={style.formTextarea} name="" id="" cols="30" rows="10"></textarea>
                    </div>
                    <input className={style.formSubmit} type="submit" value={"Send"}/>
                </form>
            </div>
        </div>
    )
}

export default Contacts;

