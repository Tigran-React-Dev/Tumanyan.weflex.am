import React, {useState, Memo, useEffect} from "react";
import css from "./ProductBlok.module.scss";
import btn1 from "../../../images/icons/btn1.svg";
import minus from "../../../images/icons/Minus.svg";
import plus from "../../../images/icons/Plus.svg";
import lik from "../../../images/icons/like.svg";
import liked from "../../../images/icons/likedis.svg"
import ItionalProduct from "../ItionalProduct/ItionalProduct";
import {useDispatch} from "react-redux";
import {LikedProduct} from "../../redux/Action/ProductAction";
import {useProduct} from "../../Providers/ProductMenu";
import axios from "axios";
import {LOGIN_PAGES} from "../../urls";
import {useHistory} from "react-router-dom";

const ProductBlok = ({id,likeproduct, name,nameRU,nameEN,names, ingredients,image, prices, bonus,description,descriptionRU,descriptionEN,handleAddProductCard,SendobjtoLikecategory}) => {



    const history=useHistory()
    const [itempricesitog, setpricesItog] = useState(typeof (prices)=="string" ? +prices : prices?.[0]?.price)
    const [activeprice, setactivprice] = useState(typeof (prices)=="string" ? +prices : prices?.[0]?.price)
    const [size, setActivsize] = useState(typeof (prices)=="string" ?  undefined : prices?.[0]?.sizes.size)

    const [count, setCount] = useState(1)
    const [activeBtnStyle, setActivebtn] = useState(1)


    // Connect ItionalItem

    const [itionaldataitem,setItionaldataitem]=useState(names)
    const [priceItional,setPriceItional]=useState(0)
    const [itionalitem,setItionalitem]=useState([])
    const [sowlichniproductmodal,setsowproductmodal]=useState(false);
    const [like,setLike]=useState(false)

    useEffect(()=>{
        likeproduct.forEach((item)=>{
            if(item.product_id==id){
                setLike(true)
            }
        })

    },[likeproduct])


    const dispath=useDispatch()
    const {languae} =useProduct()


    const  AddTolike=async ()=>{
        let token =sessionStorage.getItem("token")
        if(!token){
           return  history.push(LOGIN_PAGES)
        }
        const likeform = new FormData();
        likeform.append("product_id", id)

        try {
            // make axios post request
            const response = await axios({
                method: "post",
                url: process.env.REACT_APP_API_URL+"/user/addLike",
                data: likeform,
                headers: {
                    "Content-Type": "multipart/form-data",
                    Authorization: `Bearer ${token}`
                },
            });
           if(response.data[0]=="Success"){
                setLike(true)
            }
            console.log(response)
            } catch(error) {
            console.log(error)
            }
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
            priceitem:prices,
            price: +(bonus ? (itempricesitog - (itempricesitog / 100 * bonus))+priceItional : (+itempricesitog)+(+priceItional)),
            size: prices.length===1 ? undefined : size,
            count,
            ingredients,
            description:description ,
            like
        }
        //coll function send object to redux reducer and product add to Card

        handleAddProductCard(newProductcard)
            if(itionaldataitem !=undefined){
                setItionaldataitem(names)
                setItionalitem([])
                setPriceItional(0)
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
    const fontproprty3={fontFamily:languae=="ՀԱՅ" ?
            "Montserrat-Medium" : languae=="ENG" ?
                "Manrope-Medium" : languae=="РУС" ?
                    "Manrope-Medium" : null
    }




    return (
        <div className={css.productItem}>
            {prices.length==2 ?
                <div className={css.imgblok}><img src={process.env.REACT_APP_IMG_URL + image} alt=""/></div>
                  :
                <img    src={process.env.REACT_APP_IMG_URL + image} alt=""/>
            }
            {bonus > 0 && <div className={css.akcia}>
                <p style={fontproprty}>-{+bonus}%</p>
            </div>}
            <div className={css.titleanlike}>
                <p style={fontproprty}>{languae=="ՀԱՅ" ? name : languae=="ENG" ? nameEN : languae=="РУС" ? nameRU : null}</p>
                {!like ? <img src={lik} alt="" onClick={()=>AddTolike(id)}/> : <img src={liked} alt=""  onClick={()=>AddTolike(id)}/>}
            </div>
            {(prices.length>1 &&  typeof(prices)!="string") && <div className={css.sizeproduct}>
                <ul className={css.sizeitem}>
                    {
                        prices.map(({id, sizes, price}, index) => {
                            return <li
                                key={index}
                                style={fontproprty2}
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
                            <p className={css.descript} style={fontproprty2}>{languae=="ՀԱՅ" ? description : languae=="ENG" ? descriptionEN : languae=="РУС" ? descriptionRU : null}</p>
                            :
                            <>
                            {prices?.length===3 ?
                                <div className={css.addlichni} onClick={AddlichniyProduct}>
                                    <p style={fontproprty2}>Ավելացնել</p>
                                    <div className={css.kechup}/>
                                </div>
                             :
                             prices?.length===2 ?
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
                                <div><p style={fontproprty3}>{count}</p></div>
                                <img src={plus} alt="" className={css.plus} onClick={onPlus}/>
                            </div>
                        </div>

                    </div>
                    <div className={css.priceandaddcat}>
                        <div className={css.pricecontayner}>
                            <p style={fontproprty}>{bonus ? (itempricesitog - (itempricesitog / 100 * bonus))+priceItional : (+itempricesitog)+(+priceItional)}&nbsp;֏</p>
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

            export default React.memo(ProductBlok);