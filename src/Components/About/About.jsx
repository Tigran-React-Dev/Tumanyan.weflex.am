import React, {useEffect, useRef, useState} from "react";
import css from "./About.module.scss"
import TumanianSlider from "../Tumanian/Sliders/Sliders";
import { useTranslation } from 'react-i18next';
import Button from "../Global/Button/Button";
import {useSlider} from "../Providers/SliderProvider";
import axios from "axios";
import {useProduct} from "../Providers/ProductMenu";
import AboutPages1 from "./AboutPages1/AboutPages1";

const About =({history})=>{
    const [activeMneuStyle,setAactiveMenuStyle]=useState(1)
    const [hoveritemStyle,setHoverItemStyle]=useState({})
    const { t } = useTranslation();
    const ref=useRef(null)
    const {languae}=useProduct()
    const {aboutDataone,menejments,setMenejmentdata,setAboutDataone}=useSlider()
    const [loading,setLoading]=useState(false)
  const btnTitle=[
      {id:1,name:"պատմություն",nameRU:"История",nameENG:" History",},
      {id:2,name:"հիմնադիրներ",nameRU:" Основатели",nameENG:"Founders",},
      {id:3,name:"մենեջմենթ",nameRU:"Менеджмент",nameENG:"Management",},
]
    useEffect(()=>{
        window.scrollTo(0, 0);

    },[history])
    useEffect(()=>{

        const respons=axios.get(process.env.REACT_APP_API_URL + "/about_management", )
        respons.then(res=> {

             setMenejmentdata(res.data)

        }).catch(err=>console.log(err))
        const respons2=axios.get(process.env.REACT_APP_API_URL + "/about_founder", )
        respons2.then(res=> {

            setAboutDataone(res.data)

        }).catch(err=>console.log(err))



        setLoading(true)

    },[])

  const changestyleandscrolingmenu =(id,i)=>{
        switch (i){
            case 0 :
                ref.current.scrollLeft=0;
                break
            case 1 :
                ref.current.scrollLeft=100;
                break
            case 2 :
                ref.current.scrollLeft=250;
                break
            default :
                break
        }
    setAactiveMenuStyle(id)
   
  }




    return(
        <div className={css.aboutcontainer}>
            <div className={css.abouthdr}>
               <div className={css.abouttitle}>
                     <h1>{languae=="ՀԱՅ" ? "Մենք" : languae=="ENG" ?  "We": languae=="РУС" ? "Мы" : null}</h1>
                      <p>շատ ուրախ, կրեատիվ թիմն ենք, և մեր մոտ կարող եք համտեսել ամենահամով շաուրման։</p>
               </div>
                <div className={css.aboutteam}/>
         </div>
            <div className={css.btnblok} ref={ref}>
                {
                    btnTitle.map(({id,name,nameRU,nameENG},index)=>{
                        return <button
                        key={id}
                        className={css.btnmenuabout}
                        onClick={()=>changestyleandscrolingmenu(id,index)}
                        style={{background:activeMneuStyle===id && "#ffffff" ,
                            boxShadow:activeMneuStyle===id && "inset -1px 0px 0px",
                            color:activeMneuStyle===id && "#13AD54"
                        }}
                        >{languae=="ՀԱՅ" ? name : languae=="ENG" ?  nameENG: languae=="РУС" ? nameRU : null}
                        </button>


                    })
                }
            </div>
            <div className={css.aboutmenusow}>
                {
                    activeMneuStyle===1 ?
                        <div>
                           <AboutPages1/>
                        </div>
                        :
                    activeMneuStyle===2 ?
                        <>
                        {loading && <div className={css.tnoren}>
                            
                            {
                                aboutDataone.map(({id, full_name,full_nameEN,full_nameRU, position,positionEN,positionRU, image, information,informationEN,informationRU}, index) => {
                                    return (
                                        <div key={id}
                                             className={css.itemabout}

                                        >
                                            <img src={process.env.REACT_APP_IMG_URL+"/about/"+image} alt=""/>
                                           <h4>{languae=="ՀԱՅ" ? full_name : languae=="ENG" ? full_nameEN : languae=="РУС" ? full_nameRU : null}</h4>
                                            <h6>{languae=="ՀԱՅ" ? position : languae=="ENG" ? positionEN : languae=="РУС" ? positionRU : null}</h6>
                                            {
                                                // index === 0 ? <p>{languae=="ՀԱՅ" ? information.substring(0, 167) :
                                                // languae=="ENG" ?information.substring(0, 167) :languae=="РУС" ? information.substring(167, 290) : null} <br/>
                                                //     <br/> {information.substring(167, 290)}</p> :
                                                     <p>{languae=="ՀԱՅ" ? information : languae=="ENG" ? informationEN : languae=="РУС" ? informationRU : null}</p>
                                            }
                                        </div>
                                    )
                                })
                            }
                        </div>}
                        </>
                        :
                    activeMneuStyle===3 ?
                        <>
                        { loading && <div className={css.menejmentcontroler}>

                            {
                                menejments.map(({id, full_name,full_nameRU,full_nameEN, position,positionEN,positionRU, email, image}, index) => {
                                    return (
                                        <div
                                            key={id}
                                            className={css.itemmenejment}

                                        >
                                            <img src={process.env.REACT_APP_IMG_URL+"/about/" + image} alt=""/>
                                            <h4>{languae=="ՀԱՅ" ? full_name : languae=="ENG" ? full_nameEN : languae=="РУС" ? full_nameRU : null}</h4>
                                            <h2>{languae=="ՀԱՅ" ? position : languae=="ENG" ? positionEN : languae=="РУС" ? positionRU : null}</h2>
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