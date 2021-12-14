import React, {useEffect, useState} from 'react';
import {motion} from 'framer-motion';
import {Fragment} from "react";
import css from "./ProjectModal.module.scss"
import {useSlider} from "../../Providers/SliderProvider";
import {NavLink, useParams} from "react-router-dom";
import ProjectSlider from "../ProjectSlider/ProjectSlider";
import { useTranslation } from 'react-i18next';
import storaket from "../../../images/icons/storaket.png"
import {PROJECT_PAGE} from "../../urls";
import axios from "axios";
import parse from 'html-react-parser';
const ProjectModals = () => {


    const { t } = useTranslation();
    const {project,setproject,activeProjectdata,setActiveProjectdata}=useSlider()
    const [index,setindex]=useState(0)
    const [loading,setLoading]=useState(false)

    useEffect(()=>{
        const resProject =axios.get(process.env.REACT_APP_API_URL +"/projects_list")
        resProject.then(res=>{
            setproject(res.data)
            setLoading(true)
        }).catch(err=>console.log(err))

    },[])


    const {id}=useParams()
    useEffect(() => {
        window.scrollTo(0, 0);


        setindex(id)
    }, [])


    const animation5 = {
        initial: {
            opacity: 0,
            y:"0%",
        },
        in: {
            opacity: 1,
            y:"0%",
        },
        out: {
            opacity: 0.5,
            y: '10%'
        },
    }



    return (
        <Fragment>
            <motion.div
                initial='out'
                animate="in"
                exit='out'
                transition={{duration:1}}
                 variants={animation5}
                className={css.containerProjectmodal}
              >

                {loading && project.filter(e=>e.id==id).map((product)=>{
                        return(
                            <>
                                <div className={css.container2}
                                     style={{backgroundColor:"#1B1B1B",opasity:"0.5",backgroundImage:`url(${process.env.REACT_APP_IMG_URL+product.image})`}}
                                >
                                    <NavLink to={PROJECT_PAGE} exact ><svg xmlns="http://www.w3.org/2000/svg" width="3.3088235294117645vw" height="1.1764705882352942vw" viewBox="0 0 45 16" fill="none">
                                        <path d="M3.49691e-07 8L15 14.9282L15 1.0718L3.49691e-07 8Z" fill="white"/>
                                        <rect width="30" height="2" transform="matrix(-1 0 0 1 45 7)" fill="white"/>
                                    </svg></NavLink>
                                    <h1 className={css.titleproject2}>
                                        {product.title}
                                    </h1>
                                    <p className={css.dateproj}>
                                        {product.date}
                                    </p>

                                </div>
                                <div className={css.blockinfo1}>


                                    <div className={css.textblok}>
                                        <p>
                                            {product.projects[0]?.context}
                                        </p>
                                        <div className={css.burgercount}>

                                            <h2>{product.projects[0]?.count}</h2>
                                            <h4>{product.projects[0]?.type}</h4>

                                        </div>
                                    </div>
                                </div>
                                <div  className={css.sliderblok}>
                                <ProjectSlider data={product.projects[0]?.projects_sliders}/>
                                </div>
                                <div className={css.blokinfo2}>
                                    <div className={css.blokinfotext}>
                                        <img src={storaket} alt="" className={css.storaket}/>
                                        <p className={css.text2}>
                                            {product.projects[0]?.information}
                                        </p>
                                        <h4>{product.projects[0]?.full_name}</h4>
                                        <h6>{product.projects[0]?.position}</h6>
                                    </div>
                                    <div className={css.positionimageblok}>
                                       <div className={css.bigimg}>
                                           <img src={process.env.REACT_APP_IMG_URL+product.projects[0]?.bigImage} alt=""/>
                                       </div>
                                        <div className={css.smolimg}>
                                            <img src={process.env.REACT_APP_IMG_URL+product.projects[0]?.smallImage} alt=""/>
                                        </div>
                                    </div>
                                </div>
                                <div className={css.youtoobevideo}>
                                    <iframe  src={product.projects[0]?.URL}
                                            title="YouTube video player" frameBorder="0"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                            allowFullScreen></iframe>
                                </div>

                            </>
                        )
                    })
                }


            </motion.div>
        </Fragment>
    );
};

export default ProjectModals;