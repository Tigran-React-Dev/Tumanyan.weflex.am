import React, {useState,Memo} from "react";
import css from "./ProductBlok.module.scss";

import btn1 from "../../../images/icons/btn1.svg"
import kecup from "../../../images/icons/kechup.svg"
import minus from "../../../images/icons/Minus.svg";
import plus from "../../../images/icons/Plus.svg"
import ItionalProduct from "../ItionalProduct/ItionalProduct";
import lik from "../../../images/icons/like.svg";
import liked from "../../../images/icons/likedis.svg"
import {useDispatch} from "react-redux";
import {LikedProduct} from "../../redux/Action/ProductAction";

const ProductBlok = ({id,like,itionaldata,setItionaldata, title, ingredients,image, price, bonus,itional,category,description,handleAddProductCard,handleonlyproduct,SendobjtoLikecategory}) => {

    const [itempricesitog, setpricesItog] = useState(price[0].price)
    const [activeprice, setactivprice] = useState(price[0].price)
    const [count, setCount] = useState(1)
    const [activeBtnStyle, setActivebtn] = useState(1)
    const [size, setActivsize] = useState("1")
    const [sowlichniproductmodal,setsowproductmodal]=useState(false);
    const [priceItional,setPriceItional]=useState(0)
    const [itionalitem,setItionalitem]=useState(itional)
    const dispath=useDispatch()
    const  AddTolike=()=>{

        dispath(LikedProduct(id,category,like))

        const likeobj={
            id,
            _id:Date.now(),
            title,
            image,
            category,
            itional,
            bonus,
            price,
            description,
            like:true
        }
        SendobjtoLikecategory(likeobj)
    }

    const addtoCart = (categor) => {

        const newProductcard = {
             id,
            _id:Date.now(),
            title,
            image,
            category,
            itionalitem,
            bonus,
            priceitem:price,
            price: bonus ? (itempricesitog - (itempricesitog / 100 * bonus)) +priceItional: itempricesitog+priceItional,
            size: price.length===3 ? size==1 ? "M" : size==2 ? "L" : size==3 ? "XL" : null : price.length===2 ? size==1 ? "1 բ" : size==2 ? "2 բ"  : null : false,
            count,
            ingredients,
            description,
            like
        }


        if(categor !="շաուրմա" && categor !="աղցաններ" && categor !="ապուրներ" && categor !="խավարտներ" && categor !="տաք ուտեստներ" && categor !="սուրճ, թեյ" && categor !="կարկանդակներ" && categor !="ըմպելիքներ" && categor !="այլ"  ){
            handleAddProductCard(newProductcard)

        }else{
            handleAddProductCard(newProductcard)
            if(categor =="շաուրմա"){
                setItionalitem([])
                const reset = itionaldata[id].map((e)=>{
                    if(e.isChecked==true){

                        return {...e,isChecked:false}
                    }
                    return e
                })
                setItionaldata({
                    ...itionaldata,
                    [id]:[...reset]
                })
            }

        }


    }

    const onPlus =()=>{
        setpricesItog((count + 1) * activeprice)
        setCount(count + 1)
    }


    const onMinus = () => {
        if (count >= 2) {
            setpricesItog((count - 1) * activeprice)
            setCount(count - 1)
        }

    }

    const changeSizeAndprice = (newprice, id, size) => {
        setactivprice(newprice)
        setpricesItog(newprice)
        setCount(1)
        setActivebtn(id)
        setActivsize(size)
    }


    const AddlichniyProduct=()=>{
        setsowproductmodal(!sowlichniproductmodal)

    }


    return (
        <div className={css.productItem}>
            {price.length==2 ? <div className={css.imgblok}><img src={image} alt=""/></div> : <img src={image} alt=""/>  }
            {bonus > 0 && <div className={css.akcia}>
                <p>-{bonus}%</p>
            </div>}
            <div className={css.titleanlike}>
                <p>{title}</p>
                {!like ? <img src={lik} alt="" onClick={()=>AddTolike(id,category)}/> : <img src={liked} alt=""  onClick={()=>AddTolike(id,category)}/>}
            </div>
            {price.length===3 ?  <div className={css.sizeproduct}>
                <ul className={css.sizeitem}>
                    {
                        price.map(({id, size, price}, index) => {
                            return <li
                                key={index}
                                onClick={() => changeSizeAndprice(price, id, size)}
                                className={activeBtnStyle == id ? css.btnsize : css.btnsize1}
                            >
                                { size==1 ? "M" : size==2 ? "L" : size==3 ? "XL" : null}

                            </li>

                        })
                        }
                        </ul>
                        </div>
                       :
                price.length===2 ?  <div className={css.sizeproduct}>
                    <ul className={css.sizeitem}>
                        {
                            price.map(({id, size, price}, index) => {
                                return <li
                                    key={index}
                                    onClick={() => changeSizeAndprice(price, id, size)}
                                    className={activeBtnStyle == id ? css.btnsize : css.btnsize1}
                                >
                                    { size==1 ? "1 բ" : size==2 ? "2 բ"  : null}

                                </li>

                            })
                        }
                    </ul>
                </div> : null
                       }
                    <div className={css.addlichniproduct}>
                        {description ?
                            <p className={css.descript}>{description}</p>
                            :
                            <>
                            {price?.length===3 ?
                                <div className={css.addlichni} onClick={AddlichniyProduct}>
                                    <p>Ավելացնել</p>
                                    <div className={css.kechup}/>
                                </div>
                             :
                                price?.length===2 ?
                                    <div className={css.addlichni} onClick={AddlichniyProduct}>
                                        <p>Բաղադրիչներ</p>

                                    </div>
                                :
                               null
                            }
                            </>
                        }

                        <div className={css.addcountproduct}>

                            <div className={css.addcount}>
                                <img src={minus} alt="" className={css.minus} onClick={onMinus}/>
                                <div><p>{count}</p></div>
                                <img src={plus} alt="" className={css.plus} onClick={onPlus}/>
                            </div>
                        </div>

                    </div>
                    <div className={css.priceandaddcat}>
                        <div className={css.pricecontayner}>
                            <p>{bonus ? (itempricesitog - (itempricesitog / 100 * bonus))+priceItional : itempricesitog+priceItional}&nbsp;֏</p>
                            <del className={css.hinprice}>{bonus ? `${activeprice}   ֏` : null} </del>
                        </div>

                        <img src={btn1} alt="" onClick={()=>addtoCart(category)}/>
                    </div>
                    {sowlichniproductmodal &&
                    <ItionalProduct
                        ingredients={ingredients}
                        idkey={id}
                        AddlichniyProduct={AddlichniyProduct}
                        priceItional={priceItional}
                        setPriceItional={setPriceItional}
                        itionalitem={itionalitem}
                        setItionalitem={setItionalitem}
                        itionaldata={itionaldata}
                        setItionaldata={setItionaldata}

                    />
                    }
            </div>
                )
            }

            export default ProductBlok;