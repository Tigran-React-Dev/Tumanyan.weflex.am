import React, {useEffect, useState} from 'react';
import css from "./Reset.module.scss"
import Input from "../../Global/Input/Input";
import Button from "../../Global/Button/Button";
import {NavLink} from "react-router-dom";
import {HOME_PAGE, LOGIN_PAGES} from "../../urls";
import axios from "axios";
const SendMailurl = ({history}) => {


    const [email,setemail]=useState("")
    const [errors,setErrors]=useState({})
    const [succsessSendMail,setSuccsessSendMail]=useState(false)
    useEffect(()=>{
        window.scrollTo(0, 0);
        if(sessionStorage.getItem("token")){
            history.push(HOME_PAGE)
        }
    },[history])



    const onSubmitform =async (e)=>{
        e.preventDefault()

        const loginFormData = new FormData();
        loginFormData.append("email", email)
        try {
            // make axios post request
            const response = await axios({
                method: "post",
                url: process.env.REACT_APP_API_URL+"/user/reset",
                data: loginFormData,
                headers: { "Content-Type": "multipart/form-data" },
            });
            console.log(response)
            if(response.data=="Success"){
                setSuccsessSendMail(true)
                setemail("")
                setErrors({});
            }else{
                setErrors(response.data);
                setSuccsessSendMail(false)
            }
        } catch(error) {
            console.log(error)
        }
    }

    return (
        <div className={css.sendconstructor}>
            <div className={css.sendhdr}>
               <p>գաղտնաբառի վերականգնում</p>
            </div>
             <form className={css.formresetpass1} onSubmit={onSubmitform}>
              <p>Մոռացե՞լ եք գաղտնաբառը։ Նշեք Ձեր էլ․ հասցեն, <br/> որին կուղարկվի նոր գաղտնաբառը։</p>
                 <Input
                     cn="zabilinput"
                     type="text"
                     placeholder="Էլ․ փոստ"
                     onChange={(e)=>setemail(e.target.value)}
                     value={email}
                     style={{border:errors.error && "1px solid red"}}
                 />
                 <Button
                     cn="loginbtn"
                     title="ուղարկել"

                 />
                  <h3 className={css.succsessmessage}>{succsessSendMail && "Ձեր email-ին ուղարկվել է նամակ ,խնդրում ենք շարունակելու համար մուտք գործել email"}</h3>

                 <div className={css.linknazat}>
                     <NavLink  to={LOGIN_PAGES} exect >վերադառնալ</NavLink>
                 </div>
            </form>
        </div>
    );
};

export default SendMailurl;