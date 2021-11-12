import React, {useState} from 'react';
import css from "./Reset.module.scss"
import Input from "../../Global/Input/Input";
import Button from "../../Global/Button/Button";
import {NavLink} from "react-router-dom";
import {LOGIN_PAGES} from "../../urls";

const ResetPassword = () => {

    const [password,setPasword]=useState({
        passwords:"",
        cpasswords:"",
    })
    console.log(password)
    const {passwords,cpasswords}=password;

    const onChangePassword=(e)=>{
        setPasword({
            ...password,
            [e.target.name]:e.target.value,
        })
    }
    const sendnewpassword=()=>{

    }

    return (
        <div className={css.sendconstructor}>
            <div className={css.sendhdr}>
                <p>գաղտնաբառի վերականգնում</p>
            </div>
            <form className={css.formresetpass} onSubmit={sendnewpassword}>
                <p>խնդրում ենք մուտքագրել նոր գաղտնաբառը</p>
                <Input
                    cn="zabilinput"
                    type="password"
                    placeholder="Նոր գաղտնաբառ"
                    name="passwords"
                    onChange={onChangePassword}
                    value={passwords}
                />
                <Input
                    cn="zabilinput"
                    type="password"
                    placeholder="Կրկնել նոր գաղտնաբառը"
                    name="cpasswords"
                    onChange={onChangePassword}
                    value={cpasswords}
                />
                <Button
                    cn="loginbtn"
                    title="հաստատել"

                />
                {/*<div className={css.linknazat}>*/}
                {/*    /!*<NavLink  to={LOGIN_PAGES} exect >վերադառնալ</NavLink>*!/*/}
                {/*</div>*/}
            </form>


        </div>
    );
};

export default ResetPassword;