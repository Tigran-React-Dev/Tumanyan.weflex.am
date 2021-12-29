import React, {useEffect, useState} from 'react';
import css from "./Profile.module.scss"
import Input from "../../../Global/Input/Input";
import Check from "../../../Global/Checkbox2/Check";
import sowicon from "../../../../images/icons/password.png"
import csowicon from "../../../../images/icons/cpassword.png"
import Button from "../../../Global/Button/Button";
import btndell from "../../../../images/icons/delbtnadress.svg"
import {useDispatch} from "react-redux";
import {
    AddNewAdress,
    Changeadress,
    LoadingUserdata,
    LoadingUserdataError,
    RemuveAdres
} from "../../../redux/Action/AuthACtion";
import axios from "axios";
import {HOME_PAGE} from "../../../urls";
import {useProduct} from "../../../Providers/ProductMenu";

const Profile = ({user,userAdress}) => {

    const [typeinput1,settypeinput1]=useState("password")
    const [typeinput2,settypeinput2]=useState("password")


    const [showEdit, setShowEdit] = useState({})
    const [showEdit1, setShowEdit1] = useState({})
    const [showEdit2, setShowEdit2] = useState({})
    const [editValue, setEditValue] = useState({})
    const [inputname,setinputname]=useState({})
    const [newAdreswin,setnewAdresswin]=useState(false)
    const {languae}=useProduct()
    const dispath=useDispatch()
    const [users,setUserinfo]=useState({
        ...user,
        oldPassword:"",
        password:"",
        password_confirmation:""
    })




    const [newAdress,setNewAdress]=useState({
        adress:"",
        bulding:"",
        apartment:"",
    })
    
     const {name,lastname,phone,email,success_check,oldPassword,password,password_confirmation}=users
     const [checket,setchecked]=useState(false)
     const {adress,bulding,apartment}=newAdress
     const [errors,setErrors]=useState({})
    useEffect(()=>{
        if(success_check=="true"){
            setchecked(true)
        }else{
            setchecked(false)
        }

    },[])


    const handleChangeinput = e =>{

        setUserinfo({
            ...users,
            [e.target.name]:e.target.value
        })
    }


    const sendChangeInfoadres =(newvalue,id,key)=>{
           const newobj={
               newvalue,
               id,
               key
           }
           dispath(Changeadress(newobj))
        setShowEdit({})
        setShowEdit1({})
        setShowEdit2({})
    }
    const saveNewAdress =()=>{
      
        if(adress!=="" && bulding!="" && apartment!=""){
            dispath(AddNewAdress(newAdress))
            setNewAdress({
                adress:"",
                bulding:"",
                apartment:"",
            })
            setnewAdresswin(!newAdreswin)
        }

       
    }
    const ChangeNewAdresvalue=(e)=>{
        setNewAdress({
            ...newAdress,
            [e.target.name]:e.target.value
        })
    }
 const SendData = async (e) => {
        e.preventDefault()

     const loginFormData = new FormData();
     loginFormData.append("name", name)

     loginFormData.append("success_check",checket)
     loginFormData.append("oldPassword",oldPassword)
     loginFormData.append("password_confirmation",password_confirmation)
      if(lastname!=""){
          loginFormData.append("lastname", lastname)
      }
      if(phone !=""){
          loginFormData.append("phone", phone)
      }
      if(password!=""){
          loginFormData.append("password",password)
      }

     let token=sessionStorage.getItem("token")
     console.log(loginFormData)
     try {
         // make axios post request
         const response = await axios({
             method: "post",
             url: process.env.REACT_APP_API_URL+"/user/update",
             data: loginFormData,
             headers: {
                 "Content-Type": "multipart/form-data",
                  "Authorization": `Bearer ${token}`
                      },
         });

     debugger
         if(response.data.token){
             sessionStorage.setItem("token",token)
             sessionStorage.setItem("user",JSON.stringify(response.data))
             let userinfo=JSON.parse(sessionStorage.getItem("user"))
             if(userinfo?.token){
                 dispath(LoadingUserdata(userinfo,userinfo.token))
             }else{
                 dispath(LoadingUserdataError())
             }
             setErrors({})

         }else{
             setErrors(response.data);
         }
     } catch(error) {
         console.log(error)
     }

 }


 const SowaddnewAdressWindow =()=>{
    setnewAdresswin(!newAdreswin)
 }

 const RemuveAdreses =(id)=>{
        dispath(RemuveAdres(id))
 }
    const hantletargetclick =()=>{
          setchecked(!checket)
    }

    const fontproprty={fontFamily:languae=="ՀԱՅ" ?
            "Mardoto-Medium" : languae=="ENG" ?
                "Manrope-Bold" : languae=="РУС" ?
                    "Manrope-Medium" : null
    }
    const fontproprty2={fontFamily:languae=="ՀԱՅ" ?
            "Montserrat-Regular" : languae=="ENG" ?
                "manrope-reg" : languae=="РУС" ?
                    "manrope-reg" : null
    }
    const fontproprty3={fontFamily:languae=="ՀԱՅ" ?
            "Montserrat-Medium" : languae=="ENG" ?
                "Manrope-Medium" : languae=="РУС" ?
                    "Manrope-Medium" : null
    }

    return (
        <>

    <>
        <div className={css.userinfoblok1}>
            <p className={css.titleinfo} style={fontproprty}>ԱՆՁՆԱԿԱՆ ՏՎՅԱԼՆԵՐ</p>
            <form onSubmit={SendData}>
                <Input
                    cn="inputuserinfo"
                    type="text"
                    placeholder="Անուն *"
                    value={name}
                    name="name"
                    style={{border:errors.name && "1px solid red",...fontproprty2}}

                    onChange={handleChangeinput}
                />
                <Input
                    cn="inputuserinfo"
                    type="text"
                    placeholder="Ազգանուն"
                    value={lastname}
                    name="lastname"
                    style={{border:errors.lastname && "1px solid red",...fontproprty2}}

                    onChange={handleChangeinput}
                />
                <Input
                    cn="inputuserinfo"
                    type="text"
                    placeholder="Հեռախոսահամար"
                    value={phone}
                    name="phone"
                    style={{border:errors.phone && "1px solid red",...fontproprty2}}
                    onChange={handleChangeinput}
                />
                <Input
                    cn="inputuserinfo"
                    type="email"
                    placeholder="email *"
                    value={email}
                    name="email"
                    style={{...fontproprty2}}
                    disabled
                />
                <div className={css.newcheckbpx}>
                    <Check
                        cn="newsinfo"
                        lableinfo="Ստանալ ակցիաների, նորությունների մասին ծանուցումներ"
                        id="newcheket"
                        onClick={hantletargetclick}
                        isChecked={checket}
                    />
                </div>
                <p className={css.resetpass}>ՓՈԽԵԼ ԳԱՂՏՆԱԲԱՌԸ</p>
                <Input
                    cn="inputuserinfo"
                    type="password"
                    placeholder="Ներկա գաղտնաբառը"
                    value={oldPassword}
                    style={{border:errors.name && "1px solid red",...fontproprty2}}
                    name="oldPassword"
                    onChange={handleChangeinput}
                />
                <div className={css.passresetdiv}>
                    <Input
                        cn="inputuserinfo"
                        type={typeinput1}
                        style={{border:errors.name && "1px solid red",...fontproprty2}}
                        placeholder="Նոր գաղտնաբառ"
                        value={password}
                        name="password"
                        onChange={handleChangeinput}
                    />
                    {typeinput1 === "password" ?
                        <img className={css.sowicon} src={sowicon}
                             alt=""
                             onClick={() => settypeinput1("text")}
                        />
                        :
                        <img src={csowicon}
                             className={css.sowicon}
                             alt=""
                             onClick={() => settypeinput1("password")}/>}
                    <Input
                        cn="inputuserinfo"
                        type={typeinput2}
                        style={{border:errors.name && "1px solid red",...fontproprty2}}
                        placeholder="Կրկնել նոր գաղտնաբառը"
                        value={password_confirmation}
                        name="password_confirmation"
                        onChange={handleChangeinput}
                    />
                    {typeinput2 === "password" ?
                        <img className={css.sowicon2} src={sowicon}
                             alt=""
                             onClick={() => settypeinput2("text")}
                        />
                        :
                        <img src={csowicon}
                             className={css.sowicon2}
                             alt=""
                             onClick={() => settypeinput2("password")}/>}

                </div>
                <div className={css.resetuserinfobtn}>
                    <Button
                        cn="btnprofil"
                        title="պահպանել փոփոխությունները"
                        onClick={SendData}
                        style={fontproprty}
                    />
                </div>


            </form>
        </div>
        <div className={css.userinfoblok2}>
            {
                userAdress.length ?
                    userAdress.map(({id, bulding, adress, apartment}) => {
                        return (
                            <div className={css.useradrss} key={id}>
                                <div className={css.adresshdr}>
                                    <p style={fontproprty}>առաքման հասցե {id}</p>
                                    <img src={btndell} alt="" onClick={() => RemuveAdreses(id)}/>
                                </div>
                                <div
                                    className={css.divadress}
                                    onClick={(e) => {
                                        setShowEdit({[id]: true})
                                        setEditValue({[id]: adress})
                                    }}
                                    onBlur={() => {
                                        sendChangeInfoadres(editValue[id], id, inputname[id])
                                    }}
                                >
                                    {showEdit[id] ?
                                        <Input
                                            cn="inputuseraress"
                                            type="text"
                                            placeholder="Հասցե"
                                            style={fontproprty2}
                                            value={editValue[id]}
                                            name="adress"
                                            onChange={e => {
                                                setEditValue({[id]: e.target.value})
                                                setinputname({[id]: e.target.name})
                                            }}

                                        />

                                        :
                                        <p  style={fontproprty2}>
                                            {adress}
                                        </p>
                                    }

                                </div>
                                <div className={css.domandbuild}>
                                    <div
                                        className={css.dom}
                                        onClick={(e) => {
                                            setShowEdit1({[id]: true})
                                            setEditValue({[id]: bulding})
                                        }}
                                        onBlur={() => {
                                            sendChangeInfoadres(editValue[id], id, inputname[id])
                                        }}
                                    >
                                        {
                                            showEdit1[id] ?
                                                <Input
                                                    cn="inputbuildandaparamet"
                                                    type="text"
                                                    placeholder="Շենք"
                                                    style={fontproprty2}
                                                    value={editValue[id]}
                                                    name="bulding"
                                                    onChange={e => {
                                                        setEditValue({[id]: e.target.value})
                                                        setinputname({[id]: e.target.name})
                                                    }}
                                                />
                                                :
                                                <p  style={fontproprty2}>
                                                    {bulding}
                                                </p>
                                        }

                                    </div>
                                    <div className={css.build}
                                         onClick={(e) => {
                                             setShowEdit2({[id]: true})
                                             setEditValue({[id]: apartment})
                                         }}
                                         onBlur={() => {
                                             sendChangeInfoadres(editValue[id], id, inputname[id])
                                         }}
                                    >
                                        {
                                            showEdit2[id] ?
                                                <Input
                                                    cn="inputbuildandaparamet"
                                                    type="text"
                                                    placeholder="Բնակարան"
                                                    style={fontproprty2}
                                                    value={editValue[id]}
                                                    name="apartment"
                                                    onChange={e => {
                                                        setEditValue({[id]: e.target.value})
                                                        setinputname({[id]: e.target.name})
                                                    }}
                                                />
                                                :
                                                <p  style={fontproprty2}>
                                                    {apartment}
                                                </p>
                                        }
                                    </div>

                                </div>
                            </div>

                        )
                    })

                    :
                    null
            }
            {newAdreswin &&
            <div className={css.windownewAdres} onBlur={saveNewAdress}>
                <p style={fontproprty}>առաքման հասցե {userAdress.length + 1}</p>
                <form>
                    <Input
                        cn="inputuserinfo"
                        type="text"
                        placeholder="Հասցե"
                        value={adress}
                        style={fontproprty2}
                        name="adress"
                        onChange={ChangeNewAdresvalue}
                    />
                    <div className={css.domandbuild}>
                        <Input
                            cn="inputbuildandaparamet"
                            type="text"
                            placeholder="Շենք"
                            style={fontproprty2}
                            value={bulding}
                            name="bulding"
                            onChange={ChangeNewAdresvalue}
                        />
                        <Input
                            cn="inputbuildandaparamet"
                            type="text"
                            placeholder="Բնակարան"
                            style={fontproprty2}
                            value={apartment}
                            name="apartment"
                            onChange={ChangeNewAdresvalue}
                        />

                    </div>
                </form>


            </div>}
            <p className={css.addnewadresbtn} onClick={SowaddnewAdressWindow} style={fontproprty3}>Ավելացնել հասցե</p>
            <div className={css.resetuserinfobtnmobile}>
                <Button
                    cn="btnprofil"
                    style={fontproprty2}
                    title="պահպանել փոփոխությունները"
                    onClick={SendData}
                />
            </div>
        </div>
    </>
     </>
    );
};

export default Profile;