import React, { useEffect, useRef, useState } from "react";
import Input from "../Global/Input/Input";
import css from "./Header.module.scss"
import Menu from "./Menu/Menu";
import {NavLink,useHistory,} from "react-router-dom";
import {BASKET_PAGE, HOME_PAGE, LOGIN_PAGES, PROFIL_PAGE} from "../urls";
import logo from "../../images/logo.png";
import adress from "../../images/icons/select.png";
import self from "../../images/icons/self.png";
import selt from "../../images/icons/selt.png";
import  serch from "../../images/icons/search.png";
import gumar from "../../images/icons/gumar.png";
import phone from "../../images/icons/phone.png"
import verify from "../../images/icons/chosen.png";
import log from "../../images/icons/logins.svg";
import iconmenu from "../../images/icons/iconmobilemenu.svg";
import iconclose from "../../images/icons/closebtniconmobilemenu.svg";
import topbootom from "../../images/icons/up.png";
import { useProduct } from "../Providers/ProductMenu";
import { useTranslation } from 'react-i18next';
import {useSelector} from "react-redux";
import i18next from 'i18next';
import {isAuthRoutes, isOuthFooter} from "../routes";
import axios from "axios";



const Header = () => {
    const  totalprice = useSelector(({ CardReducer  }) => CardReducer.totalPrice)
    const { adressCountry,setAdressCountry,activeCityname,languae, activSub, setactiveCityname, setActivSub,menuCategorup, changeLang,language, defaultCity, setDefaultSity } = useProduct()
    const { t } = useTranslation();
    const history = useHistory()
    const [selecticon, setSelectIcon] = useState(true)
    const [languagemodal, setLanguageModal] = useState(false)
    const [sowmenu, setSoumenu] = useState(false)
    const [sowAdress, setSowAdress] = useState(false)
    const [adressactive, setActiveAdress] = useState({})
    const [adresses, setAdress] = useState("")
    const [inputborder, setInputborder] = useState(false)
    const [languagess, setLanguage] = useState(1)
    const [mobileLanguageStyle,setMobileLanguageStyle]=useState(1)
    const [menuiconClik,setMenuIconClik]=useState(false)
    const [loading,setLoading]=useState(false)
    const [hegth,setHegth]=useState(false)



    useEffect(()=>{
        const responsAdress = axios.get(process.env.REACT_APP_API_URL + "/address")
           responsAdress.then((res)=>{
               setAdressCountry(res.data)
               setLoading(true)
           }).catch(err=>{
               console.log(err)
           })
    },[])

    const handleClickSelect = () => {
        setSelectIcon(!selecticon)
        setSowAdress(!sowAdress)
    }

   
    const languages = [
        { id: 1, name: "ՀԱՅ" },
        { id: 2, name: "ENG" },
        { id: 3, name: "РУС" },
    ];

    const changeLanguag = (id, language) => {
        setLanguage(id)
        setLanguageModal(!languagemodal)
        if (language !== undefined) {
            changeLang(language)
            i18next.changeLanguage(language)
         }
        setMobileLanguageStyle(id)
        setMenuIconClik(!menuiconClik)
        if(menuiconClik){
            window.scrollTo(0, 0);
        }
    }

    const home = () => {
        window.scrollTo(0, 0);


    }
    const ScrlMenu = () => {
        if (history.location.pathname === "/" || history.location.pathname === "/home") {
            window.scrollTo(0, 850);
        }else{

             history.push("/home/Shaurma")
        }

    }

    const showactiveAdress = (id, adress, city) => {
        sessionStorage.setItem("city",city.toLowerCase())
        setActiveAdress({ [id]: !adressactive[id] })
        setAdress(adress)
        const activDaata2 =menuCategorup.find((itm) => itm.name.toLowerCase() == city.toLowerCase())
        setActivSub(activDaata2.sup)
        // setSowAdress(!sowAdress)
    }
     const changeScrol = (e) => {
        if (window.scrollY >= 150) {
            setSoumenu(true)
        } else {
            setSoumenu(false)
        }

        if (window.scrollY >= 500) {
            setHegth(true)
        } else {
            setHegth(false)
        }
    }
    window.addEventListener("scroll", changeScrol)



    const changeMenu = () => {
        // sessionStorage.setItem("city",defaultCity == "երեվան" ? "ծաղկաձոր" : "երեվան")
        setDefaultSity(defaultCity == "երեվան" ? "ծաղկաձոր" : "երեվան")
        setactiveCityname(defaultCity == "երեվան" ? "ծաղկաձոր" : "երեվան")
        window.scrollTo(0, 0);
    }
    const changeborderinput = (key) => {
        key ? setInputborder(key) : setInputborder(!inputborder)

    }
    const onsubmit = (e) => {
        e.preventDefault()
        setInputborder(!inputborder)
    }

    // Style animation open header

    const cardStyle = {
        top:  sowmenu ? "-3.4vw" : "0vw",
        transition: "all 0.3s ease-in",
      };
    const menublogstyle = {
        top:  sowmenu ? "-3.4vw" : "0",
        transition: "all 0.3s ease-in",
     }
    const headerstyle ={
         height: sowmenu ? "64px" : "160px",
        }


    // mobileversion js code

const ChangeMobileMenu =()=>{
    setMenuIconClik(!menuiconClik)
    if(menuiconClik){
        window.scrollTo(0, 0);
        document.body.style.overflow = "auto";
    }else{
        document.body.style.overflow = "hidden";


    }

}

const mobilemenustyle ={
         position:menuiconClik && !sowAdress ? "fixed" : "absolute",
         left:menuiconClik && 0,
         bottom:menuiconClik && 0,
         right:menuiconClik && 0,
         top:menuiconClik && "16.5vw",
          transition: "all 0.9s",
}
const handleClickSelectMobile =()=>{
    setSelectIcon(!selecticon)
    setSowAdress(!sowAdress)
    if(selecticon){
        document.body.style.overflow = "auto";
    }else{
        document.body.style.overflow = "hidden";


    }
}

   
    return (
        <>
            <div className={css.headerContainer} style={headerstyle}>
                <div style={cardStyle} className={css.header} >
                    <div className={css.serch}>
                        <form>
                             <img src={serch} alt="" />
                            <Input
                                cn="searchInput"
                                onMouseEnter={changeborderinput}
                                onMouseLeave={() => changeborderinput(null)}
                                placeholder={t('plachholderserch')} />
                          </form>

                    </div>
                    <Menu />
                </div>
                <div className={css.menuandlog} style={menublogstyle}>
                    <div className={css.logoandmenu}>
                        <div>
                            <NavLink
                                to={HOME_PAGE} exact
                                onClick={home}>
                                <img src={logo} alt="" className={css.logos} />
                            </NavLink>
                        </div>
                        <div className={css.linkmenu}>
                            <p onClick={ScrlMenu}>{t("menuscrol")}</p>
                        </div>
                        <div className={css.gic1} />
                        <div className={css.masnajux}  >
                            <div className={css.masnajuxwraper} >
                                <img src={adress} alt="" className={css.adresicon} onClick={handleClickSelect} />
                                <p  className={css.masnajuxname} onClick={handleClickSelect}>{adresses ? adresses : t("adresscity")}</p>
                                {selecticon ? <img src={selt} className={css.slaq} onClick={handleClickSelect} /> : <img src={self} className={css.slaq} onClick={handleClickSelect}/>}
                            </div>
                         </div>


                    </div>
                    <div className={css.contactandlogin}>
                        <img className={css.phone} src={phone} alt=""/>
                        <a className={css.phoneNumber} href="tel:81 88">81 88</a>
                        <NavLink to={PROFIL_PAGE} className={css.loginh}><img src={log} alt="" /></NavLink>
                         <div className={css.basketclick}>
                             <NavLink
                                to={BASKET_PAGE}
                                 exact>
                                 <div className={css.corzina}><p>{totalprice}  ֏</p><img src={gumar} alt="" /></div>
                             </NavLink>
                         </div>
                        <ul className={css.activeLanguage}>
                            {languages.map((itm,index) => {
                                return (languagess === itm.id &&
                                    <li className={css.activlang}
                                        key={index}
                                        onClick={() => changeLanguag(itm.id)}
                                    >{itm.name}
                                    </li>)
                            })}
                            {languagemodal && <div className={css.langmodal}>
                                {languages.map((itm,index) => {
                                    return (languagess !== itm.id &&
                                        <li
                                            style={{fontFamily:language==="ՀԱՅ" ? "Manrope-Medium" : "Mardoto-Medium",}}
                                            key={index}
                                            onClick={() => changeLanguag(itm.id, itm.name)}
                                        >{itm.name}
                                        </li>)
                                })}
                            </div>}

                        </ul>


                    </div>
                </div>
                {sowAdress && loading &&
                <div className={css.adressblok}>
                    <div className={css.adresswraper} onClick={()=>setSowAdress(!sowAdress)}/>
                    <div style={{ top: sowmenu ? "3.9vw" : "7.5vw" }} className={css.adresses} >

                        <div className={css.adresstop} >
                            {activSub.length &&
                                adressCountry.map((item,index) => {
                                    return (
                                        defaultCity.toLowerCase() == item.city.name.toLowerCase() &&
                                        <div key={index}
                                             onClick={() => showactiveAdress(item.id, item.address, item.city.name)}
                                             style={{
                                                 background: adressactive[item.id] ?
                                                     "#13AD54" : "#FFFFFF",
                                                 boxShadow:adressactive[item.id] ? null : "1px 1px 5px rgba(3, 142, 62, 0.2);"
                                             }}
                                             className={css.adressitem}
                                        >
                                            <img src={verify} alt="" style={{
                                                display: adressactive[item.id] ?
                                                    "block" : "none",
                                            }} />
                                            <p style={{ color: adressactive[item.id]  && "#FFFFFF" }} className={css.titleitem}>{languae=="ՀԱՅ" ? item.title : languae=="ENG" ? item.titleEN : languae=="РУС" ? item.titleRU : null}</p>
                                            <p style={{ color: adressactive[item.id] && "#FFFFFF" }} className={css.adressity}>{languae=="ՀԱՅ" ? item.address : languae=="ENG" ? item.addressEN : languae=="РУС" ? item.addressRU : null}</p>
                                            <p style={{ color: adressactive[item.id] && "#FFFFFF" }} className={css.dates}>{item.date}</p>
                                        </div>
                                    )
                                })



                            }
                        </div>
                        <p
                            className={css.select_menu}
                            onClick={changeMenu}>{defaultCity == "երեվան" ?
                            t("adressadd1") : defaultCity == "ծաղկաձոր" ?
                                t("adressadd2") :  t("adressadd2")}
                        </p>

                        {defaultCity=="երեվան" &&
                        <h3 className={css.messagegrandbufe}>* Գրանդ Բուֆֆեի տեսականին Ծաղկաձորում հասանելի չէ։</h3>}
                    </div>
                </div>}

            </div>
       {/*MOBILE VERSION -JSX CODE*/}
            <div className={css.mobileheader}>
                <NavLink
                    to={HOME_PAGE} exact
                    onClick={home}>
                    <img src={logo} alt="" className={css.logos} />
                </NavLink>
                <div className={css.coll88}>
                     <img className={css.phonemobile} src={phone} alt=""/>
                     <a className={css.phoneNumber} href="tel:81 88"> 81 88</a>
                </div>
                {!menuiconClik ?
                    <img className={css.iconmobilemenu} src={iconmenu} alt="" onClick={ChangeMobileMenu}/>
                    :
                    <img className={css.iconmobilemenuclose} src={iconclose} alt="" onClick={ChangeMobileMenu}/>
                }


            </div>
            <img src={topbootom} alt="" className={css.up} style={{display: (hegth && !menuiconClik)  ? "block" : "none"}} onClick={home}/>
            <div className={css.basketclick}>
                <NavLink
                    to={BASKET_PAGE}
                    exact>
                    <div className={css.corzina}><p>{totalprice}  ֏</p><img src={gumar} alt="" /></div>
                </NavLink>
            </div>
            <div style={mobilemenustyle} className={css.mobilecontn}  >
                <div className={css.masnajuxmobile}  >
                    <div className={css.masnajuxwrapermobile} >
                        <img src={adress} alt="" className={css.adresiconmobile} onClick={handleClickSelectMobile} />
                        <p  className={css.masnajuxnamemobile} onClick={handleClickSelectMobile}>{adresses ? adresses : t("adresscity")}</p>
                         {selecticon ? <img src={selt} className={css.slaqmobile} onClick={handleClickSelectMobile} /> : <img src={self} className={css.slaqmobile} onClick={handleClickSelect}/>}
                    </div>
                </div>

                <div className={css.menubarmobile}>
                        <div className={css.linkmenu}>
                            <p onClick={ScrlMenu}>{t("menuscrol")}</p>
                        </div>
                        <div className={css.menumixin}>
                                {
                                    isOuthFooter.map((item,index)=>{

                                        return(
                                            <React.Fragment key={index}>
                                            {item.id!=8 && <NavLink onClick={ChangeMobileMenu} exact to={item.path}>{languae == "ՀԱՅ" ? item.nameՀԱՅ : languae == "ENG" ? item.nameENG : languae == "РУС" ? item.nameРУС : null}</NavLink>}
                                            </React.Fragment>
                                            )
                                    })
                                }
                                {
                                    isAuthRoutes.map((item,index)=>{
                                        return(
                                            <NavLink onClick={ChangeMobileMenu} exact key={index} to={item.path}>{languae=="ՀԱՅ" ? item.nameՀԱՅ : languae=="ENG" ? item.nameENG : languae=="РУС" ? item.nameРУС : null}</NavLink>
                                        )
                                    })
                                }
                        </div>
                        <div className={css.loginicon}>
                            <NavLink to={PROFIL_PAGE} className={css.loginh}><img src={log} alt="" /></NavLink>
                        </div>
                        <div className={css.changelanguagemobile}>
                            {languages.map((lang,i)=>{
                                    return(
                                        <h6
                                            key={i}
                                            style={{fontFamily:language==="ՀԱՅ" ? "Manrope-Medium" : "Mardoto-Medium",color:mobileLanguageStyle==lang.id && "#13AD54"}}
                                            onClick={() => changeLanguag(lang.id, lang.name)}
                                        >
                                            {lang.name}
                                        </h6>
                                    )
                                })

                            }

                        </div>
                    </div>
                    {sowAdress && loading &&
                    <div className={css.adressblokmobile}>
                        <div className={css.adresswraper} onClick={()=>setSowAdress(!sowAdress)}/>
                        <div  className={css.adresses} onClick={(e)=>e.stopPropagation()} >
                            <div className={css.adresstop} >
                                {activSub.length &&
                                 adressCountry.map((item,index) => {
                                    return (
                                        defaultCity.toLowerCase() == item.city.name.toLowerCase() &&
                                        <div key={index}
                                             onClick={() => showactiveAdress(item.id, item.adress, item.city.name)}
                                             style={{
                                                 background: adressactive[item.id] ?
                                                     "#13AD54" : "#FFFFFF",
                                                 boxShadow:adressactive[item.id] ? null : "1px 1px 5px rgba(3, 142, 62, 0.2);"
                                             }}
                                             className={css.adressitem}
                                        >
                                            <img src={verify} alt="" style={{
                                                display: adressactive[item.id] ?
                                                    "block" : "none",
                                            }} />
                                            <p style={{ color: adressactive[item.id]  && "#FFFFFF" }} className={css.titleitem}>{languae=="ՀԱՅ" ? item.title : languae=="ENG" ? item.titleEN : languae=="РУС" ? item.titleRU : null}</p>
                                            <p style={{ color: adressactive[item.id] && "#FFFFFF" }} className={css.adressity}>{languae=="ՀԱՅ" ? item.address : languae=="ENG" ? item.addressEN : languae=="РУС" ? item.addressRU : null}</p>
                                            <p style={{ color: adressactive[item.id] && "#FFFFFF" }} className={css.dates}>{item.date}</p>
                                        </div>
                                    )
                                })



                                }
                            </div>
                            <p
                                className={css.select_menu}
                                onClick={changeMenu}>{defaultCity === "երեվան" ?
                                t("adressadd1") : defaultCity === "ծաղկաձոր" ?
                                    t("adressadd2") :  t("adressadd2")}
                            </p>
                            {defaultCity=="երեվան" &&  <p className={css.messagegrandbufe}>* Գրանդ Բուֆֆեի տեսականին Ծաղկաձորում հասանելի չէ։</p>}
                        </div>
                    </div>}
            </div>



        </>
    )

}

export default Header;