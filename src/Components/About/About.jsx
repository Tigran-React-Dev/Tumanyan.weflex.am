import React, {useEffect, useState} from "react";
import css from "./About.module.scss"
import TumanianSlider from "../Tumanian/Sliders/Sliders";
import { useTranslation } from 'react-i18next';
import Button from "../Global/Button/Button";
import {useSlider} from "../Providers/SliderProvider";
import axios from "axios";

const About =()=>{
    const [activeMneuStyle,setAactiveMenuStyle]=useState(1)
    const [hoveritemStyle,setHoverItemStyle]=useState({})
    const { t } = useTranslation();
    const {aboutDataone,menejments,setMenejmentdata}=useSlider()
    const [loading,setLoading]=useState(false)
  const btnTitle=[
      {id:1,name:"պատմություն"},
      {id:2,name:"հիմնադիրներ"},
      {id:3,name:"մենեջմենթ"},
]

    useEffect(()=>{

        const respons=axios.get("http://tumanyanadmin.weflex.am/api/about", )
        respons.then(res=>console.log(res)).catch(err=>console.log(err))

    },[])






    return(
        <div className={css.aboutcontainer}>
            <div className={css.abouthdr}>
               <div className={css.abouttitle}>
                     <h1>Մենք</h1>
                      <p>շատ ուրախ, կրեատիվ թիմն ենք, և մեր մոտ կարող եք համտեսել ամենահամով շաուրման։</p>
               </div>
                <div className={css.aboutteam}/>
         </div>
            <div className={css.btnblok}>
                {
                    btnTitle.map(({id,name})=>{
                        return <button
                        key={id}
                        className={css.btnmenuabout}
                        onClick={()=>setAactiveMenuStyle(id)}
                        style={{background:activeMneuStyle===id && "#ffffff" ,
                            boxShadow:activeMneuStyle===id && "inset -1px 0px 0px",
                            color:activeMneuStyle===id && "#13AD54"
                        }}
                        >{name}
                        </button>


                    })
                }
            </div>
            <div className={css.aboutmenusow}>
                {
                    activeMneuStyle===1 ?
                        <div>
                            HISTORY
                        </div>
                        :
                    activeMneuStyle===2 ?
                        <div className={css.tnoren}>
                            {
                                aboutDataone.map(({id,follname,position,image,information},index)=>{
                                    return  (
                                        <div key={id}
                                         className={css.itemabout}

                                        >
                                            <img src={image} alt=""/>
                                            {/*{hoveritemStyle[index] ? <img src={imageHover} alt="" onMouseLeave={()=>setHoverItemStyle({})}/> : <img src={imageNormal} alt="" onMouseEnter={()=>setHoverItemStyle({[index]:!hoveritemStyle[index]})}/>}*/}
                                          <h4>{follname}</h4>
                                          <h5>{position}</h5>
                                            {
                                                index===0 ? <p>{information.substring(0,167)} <br/>  <br/> {information.substring(167,290)}</p>  : <p>{information}</p>
                                            }
                                        </div>
                                    )
                                })
                            }
                        </div>
                        :
                    activeMneuStyle===3 ?
                        <>
                        {loading && <div className={css.menejmentcontroler}>
                            {
                                menejments.map(({id, fullname, position, email, image}, index) => {
                                    return (
                                        <div
                                            key={id}
                                            className={css.itemmenejment}

                                        >
                                            <img src={image} alt=""/>
                                            <h4>{fullname}</h4>
                                            <h5>{position}</h5>
                                            <h6>{email}</h6>
                                        </div>
                                    )
                                })
                            }
                        </div>}
                        </>
                       :
                       null
                }
            </div>

        </div>
    )
}

export default About;