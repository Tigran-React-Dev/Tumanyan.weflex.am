    import React, {useState, Memo, useEffect} from "react";
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
    import {LOGIN_PAGES} from "../../urls";
    import axios from "axios";
    import {useHistory} from "react-router-dom";

const ProductBlokGrand = ({id,likeproductBuffet,category_buffet_id,names, name,nameRU,nameEN,add_buffets,image, price_buffets, bonus,description,descriptionEN,descriptionRU,handleAddProductCard}) => {




    const [itempricesitog, setpricesItog] = useState(price_buffets?.[0]?.price)
    const [activeprice, setactivprice] = useState(price_buffets?.[0]?.price)
    const [size, setActivsize] = useState(price_buffets?.[0]?.size_buffets.size)
    const [like,setLike]=useState(false)
    const [count, setCount] = useState(1)
    const [activeBtnStyle, setActivebtn] = useState(1)


    // Connect ItionalItem

    const [itionaldataitem,setItionaldataitem]=useState(names)
    const [priceItional,setPriceItional]=useState(0)
    const [itionalitem,setItionalitem]=useState([])
    const [sowlichniproductmodal,setsowproductmodal]=useState(false);

    const history=useHistory()
    const dispath=useDispatch()
    const {languae} =useProduct()

     useEffect(()=>{
         likeproductBuffet.forEach((item)=>{
            if(item.product_buffet_id==id){
                setLike(true)
            }
        })

    },[likeproductBuffet])


       //Like Grand - buffet product function

       const  AddTolike=async ()=>{


        let token =sessionStorage.getItem("token")
        if(!token){
            return  history.push(LOGIN_PAGES)
        }
        const likeform = new FormData();
        likeform.append("product_buffet_id", id)
        try {
            // make axios post request
            const response = await axios({
                method: "post",
                url: process.env.REACT_APP_API_URL+"/user/addLikeBuffet",
                data: likeform,
                headers: {
                    "Content-Type": "multipart/form-data",
                    Authorization: `Bearer ${token}`
                },
            });

          if(response.data=="Success"){
                setLike(true)
            }else{
                setLike(false)
            }

        } catch(error) {
            console.log(error)
        }

    }


    const addtoCart = () => {

        const newProductcard = {
             id,

            _id:Date.now(),
            type:"buffet",
            name,
            nameRU,
            nameEN,
            image,
            itionalitem,
            bonus,
            category_buffet_id,
            priceitem:price_buffets.length==1 ? [{price:price_buffets[0]?.price,sizes:{size:price_buffets[0]?.size_buffets?.size}}] : price_buffets.length==2 ? [{price:price_buffets[0]?.price,sizes:{size:price_buffets[0]?.size_buffets?.size}},{price:price_buffets[1]?.price,sizes:{size:price_buffets[1]?.size_buffets?.size}}] : null,
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
                <p style={fontproprty}>{languae=="ՀԱՅ" ? name : languae=="ENG" ? nameEN : languae=="РУС" ? nameRU : null}</p>
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
                            <p className={css.descript} style={fontproprty2}>{languae=="ՀԱՅ" ? description : languae=="ENG" ? descriptionEN : languae=="РУС" ? descriptionRU : null}</p>
                            :
                            <>
                            {price_buffets?.length>0 ?
                                 <div className={css.addlichni} onClick={AddlichniyProduct}>
                                        <p style={fontproprty2}>Բաղադրիչներ</p>

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