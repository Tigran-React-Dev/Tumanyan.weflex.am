import React from 'react';
import css from "./Bonuces.module.scss"
import Button from "../../../Global/Button/Button";
import {useProduct} from "../../../Providers/ProductMenu";

const Bonuces = ({user}) => {

    const {languae}=useProduct()


    const fontproprty={fontFamily:languae=="ՀԱՅ" ?
            "Mardoto-Medium" : languae=="ENG" ?
                "Manrope-Bold" : languae=="РУС" ?
                    "Manrope-Medium" : null
    }
    const fontproprty2={fontFamily:languae=="ՀԱՅ" ?
            "Montserrat-Regular" : languae=="ENG" ?
                "manrope-reg" : languae=="РУС" ?
                    "manrope-reg" : null
    }
    const fontproprty3={fontFamily:languae=="ՀԱՅ" ?
            "Montserrat-Medium" : languae=="ENG" ?
                "Manrope-Medium" : languae=="РУС" ?
                    "Manrope-Medium" : null
    }

    return (
        <div className={css.bonucess}>


            <div className={css.divprice}><p className={css.titlebns} style={fontproprty2}></p>Կուտակված՝<p className={css.tokosprice} style={fontproprty3}>30%</p></div>
            <div className={css.divprice2}><p className={css.titlebns} style={fontproprty2}></p>Գումարային՝<p className={css.tokosprice} style={fontproprty3}>{user.bonus} ֏</p></div>
            <Button
                cn="bonucebtn"
                title="վճարել բոնուսներով"
                style={fontproprty}
            />
        </div>
    );
};

export default Bonuces;