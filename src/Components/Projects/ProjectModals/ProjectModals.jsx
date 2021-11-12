import React, {useEffect, useState} from 'react';
import {motion} from 'framer-motion';
import {Fragment} from "react";
import css from "./ProjectModal.module.scss"
import {useSlider} from "../../Providers/SliderProvider";
import {useParams} from "react-router-dom";
import ProjectSlider from "../ProjectSlider/ProjectSlider";
import { useTranslation } from 'react-i18next';
import storaket from "../../../images/icons/storaket.png"
const ProjectModals = () => {
    const { t } = useTranslation();
    const {project,activeProjectdata,setActiveProjectdata}=useSlider()
   const [index,setindex]=useState(0)
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
                {
                    project.filter(e=>e.id==1).map((product)=>{
                        return(
                            <>
                                <div className={css.container2}
                                     style={{background:`url(${product.image})`}}
                                >
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
                                            {product.information}
                                        </p>
                                        <div className={css.burgercount}>

                                            <h2>{product.count["բուրգեր"]}</h2>
                                            <h4>{Object.keys(product.count)[0]}</h4>

                                        </div>
                                    </div>
                                </div>
                                <div  className={css.sliderblok}>
                                <ProjectSlider data={product.sliderData}/>
                                </div>
                                <div className={css.blokinfo2}>
                                    <div className={css.blokinfotext}>
                                        <img src={storaket} alt="" className={css.storaket}/>
                                        <p className={css.text2}>
                                            {product.coment.text}
                                        </p>
                                        <h4>{product.coment.after.name}</h4>
                                        <h5>{product.coment.after.info}</h5>
                                    </div>
                                    <div className={css.positionimageblok}>
                                       <div className={css.bigimg}>
                                           <img src={product.coment.image.bigimage} alt=""/>
                                       </div>
                                        <div className={css.smolimg}>
                                            <img src={product.coment.image.smollimg} alt=""/>
                                        </div>
                                    </div>
                                </div>
                                <div className={css.youtoobevideo}>
                                    <iframe  src="https://www.youtube.com/embed/T1iXsT-wOZ0"
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