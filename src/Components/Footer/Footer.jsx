import React from 'react';
import css from "./Footer.module.scss";
import {isAuthRoutes, isOuthFooter} from "../routes";
import {NavLink} from "react-router-dom";
import appstor from "../../images/icons/appstore.png"
import play from "../../images/icons/playmarket.png"
import fb from "../../images/social/fb.svg";
import insta from "../../images/social/insta.svg";
import youtube from "../../images/social/youtube.svg";
import trip from "../../images/social/trip.svg"
import { useProduct } from '../Providers/ProductMenu';
import { useTranslation } from 'react-i18next';
const Footer = () => {

    
    const {languae}=useProduct()
    const { t } = useTranslation();
    return (
        <div className={css.footer}>
            <div className={css.footerblok}>
                <div className={css.footermenu}>
                    <div className={css.menu1}>
                        {
                            isOuthFooter.map((item)=>{

                                return(
                                    <NavLink exact key={item.id} to={item.path}>{languae=="ՀԱՅ" ? item.nameՀԱՅ : languae=="ENG" ? item.nameENG : languae=="РУС" ? item.nameРУС : null}</NavLink>
                                )
                            })
                        }
                    </div>
                    <div className={css.menu2}>
                        {
                            isAuthRoutes.map((item)=>{
                                return(
                                    <NavLink exact key={item.id} to={item.path}>{languae=="ՀԱՅ" ? item.nameՀԱՅ : languae=="ENG" ? item.nameENG : languae=="РУС" ? item.nameРУС : null}</NavLink>
                                )
                            })
                        }
                    </div>
                    
                        <ul className={css.social}>
                            <li><a href=" https://www.facebook.com/TumanyanShaurma/" target="_blank"><img src={fb} alt=""/></a></li>
                            <li><a href=" https://www.instagram.com/tumanyanshaurma/" target="_blank"><img src={insta} alt=""/></a></li>
                            <li><a href="https://www.tripadvisor.com/Restaurant_Review-g293932-d1100896-Reviews-Tumanyan_Shaurma-Yerevan.html" target="_blank"><img src={trip} alt=""/></a></li>
                            <li><a href="https://www.youtube.com/channel/UCpAzbtbDMzzYSyyEcnGhGug" target="_blank"><img src={youtube} alt=""/></a></li>
                        </ul>
                    
                </div>
                <div className={css.storeaplication}>
                    <img src={appstor} alt=""/>
                    <img src={play} alt=""/>
                </div>
                <div className={css.corporect}>
                    <p>© &nbsp; {new Date().getFullYear()} Tumanyan Shaurma</p>
                    <p className={css.webflex}>{t("corporect")} &nbsp; <span>WeFlex</span></p>
                </div>
            </div>

            <div className={css.map}>
            <iframe src="https://snazzymaps.com/embed/345148" className={css.maps}></iframe>  
                  
                
           </div>
        </div>
    );
};

export default Footer;