import React, {useEffect, useState} from 'react';
import css from "./Profile.module.scss"
import Input from "../../../Global/Input/Input";
import Check from "../../../Global/Checkbox2/Check";
import sowicon from "../../../../images/icons/password.png"
import csowicon from "../../../../images/icons/cpassword.png"
import Button from "../../../Global/Button/Button";
import btndell from "../../../../images/icons/delbtnadress.svg"
import {useDispatch, useSelector} from "react-redux";
import {
    AddNewAdress,
    Changeadress,
    LoadingUserdata,
    LoadingUserdataError,
    RemuveAdres, UpdataUserAdress
} from "../../../redux/Action/AuthACtion";
import axios from "axios";

import {useProduct} from "../../../Providers/ProductMenu";

const Profile = ({user,userAdress}) => {

    const [typeinput1,settypeinput1]=useState("password")
    const [typeinput2,settypeinput2]=useState("password")
    const token = useSelector(({AuthReducer})=>AuthReducer.token)
    const [succsess,setSuccsess]=useState(false)
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
        street:"",
        building:"",
        apartment:"",
    })

    
     const {name,lastname,phone,email,success_check,oldPassword,password,password_confirmation,type}=users
     const [checket,setchecked]=useState(false)
     const {street,building,apartment}=newAdress
     const [errors,setErrors]=useState({})
     const [errorsadressadd,setErrorsadressadd]=useState({})
     const [errorsadressupdata,setErrorsadressupdata]=useState({})

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
       if(lastname != ""){
          loginFormData.append("lastname", lastname)
      }
      if(phone !="") {
          loginFormData.append("phone", phone)
      }
      if(password!=""){
          loginFormData.append("password",password)
      }
     if(password_confirmation!=""){
          loginFormData.append("password_confirmation",password_confirmation)
      }
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

         if(response.data.token){
             setErrors({})
             sessionStorage.setItem("token",response.data.token)
             sessionStorage.setItem("user",JSON.stringify(response.data))
             let userinfo=JSON.parse(sessionStorage.getItem("user"))
             if(userinfo){
                 dispath(LoadingUserdata(userinfo,userinfo.token))
             }
            setSuccsess(true)

             if(street!="" && building!="" && apartment!="" ){
                 AddAdress()

             }
                 UpdateAddress()
         }else{
             setErrors(response.data);
             setSuccsess(false)
         }
     } catch(error) {
         console.log(error)
     }
     //add new adreesa



 }



 const UpdateAddress =async ()=>{
     
     try {
         // make axios post request
         const res = await axios({
             method: "post",
             url: process.env.REACT_APP_API_URL+"/user/updateAddress",
             data: JSON.stringify(userAdress),
             headers: {
                 "Content-Type": "multipart/form-data",
                 "Authorization": `Bearer ${token}`
             },
         });
         

         if(res.data?.[0]){
             setErrorsadressupdata({})
             sessionStorage.setItem("useradress",JSON.stringify(res.data))
             dispath(UpdataUserAdress(res.data))
             setSuccsess(true)
         }else{
             setErrorsadressupdata(res.data);
             setSuccsess(false)
         }
     } catch(error) {
         console.log(error)
     }
 }
 const AddAdress =async ()=>{
     const adresformdata = new FormData();
     adresformdata.append("street", street)
     adresformdata.append("building",building)
     adresformdata.append("apartment",apartment)
     let newtoken=sessionStorage.getItem("token")

     try {
         // make axios post request
         const responseadress = await axios({
             method: "post",
             url: process.env.REACT_APP_API_URL+"/user/addAddress",
             data: adresformdata,
             headers: {
                 "Content-Type": "multipart/form-data",
                 "Authorization": `Bearer ${newtoken}`
             },
         });


         if(responseadress.data?.[0] ){
             setErrorsadressadd({})
             sessionStorage.setItem("useradress",JSON.stringify(responseadress.data))
             dispath(AddNewAdress(newAdress))
             setnewAdresswin(!newAdreswin)
             setSuccsess(true)
             setNewAdress({
                 street:"",
                 building:"",
                 apartment:"",
             })

         }else{
             setErrorsadressadd(responseadress.data);
             setSuccsess(false)
         }
     } catch(error) {
         console.log(error)
     }
 }

    const saveNewAdress =()=>{

    }


 const SowaddnewAdressWindow =()=>{
    setnewAdresswin(!newAdreswin)
 }

 const RemuveAdreses =async (id)=>{
    const resremuveitem = await axios({
         method: "post",
         url: process.env.REACT_APP_API_URL+`/user/deleteAddress/${id}`,
         headers: {
             "Authorization": `Bearer ${token}`
         },
     });

     if(resremuveitem.data){
         sessionStorage.setItem("useradress",JSON.stringify(resremuveitem.data))
         dispath(RemuveAdres(id))
     }


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

                {<>
                    <p className={css.resetpass}>ՓՈԽԵԼ ԳԱՂՏՆԱԲԱՌԸ</p>
                    <Input
                        cn="inputuserinfo"
                        type="password"
                        placeholder="Ներկա գաղտնաբառը"
                        value={oldPassword}
                        disabled={type==true && "disabled"}
                        style={{border: errors.message && "1px solid red", ...fontproprty2}}
                        name="oldPassword"
                        onChange={handleChangeinput}
                    />
                    <div className={css.passresetdiv}>
                        <Input
                            cn="inputuserinfo"
                            type={typeinput1}
                            style={{border: errors.message && "1px solid red", ...fontproprty2}}
                            placeholder="Նոր գաղտնաբառ"
                            value={password}
                            disabled={type==true  && "disabled"}
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
                            disabled={type==true && "disabled"}
                            style={{border: errors.message && "1px solid red", ...fontproprty2}}
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
                </>}
                <div className={css.resetuserinfobtn}>
                    <Button
                        cn="btnprofil"
                        title="պահպանել փոփոխությունները"
                        onClick={SendData}
                        style={fontproprty}
                    />
                    <h2 className={css.cuccsess}>{succsess &&" ձեր փոփոխությունները կատարվել են"}</h2>
                </div>


            </form>
        </div>
        <div className={css.userinfoblok2}>
            {
                userAdress?.length ?
                    userAdress.map(({id,building , street, apartment},index) => {
                        return (
                            <div className={css.useradrss} key={id}>
                                <div className={css.adresshdr}>
                                    <p style={fontproprty}>առաքման հասցե {index+1}</p>
                                    <img src={btndell} alt="" onClick={() => RemuveAdreses(id)}/>
                                </div>
                                <div
                                    className={css.divadress}
                                    style={{border:errorsadressupdata.street && "1px solid red",}}
                                    onClick={(e) => {
                                        setShowEdit({[id]: true})
                                        setEditValue({[id]: street})
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
                                            name="street"
                                            onChange={e => {
                                                setEditValue({[id]: e.target.value})
                                                setinputname({[id]: e.target.name})
                                            }}

                                        />

                                        :
                                        <p  style={fontproprty2}>
                                            {street}
                                        </p>
                                    }

                                </div>
                                <div className={css.domandbuild}>
                                    <div
                                        className={css.dom}
                                        style={{border:errorsadressupdata.building && "1px solid red",}}
                                        onClick={(e) => {
                                            setShowEdit1({[id]: true})
                                            setEditValue({[id]: building})
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
                                                    name="building"
                                                    onChange={e => {
                                                        setEditValue({[id]: e.target.value})
                                                        setinputname({[id]: e.target.name})
                                                    }}
                                                />
                                                :
                                                <p  style={fontproprty2}>
                                                    {building}
                                                </p>
                                        }

                                    </div>
                                    <div className={css.build}
                                         style={{border:errorsadressupdata.apartment && "1px solid red",}}
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
                <p style={fontproprty}>առաքման հասցե {userAdress?.length ? userAdress.length + 1 : 1}</p>
                <form>
                    <Input
                        cn="inputuserinfo"
                        type="text"
                        placeholder="Հասցե"
                        value={street}
                        style={{border:errorsadressadd.street && "1px solid red",...fontproprty2}}
                        name="street"
                        onChange={ChangeNewAdresvalue}
                    />
                    <div className={css.domandbuild}>
                        <Input
                            cn="inputbuildandaparamet"
                            type="text"
                            placeholder="Շենք"
                            style={{border:errorsadressadd.building && "1px solid red",...fontproprty2}}
                            value={building}
                            name="building"
                            onChange={ChangeNewAdresvalue}
                        />
                        <Input
                            cn="inputbuildandaparamet"
                            type="text"
                            placeholder="Բնակարան"
                            style={{border:errorsadressadd.apartment && "1px solid red",...fontproprty2}}
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