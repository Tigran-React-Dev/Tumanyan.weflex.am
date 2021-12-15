import React, {useEffect, useState} from 'react';
import css from "./FoodPages.module.scss"
import trucklogo from "../../../images/icons/logotruck.png";
import Input from "../../Global/Input/Input";
import open from "../../../images/icons/seltb.png";
import close from "../../../images/icons/selta.png";
import Calendar from "./Calendar";
import checkt from "../../../images/icons/chechkoriginal.png";
import {NavLink, useHistory} from "react-router-dom";
import Button from "../../Global/Button/Button";
import "./aniestyle.scss"
import {HOME_PAGE} from "../../urls";
import axios from "axios";

const Foodpage3 = () => {

    const history=useHistory()

    const [calendarvalue,setCalendarvalue]=useState("Ամսաթիվ*")
    const [openCalendarModal,setOpenCalendarModal]=useState(false)
    const [checkeds,setCheckeds]=useState(false)
    const [sucsessDataSend,setSucsesDataSend]=useState(false)
    const [errors,setErrors]=useState({})

    // change input value and data send axiox request

    const [FoodtrackData,setFoodtruckdata]=useState({
        name:"",
        phone:"",
        email:"",
        company_name:"",
        event_type:"",
        address:"",
        guests_count:"",
        date:"",
        message:"",
        success_check:"",
    })


const {name,phone,email,company_name,event_type,address,guests_count,date,message,success_check}=FoodtrackData

const handleChangeInput=(e)=>{
    setFoodtruckdata({
        ...FoodtrackData,
        [e.target.name]:e.target.value
    })
}
    const CalendarModalControler=()=>{
        setOpenCalendarModal(!openCalendarModal)
    }
    const handleDateChange =(data)=>{
        setCalendarvalue(data)
        setFoodtruckdata({
            ...FoodtrackData,
            date: data.toLocaleDateString()
        })
    }
    const hantletargetclick =()=>{
        setCheckeds(!checkeds)
        setFoodtruckdata({
            ...FoodtrackData,
            success_check: !checkeds,
        })
    }


    const handleSubmit = async () => {

        // store the states in the form data
        const loginFormData = new FormData();
        loginFormData.append("name", name)
        loginFormData.append("phone", phone)
        loginFormData.append("email", email)
        loginFormData.append("company_name", company_name)
        loginFormData.append("event_type", event_type)
        loginFormData.append("address", address)
        loginFormData.append("guests_count",guests_count)
        loginFormData.append("date", date)
        loginFormData.append("message",message)
        loginFormData.append("success_check",success_check)
        try {
            // make axios post request
            const response = await axios({
                method: "post",
                url: process.env.REACT_APP_API_URL+"/addFood_Truck_Apply",
                data: loginFormData,
                headers: { "Content-Type": "multipart/form-data" },
            });

            if(response.data == "success"){
                setSucsesDataSend(true)
                setErrors({})
                window.scrollTo(0, 400);
            }else{
                setErrors(response.data);
            }
        } catch(error) {
            console.log(error)
        }
    }


    const SubmitData =(e)=>{
        e.preventDefault()
        console.log(FoodtrackData)
        handleSubmit()
    }


    useEffect(()=>{
       if(sucsessDataSend){
           window.scrollTo(0, 400);
       }

    },[sucsessDataSend])


    return (
        <div className={css.pages3container}>
            {!sucsessDataSend ?
             <>
            <div className={css.page3hdr}>
                <p>Ունե՞ք առաջիկա միջոցառում։ Ցանկանում եք պատվիրել foof truck մինջոցառումներ համար, ապա լրացրեք
                    տվյալները կամ զանգահարեք 81 81։</p>
                <img src={trucklogo} alt=""/>
            </div>
                <div className={css.sendinfoblok}>
                <form action="" onSubmit={SubmitData}>
                <h4>ԱՆՁՆԱԿԱՆ ՏՎՅԱԼՆԵՐ</h4>
                <Input
                cn="inputfoodtruck"
                placeholder="Անուն*"
                name="name"
                type="text"
                value={name}
                onChange={handleChangeInput}
                style={{border:errors.name && "1px solid red"}}
                />
                <div className={css.phoneandemail}>
                <Input
                cn="inputfoodtruck2"
                placeholder="Հեռախոսահամար*"
                name="phone"
                type="number"
                value={phone}
                onChange={handleChangeInput}
                style={{border:errors.phone && "1px solid red"}}
                />
                <Input
                cn="inputfoodtruck2"
                placeholder="էլեկտրոնային հասցե*"
                name="email"
                type="text"
                value={email}
                onChange={handleChangeInput}
                style={{border:errors.email && "1px solid red"}}
                />
                </div>
                <Input
                cn="inputfoodtruck3"
                placeholder="Կազմակերպություն"
                name="company_name"
                type="text"
                value={company_name}
                onChange={handleChangeInput}
                style={{border:errors.company_name && "1px solid red"}}
                />
                <div className={css.gicform}/>
                <h2>Միջոցառման տվյալներ</h2>
                <Input
                cn="inputfoodtruck4"
                placeholder="Միջոցառման բնույթը (օրինակ՝ ծննդյան տարեդարձ կամ գործնական ընթրիք)*"
                name="event_type"
                type="text"
                value={event_type}
                onChange={handleChangeInput}
                style={{border:errors.event_type && "1px solid red"}}
                />
                <Input
                cn="inputfoodtruck3"
                placeholder="Հասցե*"
                name="address"
                type="text"
                value={address}
                onChange={handleChangeInput}
                style={{border:errors.address && "1px solid red"}}
                />
                <div className={css.dataamdfriend}>
                <Input
                cn="inputfoodtruck2"
                placeholder="Հյուրերի քանակ"
                name="guests_count"
                type="number"
                value={guests_count}
                onChange={handleChangeInput}
                style={{border:errors.guests_count && "1px solid red"}}
                />
                <div className={css.datainput} onClick={CalendarModalControler} style={{border:errors.date && "1px solid red"}}>
                <p>{calendarvalue==="Ամսաթիվ*" ? calendarvalue : calendarvalue.toLocaleDateString()}</p>
            {openCalendarModal ? <img src={close} alt=""/> : <img src={open} alt=""/>}
            {openCalendarModal &&
                <div className={css.calenarmodals} onClick={(e)=>e.stopPropagation()}>
                <div className={css.modalwraper} onClick={()=>setOpenCalendarModal(!openCalendarModal)}/>
                <div className={css.calenadar}>
                <Calendar Change={handleDateChange}/>
                </div>
                </div>}
                </div>

                </div>
                <textarea
                  className={css.textmaseges}
                  placeholder="Ուղեկցող նամակ"
                  name="message"
                  type="text"
                  value={message}
                  style={{border:errors.message && "1px solid red"}}
                  onChange={handleChangeInput}
                />


                <div className={css.checkandlable1}>
                <input
                className={css.checkbox1}
                type="checkbox"
                onClick={hantletargetclick}
                isChecked={checkeds}
                id="okinfo"
                />
                <label htmlFor="okinfo">
                <div className={css.ckekckdiv4} style={{
                backgroundColor:checkeds && "#13AD54",border: checkeds && "1px solid #13AD54",
                backgroundImage:checkeds && `url(${checkt})`
            }}>

               </div>
                <h6>Համաձայն եմ <NavLink to={"/"} exact> անձնական տվյալների</NavLink> օգտգործման հետ</h6>
                </label>

                </div>
                    <h6 className={css.error}>{errors.success_check && errors.success_check[0]}</h6>
                <Button
                title="պատվիրել"
                cn="btnFood"

                />

                </form>
                </div>
             </>
                :
                <div className={css.Footdatasentafter}>
                    <div className="success-checkmark">
                        <div className="success-checkmark">
                            <div className="check-icon">
                                <span className="icon-line line-tip"></span>
                                <span className="icon-line line-long"></span>
                                <div className="icon-circle"></div>
                                <div className="icon-fix"></div>
                            </div>
                        </div>

                    </div>
                    <p className={css.statustitle}>
                        ձեր պատվերը կատարվել է։ <br/> Համապատասխան բաժնի մասնագետը շուտով ձեզ հետ կկապնվի։
                    </p>
                    <img className={css.trucklogos} src={trucklogo} alt=""/>
                    <Button
                        cn="btnsucsesfood"
                        title="անցնել մենյու"
                        onClick={()=>history.push(`${HOME_PAGE}/շաուրմա`)}
                    />
                </div>
            }
        </div>
    );
};

export default Foodpage3;