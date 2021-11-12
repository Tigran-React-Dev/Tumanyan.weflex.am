import React from 'react';
import css from "./Bonuces.module.scss"
import Button from "../../../Global/Button/Button";

const Bonuces = () => {
    return (
        <div className={css.bonucess}>


            <div className={css.divprice}><p className={css.titlebns}></p>Կուտակված՝<p className={css.tokosprice}>30%</p></div>
            <div className={css.divprice2}><p className={css.titlebns}></p>Գումարային՝<p className={css.tokosprice}>2500 ֏</p></div>
            <Button cn="bonucebtn" title="վճարել բոնուսներով"/>
        </div>
    );
};

export default Bonuces;