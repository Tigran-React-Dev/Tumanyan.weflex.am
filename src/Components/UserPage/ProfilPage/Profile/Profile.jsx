import React, {useState} from 'react';
import css from "./Profile.module.scss"
import Input from "../../../Global/Input/Input";
import Check from "../../../Global/Checkbox2/Check";
import sowicon from "../../../../images/icons/password.png"
import csowicon from "../../../../images/icons/cpassword.png"
import Button from "../../../Global/Button/Button";
import btndell from "../../../../images/icons/delbtnadress.svg"
import {useDispatch} from "react-redux";
import {AddNewAdress, Changeadress, RemuveAdres} from "../../../redux/Action/AuthACtion";

const Profile = ({user,userAdress}) => {

    const [typeinput1,settypeinput1]=useState("password")
    const [typeinput2,settypeinput2]=useState("password")
    const [showEdit, setShowEdit] = useState({})
    const [showEdit1, setShowEdit1] = useState({})
    const [showEdit2, setShowEdit2] = useState({})
    const [editValue, setEditValue] = useState({})
    const [inputname,setinputname]=useState({})
    const [newAdreswin,setnewAdresswin]=useState(false)
    const [checket,setchecked]=useState(false)
    const dispath=useDispatch()
    const [users,setUserinfo]=useState({
        ...user,
        oldpassword:"",
        password:"",
        cpassword:""
    })
    const [newAdress,setNewAdress]=useState({
        adress:"",
        bulding:"",
        apartment:"",
    })
    
     const {name,lastname,phoneNumber,email,oldpassword,password,cpassword}=users
     const {adress,bulding,apartment}=newAdress


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
 const SendData = (e) => {
        e.preventDefault()

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

    return (
        <>
        <div className={css.userinfoblok1}>
            <p className={css.titleinfo}>ԱՆՁՆԱԿԱՆ ՏՎՅԱԼՆԵՐ</p>
            <form onSubmit={SendData}>
                <Input
                    cn="inputuserinfo"
                    type="text"
                    placeholder="Անուն"
                    value={name}
                    name="name"
                    onChange={handleChangeinput}
                />
                <Input
                    cn="inputuserinfo"
                    type="text"
                    placeholder="Ազգանուն"
                    value={lastname}
                    name="lastname"
                    onChange={handleChangeinput}
                />
                <Input
                    cn="inputuserinfo"
                    type="text"
                    placeholder="Անուն"
                    value={phoneNumber}
                    name="phoneNumber"
                    onChange={handleChangeinput}
                />
                <Input
                    cn="inputuserinfo"
                    type="email"
                    placeholder="email"
                    value={email}
                    name="email"
                    onChange={handleChangeinput}
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
                    value={oldpassword}
                    name="oldpassword"
                    onChange={handleChangeinput}
                />
                <div className={css.passresetdiv}>
                    <Input
                        cn="inputuserinfo"
                        type={typeinput1}
                        placeholder="Նոր գաղտնաբառ"
                        value={password}
                        name="password"
                        onChange={handleChangeinput}
                    />
                    {typeinput1==="password" ?
                        <img className={css.sowicon} src={sowicon}
                             alt=""
                            onClick={()=>settypeinput1("text")}
                        />
                        :
                        <img src={csowicon}
                             className={css.sowicon}
                             alt=""
                             onClick={()=>settypeinput1("password")}/>}
                    <Input
                        cn="inputuserinfo"
                        type={typeinput2}
                        placeholder="Կրկնել նոր գաղտնաբառը"
                        value={cpassword}
                        name="cpassword"
                        onChange={handleChangeinput}
                    />
                    {typeinput2==="password" ?
                        <img className={css.sowicon2} src={sowicon}
                             alt=""
                             onClick={()=>settypeinput2("text")}
                        />
                        :
                        <img src={csowicon}
                             className={css.sowicon2}
                             alt=""
                             onClick={()=>settypeinput2("password")}/>}

                </div>
                     <Button cn="btnprofil" title="պահպանել փոփոխությունները" onClick={SendData}/>


            </form>
        </div>
         <div className={css.userinfoblok2}>
             {
                 userAdress.length ?
                      userAdress.map(({id,bulding,adress,apartment})=>{
                          return(
                               <div className={css.useradrss} key={id}>
                                   <div className={css.adresshdr}>
                                       <p >առաքման հասցե {id}</p>
                                       <img src={btndell} alt="" onClick={()=>RemuveAdreses(id)}/>
                                   </div>
                                   <div
                                       className={css.divadress}
                                      onClick={(e)=>{
                                          setShowEdit({[id]:true})
                                          setEditValue({[id]:adress})
                                      }}
                                       onBlur={()=>{
                                           sendChangeInfoadres(editValue[id],id,inputname[id])
                                       }}
                                   >
                                       {showEdit[id] ?
                                           <Input
                                           cn="inputuseraress"
                                           type="text"
                                           placeholder="Հասցե"
                                           value={editValue[id]}
                                           name="adress"
                                           onChange={e=> {
                                               setEditValue({[id]: e.target.value})
                                               setinputname({[id]:e.target.name})
                                           }}

                                       />

                                           :
                                           <p>
                                               {adress}
                                           </p>
                                       }

                                   </div>
                                   <div className={css.domandbuild}>
                                           <div
                                           className={css.dom}
                                           onClick={(e)=>{
                                               setShowEdit1({[id]:true})
                                               setEditValue({[id]:bulding})
                                           }}
                                           onBlur={()=>{
                                               sendChangeInfoadres(editValue[id],id,inputname[id])
                                           }}
                                       >
                                           {
                                               showEdit1[id] ?
                                                 <Input
                                             cn="inputbuildandaparamet"
                                             type="text"
                                             placeholder="Շենք"
                                             value={editValue[id]}
                                             name="bulding"
                                             onChange={e=> {
                                                 setEditValue({[id]: e.target.value})
                                                 setinputname({[id]:e.target.name})
                                             }}
                                            />
                                                   :
                                               <p>
                                                   {bulding}
                                               </p>
                                           }

                                       </div>
                                       <div className={css.build}
                                            onClick={(e)=>{
                                                setShowEdit2({[id]:true})
                                                setEditValue({[id]:apartment})
                                            }}
                                            onBlur={()=>{
                                                sendChangeInfoadres(editValue[id],id,inputname[id])
                                            }}
                                       >
                                           {
                                               showEdit2[id] ?
                                                   <Input
                                                       cn="inputbuildandaparamet"
                                                       type="text"
                                                       placeholder="Բնակարան"
                                                       value={editValue[id]}
                                                       name="apartment"
                                                       onChange={e=> {
                                                           setEditValue({[id]: e.target.value})
                                                           setinputname({[id]:e.target.name})
                                                       }}
                                                   />
                                                   :
                                                   <p>
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
               <p>առաքման հասցե {userAdress.length+1}</p>
                <form >
                    <Input
                     cn="inputuserinfo"
                     type="text"
                     placeholder="Հասցե"
                     value={adress}
                     name="adress"
                     onChange={ChangeNewAdresvalue}
                    />
                    <div className={css.domandbuild}>
                    <Input
                       cn="inputbuildandaparamet"
                       type="text"
                       placeholder="Շենք"
                       value={bulding}
                       name="bulding"
                       onChange={ChangeNewAdresvalue}
                    />
                     <Input
                        cn="inputbuildandaparamet"
                        type="text"
                        placeholder="Բնակարան"
                        value={apartment}
                        name="apartment"
                        onChange={ChangeNewAdresvalue}
                        />

                    </div>
                </form>



             </div>}
               <p className={css.addnewadresbtn} onClick={SowaddnewAdressWindow}>Ավելացնել հասցե</p>

         </div>
        </>
    );
};

export default Profile;