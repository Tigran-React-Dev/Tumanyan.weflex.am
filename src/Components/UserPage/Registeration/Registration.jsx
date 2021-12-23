import React, {useEffect, useState} from 'react';
import css from "./Register.module.scss"
import Input from "../../Global/Input/Input";
import Check from "../../Global/Checkbox2/Check";
import {NavLink, useHistory} from "react-router-dom";
import {LOGIN_PAGES, RESET_PASSWORD} from "../../urls";
import Button from "../../Global/Button/Button";
import axios from "axios";
const Registration = () => {
    const [checket,setchecked]=useState(false)
    const [border,setborder]=useState("1px solid #DFDFDF")
    const [errors,setErrors]=useState({})
    const history=useHistory()

    useEffect(()=>{
        window.scrollTo(0, 0);

    },[history])

    const [user,setUser]=useState({
        name:"",
        email:"",
        password:"",
        password_confirmation:"",
        success_check:checket,
    })

    const {name,email,password,password_confirmation,success_check}=user;


    const onChangeRegisterdata= e =>{
        setUser({
            ...user,
             [e.target.name]:e.target.value,
        })
    }

    const FormaSubmit = e =>{
        e.preventDefault()



    }
    const hantletargetclick =()=>{
         setchecked(!checket)
        setUser({
            ...user,
            success_check: !checket,
        })

    }


    const handleSubmit = async () => {

        // store the states in the form data
        const loginFormData = new FormData();
        loginFormData.append("name", name)
        loginFormData.append("email", email)
        loginFormData.append("password", password)
        loginFormData.append("password_confirmation", password_confirmation)
        loginFormData.append("success_check",success_check)

        try {
            // make axios post request
            const response = await axios({
                method: "post",
                url: process.env.REACT_APP_API_URL+"/user/addUser",
                data: loginFormData,
                headers: { "Content-Type": "multipart/form-data" },
            });

            if(response.data){


                setErrors({})
                window.scrollTo(0, 400);
            }else{
                setErrors(response.data);
            }
        } catch(error) {
            console.log(error)
        }
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

                  />
                <Input
                    cn="inputrgister"
                    type="email"
                    placeholder="Էլ․ փոստ"
                    onChange={onChangeRegisterdata}
                    value={email}
                    name="email"

                />
                <Input
                cn="inputrgister"
                type="password"
                placeholder="Գաղտնաբառ"
                onChange={onChangeRegisterdata}
                value={password}
                name="password"

                />
                <Input
                    // style={{border:border}}
                    cn="inputrgister"
                    type="password"
                    placeholder="Կրկնել գաղտնաբառը"
                    onChange={onChangeRegisterdata}
                    value={password_confirmation}
                    name="cpassword"

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