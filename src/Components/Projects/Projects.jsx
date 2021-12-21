import React, {useEffect, useState} from 'react';
import css from "./Project.module.scss"
import {useSlider} from "../Providers/SliderProvider";
import arow from "../../images/icons/Arrow.png";
import arowgrren from "../../images/icons/Arrowgrrentoprojects.svg"
import {useHistory} from "react-router-dom";
import {PROJECT_PAGE, PROJECT_PAGE_INFO} from "../urls";
import {motion} from "framer-motion";
import Button from "../Global/Button/Button";
import axios from "axios";
import {useProduct} from "../Providers/ProductMenu";
const Projects = () => {
   const [hoveritem,sethoveritem]=useState({})
    const history =useHistory()
    const {languae}=useProduct()
    const {project,setproject,activeProjectdata,setActiveProjectdata}=useSlider()
    const [anime,setanime]=useState(true)
    const [loading, setLoading]=useState(false)
    const [pagintion,setpagination]=useState(3)

    useEffect(()=>{
       const resProject =axios.get(process.env.REACT_APP_API_URL +"/projects_list")
        resProject.then(res=>{
            setproject(res.data)
            setLoading(true)
        }).catch(err=>console.log(err))

    },[])


    useEffect(()=>{
        window.scrollTo(0, 0);

    },[history])

    const addtoprojectpage =(activdata)=>{
        setActiveProjectdata(activdata)
        setanime(false)
        history.push(`${PROJECT_PAGE}/${activdata.id}`)


    }
    const animation3 = {

        x: 0,
        y: -100,
        scale: 1,
        rotate: 0,

    }
    const noAnimation = {
        x: 0,
        y: 0,
        scale: 1,
        rotate: 0,
    }
  const animationPick = (k) => {
        if(k){
            return noAnimation
        }

        return animation3
    }

    return (
        <>
        <div className={css.projecthdr}>
            <p className={css.projrcttitle}>
                Նախագծեր
            </p>
        </div>
         <div className={css.projectContainer}>
             {loading && <div className={css.projectitemcontainer}>
                 {
                     project.map((item, index) => {

                         return (
                             <>
                             {index<=pagintion && <motion.div
                             animate={hoveritem[index] && animationPick(anime)}
                             transition={{duration: 0.1}}
                             // variants={animationPick(anime)}
                             className={css.containerProjectmodal}
                         >
                             <div className={css.controler} key={item.id} onMouseEnter={() => {
                                  var width = window.innerWidth;
                                 if(width>500){
                                    sethoveritem({[index]: !hoveritem[index]})
                                 }
                                
                             }}
                                  onMouseLeave={() => sethoveritem({})}
                                  style={{backgroundImage: (hoveritem[index] && `url(${process.env.REACT_APP_IMG_URL + item.image})`)}}

                             >
                                 <div className={css.ptojectitem} onClick={() => addtoprojectpage(item)}>
                                     <h6 style={{color: hoveritem[index] && "#FFFFFF"}}>{item.date}</h6>
                                     <div className={css.titleanddescription}>
                                         <h2 style={{color: hoveritem[index] && "#FFFFFF"}}>{languae=="ՀԱՅ" ? item.title : languae=="ENG" ? item.titleEN : languae=="РУС" ? item.titleRU : null}</h2>
                                         <p style={{color: hoveritem[index] && "#FFFFFF"}}>Երկու տող նախագծի
                                             մասին․ {languae=="ՀԱՅ" ? item.context : languae=="ENG" ? item.contextEN : languae=="РУС" ? item.contextRU : null}</p>
                                     </div>
                                     <img src={arowgrren} className={css.arowgreen} alt=""
                                          style={{filter: hoveritem[index] && "invert(110%) sepia(100%) saturate(2%) hue-rotate(275deg) brightness(114%) contrast(121%)"}}/>
                                 </div>
                             </div>
                         </motion.div>}
                             </>

                         )
                     })
                 }
             </div>}
             {loading && project.length>4 && <div className={css.fotproject}>
                 <Button
                     title="տեսնել ավելին"
                     cn="btnreadmore"
                     onClick={()=> {
                         setpagination(pagintion + 3)
                         window.scrollTo(0, 1400);
                     }}
                 />
             </div>}
         </div>
        </>
    );
};

export default Projects;