import React, {useState,Memo} from "react";
import css from "./ProductBlokGrand.module.scss";
import btn1 from "../../../images/icons/btn1.svg";
import minus from "../../../images/icons/Minus.svg";
import plus from "../../../images/icons/Plus.svg";
import lik from "../../../images/icons/like.svg";
import liked from "../../../images/icons/likedis.svg"

import {useDispatch} from "react-redux";
import {LikedProduct} from "../../redux/Action/ProductAction";
import {useProduct} from "../../Providers/ProductMenu";
import ItionalProduct from "../../Menu/ItionalProduct/ItionalProduct";

const ProductBlokGrand = ({id,category_buffet_id,like,names, name,nameRU,nameEN,add_buffets,image, price_buffets, bonus,description,descriptionEN,descriptionRU,handleAddProductCard,SendobjtoLikecategory}) => {




    const [itempricesitog, setpricesItog] = useState(price_buffets?.[0]?.price)
    const [activeprice, setactivprice] = useState(price_buffets?.[0]?.price)
    const [size, setActivsize] = useState(price_buffets?.[0]?.size_buffets.size)

    const [count, setCount] = useState(1)
    const [activeBtnStyle, setActivebtn] = useState(1)


    // Connect ItionalItem

    const [itionaldataitem,setItionaldataitem]=useState(names)
    const [priceItional,setPriceItional]=useState(0)
    const [itionalitem,setItionalitem]=useState([])
    const [sowlichniproductmodal,setsowproductmodal]=useState(false);


    const dispath=useDispatch()
    const {languae} =useProduct()

    
    const  AddTolike=()=>{

        dispath(LikedProduct(id,like))

        const likeobj={
            id,
            _id:Date.now(),
            name,
            image,
            itionalitem,
            bonus,
            price_buffets,
            description,
            like:true
        }
        SendobjtoLikecategory(likeobj)
    }

    const addtoCart = () => {

        const newProductcard = {
             id,
            _id:Date.now(),
            name,
            nameRU,
            nameEN,
            image,
            itionalitem,
            bonus,
            category_buffet_id,
            priceitem:[{price:price_buffets[0]?.price,sizes:{size:price_buffets[0]?.size_buffets?.size}},{price:price_buffets[1]?.price,sizes:{size:price_buffets[1]?.size_buffets?.size}}],
            price: +(bonus ? (itempricesitog - (itempricesitog / 100 * bonus))+priceItional : (+itempricesitog)+(+priceItional)),
            size: price_buffets.length===1 ? undefined : size,
            count,
            description:description!=null ? description : null,
            like
        }
        //coll function send object to redux reducer and product add to Card

        handleAddProductCard(newProductcard)
            if(itionaldataitem !=undefined){
                setItionaldataitem([...names])
                setItionalitem([])
            }
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
            {price_buffets.length==2 ?
                <div className={css.imgblok}><img src={process.env.REACT_APP_IMG_URL + image} alt=""/></div>
                  :
                <img src={process.env.REACT_APP_IMG_URL + image} alt=""/>
            }
            {bonus > 0 && <div className={css.akcia}>
                <p>-{+bonus}%</p>
            </div>}
            <div className={css.titleanlike}>
                <p>{languae=="ՀԱՅ" ? name : languae=="ENG" ? nameEN : languae=="РУС" ? nameRU : null}</p>
                {!like ? <img src={lik} alt="" onClick={()=>AddTolike(id)}/> : <img src={liked} alt=""  onClick={()=>AddTolike(id)}/>}
            </div>

            {price_buffets.length>1  && <div className={css.sizeproduct}>
                <ul className={css.sizeitem}>
                    {
                        price_buffets.map(({id, size_buffets, price}, index) => {
                            return <li
                                key={index}
                                onClick={() => changeSizeAndprice(price, index+1, size_buffets.size)}
                                className={activeBtnStyle == index+1 ? css.btnsize : css.btnsize1}
                            >
                                {size_buffets.size}

                            </li>

                        })
                        }
                        </ul>
                        </div>
                      
                       }
                    <div className={css.addlichniproduct}>
                        {description ?
                            <p className={css.descript}>{languae=="ՀԱՅ" ? description : languae=="ENG" ? descriptionEN : languae=="РУС" ? descriptionRU : null}</p>
                            :
                            <>
                            {price_buffets?.length===3 ?
                                <div className={css.addlichni} onClick={AddlichniyProduct}>
                                    <p>Ավելացնել</p>
                                    <div className={css.kechup}/>
                                </div>
                             :
                                price_buffets?.length===2 ?
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
                        add_buffets={add_buffets}
                        AddlichniyProduct={AddlichniyProduct}
                        />
                    }
                  </div>
                )
            }

            export default React.memo(ProductBlokGrand);