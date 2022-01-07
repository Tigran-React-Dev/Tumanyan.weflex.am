import React, {useEffect, useState} from 'react';
import css from "./LoginPage.module.scss"
import Input from "../../Global/Input/Input";
import Check from "../../Global/Checkbox2/Check";
import {NavLink, useHistory} from "react-router-dom";
import Button from "../../Global/Button/Button";
import {HOME_PAGE, REGISTER_PAGE, RESET_PASSWORD} from "../../urls";
import pass from "../../../images/icons/password.png";
import cpass from "../../../images/icons/cpassword.png";
import axios from "axios";
import fb from "../../../images/sociallfb.svg";
import  google from "../../../images/socialgoogle.svg"
import FacebookLogin from 'react-facebook-login';


const LoginPage = () => {
    const history=useHistory()


    useEffect(()=>{
        window.scrollTo(0, 0);
        if(sessionStorage.getItem("token")){
            history.push(HOME_PAGE)
        }
    },[history])

    const [checket,setchecked]=useState(false)
    const [inputtype,setInputType]=useState("password")
    const [errors,setErrors]=useState({})
    const [user,setUser]=useState({
        email:"",
        password:""
    })
    useEffect(()=>{
        let useremaillocal=localStorage.getItem("useremail")
        if(useremaillocal){
            setUser({
                ...user,
                email: useremaillocal
            })
        }


    },[])
    const {email,password}=user;

    const SubmitUser =(e)=>{
        e.preventDefault()
        handleSubmit()
        if(checket){
            localStorage.setItem("useremail",email)
        }else{
            localStorage.setItem("useremail","")
        }
    }
    const changeInpuytype =()=>{
        if(inputtype==="password"){
            setInputType("text")
        }else{
            setInputType("password")
        }

    }
    const handleSubmit = async () => {

        // store the states in the form data
        const loginFormData = new FormData();
        loginFormData.append("email", email)
        loginFormData.append("password", password)


        try {
            // make axios post request
            const response = await axios({
                method: "post",
                url: process.env.REACT_APP_API_URL+"/user/login",
                data: loginFormData,
                headers: { "Content-Type": "multipart/form-data" },
            });
     debugger
            if(response.data[0].token){
                sessionStorage.setItem("token",response.data[0].token)
                sessionStorage.setItem("user",JSON.stringify(response.data[0]))
                sessionStorage.setItem("useradress",JSON.stringify(response.data.address))
                setErrors({})
                history.push(HOME_PAGE)
            }else{
                setErrors(response.data);
            }
        } catch(error) {
            console.log(error)
        }
    }
    const onChangeinput =(e)=>{
        setUser({
            ...user,
            [e.target.name]:e.target.value
        })
    }


    const hantletargetclick =()=>{

        setchecked(!checket)

    }
    const responseFacebook =(res)=>{
        console.log(res)
    }

    return (
        <div className={css.loginconstructor}>
            <div className={css.loginhdr}>
                <p>Մուտք</p>
            </div>
            <div className={css.loginuser}>
                 <form className={css.formcontole} onSubmit={SubmitUser}>
                       <Input
                           cn="logininput"
                           placeholder="Էլ․ փոստ"
                           type="email"
                           value={email}
                           name="email"
                           onChange={onChangeinput}
                           style={{border:errors.error && "1px solid red"}}

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
                         style={{border:errors.error && "1px solid red"}}
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
                       <p className={css.or}>կամ</p>
                     <div className={css.socialfb} >


                         <FacebookLogin
                             appId="331261461769561"
                             autoLoad={false}
                             fields="name,email,picture"
                             callback={responseFacebook}
                             textButton="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;շարունակել ֆեյսբուքով"
                             cssClass={css.mubtnfacebook}
                             icon={<img src={fb} alt="" className={css.iconfb}/>}

                         />
                     </div>
                     <div className={css.socialgoogle} >
                         <img src={google} alt=""/>
                         <h2>շարունակել գուգլով</h2>
                     </div>
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