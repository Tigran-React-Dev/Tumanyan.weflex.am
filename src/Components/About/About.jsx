import React from "react";
import css from "./About.module.scss"
import TumanianSlider from "../Tumanian/Sliders/Sliders";
import { useTranslation } from 'react-i18next';

const About =()=>{
    const { t } = useTranslation();
    return(
        <div className={css.aboutcontainer}>
            <div className={css.abouthdr}>
                <h1>մենք</h1>
            </div>
            <div className={css.abouttitle}>
              <p>շատ ուրախ, կրեատիվ թիմ ենք, և մեր ընկերությունւը ամենալավ տեղն է,
                  որտեղ կարող եք համտեսել ամենահամով շաուրման։</p>
            </div>
            {/*<div className={css.jobpicturent}>*/}

            {/*</div>*/}

        </div>
    )
}

export default About;