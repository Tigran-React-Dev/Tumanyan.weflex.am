import React, {useState} from 'react';
import css from "./Project.module.scss"
import {useSlider} from "../Providers/SliderProvider";
import arow from "../../images/icons/Arrow.png"
import {useHistory} from "react-router-dom";
import {PROJECT_PAGE, PROJECT_PAGE_INFO} from "../urls";
import {motion} from "framer-motion";
import ProjectSlider from './ProjectSlider/ProjectSlider';
import Button from "../Global/Button/Button";
const Projects = () => {
   const [hoveritem,sethoveritem]=useState({})
    const history =useHistory()
    const {project,activeProjectdata,setActiveProjectdata}=useSlider()
    const [anime,setanime]=useState(true)



    const addtoprojectpage =(activdata)=>{
        // console.log(activdata)

        setActiveProjectdata(activdata)
        setanime(false)
        setTimeout(()=>{
            history.push(`${PROJECT_PAGE}/${activdata.id}`)

        },5)


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
           <div className={css.projectitemcontainer}>
               {
                   project.map((item)=>{

                       return(
                           <motion.div

                                animate={hoveritem[item.id] && animationPick(anime)}

                               transition={{ duration: 0.1 }}
                               // variants={animationPick(anime)}
                               className={css.containerProjectmodal}
                           >
                               <div className={css.controler} key={item.id} onMouseEnter={()=>{
                                   sethoveritem({[item.id]:!hoveritem[item.id]})
                               }}
                                    onMouseLeave={()=>sethoveritem({})}
                                    style={{ backgroundImage:(hoveritem[item.id] && `url(${item.image})`)}}

                               >
                                   <div className={css.ptojectitem} onClick={()=>addtoprojectpage(item)}>
                                       <h5 style={{color:hoveritem[item.id] && "#FFFFFF"}}>{item.date}</h5>
                                       <div className={css.titleanddescription}>
                                           <h2 style={{color:hoveritem[item.id] && "#FFFFFF"}}>{item.title}</h2>
                                           <p style={{color:hoveritem[item.id] && "#FFFFFF"}}>Երկու տող նախագծի մասին․ {item.description}</p>
                                       </div>
                                       <img src={arow} alt="" style={{filter:hoveritem[item.id] && "invert(100%) sepia(1%) saturate(5489%) hue-rotate(0deg) brightness(180%) contrast(100%)"}}/>
                                   </div>
                               </div>
                           </motion.div>


                       )
                   })
               }
           </div>
             <div className={css.fotproject}>
                      <Button
                          title="տեսնել ավելին"
                          cn="btnreadmore"
                      />
             </div>
         </div>
        </>
    );
};

export default Projects;