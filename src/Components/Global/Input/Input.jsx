import React from "react";
import css from "./Input.module.scss"


const Input =({cn ,...props})=>{


    return(
        <input className={css[cn]} {...props} />
    )
}

export default Input;