import React, {useEffect, useState} from 'react';
import css from "./ProfiePage.module.scss"
import {useDispatch, useSelector} from "react-redux";
import Profile from "./Profile/Profile";
import Orders from "./Orders/Orders";
import Likeproduct from "./Likeproduct/Likeproduct";
import {NavLink} from "react-router-dom";
import vxod from "../../../images/icons/logins.svg"
import Bonuces from "./Bonuces/Bonuces";
import {LoadingUserdata} from "../../redux/Action/AuthACtion";
import axios from "axios";
import {HOME_PAGE} from "../../urls";
const ProfilPage = ({history}) => {


    const user = useSelector(({AuthReducer})=>AuthReducer.user)
    const userAdress = useSelector(({AuthReducer})=>AuthReducer.adresess)
    const saveOrders = useSelector(({AuthReducer})=>AuthReducer.userorders)
    const likeproduct = useSelector(({AuthReducer})=>AuthReducer.likeproduct)
    const [activeMenu,setactiveMenu]=useState(1)
    const [loading,setloading]=useState(false)
    const dispath=useDispatch()
    const menudata=[
        {id:1,title:"Պրոֆիլ"},
        {id:2,title:"պատվերներ"},
        {id:3,title:"հավանած"},
        {id:4,title:"բոնուսներ"},
    ]

    const ChangeProfileACtiveMenu =(title,id)=>{
        setactiveMenu(id)
    }

    useEffect(()=>{
        let userinfo=JSON.parse(sessionStorage.getItem("user"))

        if(userinfo?.token){
            dispath(LoadingUserdata(userinfo,userinfo.token))
            setloading(true)
        }
    },[])


    const LogautUser=async ()=>{
        let token = sessionStorage.getItem("token");
        const response = await axios.get(
            process.env.REACT_APP_API_URL+"/user/logout",
            {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }
        );

        if (response.data.message=="You have successfully Logged Out"){
            sessionStorage.removeItem("token");
            sessionStorage.removeItem("user")
            history.push(HOME_PAGE)
        }


    }

    return (
        <>
            {loading &&
            <div className={css.ProfilPagescontroler}>
                <div className={css.profilhdr}>
                    <p className={css.titleprofile}>Անձնական էջ</p>
                    <div className={css.menuandexetbtn}>
                        <div className={css.menuprofil}>
                            {menudata .map(({id,title})=>{

                                return <p style={{color:activeMenu===id ? "#13AD54" : "#BFB7B6"}} className={css.menuname} key={id} onClick={()=>ChangeProfileACtiveMenu(title,id)}>
                                    {title}{id==4 && <div className={css.bonuceicons}></div>}</p>
                            })
                            }
                        </div>
                        <div className={css.vixod} onClick={LogautUser}  ><img src={vxod} alt=""/><p>ելք</p></div>
                    </div>
                </div>
                {activeMenu===1 ?
                    <div className={css.userinfokonstruct} >
                        <Profile user={user} userAdress={userAdress}/>
                    </div>
                    :
                    activeMenu===2 ?
                        <div className={css.usersaveorder}>
                            {saveOrders.length ?
                                saveOrders.map((data,index)=>{
                                    return <Orders key={index} data={data}/>
                                })
                                :
                                <p className={css.ordertitle}>Դուք դեռ չունեք գնաած ապրանք</p>
                            }
                        </div>
                        :
                        activeMenu===3 ?
                            <div className={css.likeproduct}>
                                {likeproduct.shaurma.length || likeproduct.salads.length ? <Likeproduct likeproduct={likeproduct}/> : <p className={css.nolike}>Դուք դեռ ոչինչ չեք հավանել։</p>}
                            </div>
                            :
                            <div>
                                <Bonuces/>
                            </div>
                }
            </div>
            }
         </>

    );
};

export default ProfilPage;