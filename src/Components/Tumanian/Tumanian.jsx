import React, {useEffect, useState} from "react";
import TumanianSlider from "./Sliders/Sliders";
import css from "./Tumanian.module.scss";
import {useSlider} from "../Providers/SliderProvider";
import {useProduct} from "../Providers/ProductMenu";
import burger from "../../images/product/sev burger 1 (1).png"
import { useTranslation } from 'react-i18next';
import {NavLink} from "react-router-dom";
import {FOOD_TRUCK_PAGE} from "../urls";
import HomeSlider2 from "./HomeSlider2/HomeSlider2";
import axios from "axios";





const Tumanian =({history})=>{

    const {Reclam ,homepageReclam2,setHomePageReclam2,aboutinfo, aboutStep} =useSlider()
    const {activSub,setactiveMenuitem,languae}=useProduct()
    const [loading,setLoading]=useState(false)
    const { t } = useTranslation();
    const [color,setColor]= useState("#ebe5e5");
    const [hoverId,SetHoverId]=useState({})

    useEffect(()=>{
        window.scrollTo(0, 0);
        const reclam2respins=axios.get("http://tumanyanadmin.weflex.am/api/slider_two")
        reclam2respins.then(res=>setHomePageReclam2(res.data))
            .catch(err=>console.log(err))
        setLoading(true)
    },[])


const hoverItem=(id)=>{
    if(id===null){
        setColor("#f0ebeb")

    }else if(id%2==0){
        setColor("#13AD54")
    }else{
      setColor("#EB2F2F")
    }
    SetHoverId({[id]: !hoverId[id]})
    

   }
    const OpenMenu =(item)=>{
      history.push(`/home/${item.id}`)
        setactiveMenuitem(item)
        

    }
 
    return(
        <div className={css.home} >
            <div className={css.slider}>
                <TumanianSlider/>
            </div>

            <div className={css.reclams}>
                {
                    Reclam.map(({id,images,description})=>{
                        return(
                            <>
                            {
                                id===1 ? <NavLink to={"/աղցաններ"}> <div className={css.wraperreclam} key={id}>
                                    <div  className={css.itemreclam} style={{
                                        backgroundImage: `url(${images})`
                                    }}  />
                                    <h2 className={css.rectitle}>{description}</h2>
                                </div></NavLink> :
                                    <NavLink to={FOOD_TRUCK_PAGE} exact> <div className={css.wraperreclam} key={id}>
                                        <div  className={css.itemreclam} style={{
                                            backgroundImage: `url(${images})`
                                        }}  />
                                        <h2 className={css.rectitle2}>{description}</h2>
                                    </div></NavLink>
                            }
                           </>
                        )
                    })
                }

            </div>
            <div className={css.menu}>
                {
                     activSub.map((item,index)=>{
                         

                            return(
                                <div className={css.menuitem}  key={item.id} style={{
                                  backgroundColor:( hoverId[index] ? `${color}`   : " #EFEFEF" ),
  //onClick={()=>OpenMenu()}
                              }} onMouseEnter={()=>hoverItem(index)} onMouseLeave={()=>hoverItem(null)} onClick={()=>OpenMenu(item)}>
                                    <p style={{ color:( hoverId[index] ? "#FFFFFF"   : "#252223" )}}>{item.title}</p>
                                    <img src={item.images} alt="" style={{  opacity:( hoverId[index] ? "0.4"   : "1"  )}}/>
                                </div>
                               )

                        
                    })
                        
                }

            </div>

            {loading &&
            <>
            <div className={css.rec2}>

                {
                    homepageReclam2.map(({id, image}) => {

                        return (
                            <div key={id} className={css.itemreclam2}>
                                <img src={process.env.REACT_APP_IMG_URL+image} alt=""/>
                            </div>
                        )
                    })
                }

            </div>

            <div className={css.mobileversinsld2}>
               <HomeSlider2 homepageReclam2={homepageReclam2}/>
            </div>
                </>
                }

            <div className={css.aboutblock}>
                 <div className={css.aboutglobal}>

                    <h1>{t("about")}</h1>
                     <p className={css.aboutp}>{aboutinfo.info}</p>
                     <div className={css.step}>
                         {
                             aboutStep.map((item)=>{
                                 return(
                                     <div key={item.id} className={css.itemstop}>
                                         <div>
                                             <p className={css.circlenumber}>{item.id}</p>
                                         </div>
                                         <p className={css.stepname}>{languae=="ՀԱՅ" ? item.stepARM : languae=="ENG" ? item.stepENG : languae=="РУС" ? item.stepRUS : null}</p>
                                     </div>
                                 )
                             })
                         }
                     </div>
                 </div>

                <div className={css.burger} >
                    <img src={burger} alt=""/>
                </div>
            </div>

        </div>
    )
}

export default Tumanian;