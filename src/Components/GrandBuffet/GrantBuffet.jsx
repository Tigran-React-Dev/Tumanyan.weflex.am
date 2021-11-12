import React, {useEffect, useState} from 'react';
import css from "./GrandBuffet.module.scss"
import {useHistory, useParams} from "react-router-dom";
import {useProduct} from "../Providers/ProductMenu";
import {useDispatch, useSelector} from "react-redux";
import ProductBlok from "../Menu/ProductBlok/ProductBlok";
import {AddproductCard, AddproductCardonly} from "../redux/Action/CardAction";
import {LikeObjSenddat} from "../redux/Action/AuthACtion";


const GrantBuffet = () => {


    const history = useHistory()
    const {grandBufeData} =useProduct()
    const product = useSelector(({ ProductReducer  }) => ProductReducer.product)
    const {id} = useParams()
    const dispatch=useDispatch()
    const [activeMenuStyle,setActiveMenuStyle]=useState({1:true})

     useEffect(()=>{
         window.scrollTo(0, 0);
     },[history])


    const ChangeStyleAndCategory =(menu)=>{
        setActiveMenuStyle({[menu.id]:!activeMenuStyle[menu.id]})
        history.push(`/${menu.category}`)
    }
    const handleAddProductCard =(obj)=>{
        dispatch(AddproductCard(obj))
    }
    const handleonlyproduct=(obj2)=>{
        dispatch(AddproductCardonly(obj2))
    }
    const SendobjtoLikecategory =(ob)=>{
        dispatch(LikeObjSenddat(ob))
    }

    return (
        <div className={css.grandebufecontantainer}>
            <div className={css.grandbufeHdr}>
                 <h1>grand buffet</h1>
            </div>
            <div className={css.menuconsreuctor}>
                {
                    grandBufeData.map((elem)=>{
                        return(
                            <div
                                className={css.itemmenu}
                                key={elem.id}
                                onClick={()=>ChangeStyleAndCategory(elem)}
                                style={{background:activeMenuStyle[elem.id] && "#13AD54",border:activeMenuStyle[elem.id] && "none"}}
                            >
                                <p style={{color:activeMenuStyle[elem.id] && "#FFFFFF" }}>{elem.title}</p>

                            </div>

                        )
                    })
                }
            </div>
            <div className={css.bufetitemblok}>
                {
                    product.filter(e=>e.category===id).map((obj)=>{
                        return(
                            <ProductBlok
                              key={obj.id}
                              SendobjtoLikecategory={SendobjtoLikecategory}
                              handleAddProductCard={handleAddProductCard}
                              handleonlyproduct={handleonlyproduct}
                              {...obj}
                            />
                        )
                    })
                }
            </div>
        </div>
    );
};

export default GrantBuffet;