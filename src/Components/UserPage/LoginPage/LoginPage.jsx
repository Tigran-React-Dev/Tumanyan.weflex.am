import React, {useEffect, useState} from 'react';
import css from "./LoginPage.module.scss"
import Input from "../../Global/Input/Input";
import Check from "../../Global/Checkbox2/Check";
import {NavLink, useHistory} from "react-router-dom";
import Button from "../../Global/Button/Button";
import {REGISTER_PAGE, RESET_PASSWORD} from "../../urls";
import pass from "../../../images/icons/password.png";
import cpass from "../../../images/icons/cpassword.png";

const LoginPage = () => {
    const history=useHistory()

    useEffect(()=>{
        window.scrollTo(0, 0);

    },[history])

    const [checket,setchecked]=useState(false)
    const [inputtype,setInputType]=useState("password")
    const [user,setUser]=useState({
        login:"",
        password:""
    })

    const {login,password}=user;


    const onChangeinput =(e)=>{
        setUser({
            ...user,
            [e.target.name]:e.target.value
        })
    }
    const changeInpuytype =()=>{
        if(inputtype==="password"){
            setInputType("text")
        }else{
            setInputType("password")
        }

    }

    const hantletargetclick =()=>{

        setchecked(!checket)
    }

    return (
        <div className={css.loginconstructor}>
            <div className={css.loginhdr}>
                <p>Մուտք</p>
            </div>
            <div className={css.loginuser}>
                 <form className={css.formcontole}>
                       <Input
                           cn="logininput"
                           placeholder="Էլ․ փոստ"
                           type="email"
                           value={login}
                           name="login"
                           onChange={onChangeinput}

                       />
                     {inputtype ==="password" ?
                         <img className={css.passzabil} src={pass} alt="" onClick={changeInpuytype}/> :
                         <img className={css.passzabil} src={cpass} alt="" onClick={changeInpuytype}/>
                     }
                     <Input
                         cn="logininput"
                         placeholder="Գաղտնաբառ"
                         type={inputtype}
                          value={password}
                         name="password"
                         onChange={onChangeinput}
                     />
                     <div className={css.zabilandzapomnit}>
                         <Check
                             cn="loginchecked"
                             lableinfo="Հիշել"
                             id="loginchecked"
                             onClick={hantletargetclick}
                             isChecked={checket}
                         />


                         <NavLink className={css.zabilparol} to={RESET_PASSWORD} exect>Մոռացե՞լ եք գաղտնաբառը։</NavLink>
                     </div>
                       <Button
                           cn="loginbtn"
                           title="մուտք"

                       />
                     <div className={css.reglink}>
                        <p>Դեռ գրանցվա՞ծ չեք։</p>
                         <NavLink to={REGISTER_PAGE} exect >Գրանցվել</NavLink>
                     </div>
                 </form>
            </div>
        </div>
    );
};

export default LoginPage;