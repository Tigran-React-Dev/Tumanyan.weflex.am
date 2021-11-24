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

const Foodpage3 = () => {

    const history=useHistory()

    const [calendarvalue,setCalendarvalue]=useState("Ամսաթիվ*")
    const [openCalendarModal,setOpenCalendarModal]=useState(false)
    const [checkeds,setCheckeds]=useState(false)
    const [sucsessDataSend,setSucsesDataSend]=useState(false)


    const CalendarModalControler=()=>{
        setOpenCalendarModal(!openCalendarModal)
    }
    const handleDateChange =(data)=>{
        setCalendarvalue(data)
    }
    const hantletargetclick =()=>{
        setCheckeds(!checkeds)
    }
    const SubmitData =(e)=>{
        e.preventDefault()
        setSucsesDataSend(true)
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
                />
                <div className={css.phoneandemail}>
                <Input
                cn="inputfoodtruck2"
                placeholder="Հեռախոսահամար*"
                name="name"
                />
                <Input
                cn="inputfoodtruck2"
                placeholder="էլեկտրոնային հասցե*"
                name="name"
                />
                </div>
                <Input
                cn="inputfoodtruck3"
                placeholder="Կազմակերպություն"
                name="name"
                />
                <div className={css.gicform}/>
                <h2>Միջոցառման տվյալներ</h2>
                <Input
                cn="inputfoodtruck4"
                placeholder="Միջոցառման բնույթը (օրինակ՝ ծննդյան տարեդարձ կամ գործնական ընթրիք)*"
                name="name"
                />
                <Input
                cn="inputfoodtruck3"
                placeholder="Հասցե*"
                name="name"
                />
                <div className={css.dataamdfriend}>
                <Input
                cn="inputfoodtruck2"
                placeholder="Հյուրերի քանակ"
                name="name"
                />
                <div className={css.datainput} onClick={CalendarModalControler}>
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
                placeholder="Ուղեկցող նամակ">

                </textarea>
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
                backgroundColor:checkeds && "#13AD54",border: checkeds && "1px solid #13AD54"
            }}>
            {checkeds ? <img  src={checkt} alt="" /> : null}

                </div>
                <h6>Համաձայն եմ <NavLink to={"/"} exact> անձնական տվյալների</NavLink> օգտգործման հետ</h6>
                </label>
                </div>
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