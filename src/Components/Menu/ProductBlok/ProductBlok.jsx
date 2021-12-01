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

const ProductBlok = ({id,like, name,nameRU,nameEN,category_id,names, ingredients,image, prices, bonus,description,handleAddProductCard,handleonlyproduct,SendobjtoLikecategory}) => {




    const [itempricesitog, setpricesItog] = useState(prices[0].price)
    const [activeprice, setactivprice] = useState(prices[0].price)
    const [size, setActivsize] = useState(prices[0].sizes.size)

    const [count, setCount] = useState(1)
    const [activeBtnStyle, setActivebtn] = useState(1)


    // Connect ItionalItem

    const [itionaldataitem,setItionaldataitem]=useState(names)
    const [priceItional,setPriceItional]=useState(0)
    const [itionalitem,setItionalitem]=useState([])
    const [sowlichniproductmodal,setsowproductmodal]=useState(false);


    const dispath=useDispatch()



    const  AddTolike=()=>{

        dispath(LikedProduct(id,like))

        const likeobj={
            id,
            _id:Date.now(),
            name,
            image,
            itionalitem,
            bonus,
            prices,
            description,
            like:true
        }
        SendobjtoLikecategory(likeobj)
    }

    const addtoCart = (categor) => {

        const newProductcard = {
             id,
            _id:Date.now(),
            name,
            nameRU,
            nameEN,
            image,
            itionalitem,
            bonus,
            priceitem:prices,
            price: +(bonus ? (itempricesitog - (itempricesitog / 100 * bonus))+priceItional : (+itempricesitog)+(+priceItional)),
            size: prices.length===1 ? 1 : size,
            count,
            ingredients,
            description,
            like
        }
        // if(categor !="շաուրմա" && categor !="աղցաններ" && categor !="ապուրներ" && categor !="խավարտներ" && categor !="տաք ուտեստներ" && categor !="սուրճ, թեյ" && categor !="կարկանդակներ" && categor !="ըմպելիքներ" && categor !="այլ"  ){
        //     handleAddProductCard(newProductcard)
        //
        // }else{

            handleAddProductCard(newProductcard)
            setItionaldataitem([...names])
            setItionalitem([])
    }




    // plus prododuct count function
    const onPlus =()=>{
        setpricesItog((count + 1) * activeprice)
        setCount(count + 1)
    }

    // minus prododuct count function
    const onMinus = () => {
        if (count >= 2) {
            setpricesItog((count - 1) * activeprice)
            setCount(count - 1)
        }

    }
     // response newprice obj id and product size to chenjing initial value
    const changeSizeAndprice = (newprice, id, size) => {
        setactivprice(newprice)
        setpricesItog(newprice)
        setCount(1)
        setActivebtn(id)
        setActivsize(size)
    }

    // show window adds product

    const AddlichniyProduct=()=>{
        setsowproductmodal(!sowlichniproductmodal)

    }


    return (
        <div className={css.productItem}>
            {prices.length==2 ? <div className={css.imgblok}><img src={process.env.REACT_APP_IMG_URL + image} alt=""/></div> : <img src={process.env.REACT_APP_IMG_URL + image} alt=""/>  }
            {bonus > 0 && <div className={css.akcia}>
                <p>-{+bonus}%</p>
            </div>}
            <div className={css.titleanlike}>
                <p>{name}</p>
                {!like ? <img src={lik} alt="" onClick={()=>AddTolike(id)}/> : <img src={liked} alt=""  onClick={()=>AddTolike(id)}/>}
            </div>
            {prices.length>1 &&  <div className={css.sizeproduct}>
                <ul className={css.sizeitem}>
                    {
                        prices.map(({id, sizes, price}, index) => {
                            return <li
                                key={index}
                                onClick={() => changeSizeAndprice(price, index+1, sizes.size)}
                                className={activeBtnStyle == index+1 ? css.btnsize : css.btnsize1}
                            >
                                {sizes.size}

                            </li>

                        })
                        }
                        </ul>
                        </div>
                      
                       }
                    <div className={css.addlichniproduct}>
                        {description ?
                            <p className={css.descript}>{description}</p>
                            :
                            <>
                            {prices?.length===3 ?
                                <div className={css.addlichni} onClick={AddlichniyProduct}>
                                    <p>Ավելացնել</p>
                                    <div className={css.kechup}/>
                                </div>
                             :
                             prices?.length===2 ?
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
                            <p>{bonus ? (itempricesitog - (itempricesitog / 100 * bonus))+priceItional : (+itempricesitog)+(+priceItional)}&nbsp;֏</p>
                            <del className={css.hinprice}>{bonus ? `${activeprice}   ֏` : null} </del>
                        </div>

                        <img src={btn1} alt="" onClick={()=>addtoCart()}/>
                    </div>
                    {sowlichniproductmodal &&
                    <ItionalProduct
                        itionaldataitem={itionaldataitem}
                        setItionaldataitem={setItionaldataitem}
                        itionalitem={itionalitem}
                        setItionalitem={setItionalitem}
                        priceItional={priceItional}
                        setPriceItional={setPriceItional}
                        ingredients={ingredients}
                        AddlichniyProduct={AddlichniyProduct}
                        />
                    }
                  </div>
                )
            }

            export default ProductBlok;