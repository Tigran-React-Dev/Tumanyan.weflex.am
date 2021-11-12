import React, {useState} from 'react';
import css from "./Register.module.scss"
import Input from "../../Global/Input/Input";
import Check from "../../Global/Checkbox2/Check";
import {NavLink} from "react-router-dom";
import {LOGIN_PAGES, RESET_PASSWORD} from "../../urls";
import Button from "../../Global/Button/Button";
const Registration = () => {
    const [checket,setchecked]=useState(false)
    const [border,setborder]=useState("1px solid #DFDFDF")
    const [user,setUser]=useState({
        name:"",
        email:"",
        password:"",
        cpassword:"",
    })

    const {name,email,password,cpassword}=user;


    const onChangeRegisterdata= e =>{
        setUser({
            ...user,
             [e.target.name]:e.target.value,
        })
    }

    const FormaSubmit = e =>{
        e.preventDefault()
        if(password!==cpassword){
            setborder("1px solid #EB2F2F")
        }else{
            setborder("1px solid #DFDFDF")
        }
    }
    const hantletargetclick =()=>{

        setchecked(!checket)
    }

    return (
        <div className={css.registerconstructor}>
            <div className={css.reghdr}>
                <p>Գրանցվել</p>
            </div>
            <form className={css.formregister} onSubmit={FormaSubmit}>

                  <Input
                    cn="inputrgister"
                    type="text"
                    placeholder="Անուն"
                    onChange={onChangeRegisterdata}
                    value={name}
                    name="name"
                    required
                  />
                <Input
                    cn="inputrgister"
                    type="email"
                    placeholder="Էլ․ փոստ"
                    onChange={onChangeRegisterdata}
                    value={email}
                    name="email"
                    required
                />
                <Input
                cn="inputrgister"
                type="password"
                placeholder="Գաղտնաբառ"
                onChange={onChangeRegisterdata}
                value={password}
                name="password"
                required
                />
                <Input
                    style={{border:border}}
                    cn="inputrgister"
                    type="password"
                    placeholder="Կրկնել գաղտնաբառը"
                    onChange={onChangeRegisterdata}
                    value={cpassword}
                    name="cpassword"
                    required
                />
                <div className={css.zabilandzapomnit}>
                    <Check
                        cn="newsinfo"
                        lableinfo="Ստանալ ակցիաների, նորությունների մասին ծանուցումներ"
                        id="newcheket"
                        onClick={hantletargetclick}
                        isChecked={checket}
                    />
                    </div>
                <Button
                    cn="loginbtn"
                    title="գրանցվել"

                />
                <div className={css.footregister}>
                   <p>Արդեն ունե՞ք անձնական էջ։</p>
                    <NavLink to={LOGIN_PAGES} exect >մուտք</NavLink>
                </div>
            </form>

        </div>
    );
};

export default Registration;