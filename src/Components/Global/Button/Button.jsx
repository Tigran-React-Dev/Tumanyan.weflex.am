import React from 'react';
import css from "./button.module.scss"

const Button = ({cn,title, ...props}) => {

    return (
        <button className={css[cn]} {...props}>{title}</button>
    );
};

export default Button;