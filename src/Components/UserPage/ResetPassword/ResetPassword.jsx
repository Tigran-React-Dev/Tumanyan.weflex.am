import React, {useEffect, useState} from 'react';
import css from "./Reset.module.scss";
import Input from "../../Global/Input/Input";
import Button from "../../Global/Button/Button";
import {NavLink, useParams} from "react-router-dom";
import {HOME_PAGE, LOGIN_PAGES} from "../../urls";
import axios from "axios";

const ResetPassword = ({history}) => {

    const [userdata,setuserdata]=useState({
        token:"",
        email:"",
    })
      const {token,email}=userdata;
     useEffect(()=>{
         var str = window.location.href;
         str = str.split("token=")
          str = str[1].split("&email=")
         let token=str[0];
         let email= str[1];
         setuserdata({
             token:token,
             email:email,
         })

     },[])


     useEffect(()=>{
        window.scrollTo(0, 0);
        if(sessionStorage.getItem("token")){
            history.push(HOME_PAGE)
        }
     },[history])



    const [pass,setPasword]=useState({
        password:"",
        password_confirmation:"",
    })

    const {password,password_confirmation}=pass;

    const onChangePassword=(e)=>{
        setPasword({
            ...pass,
            [e.target.name]:e.target.value,
        })
    }
    const sendnewpassword=async (e)=>{
        e.preventDefault();
        // store the states in the form data
        const loginFormData = new FormData();
        loginFormData.append("email", email)
        loginFormData.append("token", token)
        loginFormData.append("password", password)
        loginFormData.append("password_confirmation", password_confirmation)


        try {
            // make axios post request
            const response = await axios({
                method: "post",
                url: process.env.REACT_APP_API_URL+"/user/new-password",
                data: loginFormData,
                headers:
                    { "Content-Type": "multipart/form-data"},
            });

            console.log(response)
            console.log(token,email,password,password_confirmation)
            // if(response.data.token){
            //     sessionStorage.setItem("token",response.data.token)
            //     sessionStorage.setItem("user",JSON.stringify(response.data))
            //     setErrors({})
            //     history.push(HOME_PAGE)
            // }else{
            //     setErrors(response.data);
            // }
        } catch(error) {
            console.log(error)
        }
    }

    return (
        <div className={css.sendconstructor}>
            <div className={css.sendhdr}>
                <p>գաղտնաբառի վերականգնում</p>
            </div>
            <form className={css.formresetpass2} onSubmit={sendnewpassword}>
                <p>խնդրում ենք մուտքագրել նոր գաղտնաբառը</p>
                <Input
                    cn="zabilinput"
                    type="password"
                    placeholder="Նոր գաղտնաբառ"
                    name="password"
                    onChange={onChangePassword}
                    value={password}
                />
                <Input
                    cn="zabilinput"
                    type="password"
                    placeholder="Կրկնել նոր գաղտնաբառը"
                    name="password_confirmation"
                    onChange={onChangePassword}
                    value={password_confirmation}
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