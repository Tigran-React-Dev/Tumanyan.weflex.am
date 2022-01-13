import React, {useEffect, useState} from 'react';
import css from "./Register.module.scss"
import Input from "../../Global/Input/Input";
import Check from "../../Global/Checkbox2/Check";
import {NavLink, useHistory} from "react-router-dom";
import {HOME_PAGE, LOGIN_PAGES, RESET_PASSWORD} from "../../urls";
import Button from "../../Global/Button/Button";
import axios from "axios";
import {useDispatch} from "react-redux";
import {Registeruser} from "../../redux/Action/AuthACtion";
import FacebookLogin from "react-facebook-login/dist/facebook-login-render-props";
import fb from "../../../images/sociallfb.svg";
import GoogleLogin from "react-google-login";
import google from "../../../images/socialgoogle.svg";
const Registration = () => {
    const [checket,setchecked]=useState(false)
    const [border,setborder]=useState("1px solid #DFDFDF")
    const [errors,setErrors]=useState({})
    const history=useHistory()
    const dispath =useDispatch()
    useEffect(()=>{
        window.scrollTo(0, 0);
        if(sessionStorage.getItem("token")){
            history.push(HOME_PAGE)
        }
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
        handleSubmit()



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
                url: process.env.REACT_APP_API_URL+"/user/register",
                data: loginFormData,
                headers: { "Content-Type": "multipart/form-data" },
            });

            if(response.data.token){
                sessionStorage.setItem("token",response.data.token)
                sessionStorage.setItem("user",JSON.stringify(response.data))
                setErrors({})
                history.push(HOME_PAGE)
            }else{
                setErrors(response.data);
            }
        } catch(error) {
            console.log(error)
        }
    }

    const responseFacebook =async (res)=>{
        console.log(res)
        if(res.accessToken){
            const loginForm = new FormData();
            loginForm.append("accessToken", res.accessToken)
            loginForm.append("provider", "facebook")


            try {
                // make axios post request
                const response = await axios({
                    method: "post",
                    url: process.env.REACT_APP_API_URL+"/user/social-login",
                    data: loginForm,
                    headers: { "Content-Type": "multipart/form-data" },
                });

                if(response?.data[0]?.token){
                    sessionStorage.setItem("token",response.data[0].token)
                    sessionStorage.setItem("user",JSON.stringify(response.data[0]))
                    sessionStorage.setItem("useradress",JSON.stringify(response.data.address))
                    history.push(HOME_PAGE)
                }
            } catch(error) {
                console.log(error)
            }
        }
    }


    const responseGoogle =async (res)=>{

        if(res.accessToken){
            const loginForm = new FormData();
            loginForm.append("accessToken", res.accessToken)
            loginForm.append("provider", "google")


            try {
                // make axios post request
                const response = await axios({
                    method: "post",
                    url: process.env.REACT_APP_API_URL+"/user/social-login",
                    data: loginForm,
                    headers: { "Content-Type": "multipart/form-data" },
                });
                console.log(response)
                if(response?.data[0]?.token){
                    sessionStorage.setItem("token",response.data[0].token)
                    sessionStorage.setItem("user",JSON.stringify(response.data[0]))
                    sessionStorage.setItem("useradress",JSON.stringify(response.data.address))
                    history.push(HOME_PAGE)
                }
            } catch(error) {
                console.log(error)
            }
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
                    style={{border:errors.name && "1px solid red"}}

                  />
                <Input
                    cn="inputrgister"
                    type="email"
                    placeholder="Էլ․ փոստ"
                    onChange={onChangeRegisterdata}
                    value={email}
                    name="email"
                    style={{border:errors.email && "1px solid red"}}

                />
                <Input
                cn="inputrgister"
                type="password"
                placeholder="Գաղտնաբառ"
                onChange={onChangeRegisterdata}
                value={password}
                name="password"
                style={{border:errors.password && "1px solid red"}}

                />
                <Input
                    // style={{border:border}}
                    cn="inputrgister"
                    type="password"
                    placeholder="Կրկնել գաղտնաբառը"
                    onChange={onChangeRegisterdata}
                    value={password_confirmation}
                    name="password_confirmation"
                    style={{border:errors.password_confirmation && "1px solid red"}}

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


            </form>
            <div className={css.footregister}>
                <FacebookLogin
                    appId="598582751447780"
                    autoLoad={false}

                    fields="name,email,picture"
                    callback={responseFacebook}
                    render={renderProps => (
                        <button onClick={(e)=>{
                            renderProps.onClick()
                            e.stopPropagation()

                        }} className={css.mubtnfacebook}>
                            <img src={fb} alt='fb' />
                            <h2>շարունակել ֆեյսբուքով</h2></button>
                    )}
                />
                <GoogleLogin
                    clientId="798988727061-09ffbg2uivsb38i34i6bknj6l1gogg5l.apps.googleusercontent.com"
                    buttonText=""
                    icon={true}
                    onSuccess={responseGoogle}
                    onFailure={responseGoogle}
                    render={renderProps => (
                        <button onClick={renderProps.onClick} className={css.btngoogle}>
                            <img src={google} alt='google' />
                            <h2>շարունակել գուգլով</h2>
                        </button>
                    )}
                    cookiePolicy={'single_host_origin'}
                />

             <p>Արդեն ունե՞ք անձնական էջ։ <NavLink to={LOGIN_PAGES} exect >մուտք</NavLink></p>
            </div>
        </div>
    );
};

export default Registration;