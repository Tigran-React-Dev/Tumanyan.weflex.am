import React, {useState} from 'react';
import css from "./Reset.module.scss"
import Input from "../../Global/Input/Input";
import Button from "../../Global/Button/Button";
import {NavLink} from "react-router-dom";
import {LOGIN_PAGES} from "../../urls";
const SendMailurl = () => {


    const [value,Setvalue]=useState("")


    const onSubmitform =(e)=>{
        e.preventDefault()
    }

    return (
        <div className={css.sendconstructor}>
            <div className={css.sendhdr}>
               <p>գաղտնաբառի վերականգնում</p>
            </div>
             <form className={css.formresetpass} onSubmit={onSubmitform}>
              <p>Մոռացե՞լ եք գաղտնաբառը։ Նշեք Ձեր էլ․ հասցեն, <br/> որին կուղարկվի նոր գաղտնաբառը։</p>
                 <Input
                     cn="zabilinput"
                     type="text"
                     placeholder="Էլ․ փոստ"
                     onChange={(e)=>Setvalue(e.target.value)}
                     value={value}
                 />
                 <Button
                     cn="loginbtn"
                     title="ուղարկել"

                 />
                 <div className={css.linknazat}>
                     <NavLink  to={LOGIN_PAGES} exect >վերադառնալ</NavLink>
                 </div>
            </form>
        </div>
    );
};

export default SendMailurl;