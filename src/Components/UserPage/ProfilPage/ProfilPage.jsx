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
import {useProduct} from "../../Providers/ProductMenu";
const ProfilPage = ({history}) => {


    const user = useSelector(({AuthReducer})=>AuthReducer.user)
    const userAdress = useSelector(({AuthReducer})=>AuthReducer.adresess)
    const saveOrders = useSelector(({AuthReducer})=>AuthReducer.userorders)
    const [activeMenu,setactiveMenu]=useState(1)
    const [loading,setloading]=useState(false)

    //state likeproduct
    const [likeProductdata,setlikeProductdata]=useState([])
    const [likeproduct,setLikeProduct]=useState([])

    //state likeproduct ->buffet
    const [likeproductBuffet,setLikeProductBuffet]=useState([])
    const [likeProductdataBuffet,setlikeProductdataBuffet]=useState([])

    const {languae}=useProduct()
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
        window.scrollTo(0, 0);
        if(!sessionStorage.getItem("token")){
            history.push(HOME_PAGE)
        }
    },[history])

    useEffect(()=>{

        let userinfo=JSON.parse(sessionStorage.getItem("user"))
        if(userinfo?.token){
            dispath(LoadingUserdata(userinfo,userinfo.token))
        }
       //product like data request --->token ;res->>like product data
        let token=sessionStorage.getItem("token")
        let URL_GET_LIKE=process.env.REACT_APP_API_URL+"/user/getLike";
        axios.get(URL_GET_LIKE, {
            'headers': {  "Content-Type": "multipart/form-data",
                         Authorization: `Bearer ${token}`
            } ,
            method:"GET"
        }).then((data)=> {
                setlikeProductdata(data.data)

             })
            .catch(err=>{
                console.log(err)
            })



         let URL_LIKE=process.env.REACT_APP_API_URL+"/user/like";
         axios.get(URL_LIKE, {
            'headers': {  "Content-Type": "multipart/form-data",
                Authorization: `Bearer ${token}`
            } ,
            method:"GET"
        }).then((data)=> {
                setLikeProduct(data.data)
           }).catch(err=>{
                console.log(err)
            })


        //Grand buffet like request -->token  ; res-->>like grand-buffet data

        let URL_GET_LIKE_BUFFET=process.env.REACT_APP_API_URL+"/user/getLikeBuffet";
        axios.get(URL_GET_LIKE_BUFFET, {
            'headers': {  "Content-Type": "multipart/form-data",
                Authorization: `Bearer ${token}`
            } ,
            method:"GET"
        }).then((data)=> {
            setlikeProductdataBuffet(data.data)
        }).catch(err=>{
                console.log(err)
            })



        let URL_LIKE_BUFFET=process.env.REACT_APP_API_URL+"/user/likeBuffet";

        axios.get(URL_LIKE_BUFFET, {
            'headers': {  "Content-Type": "multipart/form-data",
                Authorization: `Bearer ${token}`
            } ,
            method:"GET"
        }).then((data)=> {

            setLikeProductBuffet(data.data)
        }).catch(err=>{
            console.log(err)
        })

        setloading(true)
    },[])

    //logoutUser
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
            sessionStorage.removeItem("user");
            sessionStorage.removeItem("useradress");
            history.push(HOME_PAGE)
        }


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

    return (
        <>
            {loading &&
            <div className={css.ProfilPagescontroler}>
                <div className={css.profilhdr}>
                    <p className={css.titleprofile} style={fontproprty}>Անձնական էջ</p>
                    <div className={css.menuandexetbtn}>
                        <div className={css.menuprofil}>
                            {menudata .map(({id,title})=>{

                                return <p style={{color:activeMenu===id ? "#13AD54" : "#BFB7B6",...fontproprty}} className={css.menuname} key={id} onClick={()=>ChangeProfileACtiveMenu(title,id)}>
                                    {title}{id==4 && <div className={css.bonuceicons}></div>}</p>
                            })
                            }
                        </div>
                        <div
                            className={css.vixod}
                            onClick={LogautUser}
                          >
                            <img
                                src={vxod}
                                alt=""
                            />
                            <p>
                                ելք
                            </p>
                        </div>
                    </div>
                </div>
                {activeMenu===1 ?
                    <div className={css.userinfokonstruct} >
                        <Profile
                            user={user}
                            userAdress={userAdress}
                        />
                    </div>
                    :
                    activeMenu===2 ?
                        <div className={css.usersaveorder}>
                            {saveOrders.length ?
                                saveOrders.map((data,index)=>{
                                    return <Orders key={index} data={data}/>
                                })
                                :
                                <p className={css.ordertitle} style={fontproprty2}>Դուք դեռ չունեք գնաած ապրանք</p>
                            }
                        </div>
                        :
                        activeMenu===3 ?
                            <div className={css.likeproduct}>
                                {likeProductdata.length ?
                                    <Likeproduct
                                        likeProductdata={likeProductdata}
                                        likeproduct={likeproduct}
                                        likeProductdataBuffet={likeProductdataBuffet}
                                        likeproductBuffet={likeproductBuffet}
                                    />
                                    :
                                    <p className={css.nolike}>Դուք դեռ ոչինչ չեք հավանել։</p>
                                }
                            </div>
                            :
                            <div>
                                <Bonuces
                                    user={user}
                                />
                            </div>
                }
            </div>
            }
         </>

    );
};

export default ProfilPage;