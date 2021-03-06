import React, {useState} from "react";
import CheckBox from "../../Global/Checkbox/Checkbox";
import {useProduct} from "../../Providers/ProductMenu";
import css from "./ItionalProduct.module.scss";


const ItionalProduct = ({itionaldataitem, setItionaldataitem, add_buffets, AddlichniyProduct, priceItional, setPriceItional, itionalitem, setItionalitem,}) => {

    const {languae}=useProduct()
    const onchangecheck = (nevobj, id) => {

        const filtr1 = itionaldataitem.filter(fil => fil.id == id)
        const newdata = filtr1[0].adds.map(elem => {
            if (elem.id == nevobj.id) {
                return nevobj

            }
            return elem
        })
        itionaldataitem.forEach(element => {
            if (element.id == id) {

                element.adds = newdata

            }
            return element
        });
        setItionaldataitem([...itionaldataitem])

        const filt = newdata.filter((e) => e.id === nevobj.id)

        if (filt[0].isChecked) {
            const prices = +(+filt[0].price)

            setPriceItional(priceItional + prices)
            setItionalitem([...itionalitem, filt[0]])
        } else {
            const prices = +(+filt[0].price)
            setPriceItional(priceItional - prices)
            const newitional = itionalitem.filter((e) => e.id !== filt[0].id)
            setItionalitem([...newitional])
        }

    }


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
        <div className={css.itionalwraper}>
            <div className={css.itionalwrraper} onClick={AddlichniyProduct}/>
            <div className={css.itionalcategory}>
                {add_buffets === undefined ?  <div className={css.overfloscrol}>
                    {itionaldataitem.map(e => {
                        return (
                            <div key={Math.random()}>
                                <div className={css.banjarexen}>
                                    <h2 style={fontproprty}>{languae == "ՀԱՅ" ? e.name : languae == "ENG" ? e.nameEN : languae == "РУС" ? e.nameRU : null}</h2>
                                </div>
                                <div>
                                    {
                                        e.adds.map(el => {
                                            return (
                                                <div key={Math.random()}>
                                                    <CheckBox cn="Checkboxitional" {...el}
                                                              onchangecheck={(e) => onchangecheck({
                                                                  ...el,
                                                                  isChecked: e.target.checked,
                                                              }, el.name_id)}/>
                                                </div>
                                            )
                                        })
                                    }
                                </div>

                            </div>
                        )
                    })
                    }
                </div>
                    :
                    <div className={css.ingredentsblok}>
                        {add_buffets.map(({id, name, amount}, i) => {
                           return <div key={id} className={css.igraditem}
                           style={{marginTop: i == 0 ? "0px" : " 1.01vw"}}>
                           <p style={fontproprty2}>{name}</p><p style={fontproprty2}>{amount}</p>
                    </div>
                })
                }

                    </div>}

            </div>
        </div>
    )
}


export default ItionalProduct;